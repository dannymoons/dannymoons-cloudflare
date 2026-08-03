import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { PostCard } from '@/components/cards/post-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { ArchiveBlock as ArchiveBlockType, Post } from '@/payload-types'
import { DEFAULT_LOCALE, localizePath, type Locale } from '@/utilities/locale'

type Props = ArchiveBlockType & { locale?: string }

type PostCardSource = Pick<Post, 'id' | 'title' | 'slug' | 'categories' | 'meta' | 'publishedAt'>

function toPostCard(post: PostCardSource, locale: Locale) {
	const category = (post.categories ?? []).find(
		(value) => typeof value === 'object' && value !== null && 'title' in value
	)

	return {
		id: String(post.id),
		category:
			typeof category === 'object' && category?.title
				? category.title
				: locale === 'nl'
					? 'Artikel'
					: 'Article',
		title: post.title,
		excerpt: post.meta?.description ?? '',
		href: localizePath(`/posts/${post.slug}`, locale)
	}
}

export async function ArchiveBlock({
	eyebrow,
	heading,
	populateBy,
	limit,
	selectedDocs,
	locale = DEFAULT_LOCALE
}: Props) {
	const activeLocale = locale as Locale
	let posts: PostCardSource[] = []

	if (populateBy === 'selection') {
		posts = (selectedDocs ?? []).filter(
			(doc): doc is Post => typeof doc === 'object' && doc !== null
		)
	} else {
		const payload = await getPayload({ config: configPromise })
		const result = await payload.find({
			collection: 'posts',
			depth: 1,
			limit: limit ?? 6,
			locale: activeLocale,
			overrideAccess: false,
			sort: '-publishedAt',
			where: {
				_status: { equals: 'published' }
			},
			select: {
				title: true,
				slug: true,
				categories: true,
				meta: true,
				publishedAt: true
			}
		})
		posts = result.docs
	}

	if (posts.length === 0) return null

	return (
		<Section spacing='lg' background='transparent'>
			<Container>
				{(eyebrow || heading) && (
					<Stack gap='sm' className='mb-12'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{heading && (
							<Heading headingLevel='h2' size='lg'>
								{heading}
							</Heading>
						)}
					</Stack>
				)}
				<Grid cols={3} gap='md'>
					{posts.map((post) => {
						const card = toPostCard(post, activeLocale)
						return (
							<PostCard
								key={card.id}
								category={card.category}
								title={card.title}
								excerpt={card.excerpt}
								readMinutes={5}
								href={card.href}
							/>
						)
					})}
				</Grid>
			</Container>
		</Section>
	)
}
