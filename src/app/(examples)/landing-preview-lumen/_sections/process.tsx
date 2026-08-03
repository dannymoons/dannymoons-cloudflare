const phases = [
	{
		t: 'Discover',
		d: 'We map the brand universe — audience, ambition, constraints — until the world feels real.'
	},
	{
		t: 'Design',
		d: 'Mood becomes spatial language. Light, motion and narrative threads lock into place.'
	},
	{
		t: 'Build',
		d: 'XR layers, physical builds and digital twins converge in our studio pipeline.'
	},
	{
		t: 'Launch',
		d: 'We open the doors, measure the magic and hand you a world that keeps evolving.'
	}
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<h2 className='lu-reveal mb-12 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
				How a world gets made
			</h2>
			<div className='grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--line)] [background:var(--line)] md:grid-cols-2 lg:grid-cols-4'>
				{phases.map((s, i) => (
					<div
						key={s.t}
						className='lu-reveal flex min-h-[220px] flex-col justify-between p-7 [background:var(--panel)]'
					>
						<span className='font-[family-name:var(--font-display)] text-sm [color:var(--violet)]'>
							Phase 0{i + 1}
						</span>
						<div>
							<h3 className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
								{s.t}
							</h3>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{s.d}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
