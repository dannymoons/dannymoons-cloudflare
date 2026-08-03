'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
	{
		title: 'Kinetic identity',
		client: 'Hyperjuice',
		seed: 'flxc1',
		color: 'var(--magenta)'
	},
	{
		title: 'Launch film',
		client: 'Nimbus OS',
		seed: 'flxc2',
		color: 'var(--cobalt)'
	},
	{
		title: 'Festival world',
		client: 'Bloom',
		seed: 'flxc3',
		color: 'var(--tangerine)'
	},
	{
		title: '3D product reveal',
		client: 'Önd',
		seed: 'flxc4',
		color: 'var(--lime)'
	},
	{
		title: 'Rebrand sprint',
		client: 'Monzo',
		seed: 'flxc5',
		color: 'var(--magenta)'
	}
]

/** Future Payload mapping: carouselShowcase (embla). */
export function Showcase() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	return (
		<section className='py-16 sm:py-24'>
			<div className='mb-8 flex items-end justify-between px-5 sm:px-8'>
				<h2 className='font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.03em]'>
					On the{' '}
					<span className='font-[family-name:var(--font-serif)] italic'>
						reel
					</span>
				</h2>
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						aria-label='Previous'
						className='grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--ink)] transition-colors hover:[background:var(--ink)] hover:[color:var(--cream)]'
					>
						<ArrowLeft className='h-5 w-5' />
					</button>
					<button
						type='button'
						onClick={scrollNext}
						aria-label='Next'
						className='grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--ink)] transition-colors hover:[background:var(--ink)] hover:[color:var(--cream)]'
					>
						<ArrowRight className='h-5 w-5' />
					</button>
				</div>
			</div>

			<div className='overflow-hidden px-5 sm:px-8' ref={emblaRef}>
				<div className='flex gap-4'>
					{slides.map(s => (
						<div
							key={s.seed}
							className='min-w-0 shrink-0 basis-[85%] sm:basis-[55%] lg:basis-[40%]'
						>
							<div className='overflow-hidden rounded-3xl border-2 border-[var(--ink)]'>
								<div className='aspect-[4/3] overflow-hidden'>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
									<img
										src={`https://picsum.photos/seed/${s.seed}/900/675`}
										alt={s.title}
										className='h-full w-full object-cover'
									/>
								</div>
								<div
									className='flex items-center justify-between px-5 py-4'
									style={{ background: s.color }}
								>
									<span className='font-extrabold text-xl [color:var(--ink)]'>
										{s.title}
									</span>
									<span className='font-[family-name:var(--font-mono)] text-xs uppercase [color:var(--ink)]'>
										{s.client}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
