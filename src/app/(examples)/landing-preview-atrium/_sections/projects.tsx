const projects = [
	{
		n: '01',
		name: 'Harbour House',
		place: 'Aarhus, DK',
		year: '2025',
		seed: 'atrium-p1'
	},
	{
		n: '02',
		name: 'North Light Pavilion',
		place: 'Oslo, NO',
		year: '2024',
		seed: 'atrium-p2'
	},
	{
		n: '03',
		name: 'Courtyard Block',
		place: 'Copenhagen, DK',
		year: '2024',
		seed: 'atrium-p3'
	},
	{
		n: '04',
		name: 'Timber Frame Studio',
		place: 'Malmö, SE',
		year: '2023',
		seed: 'atrium-p4'
	}
]

/** Future Payload mapping: projectsGrid. */
export function Projects() {
	return (
		<section id='projects' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='at-reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<h2 className='font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] uppercase tracking-[-0.01em]'>
						Selected work
					</h2>
					<span className='text-xs uppercase tracking-[0.25em] [color:var(--concrete)]'>
						2023 — 2025
					</span>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
					{projects.map(p => (
						<figure key={p.seed} className='at-reveal group'>
							<div className='aspect-[4/3] overflow-hidden [background:var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/900/675`}
									alt={p.name}
									className='h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0'
								/>
							</div>
							<figcaption className='mt-4 flex items-baseline justify-between gap-4 border-[var(--line)] border-t pt-4'>
								<div>
									<span className='text-xs uppercase tracking-[0.2em] [color:var(--gold)]'>
										{p.n}
									</span>
									<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-xl tracking-tight'>
										{p.name}
									</p>
								</div>
								<div className='text-right text-xs uppercase tracking-[0.15em] [color:var(--concrete)]'>
									<p>{p.place}</p>
									<p className='mt-1'>{p.year}</p>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
