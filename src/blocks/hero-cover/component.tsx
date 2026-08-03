import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'
import type { HeroCoverBlock as HeroCoverBlockType } from '@/payload-types'
import { RichTextBasic } from '@/components/content/richtext'

const heightClass = {
	sm: 'min-h-[33vh]',
	md: 'min-h-[50vh]',
	lg: 'min-h-[66vh]',
	full: 'min-h-screen'
} as const

const overlayClass = {
	none: '',
	sm: 'bg-black/35',
	md: 'bg-black/50',
	lg: 'bg-black/65'
} as const

export function HeroCoverBlock({
	eyebrow,
	title,
	content,
	buttons,
	image,
	backgroundStyle = 'image',
	height = 'md',
	overlay = 'md',
	locale,
}: HeroCoverBlockType & { locale?: string }) {
	const isGradient = backgroundStyle === 'gradient'
	const media = !isGradient && typeof image === 'object' ? image : null
	const onImage = isGradient || overlay !== 'none'
	const minHeight = heightClass[height ?? 'md']

	return (
		<Section
			spacing='none'
			className={cn('relative isolate overflow-hidden py-16 md:py-24')}
		>
			{isGradient && (
				<div className={cn('absolute inset-0 z-0', minHeight)}>
					<div
						aria-hidden
						className='absolute inset-0 bg-linear-to-br from-primary via-primary/80 to-foreground'
					/>
					<div
						aria-hidden
						className='pointer-events-none absolute -top-32 -right-24 z-1 size-112 rounded-full bg-white/20 opacity-40 blur-3xl'
					/>
					<div
						aria-hidden
						className='pointer-events-none absolute -bottom-32 -left-16 z-1 size-72 rounded-full bg-white/10 opacity-30 blur-3xl'
					/>
				</div>
			)}
			{media && (
				<div className={cn('absolute inset-0 z-0', minHeight)}>
					<Image
						{...media}
						className='h-full w-full rounded-none object-cover'
						loading='eager'
					/>
					<div
						aria-hidden
						className={cn(
							'pointer-events-none absolute inset-0 z-1',
							'bg-linear-to-t from-black/75 via-black/45 to-black/25',
							overlayClass[overlay ?? 'md']
						)}
					/>
				</div>
			)}
			<div
				className={cn(
					'relative z-2 flex w-full items-end justify-start',
					minHeight
				)}
			>
				<Container>
					<Stack gap='lg' className='max-w-3xl'>
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
							{title}{' '}
						</Heading>
						{content && (
							<RichTextBasic
								data={content}
								textSize='lg'
								className={cn(
									onImage ? 'text-white/90' : 'text-muted-foreground'
								)}
							/>
						)}
						{buttons && buttons.length > 0 && (
							<Flex gap='sm' wrap>
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
				</Container>
			</div>
		</Section>
	)
}
