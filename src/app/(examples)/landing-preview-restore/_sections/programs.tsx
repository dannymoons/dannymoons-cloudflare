const programs = [
	{
		t: 'Return to Sport',
		duration: '8–16 weeks',
		d: 'Structured return-to-play protocol with sport-specific loading, agility drills, and clearance testing.',
		highlights: [
			'Force plate benchmarking',
			'Sport-specific drills',
			'Medical clearance'
		]
	},
	{
		t: 'Balance & Fall Prevention',
		duration: '6–10 weeks',
		d: 'Vestibular rehabilitation and proprioceptive training for older adults and post-concussion recovery.',
		highlights: ['VNG assessment', 'Gaze stabilisation', 'Home exercise plan']
	},
	{
		t: 'Recovery Intensive',
		duration: '4–6 weeks',
		d: 'Accelerated post-surgical programme with daily sessions, manual therapy, and progressive strengthening.',
		highlights: [
			'Daily sessions',
			'Scar tissue management',
			'Functional milestones'
		]
	}
]

/** Future Payload mapping: programCards. */
export function Programs() {
	return (
		<section id='programs' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Structured programmes
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						Pathways to full recovery
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{programs.map(p => (
						<article
							key={p.t}
							className='rs-reveal flex flex-col rounded-2xl border border-[var(--line)] p-7 [background:var(--white)]'
						>
							<span className='text-xs uppercase tracking-[0.2em] [color:var(--coral)]'>
								{p.duration}
							</span>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-2xl'>
								{p.t}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{p.d}
							</p>
							<ul className='mt-6 space-y-2 border-[var(--line)] border-t pt-6 text-sm [color:var(--mute)]'>
								{p.highlights.map(h => (
									<li key={h} className='flex items-center gap-2'>
										<span className='h-1 w-1 shrink-0 rounded-full [background:var(--ocean)]' />
										{h}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
