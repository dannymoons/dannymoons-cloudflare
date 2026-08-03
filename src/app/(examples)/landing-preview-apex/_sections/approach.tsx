const pillars = [
	{
		step: '01',
		title: 'Diagnose',
		desc: 'A fixed-fee preliminary assessment within ten business days — exposure, forum, and realistic outcomes before you commit.'
	},
	{
		step: '02',
		title: 'Strategise',
		desc: 'A written litigation plan with decision gates, budget bands, and settlement parameters agreed with your board.'
	},
	{
		step: '03',
		title: 'Execute',
		desc: 'Partner-led advocacy with disciplined discovery, expert coordination, and weekly written progress reports.'
	},
	{
		step: '04',
		title: 'Resolve',
		desc: 'Trial-ready posture that strengthens negotiation — most matters settle on terms our clients would accept at hearing.'
	}
]

/** Future Payload mapping: methodologyPillars. */
export function Approach() {
	return (
		<section
			id='approach'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--copper)_6%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Our approach
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--stone)]'>
						Disciplined from first instruction
					</h2>
				</div>

				<ol className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{pillars.map(p => (
						<li
							key={p.step}
							className='ax-reveal rounded-sm border border-[var(--line)] p-6 [background:var(--parchment)]'
						>
							<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--copper)]'>
								{p.step}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--stone)]'>
								{p.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
