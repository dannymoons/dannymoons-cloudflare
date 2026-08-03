const seasons = [
	{
		name: 'Spring',
		phase: 'Orientation',
		desc: 'Map stakeholders, personal triggers, and the story you inherited',
		duration: 'Weeks 1–4'
	},
	{
		name: 'Summer',
		phase: 'Integration',
		desc: 'Build cross-functional rhythm and test narratives in safe rooms',
		duration: 'Weeks 5–12'
	},
	{
		name: 'Autumn',
		phase: 'Pressure',
		desc: 'Simulate scrutiny — activist letters, board questions, media drills',
		duration: 'Weeks 13–20'
	},
	{
		name: 'Winter',
		phase: 'Embodiment',
		desc: 'Lead from conviction. Set boundaries. Plan the next horizon',
		duration: 'Weeks 21–36'
	}
]

/** Future Payload mapping: seasonalJourney (coaching wheel). */
export function SeasonalJourney() {
	return (
		<section id='seasonal-journey' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal mb-14 text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						The arc
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]'>
						A coaching year, season by season
					</h2>
				</div>

				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{seasons.map((s, i) => (
						<article
							key={s.name}
							className='th-reveal group relative overflow-hidden rounded-3xl border border-[var(--line)] p-6 transition-transform hover:-translate-y-1 sm:p-8'
							style={{
								background:
									i % 2 === 0
										? 'var(--sage)'
										: 'color-mix(in oklch, var(--wheat) 60%, var(--sage))'
							}}
						>
							<p className='font-[family-name:var(--font-display)] text-4xl italic [color:var(--forest)]'>
								{s.name}
							</p>
							<p className='mt-2 text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
								{s.duration}
							</p>
							<h3 className='mt-6 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{s.phase}
							</h3>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
							<div
								aria-hidden
								className='absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-10 transition-opacity [background:var(--forest)] group-hover:opacity-20'
							/>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
