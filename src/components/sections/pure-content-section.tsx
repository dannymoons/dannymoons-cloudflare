import { cn } from '@/utilities/ui'
import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Button } from '@/components/ui/button'
import { toButtonVariant } from '@/utilities/cta-variant'
import Link from 'next/link'

export interface PureContentCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface PureContentSectionProps {
	eyebrow?: string
	title?: string | null
	content?: Record<string, unknown> | null
	textAlign?: 'left' | 'center' | 'right'
	containerWidth?: 'default' | 'narrow'
	primaryCta?: PureContentCta
	secondaryCta?: PureContentCta
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
	backgroundImage?: { url?: string | null; alt?: string | null } | null
	overlayOpacity?: number
}

export function PureContentSection({
	eyebrow,
	title,
	content,
	textAlign = 'left',
	containerWidth = 'default',
	primaryCta,
	secondaryCta,
	background = 'default',
	backgroundImage,
	overlayOpacity = 50
}: PureContentSectionProps) {
	const hasBgImage = Boolean(backgroundImage?.url)

	const alignClass = {
		left: 'items-start text-left',
		center: 'items-center text-center',
		right: 'items-end text-right'
	}[textAlign]

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

			<Container
				size={containerWidth === 'narrow' ? 'narrow' : 'default'}
				className='relative z-10'
			>
				<Stack gap='lg' className={cn('items-start', alignClass)}>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					{title && (
						<Heading
							headingLevel='h2'
							size='lg'
							color={hasBgImage ? 'white' : 'default'}
						>
							{title}
						</Heading>
					)}
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
			</Container>
		</Section>
	)
}
