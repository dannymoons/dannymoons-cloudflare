'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const shots = [
	{ caption: 'On the commute', seed: 'aurag1' },
	{ caption: 'In the studio', seed: 'aurag2' },
	{ caption: 'On a run', seed: 'aurag3' },
	{ caption: 'Deep focus', seed: 'aurag4' },
	{ caption: 'Off the grid', seed: 'aurag5' }
]

/** Future Payload mapping: carouselGallery (embla). */
export function Gallery() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	return (
		<section className='py-24 sm:py-32'>
			<div className='mx-auto mb-10 flex max-w-5xl items-end justify-between px-6'>
				<h2 className='font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.03em]'>
					Made for your every day.
				</h2>
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						aria-label='Previous'
						className='grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--ink)] hover:[color:var(--ink-on-dark)]'
					>
						<ArrowLeft className='h-5 w-5' />
					</button>
					<button
						type='button'
						onClick={scrollNext}
						aria-label='Next'
						className='grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--ink)] hover:[color:var(--ink-on-dark)]'
					>
						<ArrowRight className='h-5 w-5' />
					</button>
				</div>
			</div>

			<div className='overflow-hidden' ref={emblaRef}>
				<div className='flex gap-4 px-6'>
					{shots.map(s => (
						<figure
							key={s.seed}
							className='min-w-0 shrink-0 basis-[85%] sm:basis-[60%] lg:basis-[46%]'
						>
							<div className='aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-[var(--line)]'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/1200/750`}
									alt={s.caption}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-3 text-[var(--mute)] text-sm'>
								{s.caption}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
