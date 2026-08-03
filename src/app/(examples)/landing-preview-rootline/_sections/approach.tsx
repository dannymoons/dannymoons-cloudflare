const steps = [
	{
		step: '01',
		title: 'Diagnose',
		desc: 'Audit existing claims, agency contracts, and reporting gaps against CSRD and ASA guidance.'
	},
	{
		step: '02',
		title: 'Design',
		desc: 'Co-create governance workflows, KPIs, and editorial standards with your brand and legal teams.'
	},
	{
		step: '03',
		title: 'Deploy',
		desc: 'Train marketers and agencies, integrate tools, and run pilot campaigns under new thresholds.'
	},
	{
		step: '04',
		title: 'Defend',
		desc: 'Ongoing monitoring, quarterly board reporting, and rapid response for regulatory shifts.'
	}
]

/** Future Payload mapping: methodologyPillars. */
export function Approach() {
	return (
		<section
			id='approach'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--teal)_5%,var(--sand))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Our approach
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--navy)]'>
						From first workshop to board confidence
					</h2>
				</div>

				<ol className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{steps.map(s => (
						<li
							key={s.step}
							className='rl-reveal rounded-sm border border-[var(--line)] p-6 [background:var(--sand)]'
						>
							<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--teal)]'>
								{s.step}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--navy)]'>
								{s.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
