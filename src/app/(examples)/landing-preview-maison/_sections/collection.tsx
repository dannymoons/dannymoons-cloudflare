const looks = [
	{
		season: 'Printemps–Été 2026',
		title: 'Lumière du Matin',
		seed: 'maison-c1'
	},
	{
		season: 'Automne–Hiver 2025',
		title: 'Nocturne Velours',
		seed: 'maison-c2'
	},
	{ season: 'Croisière 2026', title: 'Riviera Silhouette', seed: 'maison-c3' }
]

/** Future Payload mapping: collectionCards. */
export function Collection() {
	return (
		<section id='collection' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='ml-reveal text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Current season
				</p>
				<h2 className='mt-3 ml-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)]'>
					The collection
				</h2>
				<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{looks.map(look => (
						<article key={look.seed} className='group ml-reveal'>
							<div className='aspect-[3/4] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${look.seed}/700/930`}
									alt={look.title}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
								/>
							</div>
							<div className='mt-5 border-[var(--line)] border-t pt-5'>
								<p className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
									{look.season}
								</p>
								<h3 className='mt-2 font-[family-name:var(--font-display)] text-2xl'>
									{look.title}
								</h3>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
