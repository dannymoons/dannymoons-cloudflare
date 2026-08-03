const team = [
	{ name: 'Yuki Tanaka', role: 'Creative Director', seed: 'patchwork-team-1' },
	{ name: 'Sam Okoye', role: 'Strategy Lead', seed: 'patchwork-team-2' },
	{
		name: 'Lena Bergström',
		role: 'Head of Production',
		seed: 'patchwork-team-3'
	},
	{ name: 'Marco Reyes', role: 'Impact Analyst', seed: 'patchwork-team-4' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section
			id='team'
			className='px-5 py-20 [background:var(--ink)] [color:var(--cream)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal text-center'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Team
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight'>
						The patchwork
					</h2>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{team.map(m => (
						<article key={m.name} className='pw-reveal text-center'>
							<div className='mx-auto aspect-square w-full max-w-[12rem] overflow-hidden border-2 border-[var(--cream)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${m.seed}/240/240`}
									alt={m.name}
									className='h-full w-full object-cover grayscale transition-all hover:grayscale-0'
								/>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg uppercase'>
								{m.name}
							</h3>
							<p className='text-sm [color:var(--yellow)]'>{m.role}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
