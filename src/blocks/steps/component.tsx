import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { StepCard } from '@/components/cards/step-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { StepsBlock as StepsBlockType } from '@/payload-types'

export function StepsBlock({
	eyebrow,
	title,
	content,
	steps,
	backgroundColor
}: StepsBlockType) {
	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Stack
					gap='sm'
					justify={'center'}
					className='mb-14 max-w-xl text-balance lg:mx-auto lg:items-center lg:text-center'
				>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					{title && (
						<Heading headingLevel='h2' size='md'>
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
			</Container>
		</Section>
	)
}
