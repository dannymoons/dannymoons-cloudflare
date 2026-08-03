import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { PostsArchive } from '@/components/sections/posts-archive'
import { type Locale } from '@/utilities/locale'
import PageClient from './page.client'

export const dynamic = 'force-static'
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
		lang?: string
	}>
}

export function generateStaticParams() {
	return [{ lang: 'nl' }, { lang: 'en' }]
}

export default async function Page({ params: paramsPromise }: Args) {
	const { lang = 'nl' } = await paramsPromise
	const locale = lang as Locale
	const payload = await getPayload({ config: configPromise })

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: POSTS_PER_PAGE,
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
				page={posts.page ?? 1}
				totalPages={posts.totalPages}
			/>
		</div>
	)
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { lang = 'nl' } = await paramsPromise
	const locale = lang as Locale

	return {
		title: COPY[locale].title,
		description: COPY[locale].description,
	}
}
