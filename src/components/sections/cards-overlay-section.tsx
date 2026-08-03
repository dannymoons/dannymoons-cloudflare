import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { DynamicIcon } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Button } from '@/components/ui/button'
import { toButtonVariant } from '@/utilities/cta-variant'
import Link from 'next/link'

export interface CardsOverlayDetail {
	icon?: string | null
	label: string
}

export interface CardsOverlayCard {
	id?: string | null
	image?: { url?: string | null; alt?: string | null } | null
	title: string
	content?: Record<string, unknown> | null
	link?: string | null
	linkLabel?: string | null
	details?: CardsOverlayDetail[] | null
}

export interface CardsOverlayCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface CardsOverlaySectionProps {
	eyebrow?: string
	title?: string | null
	content?: Record<string, unknown> | null
	cards: CardsOverlayCard[]
	primaryCta?: CardsOverlayCta
	secondaryCta?: CardsOverlayCta
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
}

export function CardsOverlaySection({
	eyebrow,
	title,
	content,
	cards,
	primaryCta,
	secondaryCta,
	background = 'default'
}: CardsOverlaySectionProps) {
	const hasHeader = title || content || primaryCta || secondaryCta

	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='xl'>
					{hasHeader && (
						<Grid cols={12} gap='lg' className='items-start'>
							<Column span={12} spanLg={7}>
								<Stack gap='md'>
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
							{(primaryCta || secondaryCta) && (
								<Column span={12} spanLg={3} className='lg:col-start-10'>
									<Flex gap='sm' wrap className='lg:justify-end lg:pt-1'>
										{primaryCta && (
											<Button variant={toButtonVariant(primaryCta.variant ?? 'default')} asChild>
												<Link href={primaryCta.href}>{primaryCta.label}</Link>
											</Button>
										)}
										{secondaryCta && (
											<Button
												variant={toButtonVariant(secondaryCta.variant ?? 'outline')}
												asChild
											>
												<Link href={secondaryCta.href}>
													{secondaryCta.label}
												</Link>
											</Button>
										)}
									</Flex>
								</Column>
							)}
						</Grid>
					)}

					{cards.length > 0 && (
						<Grid cols={3} gap='lg'>
							{cards.map((card, index) => (
								<div
									key={card.id ?? index}
									className='group relative aspect-3/4 overflow-hidden rounded-xl'
								>
									{card.image?.url && (
										// biome-ignore lint/performance/noImgElement: CMS URL
										<img
											src={card.image.url}
											alt={card.image.alt ?? ''}
											className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
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
										{card.link && card.linkLabel && (
											<Link
												href={card.link}
												className='font-medium text-sm text-white hover:underline'
											>
												{card.linkLabel}
											</Link>
										)}
									</div>
								</div>
							))}
						</Grid>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
