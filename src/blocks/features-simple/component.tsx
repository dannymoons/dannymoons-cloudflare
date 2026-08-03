import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import type { IconName } from '@/components/content/icon'
import { IconBox } from '@/components/display/icon-box'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import type { FeaturesSimpleBlock as FeaturesSimpleBlockType } from '@/payload-types'

export function FeaturesSimpleBlock({
	eyebrow,
	title,
	content,
	layout,
	cols,
	items,
	backgroundColor
}: FeaturesSimpleBlockType) {
	const isStacked = (layout ?? 'stacked') === 'stacked'

	if (isStacked) {
		return (
			<Section spacing='lg' background={backgroundColor ?? undefined}>
				<Container>
					<Stack gap='sm' align='start' className='mb-12 max-w-xl'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg' className='text-left'>
								{title}
							</Heading>
						)}
						{content != null && (
							<RichTextBasic
								data={content as unknown as Parameters<typeof RichTextBasic>[0]['data']}
								textSize='md'
							/>
						)}
					</Stack>
					<Grid cols={(Number(cols ?? '3') as 2 | 3 | 4) || 3} gap='md'>
						{items?.map(item => (
							<IconBox
								key={item.id ?? item.heading}
								icon={item.icon as IconName}
								heading={item.heading}
								text={item.text}
								link={item.link ?? undefined}
							/>
						))}
					</Grid>
				</Container>
			</Section>
		)
	}

	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					<Column spanMd={5}>
						<Stack gap='sm'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							{title && (
								<Heading headingLevel='h2' size='lg' className='text-left'>
									{title}
								</Heading>
							)}
							{content != null && (
								<RichTextBasic
									data={content as unknown as Parameters<typeof RichTextBasic>[0]['data']}
									textSize='md'
								/>
							)}
						</Stack>
					</Column>
					<Column spanMd={7}>
						<Grid cols={2} gap='md'>
							{items?.map(item => (
								<IconBox
									key={item.id ?? item.heading}
									icon={item.icon as IconName}
									heading={item.heading}
									text={item.text}
									link={item.link ?? undefined}
								/>
							))}
						</Grid>
					</Column>
				</Grid>
			</Container>
		</Section>
	)
}
