const phases = [
	{
		phase: 'Phase 1',
		title: 'Readiness assessment',
		duration: '2–3 weeks',
		desc: 'Gap analysis against B Impact Assessment standards. Prioritised improvement roadmap with score projections.'
	},
	{
		phase: 'Phase 2',
		title: 'Impact improvement',
		duration: '3–6 months',
		desc: 'Implement policy, governance, and operational changes. Document evidence and prepare verification files.'
	},
	{
		phase: 'Phase 3',
		title: 'BIA submission',
		duration: '4–8 weeks',
		desc: 'Complete the B Impact Assessment with Beacon guidance. Review queue and respond to B Lab clarifications.'
	},
	{
		phase: 'Phase 4',
		title: 'Verification & certification',
		duration: '2–4 months',
		desc: 'On-site or remote verification with B Lab analysts. Legal requirement amendment and public certification.'
	},
	{
		phase: 'Phase 5',
		title: 'Continuous improvement',
		duration: 'Ongoing',
		desc: 'Recertification prep every three years. Impact reporting, stakeholder engagement, and score maintenance.'
	}
]

/** Future Payload mapping: pathwayTimeline. */
export function Pathway() {
	return (
		<section
			id='pathway'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--forest)_4%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Certification pathway
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						From curious to certified in 9–14 months.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Beacon&apos;s structured pathway removes guesswork. Most clients
						certify on first submission with a median B Impact Score of 92+.
					</p>
				</div>

				<ol className='mt-12 space-y-0'>
					{phases.map((p, i) => (
						<li
							key={p.phase}
							className='be-reveal relative flex gap-6 pb-10 last:pb-0'
						>
							{i < phases.length - 1 ? (
								<div
									aria-hidden
									className='absolute top-8 left-[11px] h-[calc(100%-2rem)] w-px [background:var(--line)]'
								/>
							) : null}
							<div className='relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-bold text-[10px] [background:var(--forest)] [color:var(--cream)]'>
								{i + 1}
							</div>
							<div className='flex-1'>
								<div className='flex flex-wrap items-baseline gap-3'>
									<p className='text-xs uppercase tracking-[0.2em] [color:var(--gold)]'>
										{p.phase}
									</p>
									<span className='text-xs [color:var(--mute)]'>
										{p.duration}
									</span>
								</div>
								<h3 className='mt-1 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
									{p.title}
								</h3>
								<p className='mt-2 max-w-xl text-sm leading-relaxed [color:var(--mute)]'>
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
