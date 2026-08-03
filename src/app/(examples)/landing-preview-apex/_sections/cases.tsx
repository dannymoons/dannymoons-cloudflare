const cases = [
	{
		outcome: '£480M recovered',
		matter: 'Energy consortium breach',
		jurisdiction: 'LCIA arbitration · 2025',
		summary:
			'Defended a European infrastructure fund against warranty claims arising from a terminated offshore wind acquisition.'
	},
	{
		outcome: 'Dismissed with costs',
		matter: 'Director disqualification',
		jurisdiction: 'High Court · 2024',
		summary:
			'Obtained summary judgment for a fintech founder facing SFO-linked disqualification proceedings.'
	},
	{
		outcome: 'Regulatory settlement',
		matter: 'Market conduct review',
		jurisdiction: 'FCA · 2024',
		summary:
			'Negotiated a non-penal outcome for a listed REIT following an FCA investigation into disclosure timing.'
	}
]

/** Future Payload mapping: caseStudyGrid. */
export function Cases() {
	return (
		<section
			id='cases'
			className='px-5 py-20 [background:var(--stone)] [color:var(--parchment)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
							Notable outcomes
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
							Results that withstand scrutiny
						</h2>
					</div>
					<p className='max-w-sm text-sm leading-relaxed opacity-75'>
						Representative matters. Identifying details withheld under client
						confidentiality and privilege.
					</p>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{cases.map(c => (
						<article
							key={c.matter}
							className='ax-reveal flex flex-col rounded-sm border border-[var(--parchment)]/15 p-6'
						>
							<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--copper)]'>
								{c.outcome}
							</p>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl'>
								{c.matter}
							</h3>
							<p className='mt-1 text-xs uppercase tracking-[0.2em] opacity-60'>
								{c.jurisdiction}
							</p>
							<p className='mt-4 flex-1 text-sm leading-relaxed opacity-80'>
								{c.summary}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
