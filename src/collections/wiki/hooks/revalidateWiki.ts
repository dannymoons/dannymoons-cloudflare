import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Wiki } from '../../../payload-types'

const locales = ['en'] as const

export const revalidateWiki: CollectionAfterChangeHook<Wiki> = ({
	doc,
	previousDoc,
	req: { payload, context }
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === 'published' && doc.slug) {
			for (const locale of locales) {
				const path = `/${locale}/docs/${doc.slug}`
				payload.logger.info(`Revalidating wiki doc at path: ${path}`)
				revalidatePath(path)
			}
			revalidatePath('/sitemap.xml')
		}

		if (previousDoc?._status === 'published' && doc._status !== 'published' && previousDoc.slug) {
			for (const locale of locales) {
				const oldPath = `/${locale}/docs/${previousDoc.slug}`
				revalidatePath(oldPath)
			}
			revalidatePath('/sitemap.xml')
		}
	}

	return doc
}

export const revalidateWikiDelete: CollectionAfterDeleteHook<Wiki> = ({
	doc,
	req: { context }
}) => {
	if (!context.disableRevalidate && doc?.slug) {
		for (const locale of locales) {
			const path = `/${locale}/docs/${doc.slug}`
			revalidatePath(path)
		}
		revalidatePath('/sitemap.xml')
	}

	return doc
}
