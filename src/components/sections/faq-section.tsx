import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export interface FaqItem {
	question: string
	answer: string
}

export interface FaqSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	items: FaqItem[]
	layout?: 'single-col' | 'two-col'
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function FaqSection({
	eyebrow,
	heading,
	paragraph,
	items,
	layout = 'single-col',
	background = 'transparent',
}: FaqSectionProps) {
	const accordion = (
		<Accordion type='single' collapsible className='w-full'>
			{items.map((item, i) => (
				<AccordionItem key={i} value={`item-${i}`}>
					<AccordionTrigger className='text-left font-semibold text-sm'>
						{item.question}
					</AccordionTrigger>
					<AccordionContent className='text-muted-foreground text-sm leading-relaxed'>
						{item.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)

	return (
		<Section spacing='lg' background={background}>
			<Container size={layout === 'single-col' ? 'default' : 'wide'}>
				{layout === 'two-col' ? (
					<Grid cols={12} gap='xl'>
						<Column spanMd={5}>
							<Stack gap='sm' className='sticky top-24'>
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
						</Column>
						<Column spanMd={7}>{accordion}</Column>
					</Grid>
				) : (
					<>
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
						<div className='mx-auto max-w-2xl'>{accordion}</div>
					</>
				)}
			</Container>
		</Section>
	)
}
