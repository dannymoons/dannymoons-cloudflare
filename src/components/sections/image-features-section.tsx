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

export interface ImageFeature {
	id?: string | null
	icon?: string | null
	title: string
	text?: string | null
}

export interface ImageFeaturesCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface ImageFeaturesSectionProps {
	eyebrow?: string
	title?: string | null
	content?: Record<string, unknown> | null
	image?: { url?: string | null; alt?: string | null } | null
	features?: ImageFeature[]
	primaryCta?: ImageFeaturesCta
	secondaryCta?: ImageFeaturesCta
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
}

export function ImageFeaturesSection({
	eyebrow,
	title,
	content,
	image,
	features = [],
	primaryCta,
	secondaryCta,
	background = 'default'
}: ImageFeaturesSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					<Column span={12} spanLg={6} spanXl={7}>
						{image?.url && (
							<div className='overflow-hidden rounded-xl'>
								{/* biome-ignore lint/performance/noImgElement: CMS URL */}
								<img
									src={image.url}
									alt={image.alt ?? ''}
									className='h-full max-h-[600px] w-full object-cover'
								/>
							</div>
						)}
					</Column>

					<Column span={12} spanLg={6} spanXl={5}>
						<Stack gap='lg' className='justify-center'>
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

							{features.length > 0 && (
								<Grid cols={2} gap='md'>
									{features.map((feature, index) => (
										<div
											key={feature.id ?? index}
											className='flex flex-col gap-2'
										>
											{feature.icon && (
												<div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary'>
													<DynamicIcon name={feature.icon} size={18} />
												</div>
											)}
											<Stack gap='xs'>
												<p className='font-semibold text-foreground text-sm'>
													{feature.title}
												</p>
												{feature.text && (
													<p className='text-muted-foreground text-sm'>
														{feature.text}
													</p>
												)}
											</Stack>
										</div>
									))}
								</Grid>
							)}

							{(primaryCta || secondaryCta) && (
								<Flex gap='sm' wrap>
									{primaryCta && (
										<Button variant={toButtonVariant(primaryCta.variant ?? 'default')} asChild>
											<Link href={primaryCta.href}>{primaryCta.label}</Link>
										</Button>
									)}
									{secondaryCta && (
										<Button variant={toButtonVariant(secondaryCta.variant ?? 'outline')} asChild>
											<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
										</Button>
									)}
								</Flex>
							)}
						</Stack>
					</Column>
				</Grid>
			</Container>
		</Section>
	)
}
