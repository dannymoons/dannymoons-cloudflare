import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'
import readline from 'readline/promises'
import {
  convertMarkdownToLexical,
  editorConfigFactory,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
  lexicalEditor,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'
import type { RichTextField } from 'payload'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let updateAllMode = false

/**
 * Import blog posts / notes from Markdown files into the Posts collection.
 *
 * Usage:
 *   pnpm import-posts                           # all draft files
 *   pnpm import-posts exploring-cloudflare       # single file (with or without .md)
 *
 * Frontmatter expected:
 *   title, description, date, tags, topic, status (draft|published)
 * The markdown body is converted to Lexical rich text.
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

// --- Markdown → Lexical conversion ---

function createEditorConfig() {
  const contentField: RichTextField = {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        BlocksFeature({ blocks: [] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
        HorizontalRuleFeature(),
      ],
    }),
  }
  return editorConfigFactory.fromField({ field: contentField })
}

function markdownToLexical(markdown: string) {
  const editorConfig = createEditorConfig()
  return convertMarkdownToLexical({ markdown, editorConfig })
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
  const categoryNames = (frontmatter.categories as string[]) || (frontmatter.topic as string ? [frontmatter.topic as string] : [])
  const status = (frontmatter.status as string) || 'draft'
  const dateStr = (frontmatter.date as string) || new Date().toISOString().split('T')[0]
  const publishedAt = new Date(dateStr).toISOString()

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

  if (exists && !updateAllMode) {
    const answer = await rl.question(
      `"${title}" (${slug}) already exists. Update? [y/n/a] `
    )
    const lower = answer.toLowerCase().trim()
    if (lower === 'a') {
      updateAllMode = true
    } else if (lower !== 'y') {
      console.log(`  ⏭ Skipped`)
      return 'skipped'
    }
  }

  // Convert markdown to Lexical rich text
  const lexicalContent = markdownToLexical(cleanBody)

  // Resolve categories
  const categoryIds = await resolveCategories(payload, categoryNames)

  const data: Record<string, unknown> = {
    title,
    slug,
    content: lexicalContent,
    authors: [authorId],
    categories: categoryIds,
    publishedAt,
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
  return 'created'
}

// --- Main ---

const run = async () => {
  const targetArg = process.argv[2]
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

    console.log(`Found ${files.length} post drafts\n`)
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