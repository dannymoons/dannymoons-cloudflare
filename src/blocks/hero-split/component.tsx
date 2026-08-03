import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Container } from '@/components/layout/container'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { HeroSplitBlock as HeroSplitBlockType } from '@/payload-types'

export function HeroSplitBlock({
	eyebrow,
	title,
	content,
	buttons,
	image,
	imagePosition = 'right',
	badgeTitle,
	badgeText,
	stats,
	variant,
	backgroundColor,
	locale,
}: HeroSplitBlockType & { locale?: string }) {
	const media = typeof image === 'object' ? image : null
	const withStats = variant === 'stats'
	const statItems = stats ?? []
	const showStats = withStats && statItems.length > 0
	const showBadge = withStats && (badgeTitle || badgeText)

	return (
		<Section spacing='xl' background={backgroundColor ?? undefined} className='overflow-hidden'>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					<Column span={12} spanMd={6}>
						<Stack gap='lg'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='xl'>
							{title}
							</Heading>
							{content != null && (
								<RichTextBasic
									data={content as unknown as Parameters<typeof RichTextBasic>[0]['data']}
									textSize='lg'
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
							{showStats && (
								<dl className='mt-2 grid grid-cols-3 gap-4 border-border border-t pt-8'>
									{statItems.map((stat, i) => (
										<div key={stat.id ?? i}>
											<dt className='text-muted-foreground text-xs uppercase tracking-[0.14em]'>
												{stat.label}
											</dt>
											<dd className='mt-1 font-bold font-heading text-3xl text-primary'>
												{stat.value}
											</dd>
										</div>
									))}
								</dl>
							)}
						</Stack>
					</Column>
					{media && (
						<Column
							span={12}
							spanMd={6}
							className={imagePosition === 'left' ? 'order-first' : undefined}
						>
							<div className='relative'>
								<Image {...media} />
								{showBadge && (
									<div className='absolute right-4 bottom-4 left-4 rounded-xl border border-border bg-background/80 p-4 backdrop-blur-sm sm:right-6 sm:bottom-6 sm:left-auto sm:max-w-xs'>
										{badgeTitle && (
											<p className='font-heading font-semibold text-primary'>{badgeTitle}</p>
										)}
										{badgeText && (
											<p className='mt-1 text-muted-foreground text-sm'>{badgeText}</p>
										)}
									</div>
								)}
							</div>
						</Column>
					)}
				</Grid>
			</Container>
		</Section>
	)
}
