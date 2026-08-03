const cases = [
	{
		client: 'Ocean State Brewery',
		headline: 'Rebrand drove 40% draft sales shift to refillable kegs',
		metrics: ['40% keg shift', '£1.2M saved packaging', 'B Corp pending'],
		seed: 'patchwork-case-1'
	},
	{
		client: 'Urban Harvest',
		headline: 'City-wide activation converted 22k households to composting',
		metrics: ['22k households', '890 tCO₂e avoided', 'D&AD Pencil'],
		seed: 'patchwork-case-2'
	}
]

/** Future Payload mapping: caseStudyGrid. */
export function CaseStudies() {
	return (
		<section
			id='case-studies'
			className='px-5 py-20 [background:var(--yellow)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--ink)]'>
						Case studies
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight [color:var(--ink)]'>
						Deep dives
					</h2>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					{cases.map(c => (
						<article
							key={c.client}
							className='pw-reveal border-2 border-[var(--ink)] [background:var(--cream)]'
						>
							<div className='aspect-[16/9] overflow-hidden border-[var(--ink)] border-b-2'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${c.seed}/800/450`}
									alt={c.client}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='p-6'>
								<h3 className='font-[family-name:var(--font-display)] text-2xl uppercase'>
									{c.client}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{c.headline}
								</p>
								<ul className='mt-4 flex flex-wrap gap-2'>
									{c.metrics.map(m => (
										<li
											key={m}
											className='border border-[var(--ink)] px-3 py-1 font-medium text-xs uppercase [background:var(--pink)]'
										>
											{m}
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
