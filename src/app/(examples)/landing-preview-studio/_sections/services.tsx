const services = [
	{
		k: 'A',
		t: 'Architecture',
		d: 'Residential, cultural and adaptive reuse, from concept to completion.'
	},
	{
		k: 'B',
		t: 'Interior',
		d: 'Spatial choreography, bespoke joinery and material curation.'
	},
	{
		k: 'C',
		t: 'Research',
		d: 'Site studies, light analysis and material experiments.'
	}
]

/** Future Payload mapping: servicesColumns. */
export function Services() {
	return (
		<section id='services' className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-3'>
				{services.map(s => (
					<div
						key={s.k}
						className='mrd-reveal flex min-h-[260px] flex-col justify-between p-8 [background:var(--paper)]'
					>
						<span className='font-[family-name:var(--font-display)] text-5xl text-[var(--clay)] italic'>
							{s.k}
						</span>
						<div>
							<h3 className='font-[family-name:var(--font-display)] text-2xl tracking-tight'>
								{s.t}
							</h3>
							<p className='mt-3 text-[var(--ink-soft)] text-sm leading-relaxed'>
								{s.d}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
