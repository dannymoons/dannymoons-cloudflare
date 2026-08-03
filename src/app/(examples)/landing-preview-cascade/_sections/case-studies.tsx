const cases = [
	{
		agency: 'Northwind Creative',
		client: 'Global FMCG rebrand',
		result:
			'Mapped 847 vendors across 14 markets in 7 weeks. Client published first supply chain transparency report.',
		metric: '−34% scope 3 uncertainty'
	},
	{
		agency: 'Studio Meridian',
		client: 'Luxury retail campaign',
		result:
			'Traced packaging substrates to mill level. Identified 3 non-compliant suppliers before production.',
		metric: '100% FSC compliance'
	},
	{
		agency: 'Field & Frame',
		client: 'Sports sponsorship activation',
		result:
			'Event build materials tracked from fabrication to teardown with 92% diversion from landfill.',
		metric: '−28% event carbon'
	}
]

/** Future Payload mapping: caseStudyGrid. */
export function CaseStudies() {
	return (
		<section
			id='case-studies'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--steel)_4%,var(--fog))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Case studies
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Agencies winning pitches with proof.
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{cases.map(c => (
						<article
							key={c.agency}
							className='ca-reveal flex flex-col rounded-sm border border-[var(--line)] p-6 [background:var(--fog)]'
						>
							<p className='text-xs uppercase tracking-[0.18em] [color:var(--pine)]'>
								{c.client}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{c.agency}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{c.result}
							</p>
							<p className='mt-4 font-medium text-sm [color:var(--pine)]'>
								{c.metric}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
