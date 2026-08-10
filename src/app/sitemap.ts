import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

import config from '@payload-config'

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://dannymoons.nl'

export const dynamic = 'force-dynamic'

type SitemapDocument = {
  slug?: string | null
  updatedAt?: string | null
}

const publishedDocuments = async (
  collection: 'pages' | 'posts' | 'glossary' | 'wiki',
): Promise<SitemapDocument[]> => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection,
    overrideAccess: false,
    draft: false,
    depth: 0,
    limit: 1000,
    pagination: false,
    locale: 'en',
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  return result.docs as SitemapDocument[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts, glossary, wiki] = await Promise.all([
    publishedDocuments('pages'),
    publishedDocuments('posts'),
    publishedDocuments('glossary'),
    publishedDocuments('wiki'),
  ])

  const staticEntries = ['', 'posts', 'what-is', 'docs', 'search'].map((path) => ({
    url: `${SITE_URL}/${path}`.replace(/\/$/, path ? '' : '/'),
  }))

  const pageEntries = pages
    .filter((page) => page.slug && page.slug !== 'home')
    .map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: page.updatedAt ?? undefined,
    }))

  const entriesFor = (documents: SitemapDocument[], prefix: string) =>
    documents
      .filter((document) => document.slug)
      .map((document) => ({
        url: `${SITE_URL}/${prefix}/${document.slug}`,
        lastModified: document.updatedAt ?? undefined,
      }))

  return [
    ...staticEntries,
    ...pageEntries,
    ...entriesFor(posts, 'posts'),
    ...entriesFor(glossary, 'what-is'),
    ...entriesFor(wiki, 'docs'),
  ]
}
