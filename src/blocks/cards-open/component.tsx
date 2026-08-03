import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { CardsOpenBlock as CardsOpenBlockType } from '@/payload-types'

export function CardsOpenBlock({
	eyebrow,
	title,
	content,
	cards,
	buttons,
	backgroundColor,
	locale,
}: CardsOpenBlockType & { locale?: string }) {
	const hasIntro = title || content || (buttons && buttons.length > 0)

	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Stack gap='xl'>
					{hasIntro && (
						<Grid cols={12} gap='lg' className='items-start'>
							<Column span={12} spanLg={7}>
								<Stack gap='sm'>
									{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
									{title && (
										<Heading headingLevel='h2' size='lg'>
											{title}
										</Heading>
									)}
									{content && (
										<RichTextBasic
											data={
												content as unknown as Parameters<
													typeof RichTextBasic
												>[0]['data']
											}
											textSize='lg'
										/>
									)}
								</Stack>
							</Column>
							{buttons && buttons.length > 0 && (
								<Column span={12} spanLg={3} className='lg:col-start-10'>
									<Flex gap='sm' wrap className='lg:justify-end lg:pt-1'>
										{buttons.map(({ button: btn, id }) => (
											<CMSLink
												key={id ?? btn.label}
												{...btn}
												locale={locale}
												appearance={btn.color ?? 'primary'}
											/>
										))}
									</Flex>
								</Column>
							)}
						</Grid>
					)}

					{cards && cards.length > 0 && (
						<Grid cols={3} gap='lg'>
							{cards.map(card => {
								const media = typeof card.image === 'object' ? card.image : null
								return (
									<Stack key={card.id ?? card.title} gap='sm'>
										{media && <Image {...media} className='aspect-video' />}
										<Stack gap='lg'>
											<Heading headingLevel='h3' size='md'>
												{card.title}
											</Heading>
											{card.content && (
												<RichTextBasic
													data={
														card.content as unknown as Parameters<
															typeof RichTextBasic
														>[0]['data']
													}
													textSize='md'
												/>
											)}
											{card.button?.label && (
												<div className=''>
													<CMSLink
														{...card.button}
														locale={locale}
														appearance={card.button.color ?? 'primary'}
														size='md'
													/>
												</div>
											)}
										</Stack>
									</Stack>
								)
							})}
						</Grid>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
