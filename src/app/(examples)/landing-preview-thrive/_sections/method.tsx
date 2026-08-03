const phases = [
	{
		phase: 'Discover',
		desc: '360° assessment of your leadership context, knowledge gaps, and stakeholder landscape.'
	},
	{
		phase: 'Design',
		desc: 'Co-create a personal ESG leadership plan with milestones tied to your role and organisation.'
	},
	{
		phase: 'Develop',
		desc: 'Fortnightly coaching sessions with prep materials, role-play, and between-session exercises.'
	},
	{
		phase: 'Deliver',
		desc: 'Support through a high-stakes moment — board presentation, investor call, or public commitment.'
	},
	{
		phase: 'Deepen',
		desc: 'Optional ongoing advisory as your role evolves and regulatory landscape shifts.'
	}
]

/** Future Payload mapping: methodPhases. */
export function Method() {
	return (
		<section
			id='method'
			className='px-5 py-20 [background:var(--forest)] [color:var(--sage)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] opacity-80'>
						The Thrive method
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1]'>
						Five phases from first conversation to lasting change
					</h2>
				</div>

				<ol className='mt-12 space-y-4'>
					{phases.map((p, i) => (
						<li
							key={p.phase}
							className='th-reveal flex gap-6 rounded-2xl border border-[color:oklch(1_0_0/0.12)] p-6'
						>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-3xl opacity-50'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<div>
								<h3 className='font-[family-name:var(--font-display)] text-xl'>
									{p.phase}
								</h3>
								<p className='mt-2 text-sm leading-relaxed opacity-80'>
									{p.desc}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
