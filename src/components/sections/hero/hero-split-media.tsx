import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Flex } from '@/components/layout/flex'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { SplitSection } from '@/components/sections/split-section'
import { Button } from '@/components/ui/button'
import type { HeroCompactBlock } from '@/payload-types'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

export interface HeroSplitMediaCta {
	label: string
	href: string
	variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'white' | 'link'
}

export interface HeroSplitMediaProps {
	eyebrow?: string
	heading: string
	content?: HeroCompactBlock['content'] | string | null
	primaryCta?: HeroSplitMediaCta
	secondaryCta?: HeroSplitMediaCta
	image?: StaticImageData | string
	imageAlt?: string
	imagePosition?: 'right' | 'left'
}

export function HeroSplitMedia({
	eyebrow,
	heading,
	content,
	primaryCta,
	secondaryCta,
	image,
	imageAlt = '',
	imagePosition = 'right'
}: HeroSplitMediaProps) {
	const textStack = (
		<Stack gap='lg'>
			{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
			<Heading headingLevel='h1' size='xl'>
				{heading}
			</Heading>
			{content != null && content !== '' && (
				typeof content === 'string' ? (
					<p className='text-lg text-muted-foreground'>{content}</p>
				) : (
					<RichTextBasic data={content} textSize='lg' />
				)
			)}
			{(primaryCta || secondaryCta) && (
				<Flex gap='sm' wrap>
					{primaryCta && (
						<Button size='lg' variant={primaryCta.variant ?? 'primary'} asChild>
							<Link href={primaryCta.href}>{primaryCta.label}</Link>
						</Button>
					)}
					{secondaryCta && (
						<Button
							size='lg'
							variant={secondaryCta.variant ?? 'secondary'}
							asChild
						>
							<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
						</Button>
					)}
				</Flex>
			)}
		</Stack>
	)

	if (!image) {
		return (
			<Section spacing='xl' className='flex items-center overflow-hidden'>
				<Container>
					<div className='max-w-2xl'>{textStack}</div>
				</Container>
			</Section>
		)
	}

	const imageBlock = (
		<div className='overflow-hidden rounded-xl'>
			{typeof image === 'string' ? (
				// biome-ignore lint/performance/noImgElement: string src (CMS / preview URLs)
				<img
					src={image}
					alt={imageAlt}
					className='h-full w-full object-cover'
				/>
			) : (
				<Image
					src={image}
					alt={imageAlt}
					className='h-full w-full object-cover'
				/>
			)}
		</div>
	)

	return (
		<SplitSection
			left={textStack}
			right={imageBlock}
			imagePosition={imagePosition}
			spacing='xl'
			className='flex items-center overflow-hidden'
		/>
	)
}
