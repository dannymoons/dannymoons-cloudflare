const cases = [
	{
		title: 'Global FMCG restructure',
		industry: 'Consumer goods',
		result:
			'Consolidated 14 agency carbon reports into one CSRD-ready disclosure in 8 weeks.',
		metric: '−31% emissions intensity'
	},
	{
		title: 'Financial services rebrand',
		industry: 'Banking',
		result:
			'Mapped production, OOH, and digital spend across 22 markets with vendor-level granularity.',
		metric: '100% audit pass'
	},
	{
		title: 'Tech launch campaign',
		industry: 'SaaS',
		result:
			'Real-time campaign carbon caps triggered automatic media reallocation when thresholds exceeded.',
		metric: '−24% overspend waste'
	},
	{
		title: 'Retail seasonal push',
		industry: 'Retail',
		result:
			'Integrated POS, influencer, and programmatic data for scope 3 Category 1 reporting.',
		metric: '6-day close cycle'
	}
]

/** Future Payload mapping: useCaseGrid. */
export function UseCases() {
	return (
		<section id='use-cases' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Use cases
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Built for enterprise marketing complexity.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						From global rebrands to always-on performance marketing — Measure
						scales with your org structure and agency roster.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{cases.map(c => (
						<article
							key={c.title}
							className='group me-reveal rounded-sm border border-[var(--line)] p-6 transition-colors hover:border-[color-mix(in_oklch,var(--blue)_30%,transparent)]'
						>
							<p className='text-xs uppercase tracking-[0.18em] [color:var(--blue)]'>
								{c.industry}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{c.title}
							</h3>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{c.result}
							</p>
							<p className='mt-4 font-medium text-sm [color:var(--blue)]'>
								{c.metric}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
