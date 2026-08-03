/** Future Payload mapping: mediaText. */
export function StudioSplit() {
	return (
		<section
			id='studio'
			className='grid grid-cols-1 gap-10 px-6 pt-24 sm:px-10 sm:pt-32 lg:grid-cols-12 lg:gap-16'
		>
			<div className='lg:col-span-5'>
				<div className='mrd-reveal aspect-[3/4] overflow-hidden bg-[var(--line)]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/meridian-studio/900/1200'
						alt='Studio interior'
						className='h-full w-full object-cover grayscale'
					/>
				</div>
			</div>
			<div className='flex flex-col justify-center lg:col-span-7'>
				<span className='mrd-reveal mb-6 text-[var(--clay)] text-xs uppercase tracking-[0.25em]'>
					The studio
				</span>
				<p className='mrd-reveal max-w-2xl font-[family-name:var(--font-display)] font-light text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.25] tracking-[-0.01em]'>
					A small team of architects, makers and researchers. We take on a
					handful of projects each year so that every one receives the attention
					it deserves.
				</p>
				<p className='mrd-reveal mt-8 max-w-md text-[var(--ink-soft)] leading-relaxed'>
					Founded in Lisbon and now working from two studios, we collaborate
					with craftspeople who share our patience for getting the quiet details
					right.
				</p>
				<div className='mrd-reveal mt-10 flex flex-wrap gap-x-12 gap-y-6 border-[var(--line)] border-t pt-8 font-[family-name:var(--font-display)]'>
					<div>
						<div className='text-3xl'>12</div>
						<div className='mt-1 text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
							People
						</div>
					</div>
					<div>
						<div className='text-3xl'>2</div>
						<div className='mt-1 text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
							Studios
						</div>
					</div>
					<div>
						<div className='text-3xl'>14</div>
						<div className='mt-1 text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
							Countries
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
