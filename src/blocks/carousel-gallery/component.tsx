'use client'

import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Media } from '@/components/media'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import type { Media as MediaType } from '@/payload-types'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Slide = {
	image?: MediaType | string | null
	caption?: string | null
	id?: string | null
}

type Props = {
	eyebrow?: string | null
	title?: string | null
	images?: Slide[] | null
	variant?: ('cards' | 'peek') | null
	backgroundColor?: Bg | null
}

export function CarouselGalleryBlock({ eyebrow, title, images, variant, backgroundColor }: Props) {
	const slides = (images ?? []).filter(
		(slide): slide is Slide & { image: MediaType } => typeof slide.image === 'object' && slide.image !== null
	)
	const isPeek = variant === 'peek'

	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container>
				{(eyebrow || title) && (
					<Stack
						gap='sm'
						align={isPeek ? 'start' : 'center'}
						className={isPeek ? 'mb-10 max-w-3xl' : 'mx-auto mb-12 max-w-xl text-center'}
					>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<Carousel opts={{ align: 'start', loop: true }} className='w-full'>
					<CarouselContent>
						{slides.map((slide, i) => (
							<CarouselItem
								key={slide.id ?? i}
								className={isPeek ? 'basis-[85%] sm:basis-3/5 lg:basis-[46%]' : 'sm:basis-1/2 lg:basis-1/3'}
							>
								{isPeek ? (
									<figure>
										<div className='aspect-16/10 overflow-hidden rounded-3xl bg-surface'>
											<Media
												resource={slide.image}
												htmlElement={null}
												imgClassName='h-full w-full object-cover'
											/>
										</div>
										{slide.caption && (
											<figcaption className='mt-3 text-muted-foreground text-sm'>
												{slide.caption}
											</figcaption>
										)}
									</figure>
								) : (
									<figure className='overflow-hidden rounded-xl border border-border'>
										<Media
											resource={slide.image}
											htmlElement={null}
											imgClassName='aspect-[4/3] h-full w-full object-cover'
										/>
										{slide.caption && (
											<figcaption className='bg-surface px-4 py-3 text-muted-foreground text-sm'>
												{slide.caption}
											</figcaption>
										)}
									</figure>
								)}
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</Container>
		</Section>
	)
}
