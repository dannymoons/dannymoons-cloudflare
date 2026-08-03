const paths = [
	{
		title: 'The New CSO',
		audience: 'First-time sustainability officers',
		desc: 'Navigate your first 100 days — stakeholder mapping, quick wins, and building internal credibility.',
		sessions: '12 sessions over 6 months'
	},
	{
		title: 'Board-Ready Leader',
		audience: 'CEOs and board members',
		desc: 'Prepare for tough ESG questions, fiduciary duties, and communicating transition strategy to investors.',
		sessions: '8 sessions over 4 months'
	},
	{
		title: 'Transition Navigator',
		audience: 'Division heads and COOs',
		desc: 'Operationalise decarbonisation across business units without losing sight of commercial reality.',
		sessions: '10 sessions over 5 months'
	}
]

/** Future Payload mapping: coachingPaths. */
export function CoachingPaths() {
	return (
		<section id='coaching-paths' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Coaching paths
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Structured journeys for where you are now
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{paths.map(p => (
						<article
							key={p.title}
							className='th-reveal flex flex-col rounded-2xl border border-[var(--line)] p-6 [background:color-mix(in_oklch,var(--forest)_4%,var(--sage))]'
						>
							<p className='text-xs uppercase tracking-[0.18em] [color:var(--forest)]'>
								{p.audience}
							</p>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{p.title}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
							<p className='mt-6 border-[var(--line)] border-t pt-4 font-medium text-sm [color:var(--forest)]'>
								{p.sessions}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
