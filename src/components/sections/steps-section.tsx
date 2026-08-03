import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { StepCard } from '@/components/cards/step-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface Step {
	number: string
	title: string
	description: string
}

export interface StepsSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	steps: Step[]
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function StepsSection({
	eyebrow,
	heading,
	paragraph,
	steps,
	background = 'transparent',
}: StepsSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='sm' align='center' className='mx-auto mb-14 max-w-xl text-center'>
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
				<div className='relative'>
					{steps.length > 1 && (
						<div className='absolute top-7 right-1/3 left-1/3 hidden h-px bg-border md:block' />
					)}
					<Grid cols={steps.length as 2 | 3 | 4} gap='lg'>
						{steps.map(step => (
							<StepCard
								key={step.number}
								number={step.number}
								title={step.title}
								description={step.description}
							/>
						))}
					</Grid>
				</div>
			</Container>
		</Section>
	)
}
