import { cn } from '@/utilities/ui'
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

export interface TextImageCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface TextImageSectionProps {
	eyebrow?: string
	title?: string | null
	content?: Record<string, unknown> | null
	image?: { url?: string | null; alt?: string | null } | null
	primaryCta?: TextImageCta
	secondaryCta?: TextImageCta
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
	backgroundImage?: { url?: string | null; alt?: string | null } | null
	overlayOpacity?: number
}

export function TextImageSection({
	eyebrow,
	title,
	content,
	image,
	primaryCta,
	secondaryCta,
	background = 'default',
	backgroundImage,
	overlayOpacity = 50
}: TextImageSectionProps) {
	const hasBgImage = Boolean(backgroundImage?.url)

	return (
		<Section
			spacing='lg'
			background={hasBgImage ? 'transparent' : background}
			className={cn(hasBgImage && 'relative overflow-hidden')}
		>
			{hasBgImage && backgroundImage?.url && (
				<>
					{/* biome-ignore lint/performance/noImgElement: CMS URL */}
					<img
						src={backgroundImage.url}
						alt={backgroundImage.alt ?? ''}
						className='absolute inset-0 h-full w-full object-cover'
						aria-hidden='true'
					/>
					<div
						className='absolute inset-0 bg-black'
						style={{ opacity: overlayOpacity / 100 }}
					/>
				</>
			)}

			<Container className='relative z-10'>
				<Grid cols={12} gap='xl' className='items-start'>
					<Column span={12} spanXl={4}>
						<Stack gap='lg'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							{title && (
								<Heading
									headingLevel='h2'
									size='md'
									color={hasBgImage ? 'white' : 'default'}
								>
									{title}
								</Heading>
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

					<Column span={12} spanXl={8}>
						<Stack gap='xl'>
							{content && (
								<div className={cn(hasBgImage && 'text-white/80')}>
									<RichTextBasic
										data={
											content as unknown as Parameters<
												typeof RichTextBasic
											>[0]['data']
										}
										textSize='lg'
									/>
								</div>
							)}
							{image?.url && (
								<div className='relative aspect-16/10 w-full overflow-hidden rounded-xl'>
									{/* biome-ignore lint/performance/noImgElement: CMS URL */}
									<img
										src={image.url}
										alt={image.alt ?? ''}
										className='absolute inset-0 h-full w-full object-cover'
									/>
								</div>
							)}
						</Stack>
					</Column>
				</Grid>
			</Container>
		</Section>
	)
}
