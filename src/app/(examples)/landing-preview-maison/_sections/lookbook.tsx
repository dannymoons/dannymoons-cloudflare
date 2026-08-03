'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
	{ title: 'Silhouette I', season: 'SS26', seed: 'maison-lb1' },
	{ title: 'Silhouette II', season: 'SS26', seed: 'maison-lb2' },
	{ title: 'Silhouette III', season: 'AW25', seed: 'maison-lb3' },
	{ title: 'Silhouette IV', season: 'Cruise', seed: 'maison-lb4' },
	{ title: 'Silhouette V', season: 'SS26', seed: 'maison-lb5' }
]

/** Future Payload mapping: carouselLookbook (embla). */
export function Lookbook() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	return (
		<section className='border-[var(--line)] border-t py-20 sm:py-28'>
			<div className='mb-10 flex items-end justify-between px-5 sm:px-8'>
				<div>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Lookbook
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
						Campaign stills
					</h2>
				</div>
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						aria-label='Previous slide'
						className='grid h-11 w-11 place-items-center border border-[var(--line)] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
					>
						<ArrowLeft className='h-4 w-4' />
					</button>
					<button
						type='button'
						onClick={scrollNext}
						aria-label='Next slide'
						className='grid h-11 w-11 place-items-center border border-[var(--line)] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
					>
						<ArrowRight className='h-4 w-4' />
					</button>
				</div>
			</div>

			<div className='overflow-hidden px-5 sm:px-8' ref={emblaRef}>
				<div className='flex gap-5'>
					{slides.map(slide => (
						<figure
							key={slide.seed}
							className='min-w-0 shrink-0 basis-[88%] sm:basis-[62%] lg:basis-[42%]'
						>
							<div className='aspect-[3/4] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${slide.seed}/900/1200`}
									alt={slide.title}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-4 flex items-baseline justify-between'>
								<span className='font-[family-name:var(--font-display)] text-xl'>
									{slide.title}
								</span>
								<span className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
									{slide.season}
								</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
