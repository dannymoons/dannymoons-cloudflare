/** Future Payload mapping: mediaFull. */
export function Featured() {
	return (
		<section className='px-6 sm:px-10'>
			<div className='mrd-reveal aspect-[16/8] w-full overflow-hidden bg-[var(--line)]'>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
				<img
					src='https://picsum.photos/seed/meridian-hero/1800/900'
					alt='Featured project — concrete and light'
					className='h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0'
				/>
			</div>
			<div className='mt-4 flex items-baseline justify-between text-[var(--ink-soft)] text-sm'>
				<span className='font-[family-name:var(--font-display)] text-[var(--ink)]'>
					Casa Liminal
				</span>
				<span className='uppercase tracking-widest'>Lisboa — 2025</span>
			</div>
		</section>
	)
}
