const people = [
	{ name: 'Maya Chen', role: 'Founding partner', seed: 'offset-t1' },
	{ name: 'Jonas Berg', role: 'Performance engineer', seed: 'offset-t2' },
	{ name: 'Amara Osei', role: 'Sustainable design lead', seed: 'offset-t3' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section id='team' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					The studio
				</h2>
				<div className='mt-12 grid gap-8 sm:grid-cols-3'>
					{people.map(p => (
						<figure key={p.seed} className='of-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--line)]'>
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
								<p className='text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
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
