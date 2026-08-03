import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { DynamicIcon } from '@/components/content/icon'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { CardsOverlayBlock as CardsOverlayBlockType } from '@/payload-types'

export function CardsOverlayBlock({
	eyebrow,
	title,
	content,
	cards,
	buttons,
	backgroundColor,
	locale,
}: CardsOverlayBlockType & { locale?: string }) {
	const hasHeader = title || content || (buttons && buttons.length > 0)

	return (
		<Section
			spacing='lg'
			background={backgroundColor ?? undefined}
		>
			<Container>
				<Stack gap='xl'>
					{hasHeader && (
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
									<div
										key={card.id ?? card.title}
										className='group relative aspect-3/4 overflow-hidden rounded-xl'
									>
										{media && (
											<Image
												{...media}
												className='absolute inset-0 h-full w-full rounded-none object-cover transition-transform duration-500 group-hover:scale-105'
											/>
										)}
										<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
										<div className='absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5'>
											{card.details && card.details.length > 0 && (
												<div className='flex flex-wrap gap-2'>
													{card.details.map(detail => (
														<span
															key={`detail-${detail.label}`}
															className='flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 font-medium text-white text-xs backdrop-blur-sm'
														>
															{detail.icon && (
																<DynamicIcon name={detail.icon} size={12} />
															)}
															{detail.label}
														</span>
													))}
												</div>
											)}
											<Stack gap='xs'>
												<Heading headingLevel='h3' size='sm' color='white'>
													{card.title}
												</Heading>
												{card.content && (
													<div className='text-sm text-white/80'>
														<RichTextBasic
															data={
																card.content as unknown as Parameters<
																	typeof RichTextBasic
																>[0]['data']
															}
															textSize='sm'
														/>
													</div>
												)}
											</Stack>
											{card.button?.label && (
												<div className=''>
													<CMSLink
														{...card.button}
														locale={locale}
														appearance={card.button.color ?? 'white'}
														size='sm'
													/>
												</div>
											)}
										</div>
									</div>
								)
							})}
						</Grid>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
