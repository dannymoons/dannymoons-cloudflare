import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'
import { localizePath, LOCALES, type Locale } from '@/utilities/locale'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://example.com'

    const dateFallback = new Date().toISOString()

    // Fetch all published pages with all locale slugs in one query
    const results = await payload.find({
      collection: 'pages',
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

    // Static utility pages (same slug across locales)
    const staticPages = ['/search', '/posts']
    const staticEntries = staticPages.map((path) => ({
      loc: `${SITE_URL}${localizePath(path, 'en')}`,
      lastmod: dateFallback,
      alternateRefs: LOCALES.map((locale) => ({
        href: `${SITE_URL}${localizePath(path, locale)}`,
        hreflang: locale,
      })),
    }))

    const docEntries = results.docs
      ? results.docs
          .filter((page) => page?.slug)
          .map((page) => {
            const slugByLocale = page.slug as unknown as Partial<Record<Locale, string>>
            const lastmod = page.updatedAt || dateFallback

            const alternateRefs = LOCALES.flatMap((locale) => {
              const slug = slugByLocale[locale]
              if (!slug) return []
              const path = slug === 'home' ? '/' : `/${slug}`
              return [{ href: `${SITE_URL}${localizePath(path, locale)}`, hreflang: locale }]
            })

            const enSlug = slugByLocale.en
            if (!enSlug) return null
            const canonicalPath = enSlug === 'home' ? '/' : `/${enSlug}`

            return {
              loc: `${SITE_URL}${localizePath(canonicalPath, 'en')}`,
              lastmod,
              alternateRefs,
            }
          })
          .filter(Boolean)
      : []

    return [...staticEntries, ...docEntries]
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()

  return getServerSideSitemap(sitemap as Parameters<typeof getServerSideSitemap>[0])
}
