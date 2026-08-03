const finishes = [
	{ name: 'Midnight', swatch: 'oklch(0.22 0.02 270)' },
	{ name: 'Silver', swatch: 'oklch(0.85 0.005 270)' },
	{ name: 'Sky', swatch: 'oklch(0.78 0.08 240)' },
	{ name: 'Sage', swatch: 'oklch(0.8 0.06 150)' },
	{ name: 'Blush', swatch: 'oklch(0.82 0.07 20)' }
]

/** Future Payload mapping: colorPicker. */
export function Colors() {
	return (
		<section className='border-[var(--line)] border-t px-6 py-24 text-center sm:py-32'>
			<h2 className='apl-reveal font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.03em]'>
				Five finishes. Pick your mood.
			</h2>
			<div className='apl-zoom mx-auto mt-12 max-w-md'>
				<div className='aspect-square overflow-hidden rounded-[2.5rem] bg-[var(--line)]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/aura-color/900/900'
						alt='Aura color options'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
			<div className='mt-10 flex items-center justify-center gap-4'>
				{finishes.map(f => (
					<button
						key={f.name}
						type='button'
						title={f.name}
						className='h-9 w-9 rounded-full border border-[var(--line)] ring-offset-2 ring-offset-[var(--paper)] transition-all hover:ring-2 hover:ring-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]'
						style={{ background: f.swatch }}
					>
						<span className='sr-only'>{f.name}</span>
					</button>
				))}
			</div>
		</section>
	)
}
