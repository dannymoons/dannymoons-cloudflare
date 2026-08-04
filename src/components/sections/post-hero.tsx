import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { Container } from '@/components/layout/container'
import type { Post } from '@/payload-types'

function formatDate(value: string) {
	return new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(value))
}

export function PostHero({ post }: { post: Post }) {
	const { categories, heroImage, meta, populatedAuthors, publishedAt, title } =
		post
	const categoryTitles = (categories ?? [])
		.map(category => (typeof category === 'object' ? category?.title : null))
		.filter((value): value is string => Boolean(value))
	const authorNames = (populatedAuthors ?? [])
		.map(author => author?.name)
		.filter((value): value is string => Boolean(value))
	const hasHeroImage = heroImage && typeof heroImage === 'object'

	return (
		<header className='relative'>
			<div
				className='pointer-events-none absolute inset-0 opacity-80'
				style={{
					background:
						'radial-gradient(circle at 72% 34%, oklch(0.82 0.17 125 / 0.09), transparent 28%), linear-gradient(180deg, oklch(0.12 0.012 145), var(--background))'
				}}
				aria-hidden='true'
			/>
			<Container size='wide' className='relative py-20 sm:py-28'>
				<div className='mx-auto max-w-5xl'>
					<div className='flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.65rem] text-primary uppercase tracking-[0.18em]'>
						<span className='flex items-center gap-3'>
							<span className='size-1.5 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]' />
							Field note
						</span>
						{categoryTitles.map(category => (
							<span key={category} className='text-muted-foreground'>
								/ {category}
							</span>
						))}
					</div>

					<Heading
						headingLevel='h1'
						size='xl'
						color='foreground'
						className='mt-8 max-w-5xl font-semibold text-4xl leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-6xl'
					>
						{title}
					</Heading>

					{meta?.description && (
						<p className='mt-7 max-w-3xl text-lg text-muted-foreground leading-8 sm:text-xl'>
							{meta.description}
						</p>
					)}

					{(authorNames.length > 0 || publishedAt) && (
						<div className='mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-border border-t pt-5 font-mono text-[0.68rem] text-muted-foreground uppercase tracking-[0.12em]'>
							{authorNames.length > 0 && (
								<span>By {authorNames.join(', ')}</span>
							)}
							{authorNames.length > 0 && publishedAt && (
								<span
									className='size-1 rounded-full bg-primary'
									aria-hidden='true'
								/>
							)}
							{publishedAt && (
								<time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
							)}
						</div>
					)}
				</div>

				{hasHeroImage && (
					<figure className='mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface p-1.5 shadow-2xl'>
						<Image
							{...heroImage}
							loading='eager'
							className='aspect-[16/8.5] w-full rounded-[calc(var(--radius-xl)-0.25rem)] object-cover'
						/>
					</figure>
				)}
			</Container>
		</header>
	)
}
