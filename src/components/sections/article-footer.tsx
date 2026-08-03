import { Heading } from '@/components/content/heading'
import { PostCard } from '@/components/cards/post-card'
import type { PostCardProps } from '@/components/cards/post-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Divider } from '@/components/layout/divider'

export interface ArticleFooterAuthor {
	name: string
	role?: string
	bio?: string
	avatar?: string
}

export interface ArticleFooterProps {
	author?: ArticleFooterAuthor
	tags?: string[]
	relatedPosts?: Omit<PostCardProps, 'className'>[]
}

export function ArticleFooter({ author, tags, relatedPosts }: ArticleFooterProps) {
	return (
		<Section spacing='md' background='transparent'>
			<Container size='default'>
				<Stack gap='xl'>
					{tags && tags.length > 0 && (
						<div>
							<Divider className='mb-6' />
							<div className='flex flex-wrap gap-2'>
								{tags.map(tag => (
									<span
										key={tag}
										className='rounded-full border border-border bg-accent px-3 py-1 text-muted-foreground text-xs'
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					)}
					{author && (
						<div className='rounded-xl border border-border bg-card p-6'>
							<div className='flex items-start gap-4'>
								{author.avatar && (
									<img
										src={author.avatar}
										alt={author.name}
										className='h-14 w-14 shrink-0 rounded-full object-cover'
									/>
								)}
								<div>
									<p className='font-semibold text-foreground text-sm'>{author.name}</p>
									{author.role && (
										<p className='mb-2 text-primary text-xs'>{author.role}</p>
									)}
									{author.bio && (
										<p className='text-muted-foreground text-sm leading-relaxed'>
											{author.bio}
										</p>
									)}
								</div>
							</div>
						</div>
					)}
					{relatedPosts && relatedPosts.length > 0 && (
						<div>
							<Heading headingLevel='h3' size='md' className='mb-6'>
								Gerelateerde artikelen
							</Heading>
							<Grid cols={relatedPosts.length as 2 | 3} gap='md'>
								{relatedPosts.map(post => (
									<PostCard key={post.href} {...post} />
								))}
							</Grid>
						</div>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
