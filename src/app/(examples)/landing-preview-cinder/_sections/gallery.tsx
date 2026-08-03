const shots = [
	{ seed: 'cinder-g1', alt: 'Unfired bowls on wooden battens' },
	{
		seed: 'cinder-g2',
		alt: 'Noborigama kiln chamber glowing at peak temperature'
	},
	{ seed: 'cinder-g3', alt: 'Ash glaze detail on a chawan rim' },
	{ seed: 'cinder-g4', alt: 'Potter centering clay on the wheel' },
	{ seed: 'cinder-g5', alt: 'Glaze test tiles arranged on a shelf' },
	{ seed: 'cinder-g6', alt: 'Finished vessels in a tokonoma display' }
]

/** Future Payload mapping: imageGrid. */
export function Gallery() {
	return (
		<section
			id='gallery'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Gallery
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Studio and kiln life
					</h2>
				</div>

				<div className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3'>
					{shots.map((s, i) => (
						<figure
							key={s.seed}
							className={`ci-reveal overflow-hidden rounded-sm${i === 0 ? 'col-span-2 aspect-[2/1] lg:col-span-2' : 'aspect-square'}`}
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
