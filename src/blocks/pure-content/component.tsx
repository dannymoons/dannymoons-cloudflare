import { cn } from '@/utilities/ui'
import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { PureContentBlock as PureContentBlockType } from '@/payload-types'
import type { Media } from '@/payload-types'

export function PureContentBlock({
	eyebrow,
	title,
	content,
	textAlign,
	containerWidth,
	buttons,
	backgroundColor,
	backgroundImage,
	overlayOpacity,
	locale,
}: PureContentBlockType & { locale?: string }) {
	const bgImageObj =
		typeof backgroundImage === 'object' && backgroundImage !== null
			? (backgroundImage as Media)
			: null

	const hasBgImage = Boolean(bgImageObj?.url)
	const align = textAlign ?? 'left'
	const opacity = overlayOpacity ?? 50

	const alignClass = {
		left: 'items-start text-left',
		center: 'items-center text-center',
		right: 'items-end text-right'
	}[align]

	return (
		<Section
			spacing='lg'
			background={hasBgImage ? 'transparent' : (backgroundColor ?? undefined)}
			className={cn(hasBgImage && 'relative overflow-hidden')}
		>
			{hasBgImage && bgImageObj && (
				<>
					<Image
						{...bgImageObj}
						className='absolute inset-0 h-full rounded-none object-cover'
					/>
					<div
						className='absolute inset-0 bg-black'
						style={{ opacity: opacity / 100 }}
						aria-hidden='true'
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
					{buttons && buttons.length > 0 && (
						<Flex gap='sm' wrap>
					{buttons.map(({ button: btn, id }) => (
							<CMSLink
								key={id ?? btn.label}
								{...btn}
								locale={locale}
								appearance={btn.color ?? 'primary'}
							/>
						))}
						</Flex>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
