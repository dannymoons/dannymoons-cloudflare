const shots = [
	{ seed: 'sol-g1', alt: 'Plated scallop course', tall: false },
	{ seed: 'sol-g2', alt: 'Candlelit table setting', tall: true },
	{ seed: 'sol-g3', alt: 'Open kitchen flames', tall: false },
	{ seed: 'sol-g4', alt: 'Wine being poured', tall: false },
	{ seed: 'sol-g5', alt: 'Dessert with gold leaf', tall: false },
	{ seed: 'sol-g6', alt: 'Dining room at dusk', tall: false }
]

/** Future Payload mapping: imageMasonry. */
export function Gallery() {
	return (
		<section id='gallery' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='so-reveal mb-10'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Gallery
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						An evening in frames
					</h2>
				</div>

				<div className='grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[200px] lg:grid-cols-3'>
					{shots.map(s => (
						<figure
							key={s.seed}
							className={`so-reveal overflow-hidden${s.tall ? 'row-span-2' : ''}`}
						>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src={`https://picsum.photos/seed/${s.seed}/800/600`}
								alt={s.alt}
								className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
							/>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
