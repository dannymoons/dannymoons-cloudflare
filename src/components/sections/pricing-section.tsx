import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { PricingCard } from '@/components/cards/pricing-card'
import type { PricingCardProps } from '@/components/cards/pricing-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface PricingSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	plans: Omit<PricingCardProps, 'className'>[]
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function PricingSection({
	eyebrow,
	heading,
	paragraph,
	plans,
	background = 'transparent',
}: PricingSectionProps) {
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
				<Grid cols={plans.length as 2 | 3} gap='lg' className='items-stretch'>
					{plans.map(plan => (
						<PricingCard key={plan.name} {...plan} />
					))}
				</Grid>
			</Container>
		</Section>
	)
}
