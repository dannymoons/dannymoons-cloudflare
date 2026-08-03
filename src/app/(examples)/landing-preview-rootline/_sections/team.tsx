const team = [
	{
		name: 'Dr. Amara Osei',
		role: 'Founding Partner',
		bio: 'Former head of sustainability comms at a FTSE 100. PhD in environmental policy.',
		seed: 'rootline-team-1'
	},
	{
		name: 'Marcus Webb',
		role: 'Claim Governance Lead',
		bio: '12 years in advertising law. Built ASA-compliant frameworks for three global brands.',
		seed: 'rootline-team-2'
	},
	{
		name: 'Priya Nair',
		role: 'Campaign Carbon Analyst',
		bio: 'Scope 3 specialist. Previously at a major media carbon measurement platform.',
		seed: 'rootline-team-3'
	},
	{
		name: 'Tomás Herrera',
		role: 'CMO Advisory',
		bio: 'Ex-CMO of a European retail group. Board advisor on ESG narrative strategy.',
		seed: 'rootline-team-4'
	}
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section
			id='team'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--navy)_4%,var(--sand))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Team
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						Marketers, lawyers, and scientists in one room
					</h2>
				</div>

				<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{team.map(m => (
						<article key={m.name} className='rl-reveal text-center'>
							<div className='mx-auto aspect-square w-40 overflow-hidden rounded-full border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${m.seed}/320/320`}
									alt={m.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg [color:var(--navy)]'>
								{m.name}
							</h3>
							<p className='text-sm [color:var(--teal)]'>{m.role}</p>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{m.bio}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
