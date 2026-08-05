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
import { postTypeLabel } from '@/utilities/post-type'
import type { Post } from '@/payload-types'

type ArchivePost = Pick<
	Post,
	'id' | 'title' | 'slug' | 'meta' | 'categories' | 'tags' | 'postType'
>

function postsPageHref(page: number) {
	return page <= 1 ? '/posts' : `/posts/page/${page}`
}

interface PostsArchiveProps {
	posts: ArchivePost[]
	eyebrow?: string
	heading: string
	description?: string
	page?: number
	totalPages?: number
}

export function PostsArchive({
	posts,
	eyebrow,
	heading,
	description,
	page = 1,
	totalPages = 1,
}: PostsArchiveProps) {
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
					<p className='text-muted-foreground'>There are no articles yet.</p>
				) : (
					<Grid cols={3} gap='md'>
						{posts.map((post) => {
							const category = (post.categories ?? []).find(
								(value) => typeof value === 'object' && value?.title,
							)
							const tagTitles = (post.tags ?? [])
								.map((tag) =>
									typeof tag === 'object' ? tag?.title : null,
								)
								.filter((value): value is string => Boolean(value))

							return (
								<PostCard
									key={post.id}
									category={
										typeof category === 'object' && category?.title
											? category.title
											: 'Article'
									}
									postType={postTypeLabel(post.postType)}
									tags={tagTitles}
									title={post.title}
									excerpt={post.meta?.description ?? ''}
									readMinutes={5}
									href={`/posts/${post.slug}`}
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
							href={postsPageHref(page - 1)}
							aria-disabled={page <= 1}
							tabIndex={page <= 1 ? -1 : undefined}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'md' }),
								'gap-1',
								page <= 1 && 'pointer-events-none opacity-50',
							)}
						>
							<ChevronLeft className='h-4 w-4' />
							Previous
						</Link>

						{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
							<Link
								key={pageNumber}
								href={postsPageHref(pageNumber)}
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
							href={postsPageHref(page + 1)}
							aria-disabled={page >= totalPages}
							tabIndex={page >= totalPages ? -1 : undefined}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'md' }),
								'gap-1',
								page >= totalPages && 'pointer-events-none opacity-50',
							)}
						>
							Next
							<ChevronRight className='h-4 w-4' />
						</Link>
					</nav>
				)}
			</Container>
		</Section>
	)
}
