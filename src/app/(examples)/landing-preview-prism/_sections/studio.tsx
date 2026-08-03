const specs = [
	'Neumann U87 · vintage',
	'Ampex ATR-102 tape',
	'API 1608 console',
	'Live room · 80m²',
	'Analog summing · no plugins',
	'Artist-owned sessions'
]

/** Future Payload mapping: studioFeature. */
export function Studio() {
	return (
		<section
			id='studio'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--lime)_15%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 pr-reveal lg:grid-cols-2 lg:items-center'>
					<div className='aspect-[4/3] overflow-hidden border-4 border-[var(--ink)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/prism-studio/720/540'
							alt='PRISM analog recording studio'
							className='h-full w-full object-cover'
						/>
					</div>
					<div>
						<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
							Studio
						</p>
						<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none'>
							PRISM Room
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--mute)]'>
							Our Rotterdam studio is tape-first and plugin-free. Roster artists
							record here. Outside bands book by the day — if we like your demo.
						</p>
						<ul className='mt-8 space-y-3'>
							{specs.map(s => (
								<li
									key={s}
									className='flex items-center gap-3 font-semibold text-sm uppercase'
								>
									<span
										aria-hidden
										className='h-2 w-2 shrink-0 [background:var(--magenta)]'
									/>
									{s}
								</li>
							))}
						</ul>
						<a
							href='#contact'
							className='mt-8 inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-7 font-bold uppercase [background:var(--ink)] [color:var(--paper)]'
						>
							Book a session
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
