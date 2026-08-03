const team = [
	{
		name: 'Remy',
		role: 'Creative director',
		seed: 'team1',
		color: 'var(--magenta)'
	},
	{ name: 'Joon', role: 'Motion lead', seed: 'team2', color: 'var(--cobalt)' },
	{ name: 'Avi', role: 'Design', seed: 'team3', color: 'var(--tangerine)' },
	{ name: 'Noor', role: '3D / CGI', seed: 'team4', color: 'var(--lime)' },
	{ name: 'Pip', role: 'Producer', seed: 'team5', color: 'var(--magenta)' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section
			id='team'
			className='border-[var(--ink)] border-y-2 [background:var(--tangerine)]'
		>
			<div className='px-5 py-16 sm:px-8 sm:py-24'>
				<div className='mb-10 flex items-end justify-between'>
					<h2 className='font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.03em] [color:var(--ink)]'>
						The gremlins
					</h2>
					<span className='font-[family-name:var(--font-mono)] text-sm uppercase [color:var(--ink)]'>
						+ 1 studio dog
					</span>
				</div>
				<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
					{team.map(m => (
						<div key={m.name} className='flx-reveal'>
							<div className='aspect-square overflow-hidden rounded-2xl border-2 border-[var(--ink)]'>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${m.seed}/500/500`}
									alt={m.name}
									className='h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0'
								/>
							</div>
							<div className='mt-2 font-extrabold text-lg [color:var(--ink)]'>
								{m.name}
							</div>
							<div className='font-[family-name:var(--font-mono)] text-xs uppercase [color:var(--ink)]/70'>
								{m.role}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
