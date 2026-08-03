const people = [
	{
		name: 'Dr. Amara Chen',
		role: 'Chief scientist · ex-MIT CSAIL',
		affiliation: 'MIT',
		seed: 'sy-t1'
	},
	{
		name: 'Dr. James Okoro',
		role: 'Head of reasoning · ex-DeepMind',
		affiliation: 'DeepMind',
		seed: 'sy-t2'
	},
	{
		name: 'Dr. Elena Vasquez',
		role: 'Memory systems · ex-MIT Brain & Cog',
		affiliation: 'MIT',
		seed: 'sy-t3'
	},
	{
		name: 'Dr. Kai Nakamura',
		role: 'Multimodal lead · ex-DeepMind',
		affiliation: 'DeepMind',
		seed: 'sy-t4'
	}
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section id='team' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Research team
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Minds behind the synapse
				</h2>
				<p className='sy-reveal mt-4 max-w-lg text-sm [color:var(--mute)]'>
					Alumni from MIT and DeepMind — publishing, shipping and iterating in
					the open.
				</p>

				<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{people.map(p => (
						<figure key={p.seed} className='sy-reveal group'>
							<div className='relative aspect-square overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--neon)_20%,var(--line))]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/400/400`}
									alt={p.name}
									className='h-full w-full object-cover saturate-0 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100'
								/>
								<span className='absolute top-3 left-3 rounded-full border border-[color-mix(in_oklch,var(--neon)_40%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest backdrop-blur-md [background:color-mix(in_oklch,var(--void)_70%,transparent)] [color:var(--neon)]'>
									{p.affiliation}
								</span>
							</div>
							<figcaption className='mt-4'>
								<p className='font-[family-name:var(--font-display)] font-medium'>
									{p.name}
								</p>
								<p className='mt-1 text-xs leading-relaxed [color:var(--mute)]'>
									{p.role}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
