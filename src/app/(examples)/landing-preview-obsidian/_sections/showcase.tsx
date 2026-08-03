'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
	{ n: '01', title: 'Nebula', type: 'Brand film · CGI', seed: 'obs1' },
	{ n: '02', title: 'Form / Void', type: 'Real-time 3D', seed: 'obs2' },
	{ n: '03', title: 'Halcyon', type: 'Immersive web', seed: 'obs3' },
	{ n: '04', title: 'Aphelion', type: 'Art direction', seed: 'obs4' },
	{ n: '05', title: 'Umbra', type: 'Title sequence', seed: 'obs5' }
]

/** Future Payload mapping: carouselShowcase (embla). */
export function Showcase() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	return (
		<section id='work' className='py-16 sm:py-24'>
			<div className='mb-10 flex items-end justify-between px-5 sm:px-8'>
				<h2 className='font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.02em]'>
					Selected work
				</h2>
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						aria-label='Previous'
						className='grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--paper)] hover:[color:var(--ink)]'
					>
						<ArrowLeft className='h-5 w-5' />
					</button>
					<button
						type='button'
						onClick={scrollNext}
						aria-label='Next'
						className='grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--paper)] hover:[color:var(--ink)]'
					>
						<ArrowRight className='h-5 w-5' />
					</button>
				</div>
			</div>

			<div className='overflow-hidden px-5 sm:px-8' ref={emblaRef}>
				<div className='flex gap-5'>
					{projects.map(p => (
						<a
							key={p.seed}
							href='#work'
							className='group min-w-0 shrink-0 basis-[88%] sm:basis-[62%] lg:basis-[48%]'
						>
							<div className='relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--line)]'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/1200/750`}
									alt={p.title}
									className='h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0'
								/>
								<span className='absolute top-4 left-4 font-[family-name:var(--font-mono)] text-xs [color:var(--amber)]'>
									{p.n}
								</span>
							</div>
							<div className='mt-4 flex items-baseline justify-between'>
								<span className='font-bold text-2xl tracking-tight'>
									{p.title}
								</span>
								<span className='font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs uppercase'>
									{p.type}
								</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
