const locations = [
	{
		city: 'Paris',
		address: '14 Rue du Faubourg Saint-Honoré',
		hours: 'By appointment · Tue–Sat',
		seed: 'maison-paris'
	},
	{
		city: 'Milan',
		address: '22 Via Montenapoleone',
		hours: 'By appointment · Mon–Sat',
		seed: 'maison-milan'
	},
	{
		city: 'Tokyo',
		address: '5-3-10 Minami-Aoyama, Minato-ku',
		hours: 'By appointment · Wed–Sun',
		seed: 'maison-tokyo'
	}
]

/** Future Payload mapping: storeLocations. */
export function Stores() {
	return (
		<section id='stores' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='ml-reveal text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Our maisons
				</p>
				<h2 className='mt-3 ml-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Visit us
				</h2>
				<div className='mt-12 grid gap-8 lg:grid-cols-3'>
					{locations.map(loc => (
						<article key={loc.city} className='group ml-reveal'>
							<div className='aspect-[16/10] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${loc.seed}/800/500`}
									alt={`Maison Lérins ${loc.city}`}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
								/>
							</div>
							<div className='mt-5'>
								<h3 className='font-[family-name:var(--font-display)] text-2xl'>
									{loc.city}
								</h3>
								<p className='mt-2 text-sm [color:var(--mute)]'>
									{loc.address}
								</p>
								<p className='mt-1 text-xs uppercase tracking-[0.18em] [color:var(--gold)]'>
									{loc.hours}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
