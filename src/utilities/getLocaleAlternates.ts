import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import { LOCALES, localizePath, type Locale } from '@/utilities/locale'

type AlternateCollection = 'pages' | 'posts' | 'wiki'

const collectionPrefix: Record<AlternateCollection, string> = {
	pages: '',
	posts: '/posts',
	wiki: '/docs',
}

/**
 * Build per-locale URLs for a single document, using each locale's own
 * (translated) slug. Returns clean URLs for the default locale and prefixed
 * URLs for the others. The `home` page maps to the site root.
 */
export const getLocaleAlternates = cache(
	async ({
		collection,
		id,
	}: {
		collection: AlternateCollection
		id: string | number
	}): Promise<Partial<Record<Locale, string>>> => {
		const payload = await getPayload({ config: configPromise })
		const prefix = collectionPrefix[collection]

		const doc = await payload.findByID({
			collection,
			id,
			depth: 0,
			locale: 'all',
			overrideAccess: true,
			select: { slug: true },
		})

		const slugByLocale = (doc as { slug?: Partial<Record<Locale, string>> } | null)?.slug

		const alternates: Partial<Record<Locale, string>> = {}

		for (const locale of LOCALES) {
			const slug = slugByLocale?.[locale]
			if (!slug) continue

			const path = collection === 'pages' && slug === 'home' ? '/' : `${prefix}/${slug}`
			alternates[locale] = localizePath(path, locale)
		}

		return alternates
	},
)
