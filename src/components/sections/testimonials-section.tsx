import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { TestimonialCard } from '@/components/cards/testimonial-card'
import type { TestimonialCardProps } from '@/components/cards/testimonial-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface TestimonialsSectionProps {
	eyebrow?: string
	heading: string
	items: Omit<TestimonialCardProps, 'className'>[]
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function TestimonialsSection({
	eyebrow,
	heading,
	items,
	background = 'transparent',
}: TestimonialsSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='sm' align='center' className='mx-auto mb-14 max-w-xl text-center'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h2' size='lg'>
						{heading}
					</Heading>
				</Stack>
				<Grid cols={3} gap='md'>
					{items.map(item => (
						<TestimonialCard key={item.name} {...item} />
					))}
				</Grid>
			</Container>
		</Section>
	)
}
