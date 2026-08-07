import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'
import readline from 'readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * Import glossary entries from Markdown files into Payload CMS.
 *
 * Usage:
 *   pnpm import-glossary                           # import all files
 *   pnpm import-glossary docs/agent-context/glossary/opennext.md  # single file
 *
 * Behavior:
 *   - Parses frontmatter (title, slug, tags, aliases, date) + markdown body
 *   - Creates new entries as drafts
 *   - When an entry with the same slug already exists, asks interactively:
 *     [y] update / [n] skip / [a] update all (stops asking for the rest)
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
  return 'created'
}

// --- Interactive update-all mode (global flag set from prompt) ---

let updateAllMode = false

// --- Main ---

const run = async () => {
  const targetArg = process.argv[2]
  const glossaryDir = path.resolve('docs/agent-context/glossary')

  const payload = await getPayload({ config })

  if (targetArg) {
    // Resolve: if just a filename, look in glossary dir
    const filePath = targetArg.includes(path.sep) || targetArg.includes('/')
      ? path.resolve(targetArg)
      : path.join(glossaryDir, targetArg.endsWith('.md') ? targetArg : `${targetArg}.md`)
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      process.exit(1)
    }
    console.log(`Importing: ${path.basename(filePath)}\n`)
    const result = await importFile(payload, filePath)
    console.log(`\nResult: ${result}`)
  } else {
    const files = fs
      .readdirSync(glossaryDir)
      .filter((f) => f.endsWith('.md'))
      .sort()

    if (files.length === 0) {
      console.log('No .md files found in docs/agent-context/glossary/')
      process.exit(0)
    }

    console.log(`Found ${files.length} glossary entries\n`)
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