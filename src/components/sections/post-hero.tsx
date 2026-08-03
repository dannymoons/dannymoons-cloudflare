import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import type { Locale } from '@/utilities/locale'
import type { Post } from '@/payload-types'

const DATE_LOCALES: Record<Locale, string> = {
	nl: 'nl-NL',
	en: 'en-US',
}

function formatDate(value: string, locale: Locale) {
	return new Intl.DateTimeFormat(DATE_LOCALES[locale], {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(new Date(value))
}

interface PostHeroProps {
	post: Post
	locale: Locale
}

export function PostHero({ post, locale }: PostHeroProps) {
	const { categories, title, populatedAuthors, publishedAt, heroImage } = post

	const categoryTitles = (categories ?? [])
		.map((category) => (typeof category === 'object' ? category?.title : null))
		.filter((value): value is string => Boolean(value))

	const authorNames = (populatedAuthors ?? [])
		.map((author) => author?.name)
		.filter((value): value is string => Boolean(value))

	const hasHeroImage = heroImage && typeof heroImage === 'object'

	return (
		<Section spacing='lg' background='surface'>
			<Container>
				<Stack gap='md' className='mx-auto max-w-3xl'>
					{categoryTitles.length > 0 && (
						<div className='flex flex-wrap gap-2'>
							{categoryTitles.map((category) => (
								<span
									key={category}
									className='inline-flex w-fit rounded-full border border-border bg-accent px-3 py-1 font-medium text-primary text-xs'
								>
									{category}
								</span>
							))}
						</div>
					)}

					<Heading headingLevel='h1' size='xl' color='foreground'>
						{title}
					</Heading>

					{(authorNames.length > 0 || publishedAt) && (
						<div className='flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-sm'>
							{authorNames.length > 0 && (
								<span>{authorNames.join(', ')}</span>
							)}
							{authorNames.length > 0 && publishedAt && (
								<span aria-hidden>&bull;</span>
							)}
							{publishedAt && (
								<time dateTime={publishedAt}>{formatDate(publishedAt, locale)}</time>
							)}
						</div>
					)}
				</Stack>
			</Container>

			{hasHeroImage && (
				<Container className='mt-10'>
					<div className='mx-auto max-w-4xl'>
						<Image
							{...heroImage}
							loading='eager'
							className='aspect-video w-full object-cover'
						/>
					</div>
				</Container>
			)}
		</Section>
	)
}
