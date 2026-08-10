import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'
import readline from 'readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

let updateAllMode = false
const isCI = process.env.CI === 'true' || process.argv.includes('--yes')
const isCheckOnly = process.argv.includes('--check')

/**
 * Import blog posts / notes from Markdown files into the Posts collection.
 *
 * Usage:
 *   pnpm import-posts                           # all draft files (interactive)
 *   pnpm import-posts --check                    # dry-run: show what would change
 *   pnpm import-posts --yes                      # auto-update all without prompts
 *   pnpm import-posts exploring-cloudflare       # single file
 *
 * In interactive mode, when a post already exists, you are asked per post
 * whether to update (y), skip (n), or update all remaining (a).
 * With --check, no posts are created or updated — only a preview is shown.
 * With --yes (or CI=true), all existing posts are updated without prompting.
 */

// --- Helpers ---

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { frontmatter: {} as Record<string, unknown>, body: content.trim() }

  const raw = match[1]
  const body = match[2].trim()
  const frontmatter: Record<string, unknown> = {}

  for (const line of raw.split('\n')) {
    const kv = line.match(/^(\w+):\s*(.+)$/)
    if (!kv) continue
    let value: unknown = kv[2].trim()

    if ((value as string).startsWith('"') && (value as string).endsWith('"')) {
      value = (value as string).slice(1, -1)
    }
    if ((value as string).startsWith('[') && (value as string).endsWith(']')) {
      value = (value as string)
        .slice(1, -1)
        .split(',')
        .map((s: string) => s.trim().replace(/^"|"$/g, ''))
        .filter(Boolean)
    }

    frontmatter[kv[1]] = value
  }

  return { frontmatter, body }
}

async function resolveCategories(payload: any, categoryNames: string[]) {
  const ids: (string | number)[] = []
  for (const name of categoryNames) {
    const slug = name.toLowerCase().replace(/\s+/g, '-')
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: slug } },
      limit: 1,
      overrideAccess: true,
    })
    if (existing.docs.length > 0) {
      ids.push(existing.docs[0].id)
    } else {
      const created = await payload.create({
        collection: 'categories',
        data: { title: name, slug },
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      ids.push(created.id)
    }
  }
  return ids
}

async function getAdminUser(payload: any) {
  const users = await payload.find({
    collection: 'users',
    limit: 1,
    overrideAccess: true,
  })
  if (users.docs.length === 0) {
    console.error('No admin user found. Run the seed first.')
    process.exit(1)
  }
  return users.docs[0].id
}

async function resolveHeroImage(payload: any, filename: string) {
  const media = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  })
  if (media.docs.length > 0) {
    return media.docs[0].id
  }
  const basename = filename.replace(/\.[^.]+$/, '')
  const mediaAlt = await payload.find({
    collection: 'media',
    where: { alt: { equals: basename } },
    limit: 1,
    overrideAccess: true,
  })
  if (mediaAlt.docs.length > 0) {
    return mediaAlt.docs[0].id
  }
  console.warn(`  ⚠ Hero image not found in Media: "${filename}"`)
  return null
}

// --- Describe changes between file frontmatter and existing post ---

function describePostChanges(
  frontmatter: Record<string, unknown>,
  existing: any,
  body: string,
): string[] {
  const changes: string[] = []
  const title = (frontmatter.title as string) || ''
  const description = (frontmatter.description as string) || ''
  const slug = (frontmatter.slug as string) || ''
  const categoryNames = (frontmatter.categories as string[]) || []
  const tags = (frontmatter.tags as string[]) || []
  const status = (frontmatter.status as string) || 'draft'
  const dateStr = (frontmatter.date as string) || ''

  if (title !== existing.title) changes.push('title')
  if (slug !== existing.slug) changes.push('slug')
  if (description !== (existing.meta?.description || '')) changes.push('description')
  if (status !== (existing._status || 'draft')) changes.push('status')

  // Compare markdown body (source of truth; Payload converts to Lexical server-side)
  if (body !== (existing.markdown || '')) changes.push('content')

  // Compare categories
  const existingCategoryTitles = (existing.categories || [])
    .filter((c: any) => typeof c === 'object' && c?.title)
    .map((c: any) => c.title as string)
  const catDiff = categoryNames.length !== existingCategoryTitles.length ||
    categoryNames.some((c) => !existingCategoryTitles.includes(c))
  if (catDiff) changes.push('categories')

  // Compare tags
  const existingTagTitles = (existing.tags || [])
    .filter((t: any) => typeof t === 'object' && t?.title)
    .map((t: any) => t.title as string)
  const tagDiff = tags.length !== existingTagTitles.length ||
    tags.some((t) => !existingTagTitles.includes(t))
  if (tagDiff) changes.push('tags')

  // Compare date
  const existingDate = existing.publishedAt
    ? new Date(existing.publishedAt).toISOString().split('T')[0]
    : ''
  if (dateStr && dateStr !== existingDate) changes.push('date')

  return changes
}

// --- Import a single file ---

