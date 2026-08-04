import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import { PostsArchive } from '@/components/sections/posts-archive'
import PageClient from './page.client'

export const revalidate = 600

const POSTS_PER_PAGE = 12

type Args = {
	params: Promise<{
		pageNumber: string
	}>
}

export default async function Page({ params: paramsPromise }: Args) {
	const { pageNumber } = await paramsPromise
	const payload = await getPayload({ config: configPromise })

	const sanitizedPageNumber = Number(pageNumber)

	if (!Number.isInteger(sanitizedPageNumber)) notFound()

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: POSTS_PER_PAGE,
		page: sanitizedPageNumber,
		overrideAccess: false,
		locale: 'en',
		select: {
			title: true,
			slug: true,
			categories: true,
			meta: true,
		},
	})

	return (
		<div className="pt-24">
			<PageClient />
			<PostsArchive
				posts={posts.docs}
				heading="Articles"
				description="Read the latest articles, insights, and updates from Danny."
				page={posts.page ?? sanitizedPageNumber}
				totalPages={posts.totalPages}
			/>
		</div>
	)
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { pageNumber } = await paramsPromise

	return {
		title: `Articles — ${pageNumber}`,
	}
}

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise })
	const locales = ['en'] as const
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
