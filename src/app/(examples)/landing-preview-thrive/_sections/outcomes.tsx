const outcomes = [
	{ metric: 'Confidence in ESG decisions', before: '42%', after: '89%' },
	{
		metric: 'Stakeholder alignment score',
		before: '3.1 / 5',
		after: '4.6 / 5'
	},
	{ metric: 'Hours spent on ESG prep / week', before: '12h', after: '5h' },
	{ metric: 'Self-reported burnout risk', before: 'High', after: 'Low' }
]

/** Future Payload mapping: outcomeMetrics. */
export function Outcomes() {
	return (
		<section
			id='outcomes'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--wheat)_50%,var(--sage))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Measured outcomes
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						What changes after six months
					</h2>
					<p className='mx-auto mt-4 max-w-xl text-sm [color:var(--mute)]'>
						Based on pre/post assessments from 80+ completed engagements.
					</p>
				</div>

				<div className='th-reveal mt-12 grid gap-4 sm:grid-cols-2'>
					{outcomes.map(o => (
						<div
							key={o.metric}
							className='rounded-2xl border border-[var(--line)] p-6 [background:var(--sage)]'
						>
							<p className='font-medium text-sm [color:var(--ink)]'>
								{o.metric}
							</p>
							<div className='mt-4 flex items-baseline gap-4'>
								<div>
									<p className='text-xs [color:var(--mute)]'>Before</p>
									<p className='font-[family-name:var(--font-display)] text-xl line-through opacity-50'>
										{o.before}
									</p>
								</div>
								<span className='[color:var(--forest)]'>→</span>
								<div>
									<p className='text-xs [color:var(--mute)]'>After</p>
									<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--forest)]'>
										{o.after}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
