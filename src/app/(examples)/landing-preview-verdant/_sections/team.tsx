const people = [
	{ name: 'Elena Voss', role: 'Founding partner', seed: 'vd-t1' },
	{ name: 'Marcus Okonkwo', role: 'Head of science', seed: 'vd-t2' },
	{ name: 'Sofia Lindström', role: 'Circular economy lead', seed: 'vd-t3' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section id='team' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='vd-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					Leadership
				</h2>
				<div className='mt-12 grid gap-8 sm:grid-cols-3'>
					{people.map(p => (
						<figure key={p.seed} className='vd-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-2xl'>
								{/* biome-ignore lint/performance/noImgElement: concept preview */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/500/660`}
									alt={p.name}
									className='h-full w-full object-cover grayscale'
								/>
							</div>
							<figcaption className='mt-4'>
								<p className='font-[family-name:var(--font-display)] text-xl'>
									{p.name}
								</p>
								<p className='text-sm [color:var(--mute)]'>{p.role}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
