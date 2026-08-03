import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { Button } from '@/components/ui/button'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/utilities/ui'

export interface HeroCoverCta {
	label: string
	href: string
	variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'white' | 'link'
}

/** Vertical × horizontal alignment of the text block over the image */
export type HeroCoverContentPosition =
	| 'center-center'
	| 'left-center'
	| 'left-bottom'

/** `full-bleed` = edge-to-edge image; `container` = image + overlay inside a rounded, max-width frame */
export type HeroCoverVariant = 'full-bleed' | 'container'

export interface HeroCoverProps {
	eyebrow?: string
	heading: string
	subheading?: string
	primaryCta?: HeroCoverCta
	secondaryCta?: HeroCoverCta
	image: StaticImageData | string
	imageAlt?: string
	variant?: HeroCoverVariant
	height: 'sm' | 'md' | 'lg' | 'full'
	contentPosition?: HeroCoverContentPosition
	/** Scrim over the photo for text contrast */
	overlay?: 'none' | 'sm' | 'md' | 'lg'
}

const overlayClass: Record<NonNullable<HeroCoverProps['overlay']>, string> = {
	none: '',
	sm: 'bg-black/35',
	md: 'bg-black/50',
	lg: 'bg-black/65'
}

function HeroCoverMedia({
	image,
	imageAlt,
	className
}: {
	image: StaticImageData | string
	imageAlt: string
	className?: string
}) {
	if (typeof image === 'string') {
		return (
			<img
				src={image}
				alt={imageAlt}
				className={cn('h-full w-full object-cover', className)}
			/>
		)
	}
	return (
		<Image
			src={image}
			alt={imageAlt}
			className={cn('h-full w-full object-cover', className)}
			priority
			sizes='100vw'
		/>
	)
}

export function HeroCover({
	eyebrow,
	heading,
	subheading,
	primaryCta,
	secondaryCta,
	image,
	imageAlt = '',
	variant = 'full-bleed',
	contentPosition = 'left-bottom',
	height = 'md',
	overlay = 'md'
}: HeroCoverProps) {
	const onImage = overlay !== 'none'

	/** Centered cover = wide measure for display type; left-aligned = readable column */
	const stackMeasure =
		contentPosition === 'center-center'
			? 'w-full max-w-5xl mx-auto'
			: 'w-full max-w-2xl'

	const content = (
		<Stack
			gap='lg'
			align={contentPosition === 'center-center' ? 'center' : 'start'}
			className={cn(
				stackMeasure,
				contentPosition === 'center-center' && 'text-center'
			)}
		>
			{eyebrow && (
				<Eyebrow
					className={
						onImage
							? 'border-white/35 bg-white/15 text-white hover:bg-white/20'
							: undefined
					}
				>
					{eyebrow}
				</Eyebrow>
			)}
			<Heading
				headingLevel='h1'
				size='xl'
				color={onImage ? 'white' : 'foreground'}
			>
				{heading}
			</Heading>
			{subheading && (
				<Paragraph
					size='lg'
					marginTop='none'
					className={cn(
						onImage ? 'text-white/90' : 'text-muted-foreground',
						contentPosition === 'center-center' &&
							'mx-auto max-w-prose text-pretty'
					)}
				>
					{subheading}
				</Paragraph>
			)}
			{(primaryCta || secondaryCta) && (
				<Flex
					gap='sm'
					wrap
					align={contentPosition === 'center-center' ? 'start' : 'center'}
					justify={contentPosition === 'center-center' ? 'center' : 'start'}
				>
					{primaryCta && (
						<Button variant={primaryCta.variant ?? 'primary'} asChild>
							<Link href={primaryCta.href}>{primaryCta.label}</Link>
						</Button>
					)}
					{secondaryCta && (
						<Button variant={secondaryCta.variant ?? 'secondary'} asChild>
							<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
						</Button>
					)}
				</Flex>
			)}
		</Stack>
	)

	const overlayLayer = (
		<div
			aria-hidden
			className={cn(
				'pointer-events-none absolute inset-0 z-[1]',
				contentPosition === 'left-bottom' && overlay !== 'none'
					? 'bg-gradient-to-t from-black/75 via-black/45 to-black/25'
					: overlayClass[overlay]
			)}
		/>
	)

	const heightClass: Record<HeroCoverProps['height'], string> = {
		sm: 'min-h-[33vh]',
		md: 'min-h-[50vh]',
		lg: 'min-h-[66vh]',
		full: 'min-h-screen'
	}

	const minHeight = heightClass[height]

	const positionShell = cn(
		'relative z-[2] flex w-full',
		minHeight,
		contentPosition === 'center-center' && 'items-center justify-center',
		contentPosition === 'left-center' && 'items-center justify-start',
		contentPosition === 'left-bottom' && 'items-end justify-start'
	)

	if (variant === 'container') {
		return (
			<Section spacing='lg' className='relative isolate'>
				<Container>
					<div
						className={cn(
							'relative isolate overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/30',
							minHeight
						)}
					>
						<div className='absolute inset-0 z-0'>
							<HeroCoverMedia image={image} imageAlt={imageAlt} />
							{overlayLayer}
						</div>
						<div className={positionShell}>
							<div
								className={cn(
									'w-full px-6 py-12 md:px-10 md:py-16',
									contentPosition === 'center-center' && 'flex justify-center'
								)}
							>
								{content}
							</div>
						</div>
					</div>
				</Container>
			</Section>
		)
	}

	return (
		<Section
			spacing='none'
			className={cn('relative isolate overflow-hidden py-16 md:py-24')}
		>
			<div className={cn('absolute inset-0 z-0', minHeight)}>
				<HeroCoverMedia image={image} imageAlt={imageAlt} />
				{overlayLayer}
			</div>
			<div className={positionShell}>
				<Container
					className={cn(
						'flex w-full flex-1',
						contentPosition === 'center-center' && 'justify-center',
						contentPosition !== 'center-center' && 'justify-start'
					)}
				>
					{content}
				</Container>
			</div>
		</Section>
	)
}
