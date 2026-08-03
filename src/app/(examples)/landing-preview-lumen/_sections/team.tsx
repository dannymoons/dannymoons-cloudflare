const people = [
	{ name: 'Aria Chen', role: 'Creative director', seed: 'lu-t1' },
	{ name: 'Marco Reyes', role: 'XR lead', seed: 'lu-t2' },
	{ name: 'Sienna Okoye', role: 'Spatial designer', seed: 'lu-t3' },
	{ name: 'Felix Lund', role: 'Narrative architect', seed: 'lu-t4' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section id='team' className='px-5 py-20 sm:px-8 sm:py-28'>
			<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
				The studio
			</h2>
			<p className='lu-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
				Four disciplines, one iridescent vision — the people who build worlds
				you can walk into.
			</p>
			<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
				{people.map(p => (
					<figure key={p.seed} className='lu-reveal group'>
						<div className='relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--line)]'>
							{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
							<img
								src={`https://picsum.photos/seed/${p.seed}/500/660`}
								alt={p.name}
								className='h-full w-full object-cover transition-all duration-500 group-hover:scale-105'
							/>
							<div
								aria-hidden
								className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [background:linear-gradient(180deg,transparent_50%,color-mix(in_oklch,var(--violet)_40%,transparent))] group-hover:opacity-100'
							/>
						</div>
						<figcaption className='mt-4'>
							<p className='font-[family-name:var(--font-display)] font-semibold text-lg'>
								{p.name}
							</p>
							<p className='text-sm [color:var(--mute)]'>{p.role}</p>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
