const steps = [
	{
		week: 'Week 1',
		title: 'Discover your baseline',
		desc: 'A 5-minute lifestyle quiz maps your current footprint and suggests three starter habits matched to your schedule.'
	},
	{
		week: 'Week 2–4',
		title: 'Build your streak',
		desc: 'Daily check-ins, gentle reminders, and micro-celebrations keep momentum without burnout or guilt.'
	},
	{
		week: 'Month 2',
		title: 'Level up',
		desc: 'Unlock advanced habits, community challenges, and household sharing as your routines become automatic.'
	},
	{
		week: 'Month 3+',
		title: 'Sustain & share',
		desc: 'Track cumulative impact, export your story, and mentor newcomers in the Habit community.'
	}
]

/** Future Payload mapping: journeyTimeline. */
export function Journey() {
	return (
		<section
			id='journey'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Your journey
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						From curious to committed in 90 days.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Behavioural science shows lasting change comes from small, repeated
						actions — not dramatic overnight overhauls.
					</p>
				</div>

				<ol className='mt-12 space-y-0'>
					{steps.map((s, i) => (
						<li
							key={s.week}
							className='ha-reveal relative flex gap-6 pb-10 last:pb-0'
						>
							{i < steps.length - 1 ? (
								<div
									aria-hidden
									className='absolute top-8 left-[11px] h-[calc(100%-2rem)] w-px [background:var(--line)]'
								/>
							) : null}
							<div className='relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full border-2 [background:var(--cream)] [border-color:var(--leaf)]' />
							<div>
								<p className='font-medium text-xs uppercase tracking-[0.2em] [color:var(--leaf)]'>
									{s.week}
								</p>
								<h3 className='mt-1 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
									{s.title}
								</h3>
								<p className='mt-2 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
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
