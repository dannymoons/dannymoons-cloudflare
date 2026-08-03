import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import type { Locale } from '@/utilities/locale'

export type DocLink = {
	title: string
	slug: string
}

export type DocsNavGroup = {
	id: string
	title: string
	docs: DocLink[]
}

/**
 * Builds the docs sidebar navigation for a locale: published wiki docs grouped
 * by their wiki-category, ordered by the category `order` then the doc `order`.
 * Uncategorised docs are collected under a trailing "General" group.
 */
export const getDocsNav = cache(async (locale: Locale): Promise<DocsNavGroup[]> => {
	const payload = await getPayload({ config: configPromise })

	const [categories, docs] = await Promise.all([
		payload.find({
			collection: 'wiki-categories',
			depth: 0,
			limit: 100,
			locale,
			pagination: false,
			sort: 'order'
		}),
		payload.find({
			collection: 'wiki',
			depth: 1,
			limit: 1000,
			locale,
			overrideAccess: false,
			pagination: false,
			sort: 'order',
			select: { title: true, slug: true, category: true, order: true }
		})
	])

	const groups: DocsNavGroup[] = categories.docs.map((cat) => ({
		id: String(cat.id),
		title: cat.title,
		docs: []
	}))

	const groupById = new Map(groups.map((g) => [g.id, g]))
	const uncategorised: DocsNavGroup = { id: 'general', title: 'General', docs: [] }

	for (const doc of docs.docs) {
		if (!doc.slug) continue
		const link: DocLink = { title: doc.title, slug: doc.slug }
		const categoryId =
			typeof doc.category === 'object' && doc.category !== null
				? String(doc.category.id)
				: doc.category != null
					? String(doc.category)
					: null

		const target = (categoryId && groupById.get(categoryId)) || uncategorised
		target.docs.push(link)
	}

	const result = groups.filter((g) => g.docs.length > 0)
	if (uncategorised.docs.length > 0) result.push(uncategorised)

	return result
})
