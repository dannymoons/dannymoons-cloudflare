import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Image } from '@/components/content/image'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Benefit } from '@/components/display/benefit'
import { Container } from '@/components/layout/container'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { UspWithMediaBlock as UspWithMediaBlockType } from '@/payload-types'

type ColSpan = Parameters<typeof Column>[0]['spanMd']

export function UspWithMediaBlock({
	eyebrow,
	title,
	content,
	benefits,
	image,
	imageWidth = '7',
	imagePosition = 'right',
	buttons,
	backgroundColor,
	uspsDisplay,
	locale
}: UspWithMediaBlockType & { locale?: string }) {
	const imgSpan = Number(imageWidth ?? 7) as ColSpan
	const textSpan = (12 - Number(imageWidth ?? 7)) as ColSpan
	const media = typeof image === 'object' ? image : null

	const textCol = (
		<Stack gap='md'>
			<div className='@container'>
				{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
				{title && (
					<Heading headingLevel='h2' size='md'>
						{title}
					</Heading>
				)}
			</div>
			{content != null && (
				<RichTextBasic
					data={
						content as unknown as Parameters<typeof RichTextBasic>[0]['data']
					}
					textSize='lg'
				/>
			)}
			{benefits.length > 0 && (
				<ul
					className={`flex ${uspsDisplay === 'list' ? 'flex-col gap-3' : 'flex-wrap gap-3'}`}
				>
					{benefits.map(benefit => (
						<Benefit
							key={benefit.text}
							text={benefit.text}
							className={`${uspsDisplay === 'list' ? '' : 'rounded-lg border border-primary p-2'}`}
						/>
					))}
				</ul>
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
				<Grid cols={12} gap='xl'>
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
