import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Heading } from '@/components/content/heading'
import { Eyebrow } from '@/components/content/eyebrow'
import { PostCard } from '@/components/cards/post-card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { localizePath, type Locale } from '@/utilities/locale'
import type { Post } from '@/payload-types'

type ArchivePost = Pick<Post, 'id' | 'title' | 'slug' | 'meta' | 'categories'>

const COPY: Record<Locale, { fallbackCategory: string; empty: string; previous: string; next: string }> = {
	nl: {
		fallbackCategory: 'Artikel',
		empty: 'Er zijn nog geen artikelen.',
		previous: 'Vorige',
		next: 'Volgende',
	},
	en: {
		fallbackCategory: 'Article',
		empty: 'There are no articles yet.',
		previous: 'Previous',
		next: 'Next',
	},
}

function postsPageHref(page: number, locale: Locale) {
	return localizePath(page <= 1 ? '/posts' : `/posts/page/${page}`, locale)
}

interface PostsArchiveProps {
	posts: ArchivePost[]
	locale: Locale
	eyebrow?: string
	heading: string
	description?: string
	page?: number
	totalPages?: number
}

export function PostsArchive({
	posts,
	locale,
	eyebrow,
	heading,
	description,
	page = 1,
	totalPages = 1,
}: PostsArchiveProps) {
	const copy = COPY[locale]

	return (
		<Section spacing='lg'>
			<Container>
				<Stack gap='sm' className='mb-10 max-w-2xl'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='lg' color='foreground'>
						{heading}
					</Heading>
					{description && (
						<p className='text-lg text-muted-foreground'>{description}</p>
					)}
				</Stack>

				{posts.length === 0 ? (
					<p className='text-muted-foreground'>{copy.empty}</p>
				) : (
					<Grid cols={3} gap='md'>
						{posts.map((post) => {
							const category = (post.categories ?? []).find(
								(value) => typeof value === 'object' && value?.title,
							)

							return (
								<PostCard
									key={post.id}
									category={
										typeof category === 'object' && category?.title
											? category.title
											: copy.fallbackCategory
									}
									title={post.title}
									excerpt={post.meta?.description ?? ''}
									readMinutes={5}
									href={localizePath(`/posts/${post.slug}`, locale)}
								/>
							)
						})}
					</Grid>
				)}

				{totalPages > 1 && (
					<nav
						aria-label='Pagination'
						className='mt-12 flex items-center justify-center gap-2'
					>
						<Link
							href={postsPageHref(page - 1, locale)}
							aria-disabled={page <= 1}
							tabIndex={page <= 1 ? -1 : undefined}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'md' }),
								'gap-1',
								page <= 1 && 'pointer-events-none opacity-50',
							)}
						>
							<ChevronLeft className='h-4 w-4' />
							{copy.previous}
						</Link>

						{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
							<Link
								key={pageNumber}
								href={postsPageHref(pageNumber, locale)}
								aria-current={pageNumber === page ? 'page' : undefined}
								className={cn(
									buttonVariants({
										variant: pageNumber === page ? 'secondary' : 'ghost',
										size: 'icon',
									}),
								)}
							>
								{pageNumber}
							</Link>
						))}

						<Link
							href={postsPageHref(page + 1, locale)}
							aria-disabled={page >= totalPages}
							tabIndex={page >= totalPages ? -1 : undefined}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'md' }),
								'gap-1',
								page >= totalPages && 'pointer-events-none opacity-50',
							)}
						>
							{copy.next}
							<ChevronRight className='h-4 w-4' />
						</Link>
					</nav>
				)}
			</Container>
		</Section>
	)
}
