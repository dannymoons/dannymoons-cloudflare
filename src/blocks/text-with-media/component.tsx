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
import type { TextWithMediaBlock as TextWithMediaBlockType } from '@/payload-types'

type ColSpan = Parameters<typeof Column>[0]['spanMd']

export function TextWithMediaBlock({
	eyebrow,
	title,
	content,
	image,
	imageWidth = '7',
	imagePosition = 'right',
	buttons,
	backgroundColor,
	verticalAlign,
	locale
}: TextWithMediaBlockType & { locale?: string }) {
	const imgSpan = Number(imageWidth ?? 7) as ColSpan
	const textSpan = (12 - Number(imageWidth ?? 7)) as ColSpan
	const media = typeof image === 'object' ? image : null
	console.log(verticalAlign)
	const textCol = (
		<Stack gap='md'>
			<Stack gap='sm'>
				{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
				{title && (
					<Heading headingLevel='h2' size='md'>
						{title}
					</Heading>
				)}
			</Stack>
			{content != null && (
				<RichTextBasic
					data={
						content as unknown as Parameters<typeof RichTextBasic>[0]['data']
					}
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
		</Stack>
	)

	return (
		<Section spacing='lg' background={backgroundColor ?? undefined}>
			<Container>
				<Grid cols={12} gap='xl' verticalAlign={verticalAlign}>
					<Column span={12} spanMd={textSpan}>
						{textCol}
					</Column>
					{media && (
						<Column
							span={12}
							spanMd={imgSpan}
							className={imagePosition === 'left' ? 'order-first' : undefined}
						>
							<Image {...media} className='lg:aspect-landscape' />
						</Column>
					)}
				</Grid>
			</Container>
		</Section>
	)
}
