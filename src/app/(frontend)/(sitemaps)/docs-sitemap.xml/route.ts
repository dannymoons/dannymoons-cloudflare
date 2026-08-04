import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { localizePath, LOCALES, type Locale } from '@/utilities/locale'

const getDocsSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://example.com'

    const dateFallback = new Date().toISOString()

    const results = await payload.find({
      collection: 'wiki',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      locale: 'all',
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

    const docEntries = results.docs
      ? results.docs
          .filter((doc) => doc?.slug)
          .map((doc) => {
            const slugByLocale = doc.slug as unknown as Partial<Record<Locale, string>>
            const lastmod = doc.updatedAt || dateFallback

            const alternateRefs = LOCALES.flatMap((locale) => {
              const slug = slugByLocale[locale]
              if (!slug) return []
              return [{ href: `${SITE_URL}${localizePath(`/docs/${slug}`, locale)}`, hreflang: locale }]
            })

            const enSlug = slugByLocale.en
            if (!enSlug) return null

            return {
              loc: `${SITE_URL}${localizePath(`/docs/${enSlug}`, 'en')}`,
              lastmod,
              alternateRefs,
            }
          })
          .filter(Boolean)
      : []

    return docEntries
  },
  ['docs-sitemap'],
  {
    tags: ['docs-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getDocsSitemap()

  return getServerSideSitemap(sitemap as Parameters<typeof getServerSideSitemap>[0])
}
