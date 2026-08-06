import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { cache } from 'react'

import { PayloadRedirects } from '@/components/payload/payload-redirects'
import { LivePreviewListener } from '@/components/payload/live-preview-listener'
import { RichTextBasic } from '@/components/content/richtext'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { generateMeta } from '@/utilities/generateMeta'
import { getLocaleAlternates } from '@/utilities/getLocaleAlternates'
import { staticAlternates, type Locale } from '@/utilities/locale'

type Args = {
	params: Promise<{
		slug?: string
		lang?: string
	}>
}

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise })
	const locales = ['en'] as const
	const results: { slug: string; lang: string }[] = []

	for (const lang of locales) {
		const docs = await payload.find({
			collection: 'wiki',
			draft: false,
			limit: 1000,
			overrideAccess: false,
			pagination: false,
			locale: lang,
			select: { slug: true }
		})

		results.push(
			...docs.docs.flatMap(({ slug }) => (slug ? [{ slug, lang }] : []))
		)
	}

	return results
}

export default async function WikiDocPage({ params: paramsPromise }: Args) {
	const { isEnabled: draft } = await draftMode()
	const { slug = '', lang = 'en' } = await paramsPromise
	const locale = lang as Locale
	const decodedSlug = decodeURIComponent(slug)
	const url = `/docs/${decodedSlug}`
	const doc = await queryWikiBySlug({ slug: decodedSlug, lang })

	if (!doc) return <PayloadRedirects url={url} />

	return (
		<article className='flex max-w-3xl flex-col gap-8'>
			<PayloadRedirects disableNotFound url={url} />
			{draft && <LivePreviewListener />}

			<header className='flex flex-col gap-3 border-border border-b pb-8'>
				<Heading headingLevel='h1' size='lg'>
					{doc.title}
				</Heading>
				{doc.excerpt ? (
					<Paragraph color='muted' marginTop='none'>
						{doc.excerpt}
					</Paragraph>
				) : null}
			</header>

			<RichTextBasic
				data={
					doc.content as unknown as Parameters<typeof RichTextBasic>[0]['data']
				}
			/>
		</article>
	)
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { slug = '', lang = 'en' } = await paramsPromise
	const decodedSlug = decodeURIComponent(slug)
	const doc = await queryWikiBySlug({ slug: decodedSlug, lang })

	const docId = (doc as { id?: string | number } | null)?.id
	const alternates = docId
		? await getLocaleAlternates({ collection: 'wiki', id: docId })
		: staticAlternates(`/docs/${decodedSlug}`)

	return generateMeta({ doc, alternates, locale: lang as Locale })
}

const queryWikiBySlug = cache(async ({ slug, lang }: { slug: string; lang: string }) => {
	const { isEnabled: draft } = await draftMode()

	const payload = await getPayload({ config: configPromise })

	const result = await payload.find({
		collection: 'wiki',
		draft,
		limit: 1,
		overrideAccess: draft,
		pagination: false,
		locale: lang as Locale,
		where: {
			slug: {
				equals: slug
			}
		}
	})

	return result.docs?.[0] || null
})
