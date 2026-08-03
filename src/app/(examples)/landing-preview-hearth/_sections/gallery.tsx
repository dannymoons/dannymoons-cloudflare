const shots = [
	{ seed: 'hearth-g1', alt: 'Fresh bread from the wood oven' },
	{ seed: 'hearth-g2', alt: 'Seasonal plate with roasted vegetables' },
	{ seed: 'hearth-g3', alt: 'Communal dining table at lunch' },
	{ seed: 'hearth-g4', alt: 'Patio with string lights at dusk' },
	{ seed: 'hearth-g5', alt: 'Chef tending the fire' },
	{ seed: 'hearth-g6', alt: 'Bar with local wine and small plates' }
]

/** Future Payload mapping: imageGrid. */
export function Gallery() {
	return (
		<section id='gallery' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal mb-10'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Gallery
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						Life around the hearth
					</h2>
				</div>

				<div className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3'>
					{shots.map((s, i) => (
						<figure
							key={s.seed}
							className={`ht-reveal overflow-hidden rounded-sm${i === 0 ? 'col-span-2 aspect-[2/1] lg:col-span-2' : 'aspect-square'}`}
						>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src={`https://picsum.photos/seed/${s.seed}/800/600`}
								alt={s.alt}
								className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
							/>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
