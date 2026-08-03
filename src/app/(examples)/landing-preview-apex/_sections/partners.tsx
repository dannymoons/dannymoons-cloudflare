const partners = [
	{
		name: 'Catherine Ashworth KC',
		role: 'Managing partner',
		credential: 'Commercial litigation · 28 years',
		seed: 'ax-p1'
	},
	{
		name: 'James Okonkwo',
		role: 'Senior partner',
		credential: 'International arbitration · 22 years',
		seed: 'ax-p2'
	},
	{
		name: 'Elena Vasquez',
		role: 'Partner',
		credential: 'Regulatory & white-collar · 16 years',
		seed: 'ax-p3'
	},
	{
		name: 'Thomas Whitfield',
		role: 'Partner',
		credential: 'Insolvency & restructuring · 19 years',
		seed: 'ax-p4'
	}
]

/** Future Payload mapping: teamGrid. */
export function Partners() {
	return (
		<section
			id='partners'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Partners
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--stone)]'>
						Senior counsel on every matter
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						No hand-offs to juniors. The partner who accepts your instruction
						leads strategy, advocacy, and negotiation throughout.
					</p>
				</div>

				<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{partners.map(p => (
						<figure key={p.seed} className='ax-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-sm border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/500/660`}
									alt={p.name}
									className='h-full w-full object-cover grayscale'
								/>
							</div>
							<figcaption className='mt-4'>
								<p className='font-[family-name:var(--font-display)] text-lg [color:var(--stone)]'>
									{p.name}
								</p>
								<p className='text-sm [color:var(--copper)]'>{p.role}</p>
								<p className='mt-1 text-xs [color:var(--mute)]'>
									{p.credential}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
