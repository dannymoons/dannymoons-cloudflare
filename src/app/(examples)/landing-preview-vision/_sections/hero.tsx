import { ChevronRight } from 'lucide-react'

/** Future Payload mapping: heroProduct. */
export function Hero() {
	return (
		<section className='px-6 pt-16 pb-0 text-center sm:pt-24'>
			<p className='font-medium text-[var(--accent)] text-sm tracking-wide'>
				New
			</p>
			<h1 className='mt-2 font-bold text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-[-0.04em]'>
				Aura
			</h1>
			<p className='mt-3 text-[clamp(1.25rem,3vw,2rem)] tracking-tight [color:var(--ink)]'>
				The audio you wear.
			</p>
			<div className='mt-6 flex items-center justify-center gap-6 text-[var(--accent)] text-base'>
				<a href='#buy' className='inline-flex items-center hover:underline'>
					Buy <ChevronRight className='h-4 w-4' />
				</a>
				<a href='#sound' className='inline-flex items-center hover:underline'>
					Learn more <ChevronRight className='h-4 w-4' />
				</a>
			</div>
			<p className='mt-3 text-[var(--mute)] text-sm'>
				From €399 or €33.25/mo. for 12 mo.
			</p>

			<div className='apl-zoom mx-auto mt-12 max-w-4xl'>
				<div className='aspect-[16/10] overflow-hidden rounded-[2rem] bg-[var(--line)]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/aura-hero/1600/1000'
						alt='Aura headphones'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
