const programs = [
	{
		name: 'Claim Audit Sprint',
		duration: '6 weeks',
		desc: 'Full inventory of in-market sustainability claims with risk scoring and remediation roadmap.',
		deliverables: ['Claim register', 'Risk matrix', 'Legal brief pack']
	},
	{
		name: 'Campaign Carbon Lab',
		duration: '8 weeks',
		desc: 'Embed footprint thresholds into briefing templates and train agency partners on measurement.',
		deliverables: ['Brief templates', 'Agency playbook', 'Baseline report']
	},
	{
		name: 'CMO Advisory Retainer',
		duration: '12 months',
		desc: 'Ongoing counsel on ESG communications, board reporting, and crisis preparedness.',
		deliverables: ['Monthly briefings', 'Board decks', 'Stakeholder Q&A']
	}
]

/** Future Payload mapping: servicePrograms. */
export function Programs() {
	return (
		<section
			id='programs'
			className='px-5 py-20 [background:var(--navy)] [color:var(--sand)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Programs
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Structured engagements for every maturity stage
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{programs.map(p => (
						<article
							key={p.name}
							className='rl-reveal flex flex-col rounded-sm border border-[color:oklch(1_0_0/0.12)] p-6'
						>
							<div className='flex items-baseline justify-between gap-2'>
								<h3 className='font-[family-name:var(--font-display)] text-xl'>
									{p.name}
								</h3>
								<span className='text-xs [color:var(--teal)]'>
									{p.duration}
								</span>
							</div>
							<p className='mt-3 flex-1 text-sm leading-relaxed opacity-75'>
								{p.desc}
							</p>
							<ul className='mt-6 space-y-2 border-[color:oklch(1_0_0/0.12)] border-t pt-6 text-sm'>
								{p.deliverables.map(d => (
									<li key={d} className='flex items-center gap-2 opacity-80'>
										<span className='h-1.5 w-1.5 rounded-full [background:var(--teal)]' />
										{d}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
