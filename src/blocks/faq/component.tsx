import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import type { FaqBlock as FaqBlockType } from '@/payload-types'

export function FaqBlock({
	eyebrow,
	title,
	content,
	items,
	layout = 'single-col',
	backgroundColor
}: FaqBlockType) {
	const accordion = (
		<Accordion type='single' collapsible className='w-full'>
			{items.map(item => (
				<AccordionItem
					key={item.id ?? item.question}
					value={item.id ?? item.question}
				>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent className='text-muted-foreground text-sm leading-relaxed'>
						{item.answer != null && (
							<RichTextBasic
								data={
									item.answer as unknown as Parameters<
										typeof RichTextBasic
									>[0]['data']
								}
								textSize='sm'
							/>
						)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)

	const intro = (
		<>
			{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
			{title && (
				<Heading headingLevel='h2' size={layout === 'single-col' ? 'lg' : 'md'}>
					{title}
				</Heading>
			)}
			{content != null && (
				<RichTextBasic
					data={
						content as unknown as Parameters<typeof RichTextBasic>[0]['data']
					}
					textSize='md'
				/>
			)}
		</>
	)

	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container size={layout === 'single-col' ? 'default' : 'wide'}>
				{layout === 'two-col' ? (
					<Grid cols={12} gap='xl'>
						<Column spanMd={5}>
							<Stack gap='sm' className='sticky top-24'>
								{intro}
							</Stack>
						</Column>
						<Column spanMd={7}>{accordion}</Column>
					</Grid>
				) : (
					<>
						<Stack
							gap='sm'
							align='center'
							className='mx-auto mb-12 max-w-xl text-center'
						>
							{intro}
						</Stack>
						<div className='mx-auto max-w-2xl'>{accordion}</div>
					</>
				)}
			</Container>
		</Section>
	)
}
