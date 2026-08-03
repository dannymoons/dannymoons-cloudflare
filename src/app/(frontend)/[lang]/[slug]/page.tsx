import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/payload/payload-redirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import { RenderBlocks } from '@/blocks/render-blocks'
import { generateMeta } from '@/utilities/generateMeta'
import { getLocaleAlternates } from '@/utilities/getLocaleAlternates'
import { staticAlternates, type Locale } from '@/utilities/locale'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/payload/live-preview-listener'

type Args = {
	params: Promise<{
		slug?: string
		lang?: string
	}>
}

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise })
	const locales = ['nl', 'en'] as const
	const results: { slug: string; lang: string }[] = []

	for (const lang of locales) {
		const pages = await payload.find({
			collection: 'pages',
			draft: false,
			limit: 1000,
			overrideAccess: false,
			pagination: false,
			locale: lang as 'nl' | 'en',
			select: {
				slug: true
			}
		})

		const params = pages.docs
			?.filter(doc => doc.slug !== 'home')
			.map(({ slug }) => ({ slug, lang }))

		results.push(...params)
	}

	return results
}

export default async function Page({ params: paramsPromise }: Args) {
	const { isEnabled: draft } = await draftMode()
	const { slug = 'home', lang = 'nl' } = await paramsPromise
	const decodedSlug = decodeURIComponent(slug)
	const url = `/${lang}/${decodedSlug}`
	let page: RequiredDataFromCollectionSlug<'pages'> | null

	page = await queryPageBySlug({
		slug: decodedSlug,
		lang
	})

	if (!page && slug === 'home') {
		page = homeStatic
	}

	if (!page) {
		return <PayloadRedirects url={url} />
	}

	const { layout } = page

	const pageId = (page as { id?: string | number }).id
	const alternates = pageId
		? await getLocaleAlternates({ collection: 'pages', id: pageId })
		: staticAlternates('/')

	return (
		<article>
			<PageClient />
			<PayloadRedirects disableNotFound url={url} />

			{draft && <LivePreviewListener />}

			<RenderBlocks blocks={layout} locale={lang} />
		</article>
	)
}

export async function generateMetadata({
	params: paramsPromise
}: Args): Promise<Metadata> {
	const { slug = 'home', lang = 'nl' } = await paramsPromise
	const decodedSlug = decodeURIComponent(slug)
	const page = await queryPageBySlug({
		slug: decodedSlug,
		lang
	})

	const pageId = (page as { id?: string | number } | null)?.id
	const alternates = pageId
		? await getLocaleAlternates({ collection: 'pages', id: pageId })
		: staticAlternates(decodedSlug === 'home' ? '/' : `/${decodedSlug}`)

	return generateMeta({ doc: page, alternates, locale: lang as Locale })
}

const queryPageBySlug = cache(async ({ slug, lang }: { slug: string; lang: string }) => {
	const { isEnabled: draft } = await draftMode()

	const payload = await getPayload({ config: configPromise })

	const result = await payload.find({
		collection: 'pages',
		draft,
		limit: 1,
		pagination: false,
		overrideAccess: draft,
		locale: lang as 'nl' | 'en',
		where: {
			slug: {
				equals: slug
			}
		}
	})

	return result.docs?.[0] || null
})
