const venues = [
	{
		city: 'Amsterdam',
		name: 'Solstice Canal House',
		seats: 42,
		seed: 'sol-space1',
		desc: 'A 17th-century canal house reimagined as an intimate dining salon.'
	},
	{
		city: 'London',
		name: 'Solstice Mayfair',
		seats: 56,
		seed: 'sol-space2',
		desc: 'Subterranean elegance — candlelight, stone, and a hidden garden terrace.'
	},
	{
		city: 'Copenhagen',
		name: 'Solstice Harbour',
		seats: 38,
		seed: 'sol-space3',
		desc: 'Waterfront minimalism with open kitchen and Nordic light wells.'
	}
]

/** Future Payload mapping: venueCards. */
export function Spaces() {
	return (
		<section id='spaces' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='so-reveal mb-12 max-w-xl'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Our spaces
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Three rooms, one ritual
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{venues.map(v => (
						<article
							key={v.city}
							className='so-reveal group border border-[var(--line)] transition-colors hover:border-[var(--gold)]/40'
						>
							<div className='aspect-[4/3] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${v.seed}/800/600`}
									alt={v.name}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='p-6'>
								<div className='flex items-baseline justify-between gap-4'>
									<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--cream)]'>
										{v.name}
									</h3>
									<span className='text-xs uppercase tracking-[0.16em] [color:var(--gold)]'>
										{v.city}
									</span>
								</div>
								<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
									{v.desc}
								</p>
								<p className='mt-4 text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
									{v.seats} seats · Dinner service only
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
