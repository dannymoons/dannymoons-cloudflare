const steps = [
	{
		n: '01',
		t: 'Assess',
		d: 'Comprehensive movement screening, pain mapping, and functional baseline testing.'
	},
	{
		n: '02',
		t: 'Plan',
		d: 'Personalised treatment protocols grounded in peer-reviewed movement science.'
	},
	{
		n: '03',
		t: 'Treat',
		d: 'Hands-on manual therapy, corrective exercise, and progressive loading.'
	},
	{
		n: '04',
		t: 'Restore',
		d: 'Return-to-activity milestones with measurable outcomes at every stage.'
	}
]

/** Future Payload mapping: processSteps. */
export function Approach() {
	return (
		<section
			id='approach'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--sky)]/25 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Evidence-based methodology
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--slate)]'>
						Science-led care, human-centred delivery
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Every treatment plan follows current clinical guidelines — combining
						biomechanics, pain neuroscience, and progressive rehabilitation
						principles.
					</p>
				</div>

				<ol className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{steps.map(s => (
						<li
							key={s.n}
							className='rs-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--white)]'
						>
							<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--coral)]'>
								{s.n}
							</span>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-xl [color:var(--slate)]'>
								{s.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.d}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
