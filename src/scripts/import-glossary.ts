import { getPayload } from 'payload'
import config from '@payload-config'
import { execSync } from 'child_process'
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
const isChangedOnly = process.argv.includes('--changed')

/**
 * Usage:
 *   pnpm import-glossary                           # import all files (interactive)
 *   pnpm import-glossary --check                    # dry-run: show what would change
 *   pnpm import-glossary --yes                      # auto-update all without prompts
 *   pnpm import-glossary opennext                   # single file
 *
 * In interactive mode, when an entry already exists, you are asked per entry
 * whether to update (y), skip (n), or update all remaining (a).
 * With --check, no entries are created or updated — only a preview is shown.
 * With --yes (or CI=true), all existing entries are updated without prompting.
 */

// --- Frontmatter parsing (simple, no YAML dependency) ---

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

    // Remove surrounding quotes
    if ((value as string).startsWith('"') && (value as string).endsWith('"')) {
      value = (value as string).slice(1, -1)
    }

    // Parse arrays: [tag1, tag2] or [tag1, "tag 2"]
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

// --- Tag resolution (find or create in 'tags' collection) ---

async function resolveTags(payload: any, tagNames: string[]) {
  const ids: (string | number)[] = []
  for (const name of tagNames) {
    const slug = name.toLowerCase().replace(/\s+/g, '-')
    const existing = await payload.find({
      collection: 'tags',
      where: { slug: { equals: slug } },
      limit: 1,
      overrideAccess: true,
    })

    if (existing.docs.length > 0) {
      ids.push(existing.docs[0].id)
    } else {
      const created = await payload.create({
        collection: 'tags',
        data: { title: name, slug },
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      ids.push(created.id)
    }
  }
  return ids
}

// --- Describe changes between file frontmatter and existing entry ---

function describeGlossaryChanges(
  frontmatter: Record<string, unknown>,
  existing: any,
  body: string,
): string[] {
  const changes: string[] = []
  const title = (frontmatter.title as string) || ''
  const slug = (frontmatter.slug as string) || ''
  const tags = (frontmatter.tags as string[]) || []
  const aliases = (frontmatter.aliases as string[]) || []
  const dateStr = (frontmatter.date as string) || ''

  if (title !== existing.title) changes.push('title')
  if (slug !== existing.slug) changes.push('slug')
  if (body !== (existing.markdown || '')) changes.push('content')

  // Tags: compare as arrays of tag titles
  const existingTagTitles = (existing.tags || [])
    .filter((t: any) => typeof t === 'object' && t?.title)
    .map((t: any) => t.title as string)
  const tagDiff = tags.length !== existingTagTitles.length ||
    tags.some((t) => !existingTagTitles.includes(t))
  if (tagDiff) changes.push('tags')

  // Aliases: compare as arrays of alias strings
  const existingAliases = (existing.aliases || []).map((a: any) =>
    typeof a === 'object' ? a.alias : a
  )
  const aliasDiff = aliases.length !== existingAliases.length ||
    aliases.some((a) => !existingAliases.includes(a))
  if (aliasDiff) changes.push('aliases')

  // Date
  const existingDate = existing.publishedAt
    ? new Date(existing.publishedAt).toISOString().split('T')[0]
    : ''
  if (dateStr && dateStr !== existingDate) changes.push('date')

  return changes
}

// --- Import a single file. Returns 'created' | 'updated' | 'skipped' ---

async function importFile(payload: any, filePath: string): Promise<'created' | 'updated' | 'skipped'> {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { frontmatter, body } = parseFrontmatter(content)

  const title = (frontmatter.title as string) || path.basename(filePath, '.md')
  const slug = (frontmatter.slug as string) || title.toLowerCase().replace(/\s+/g, '-')
  const tags = (frontmatter.tags as string[]) || []
  const aliases = (frontmatter.aliases as string[]) || []
  const dateStr = (frontmatter.date as string) || new Date().toISOString().split('T')[0]
  const publishedAt = new Date(dateStr).toISOString()

  // Does an entry with this slug already exist?
  const existing = await payload.find({
    collection: 'glossary',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
  })

  const exists = existing.docs.length > 0
  const changes = exists ? describeGlossaryChanges(frontmatter, existing.docs[0], body) : null

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

  // Resolve tags to relationship ids
  const tagIds = await resolveTags(payload, tags)
  const aliasRows = aliases.map((a: string) => ({ alias: a }))

  const data: Record<string, unknown> = {
    title,
    slug,
    markdown: body,
    generateRichText: true,
    publishedAt,
    aliases: aliasRows,
    tags: tagIds,
    meta: {
      title,
      description: `${title} — explained in simple terms.`,
    },
    _status: 'draft',
  }

  if (exists) {
    await payload.update({
      collection: 'glossary',
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
    collection: 'glossary',
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
  const glossaryDir = path.resolve('docs/agent-context/glossary')

  const payload = await getPayload({ config })

  if (targetArg) {
    // Accept filename only (with or without .md), always resolve from glossary dir
    const filename = targetArg.endsWith('.md') ? targetArg : `${targetArg}.md`
    const filePath = path.join(glossaryDir, filename)
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      process.exit(1)
    }
    console.log(`Importing: ${path.basename(filePath)}\n`)
    const result = await importFile(payload, filePath)
    console.log(`\nResult: ${result}`)
  } else {
    const glossaryDirRelative = path.relative(process.cwd(), glossaryDir)
    let files = fs
      .readdirSync(glossaryDir)
      .filter((f) => f.endsWith('.md'))
      .sort()

    if (isChangedOnly) {
      const changed = execSync('git diff --name-only HEAD', { encoding: 'utf-8' })
        .trim()
        .split('\n')
        .filter(Boolean)
      const changedSet = new Set(changed)
      files = files.filter((f) => changedSet.has(`${glossaryDirRelative}/${f}`))
      if (files.length === 0) {
        console.log('No changed files in docs/agent-context/glossary/')
        process.exit(0)
      }
      console.log(`--changed: ${files.length} files selected\n`)
    }

    if (files.length === 0) {
      console.log('No .md files found in docs/agent-context/glossary/')
      process.exit(0)
    }

    if (isCheckOnly) {
      console.log(`\n📋 Dry-run: ${files.length} glossary entries\n`)
    } else {
      console.log(`Found ${files.length} glossary entries\n`)
    }

    let created = 0
    let updated = 0
    let skipped = 0

    for (const file of files) {
      const result = await importFile(payload, path.join(glossaryDir, file))
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