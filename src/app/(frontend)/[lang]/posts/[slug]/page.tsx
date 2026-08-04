import type { Metadata } from 'next'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

import type { Post } from '@/payload-types'

import {
	getTableOfContents,
	RichTextBasic
} from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { ArticleFooter } from '@/components/sections/article-footer'
import { PostHero } from '@/components/sections/post-hero'
import { LivePreviewListener } from '@/components/payload/live-preview-listener'
import { PayloadRedirects } from '@/components/payload/payload-redirects'
import { generateMeta } from '@/utilities/generateMeta'
import { getLocaleAlternates } from '@/utilities/getLocaleAlternates'
import { staticAlternates } from '@/utilities/locale'

import { TableOfContents } from './table-of-contents'

type Args = {
	params: Promise<{
		slug?: string
		lang?: string
	}>
}

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise })
	const posts = await payload.find({
		collection: 'posts',
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		locale: 'en',
		select: {
			slug: true
		}
	})

	return posts.docs.map(({ slug }) => ({ slug, lang: 'en' }))
}

export default async function Page({ params: paramsPromise }: Args) {
	const { isEnabled: draft } = await draftMode()
	const { slug = '' } = await paramsPromise
	const decodedSlug = decodeURIComponent(slug)
	const url = `/posts/${decodedSlug}`
	const post = await queryPostBySlug(decodedSlug)

	if (!post) return <PayloadRedirects url={url} />

	const content = post.content as unknown as Parameters<
		typeof RichTextBasic
	>[0]['data']
	const tableOfContents = getTableOfContents(content)

	const relatedPosts = (post.relatedPosts ?? [])
		.filter(
			(related): related is Post =>
				typeof related === 'object' && related !== null
		)
		.map(related => {
			const category = (related.categories ?? []).find(
				value => typeof value === 'object' && value?.title
			)

			return {
				category:
					typeof category === 'object' && category?.title
						? category.title
						: 'Field note',
				title: related.title,
				excerpt: related.meta?.description ?? '',
				readMinutes: 5,
				href: `/posts/${related.slug}`
			}
		})

	return (
		<article>
			<PayloadRedirects disableNotFound url={url} />
			{draft && <LivePreviewListener />}

			<PostHero post={post} />

			<section className='border-border border-b pt-section-sm pb-section-lg'>
				<Container size='wide'>
					<div className='grid gap-16 lg:grid-cols-[minmax(0,46rem)_15rem] lg:justify-center lg:gap-20'>
						<RichTextBasic
							data={content}
							className='gap-6 [&_a]:text-primary [&_a]:decoration-primary/40 [&_blockquote]:my-10 [&_blockquote]:border-primary [&_blockquote]:border-l-2 [&_blockquote]:pl-6 [&_blockquote]:font-medium [&_blockquote]:text-2xl [&_blockquote]:text-foreground [&_blockquote]:leading-9 [&_h1:first-child]:hidden [&_h2]:mt-12 [&_h3]:mt-8 [&_li::marker]:text-primary [&_li]:text-lg [&_li]:text-muted-foreground [&_li]:leading-8 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-7 [&_p]:text-muted-foreground [&_p]:leading-8 [&_strong]:text-foreground [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-7'
						/>
						{tableOfContents.length > 0 && (
							<TableOfContents items={tableOfContents} />
						)}
					</div>
				</Container>
			</section>

			{relatedPosts.length > 0 && <ArticleFooter relatedPosts={relatedPosts} />}
		</article>
	)
}

export async function generateMetadata({
	params: paramsPromise
}: Args): Promise<Metadata> {
	const { slug = '' } = await paramsPromise
	const decodedSlug = decodeURIComponent(slug)
	const post = await queryPostBySlug(decodedSlug)

	const postId = (post as { id?: string | number } | null)?.id
	const alternates = postId
		? await getLocaleAlternates({ collection: 'posts', id: postId })
		: staticAlternates(`/posts/${decodedSlug}`)

	return generateMeta({ doc: post, alternates, locale: 'en' })
}

const queryPostBySlug = cache(async (slug: string) => {
	const { isEnabled: draft } = await draftMode()
	const payload = await getPayload({ config: configPromise })

	const result = await payload.find({
		collection: 'posts',
		draft,
		limit: 1,
		overrideAccess: draft,
		pagination: false,
		locale: 'en',
		where: {
			slug: {
				equals: slug
			}
		}
	})

	return result.docs?.[0] || null
})