async function importFile(
  payload: any,
  filePath: string,
  authorId: string | number
): Promise<'created' | 'updated' | 'skipped'> {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { frontmatter, body } = parseFrontmatter(content)

  const title = (frontmatter.title as string) || path.basename(filePath, '.md')
  const description = (frontmatter.description as string) || ''
  const slug = (frontmatter.slug as string) || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const tags = (frontmatter.tags as string[]) || []
  const categoryNames = (frontmatter.categories as string[]) || []
  const status = (frontmatter.status as string) || 'draft'
  const dateStr = (frontmatter.date as string) || new Date().toISOString().split('T')[0]
  const publishedAt = new Date(dateStr).toISOString()

  // Resolve hero image if provided
  const heroImageName = (frontmatter.heroImage || frontmatter.featuredImage) as string | undefined
  const heroImageId = heroImageName ? await resolveHeroImage(payload, heroImageName) : null

  // Strip the H1 title from body if it matches the article title
  let cleanBody = body
  const h1Match = cleanBody.match(/^#\s+(.+)/)
  if (h1Match && h1Match[1].trim() === title) {
    cleanBody = cleanBody.replace(/^#\s+.+?\n\n?/, '')
  }

  // Check if post already exists
  const existing = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
  })

  const exists = existing.docs.length > 0
  const changes = exists ? describePostChanges(frontmatter, existing.docs[0], cleanBody) : null

  // In --check mode: show preview and skip
  if (isCheckOnly) {
    if (!exists) {
      console.log(`  🆕 "${title}" (${slug})`)
    } else if (changes && changes.length > 0) {
      console.log(`  ✏️  "${title}" (${slug}) — ${changes.join(', ')}`)
    } else {
      console.log(`  ✅ "${title}" (${slug}) — ongewijzigd`)
    }
    return 'skipped'
  }

  if (exists && !updateAllMode) {
    if (isCI) {
      // Non-interactive CI mode: update all without prompting
      updateAllMode = true
    } else {
      const changeHint = changes && changes.length > 0 ? ` (wijziging: ${changes.join(', ')})` : ''
      const answer = await rl.question(
        `"${title}" (${slug}) already exists${changeHint}. Update? [y/n/a] `
      )
      const lower = answer.toLowerCase().trim()
      if (lower === 'a') {
        updateAllMode = true
      } else if (lower !== 'y') {
        console.log(`  ⏭ Skipped`)
        return 'skipped'
      }
    }
  }

  // Resolve categories
  const categoryIds = await resolveCategories(payload, categoryNames)

  const data: Record<string, unknown> = {
    title,
    slug,
    markdown: cleanBody,
    generateRichText: true,
    authors: [authorId],
    categories: categoryIds,
    publishedAt,
    ...(heroImageId ? { heroImage: heroImageId } : {}),
    meta: {
      title,
      description,
    },
    _status: status === 'published' ? 'published' : 'draft',
  }

  if (exists) {
    await payload.update({
      collection: 'posts',
      id: existing.docs[0].id,
      locale: 'en',
      data,
      overrideAccess: true,
      context: { disableRevalidate: true },
    })
    console.log(`  ✅ Updated: "${title}"`)
    await sleep(100)
    return 'updated'
  }

  await payload.create({
    collection: 'posts',
    locale: 'en',
    data,
    overrideAccess: true,
    context: { disableRevalidate: true },
  })
  console.log(`  ✅ Created: "${title}"`)
  await sleep(100)
  return 'created'
}

// --- Main ---

const run = async () => {
  // Parse flags: --check and --yes are consumed; remaining arg is target file
  const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
  const targetArg = args[0]
  const draftsDir = path.resolve('docs/agent-context/drafts')

  const payload = await getPayload({ config })
  const authorId = await getAdminUser(payload)

  if (targetArg) {
    const filename = targetArg.endsWith('.md') ? targetArg : `${targetArg}.md`
    const filePath = path.join(draftsDir, filename)
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      process.exit(1)
    }
    console.log(`Importing: ${filename}\n`)
    const result = await importFile(payload, filePath, authorId)
    console.log(`\nResult: ${result}`)
  } else {
    const files = fs
      .readdirSync(draftsDir)
      .filter((f) => f.endsWith('.md'))
      .sort()

    if (files.length === 0) {
      console.log('No .md files found in docs/agent-context/drafts/')
      process.exit(0)
    }

    if (isCheckOnly) {
      console.log(`\n📋 Dry-run: ${files.length} post drafts\n`)
    } else {
      console.log(`Found ${files.length} post drafts\n`)
    }

    let created = 0
    let updated = 0
    let skipped = 0

    for (const file of files) {
      const result = await importFile(payload, path.join(draftsDir, file), authorId)
      if (result === 'created') created++
      else if (result === 'updated') updated++
      else skipped++
    }

    console.log(`\nDone: ${created} created, ${updated} updated, ${skipped} skipped`)
  }

  rl.close()
  process.exit(0)
}

run().catch((error) => {
  console.error('Failed:', error)
  rl.close()
  process.exit(1)
})