const team = [
	{
		name: 'Dr. Elena Vasquez',
		role: 'Founding Partner · B Lab certified analyst',
		bio: 'Former B Lab verification lead. 120+ certifications across food, finance, and manufacturing.',
		seed: 'beacon-elena'
	},
	{
		name: 'James Okonkwo',
		role: 'Head of Legal & Governance',
		bio: 'Corporate governance specialist. Structured stakeholder amendments for 80+ entities globally.',
		seed: 'beacon-james'
	},
	{
		name: 'Priya Sharma',
		role: 'Director of Environmental Impact',
		bio: 'GHG Protocol trainer. Designs environmental improvement programmes that score and sustain.',
		seed: 'beacon-priya'
	},
	{
		name: 'Marcus Chen',
		role: 'Client Success Director',
		bio: 'Guides clients from assessment through recertification. 97% first-attempt pass rate track record.',
		seed: 'beacon-marcus'
	}
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section
			id='team'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Our team
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Former B Lab analysts. Practising impact strategists.
					</h2>
					<p className='mt-4 text-base [color:var(--mute)]'>
						Beacon is a certified B Corp ourselves — score 94.2. We practice
						what we certify.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{team.map(t => (
						<article key={t.name} className='be-reveal text-center'>
							<div className='mx-auto h-32 w-32 overflow-hidden rounded-sm border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${t.seed}/256/256`}
									alt={t.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
								{t.name}
							</h3>
							<p className='mt-1 text-xs [color:var(--gold)]'>{t.role}</p>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{t.bio}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
