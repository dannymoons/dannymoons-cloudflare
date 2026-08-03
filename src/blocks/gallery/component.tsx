import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Media } from '@/components/media'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { Media as MediaType } from '@/payload-types'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type GalleryImage = {
	image?: MediaType | string | null
	caption?: string | null
	id?: string | null
}

type Props = {
	eyebrow?: string | null
	title?: string | null
	columns?: '2' | '3' | '4' | null
	images?: GalleryImage[] | null
	backgroundColor?: Bg | null
}

export function GalleryBlock({ eyebrow, title, columns, images, backgroundColor }: Props) {
	const cols = Number(columns ?? '3') as 2 | 3 | 4

	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container>
				{(eyebrow || title) && (
					<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<Grid cols={cols} gap='md'>
					{(images ?? []).map((item, i) => {
						const media = typeof item.image === 'object' ? item.image : null
						if (!media) return null
						return (
							<figure key={item.id ?? i} className='overflow-hidden rounded-xl'>
								<Media
									resource={media}
									htmlElement={null}
									imgClassName='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
								/>
								{item.caption && (
									<figcaption className='mt-2 text-center text-muted-foreground text-xs'>
										{item.caption}
									</figcaption>
								)}
							</figure>
						)
					})}
				</Grid>
			</Container>
		</Section>
	)
}
