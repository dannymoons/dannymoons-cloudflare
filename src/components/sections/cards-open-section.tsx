import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Button } from '@/components/ui/button'
import { toButtonVariant } from '@/utilities/cta-variant'
import Link from 'next/link'

export interface CardsOpenCard {
	id?: string | null
	image?: { url?: string | null; alt?: string | null } | null
	title: string
	content?: Record<string, unknown> | null
	link?: string | null
	linkLabel?: string | null
}

export interface CardsOpenCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface CardsOpenSectionProps {
	eyebrow?: string
	title?: string | null
	content?: Record<string, unknown> | null
	cards: CardsOpenCard[]
	primaryCta?: CardsOpenCta
	secondaryCta?: CardsOpenCta
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
}

export function CardsOpenSection({
	eyebrow,
	title,
	content,
	cards,
	primaryCta,
	secondaryCta,
	background = 'default'
}: CardsOpenSectionProps) {
	const hasIntro = title || content || primaryCta || secondaryCta

	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='xl'>
					{hasIntro && (
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
								<div key={card.id ?? index} className='flex flex-col gap-4'>
									{card.image?.url && (
										<div className='aspect-4/3 overflow-hidden rounded-xl'>
											{/* biome-ignore lint/performance/noImgElement: CMS URL */}
											<img
												src={card.image.url}
												alt={card.image.alt ?? ''}
												className='h-full w-full object-cover'
											/>
										</div>
									)}
									<Stack gap='sm'>
										<Heading headingLevel='h3' size='sm'>
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
										{card.link && card.linkLabel && (
											<Link
												href={card.link}
												className='font-medium text-primary text-sm hover:underline'
											>
												{card.linkLabel}
											</Link>
										)}
									</Stack>
								</div>
							))}
						</Grid>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
