import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import { PostsArchive } from '@/components/sections/posts-archive'
import { type Locale } from '@/utilities/locale'
import PageClient from './page.client'

export const revalidate = 600

const POSTS_PER_PAGE = 12

const COPY: Record<Locale, { title: string; description: string }> = {
	nl: {
		title: 'Artikelen',
		description: 'Lees de laatste artikelen, inzichten en updates van ons team.',
	},
	en: {
		title: 'Articles',
		description: 'Read the latest articles, insights and updates from our team.',
	},
}

type Args = {
	params: Promise<{
		pageNumber: string
		lang?: string
	}>
}

export default async function Page({ params: paramsPromise }: Args) {
	const { pageNumber, lang = 'nl' } = await paramsPromise
	const locale = lang as Locale
	const payload = await getPayload({ config: configPromise })

	const sanitizedPageNumber = Number(pageNumber)

	if (!Number.isInteger(sanitizedPageNumber)) notFound()

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: POSTS_PER_PAGE,
		page: sanitizedPageNumber,
		overrideAccess: false,
		locale,
		select: {
			title: true,
			slug: true,
			categories: true,
			meta: true,
		},
	})

	const copy = COPY[locale]

	return (
		<div className="pt-24">
			<PageClient />
			<PostsArchive
				posts={posts.docs}
				locale={locale}
				heading={copy.title}
				description={copy.description}
				page={posts.page ?? sanitizedPageNumber}
				totalPages={posts.totalPages}
			/>
		</div>
	)
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { pageNumber, lang = 'nl' } = await paramsPromise
	const locale = lang as Locale

	return {
		title: `${COPY[locale].title} — ${pageNumber}`,
	}
}

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise })
	const locales = ['nl', 'en'] as const
	const results: { pageNumber: string; lang: string }[] = []

	for (const lang of locales) {
		const { totalDocs } = await payload.count({
			collection: 'posts',
			overrideAccess: false,
		locale: lang as 'nl' | 'en',
		})

		const totalPages = Math.ceil(totalDocs / POSTS_PER_PAGE)

		for (let i = 1; i <= totalPages; i++) {
			results.push({ pageNumber: String(i), lang })
		}
	}

	return results
}
