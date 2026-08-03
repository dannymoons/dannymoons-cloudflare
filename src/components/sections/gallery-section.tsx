import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface GalleryImage {
	src: string
	alt: string
	caption?: string
}

export interface GallerySectionProps {
	eyebrow?: string
	heading?: string
	images: GalleryImage[]
	cols?: 2 | 3 | 4
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function GallerySection({
	eyebrow,
	heading,
	images,
	cols = 3,
	background = 'transparent',
}: GallerySectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				{(eyebrow || heading) && (
					<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{heading && (
							<Heading headingLevel='h2' size='lg'>
								{heading}
							</Heading>
						)}
					</Stack>
				)}
				<Grid cols={cols} gap='md'>
					{images.map(image => (
						<figure key={image.src} className='overflow-hidden rounded-xl'>
							<img
								src={image.src}
								alt={image.alt}
								className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
							/>
							{image.caption && (
								<figcaption className='mt-2 text-center text-muted-foreground text-xs'>
									{image.caption}
								</figcaption>
							)}
						</figure>
					))}
				</Grid>
			</Container>
		</Section>
	)
}
