const areas = [
	{
		name: 'Dining room',
		seats: 32,
		seed: 'hearth-space1',
		desc: 'Exposed brick, long communal tables, and the oven visible from every seat. Lively at peak hour, cozy by nine.'
	},
	{
		name: 'Patio',
		seats: 12,
		seed: 'hearth-space2',
		desc: 'Heated terrace with herb planters and string lights. First to fill on sunny afternoons — no reservations.'
	},
	{
		name: 'Bar',
		seats: 8,
		seed: 'hearth-space3',
		desc: 'Walk in for a glass and a small plate. Regulars perch here for soup, wine, and the server who knows their order.'
	}
]

/** Future Payload mapping: venueCards. */
export function Spaces() {
	return (
		<section
			id='spaces'
			className='px-5 py-20 [background:var(--wheat)]/35 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal mb-10 max-w-xl'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Our spaces
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						One bistro, three ways to sit
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{areas.map(a => (
						<article
							key={a.name}
							className='ht-reveal overflow-hidden rounded-sm border border-[var(--line)] transition-shadow [background:var(--cream)] hover:shadow-md'
						>
							<div className='aspect-[4/3] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${a.seed}/800/600`}
									alt={a.name}
									className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
								/>
							</div>
							<div className='p-5 sm:p-6'>
								<div className='flex items-baseline justify-between gap-3'>
									<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--wood)]'>
										{a.name}
									</h3>
									<span className='text-sm [color:var(--mute)]'>
										{a.seats} seats
									</span>
								</div>
								<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
									{a.desc}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
