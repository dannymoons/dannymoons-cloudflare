import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'

export function TestimonialsBlock({
	eyebrow,
	title,
	content,
	loadFromCollection,
	items,
	testimonials,
	backgroundColor
}: TestimonialsBlockType) {
	type TestimonialItem = Exclude<
		| NonNullable<TestimonialsBlockType['items']>[number]
		| NonNullable<TestimonialsBlockType['testimonials']>[number],
		string | number
	>
	const displayItems = (
		loadFromCollection && testimonials ? testimonials : (items ?? [])
	).filter((item): item is TestimonialItem => typeof item === 'object' && item !== null)

	return (
		<Section
			spacing='lg'
			background={backgroundColor ?? undefined}
		>
			<Container>
				<Stack
					gap='sm'
					align='center'
					className='mx-auto mb-14 max-w-xl text-center'
				>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					{title && (
						<Heading headingLevel='h2' size='lg'>
							{title}
						</Heading>
					)}
					{content != null && (
						<RichTextBasic
							data={
								content as unknown as Parameters<
									typeof RichTextBasic
								>[0]['data']
							}
							textSize='md'
						/>
					)}
				</Stack>
				<Grid cols={3} gap='md'>
					{displayItems.map(item => (
						<TestimonialCard
							key={item.name}
							quote={item.quote}
							name={item.name}
							role={item.role ?? undefined}
							stars={item.stars ?? 5}
							avatar={'avatar' in item && item.avatar
								? (typeof item.avatar === 'object' ? item.avatar : undefined)
								: undefined}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	)
}
