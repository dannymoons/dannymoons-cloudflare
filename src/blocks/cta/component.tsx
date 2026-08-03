import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { cn } from '@/utilities/ui'
import type { CtaBlock as CtaBlockType } from '@/payload-types'

export function CtaBlock({
	eyebrow,
	title,
	content,
	image,
	buttons,
	variant = 'centered',
	backgroundColor,
	padding,
	locale
}: CtaBlockType & { locale?: string }) {
	const media = typeof image === 'object' ? image : null

	const inner = (
		<Stack gap='md' align='center' className='text-center'>
			{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
			{title && (
				<Heading headingLevel='h2' size='lg' color='white'>
					{title}
				</Heading>
			)}
			{content != null && (
				<RichTextBasic
					data={
						content as unknown as Parameters<typeof RichTextBasic>[0]['data']
					}
					textSize='md'
					className='max-w-2xl text-background'
				/>
			)}
			{buttons && buttons.length > 0 && (
				<Flex gap='sm' wrap justify='center'>
					{buttons.map(({ button: btn, id }) => (
						<CMSLink
							key={id ?? btn.label}
							{...btn}
							locale={locale}
							appearance={btn.color ?? 'primary'}
							size='lg'
						/>
					))}
				</Flex>
			)}
		</Stack>
	)

	if (variant === 'card') {
		const pt = padding?.paddingTop !== false
		const pb = padding?.paddingBottom !== false

		return (
			<Section
				spacing='none'
				background='transparent'
				className={cn(
					'relative overflow-hidden',
					pt && 'pt-12 md:pt-24',
					pb && 'pb-12 md:pb-24',
				)}
			>
				<Container>
					<div className='relative overflow-hidden rounded-2xl border border-border bg-accent p-10 md:p-16'>
						{media && (
							<div className='absolute inset-0'>
								<Image {...media} className='size-full object-cover' />
								<div className='absolute inset-0 bg-black/50' />
							</div>
						)}
						<div className='relative z-10'>{inner}</div>
					</div>
				</Container>
			</Section>
		)
	}

	return (
		<Section
			spacing='lg'
			background={backgroundColor ?? undefined}
			className='relative overflow-hidden'
		>
			{media && (
				<div className='absolute inset-0'>
					<Image {...media} className='size-full object-cover' />
					<div className='absolute inset-0 bg-black/50' />
				</div>
			)}
			<Container className='relative z-10'>{inner}</Container>
		</Section>
	)
}
