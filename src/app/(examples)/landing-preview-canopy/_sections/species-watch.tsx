const species = [
	{ name: 'Marsh harrier', habitat: 'Wetland', status: 'Recovering' },
	{ name: 'Wild orchid', habitat: 'Meadow', status: 'Stable' },
	{ name: 'European eel', habitat: 'River', status: 'Monitored' },
	{ name: 'Hedgehog', habitat: 'Hedgerow', status: 'Increasing' },
	{ name: 'Red kite', habitat: 'Farmland', status: 'Thriving' },
	{ name: 'Great crested newt', habitat: 'Pond', status: 'Protected' }
]

/** Future Payload mapping: speciesWatch. */
export function SpeciesWatch() {
	return (
		<section
			id='species'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--leaf)_5%,var(--sand))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='cp-reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
					<div className='max-w-xl'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--earth)]'>
							Biodiversity watch
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
							Species returning to the canopy
						</h2>
					</div>
					<div className='flex gap-8'>
						<div>
							<p className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none [color:var(--earth)]'>
								847
							</p>
							<p className='mt-1 text-sm [color:var(--mute)]'>
								Species tracked
							</p>
						</div>
						<div>
							<p className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none [color:var(--leaf)]'>
								12
							</p>
							<p className='mt-1 text-sm [color:var(--mute)]'>Habitat zones</p>
						</div>
					</div>
				</div>

				<div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{species.map(s => (
						<article
							key={s.name}
							className='cp-reveal rounded-2xl border border-[var(--line)] p-5 [background:var(--sand)]'
						>
							<div className='flex items-start justify-between gap-2'>
								<h3 className='font-[family-name:var(--font-display)] text-lg'>
									{s.name}
								</h3>
								<span className='shrink-0 rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] uppercase tracking-wider [color:var(--leaf)]'>
									{s.status}
								</span>
							</div>
							<p className='mt-2 text-sm [color:var(--mute)]'>{s.habitat}</p>
						</article>
					))}
				</div>

				<p className='cp-reveal mt-8 text-center text-sm [color:var(--mute)]'>
					Field data from 47 local chapters · Updated weekly via iNaturalist
					partnerships
				</p>
			</div>
		</section>
	)
}
