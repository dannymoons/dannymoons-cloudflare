import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { DynamicIcon } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { ImageFeaturesBlock as ImageFeaturesBlockType } from '@/payload-types'

export function ImageFeaturesBlock({
	eyebrow,
	title,
	content,
	image,
	features,
	buttons,
	backgroundColor,
	locale,
}: ImageFeaturesBlockType & { locale?: string }) {
	const media = typeof image === 'object' ? image : null

	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Grid cols={12} gap='xl' className='items-start'>
					<Column span={12} spanLg={6} spanXl={7}>
						{media && (
							<Image {...media} className='max-h-[600px] rounded-xl' />
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

							{features && features.length > 0 && (
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
					</Column>
				</Grid>
			</Container>
		</Section>
	)
}
