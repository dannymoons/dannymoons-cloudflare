'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
	{
		title: 'Prism Pavilion',
		client: 'Nike',
		type: 'Immersive launch',
		seed: 'lum1'
	},
	{
		title: 'Echo Chamber',
		client: 'Spotify',
		type: 'Spatial audio',
		seed: 'lum2'
	},
	{
		title: 'Velocity Hall',
		client: 'BMW',
		type: 'XR showroom',
		seed: 'lum3'
	},
	{
		title: 'Liminal',
		client: 'Aesop',
		type: 'Brand installation',
		seed: 'lum4'
	},
	{
		title: 'Afterglow',
		client: 'Moncler',
		type: 'Narrative film',
		seed: 'lum5'
	}
]

/** Future Payload mapping: carouselShowcase (embla). */
export function Showcase() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

	return (
		<section id='work' className='py-16 sm:py-24'>
			<div className='mb-10 flex items-end justify-between px-5 sm:px-8'>
				<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
					Selected work
				</h2>
				<div className='flex gap-2'>
					<button
						type='button'
						onClick={scrollPrev}
						aria-label='Previous'
						className='grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--panel)] hover:[color:var(--cyan)]'
					>
						<ArrowLeft className='h-5 w-5' />
					</button>
					<button
						type='button'
						onClick={scrollNext}
						aria-label='Next'
						className='grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] transition-colors hover:[background:var(--panel)] hover:[color:var(--cyan)]'
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
									className='h-full w-full object-cover transition-all duration-700 group-hover:scale-105'
								/>
								<span className='absolute top-4 left-4 rounded-full border border-[var(--line)] px-3 py-1 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest backdrop-blur-md [background:color-mix(in_oklch,var(--void)_60%,transparent)]'>
									Client
								</span>
							</div>
							<div className='mt-4 flex items-baseline justify-between gap-4'>
								<div>
									<span className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
										{p.title}
									</span>
									<span className='mt-1 block text-sm [color:var(--mute)]'>
										{p.type}
									</span>
								</div>
								<span
									className='shrink-0 bg-clip-text font-[family-name:var(--font-display)] text-sm text-transparent uppercase tracking-widest [-webkit-text-fill-color:transparent]'
									style={{
										backgroundImage:
											'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
									}}
								>
									{p.client}
								</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
