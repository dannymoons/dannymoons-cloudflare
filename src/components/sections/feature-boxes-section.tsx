import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { FeatureBox } from '@/components/cards/feature-box'
import type { FeatureBoxProps } from '@/components/cards/feature-box'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface FeatureBoxesSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	items: Omit<FeatureBoxProps, 'className'>[]
	cols?: 2 | 3
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function FeatureBoxesSection({
	eyebrow,
	heading,
	paragraph,
	items,
	cols = 3,
	background = 'transparent',
}: FeatureBoxesSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h2' size='lg'>
						{heading}
					</Heading>
					{paragraph && (
						<Paragraph color='default' marginTop='none'>
							{paragraph}
						</Paragraph>
					)}
				</Stack>
				<Grid cols={cols} gap='md'>
					{items.map(item => (
						<FeatureBox key={item.heading} {...item} />
					))}
				</Grid>
			</Container>
		</Section>
	)
}
