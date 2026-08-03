const partners = [
	{ name: 'Lars Eriksen', role: 'Founding partner', seed: 'atrium-t1' },
	{ name: 'Ingrid Holm', role: 'Design partner', seed: 'atrium-t2' },
	{ name: 'Jonas Møller', role: 'Technical partner', seed: 'atrium-t3' }
]

/** Future Payload mapping: teamGrid. */
export function Team() {
	return (
		<section
			id='team'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<h2 className='at-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] uppercase tracking-[-0.01em]'>
					Partners
				</h2>

				<div className='mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8'>
					{partners.map(p => (
						<figure key={p.seed} className='at-reveal'>
							<div className='aspect-[3/4] overflow-hidden [background:var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/500/660`}
									alt={p.name}
									className='h-full w-full object-cover grayscale'
								/>
							</div>
							<figcaption className='mt-4 border-[var(--line)] border-t pt-4'>
								<p className='font-[family-name:var(--font-display)] font-bold text-xl tracking-tight'>
									{p.name}
								</p>
								<p className='mt-1 text-xs uppercase tracking-[0.15em] [color:var(--concrete)]'>
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
