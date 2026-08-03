import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { PostCard } from '@/components/cards/post-card'
import type { PostCardProps } from '@/components/cards/post-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'

export interface ArchiveSectionProps {
	eyebrow?: string
	heading?: string
	posts: Omit<PostCardProps, 'className'>[]
	categories?: string[]
	activeCategory?: string
	onCategoryChange?: (category: string) => void
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function ArchiveSection({
	eyebrow,
	heading,
	posts,
	categories,
	activeCategory,
	onCategoryChange,
	background = 'transparent'
}: ArchiveSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				{(eyebrow || heading) && (
					<Stack gap='sm' className='mb-10'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{heading && (
							<Heading headingLevel='h2' size='lg'>
								{heading}
							</Heading>
						)}
					</Stack>
				)}
				{categories && categories.length > 0 && (
					<div className='mb-8 flex flex-wrap gap-2'>
						{categories.map(cat => (
							<button
								key={cat}
								type='button'
								onClick={() => onCategoryChange?.(cat)}
								className={cn(
									'rounded-full border px-3 py-1.5 text-xs transition-colors',
									activeCategory === cat
										? 'border-primary bg-primary text-primary-foreground'
										: 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
								)}
							>
								{cat}
							</button>
						))}
					</div>
				)}
				<Grid cols={3} gap='md'>
					{posts.map(post => (
						<PostCard
							key={`${post.href}|${post.title}|${post.category}|${post.readMinutes}`}
							{...post}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	)
}
