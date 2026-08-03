import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import type { IconName } from '@/components/content/icon'
import { FeatureBox } from '@/components/cards/feature-box'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { FeatureBoxesBlock as FeatureBoxesBlockType } from '@/payload-types'

export function FeatureBoxesBlock({
	eyebrow,
	title,
	content,
	cols,
	items,
	backgroundColor
}: FeatureBoxesBlockType) {
	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Stack gap='sm' className='mb-12 max-w-3xl'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					{title && (
						<Heading headingLevel='h2' size='lg'>
							{title}
						</Heading>
					)}
					{content != null && (
						<RichTextBasic
							data={
								content as unknown as Parameters<
									typeof RichTextBasic
								>[0]['data']
							}
							textSize='md'
						/>
					)}
				</Stack>
				<Grid cols={(Number(cols ?? '3') as 2 | 3) || 3} gap='md'>
					{items?.map(item => (
						<FeatureBox
							key={item.id ?? item.heading}
							icon={item.icon as IconName}
							heading={item.heading}
							subtitle={item.subtitle ?? undefined}
							description={item.description}
							tags={item.tags?.map(t => t.tag) ?? []}
							link={item.link ?? undefined}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	)
}
