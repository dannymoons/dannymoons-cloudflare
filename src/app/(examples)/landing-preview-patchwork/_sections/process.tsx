const steps = [
	{
		num: '01',
		title: 'Dig in',
		desc: 'Immersion workshops with your team, stakeholders, and data. We find the story worth telling.',
		bg: 'var(--yellow)'
	},
	{
		num: '02',
		title: 'Define',
		desc: 'Strategy sprint: positioning, audience, channels, and measurable impact targets.',
		bg: 'var(--green)'
	},
	{
		num: '03',
		title: 'Design',
		desc: 'Concept development with carbon budgets built in from day one — not bolted on at the end.',
		bg: 'var(--pink)'
	},
	{
		num: '04',
		title: 'Deploy',
		desc: 'Production, launch, and live optimisation. We track engagement and emissions in parallel.',
		bg: 'var(--yellow)'
	},
	{
		num: '05',
		title: 'Document',
		desc: 'Impact report and learnings deck for your board, investors, and next campaign brief.',
		bg: 'var(--green)'
	}
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section
			id='process'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--yellow)_20%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal text-center'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Process
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight'>
						How we work
					</h2>
				</div>

				<ol className='mt-12 space-y-4'>
					{steps.map(s => (
						<li
							key={s.num}
							className='pw-reveal flex flex-col gap-4 border-2 border-[var(--ink)] p-6 sm:flex-row sm:items-center'
							style={{
								background: `color-mix(in oklch, ${s.bg} 35%, var(--cream))`
							}}
						>
							<span className='font-[family-name:var(--font-display)] text-4xl uppercase'>
								{s.num}
							</span>
							<div className='flex-1'>
								<h3 className='font-[family-name:var(--font-display)] text-xl uppercase'>
									{s.title}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{s.desc}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
