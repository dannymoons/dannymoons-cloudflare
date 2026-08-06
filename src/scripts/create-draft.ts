import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'

/**
 * Create a draft post from a JSON bundle file.
 *
 * Usage:
 *   pnpm tsx src/scripts/create-draft.ts <path-to-json>
 *
 * The JSON file should have the structure:
 * {
 *   "title": "...",
 *   "slug": "...",
 *   "description": "...",
 *   "content": { "root": { ... } },   // Lexical editor state
 *   "tags"?: string[],
 *   "topic"?: string
 * }
 */

const run = async () => {
  const jsonPath = process.argv[2]
  if (!jsonPath) {
    console.error('Usage: pnpm tsx src/scripts/create-draft.ts <path-to-json>')
    process.exit(1)
  }

  const absolutePath = path.resolve(jsonPath)
  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`)
    process.exit(1)
  }

  const article = JSON.parse(fs.readFileSync(absolutePath, 'utf-8'))

  const payload = await getPayload({ config })

  // Find or get an admin user to use as author
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
    overrideAccess: true,
  })
  if (existingUsers.docs.length === 0) {
    console.error('No admin user found. Run the seed first.')
    process.exit(1)
  }
  const authorId = existingUsers.docs[0].id

  // Create the post as a draft in English
  const post = await payload.create({
    collection: 'posts',
    locale: 'en',
    data: {
      title: article.title,
      slug: article.slug,
      _status: 'draft',
      authors: [authorId],
      content: article.content,
      meta: {
        title: article.title,
        description: article.description || '',
      },
    },
    overrideAccess: true,
    context: { disableRevalidate: true },
  })

  console.log(`✅ Created draft post: "${article.title}"`)
  console.log(`   ID: ${post.id}`)
  console.log(`   Slug: ${article.slug}`)
  console.log(`   Status: draft`)
  console.log(`   View in admin: /admin/collections/posts/${post.id}`)

  process.exit(0)
}

run().catch(error => {
  console.error('Failed to create draft:', error)
  process.exit(1)
})