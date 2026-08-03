const publications = [
	{
		type: 'Monograph',
		title: 'Atrium: Works 2011–2024',
		publisher: 'Phaidon',
		year: '2024',
		seed: 'atrium-pub1'
	},
	{
		type: 'Feature',
		title: 'The Nordic Line',
		publisher: 'Architectural Review',
		year: '2025',
		seed: 'atrium-pub2'
	},
	{
		type: 'Book',
		title: 'Concrete & Light',
		publisher: 'Lars Müller',
		year: '2023',
		seed: 'atrium-pub3'
	}
]

/** Future Payload mapping: publicationsGrid. */
export function Publications() {
	return (
		<section id='publications' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='at-reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<h2 className='font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] uppercase tracking-[-0.01em]'>
						Publications
					</h2>
					<span className='text-xs uppercase tracking-[0.25em] [color:var(--concrete)]'>
						Books &amp; features
					</span>
				</div>

				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{publications.map(p => (
						<article key={p.seed} className='at-reveal group flex flex-col'>
							<div className='aspect-[3/4] overflow-hidden [background:var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/600/800`}
									alt={p.title}
									className='h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0'
								/>
							</div>
							<div className='mt-4 flex items-center justify-between text-xs uppercase tracking-[0.15em] [color:var(--concrete)]'>
								<span>{p.type}</span>
								<span>{p.year}</span>
							</div>
							<h3 className='mt-2 font-[family-name:var(--font-display)] font-bold text-xl tracking-tight'>
								{p.title}
							</h3>
							<p className='mt-1 text-sm [color:var(--concrete)]'>
								{p.publisher}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
