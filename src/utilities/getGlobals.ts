import type { Config } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

import { DEFAULT_LOCALE, type Locale } from '@/utilities/locale'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, locale: Locale = DEFAULT_LOCALE, depth = 1) {
	const payload = await getPayload({ config: configPromise })

	const global = await payload.findGlobal({
		slug,
		depth,
		locale
	})

	return global
}

/**
 * Returns a cached, locale-aware fetcher for a Payload global. The cache is
 * keyed per global + locale and invalidated by the `global_<slug>` tag, which
 * the global's `afterChange` hook revalidates.
 */
export const getCachedGlobal = (slug: Global, locale: Locale = DEFAULT_LOCALE, depth = 1) =>
	unstable_cache(async () => getGlobal(slug, locale, depth), [slug, locale, String(depth)], {
		tags: [`global_${slug}`]
	})
