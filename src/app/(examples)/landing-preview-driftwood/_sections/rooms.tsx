const rooms = [
	{
		name: 'Sea Room',
		size: '28 m²',
		view: 'Direct sea',
		price: '€240',
		seed: 'dw-room-sea',
		desc: 'Floor-to-ceiling shutters, raw linen drapes, and a balcony that catches the first light.'
	},
	{
		name: 'Terrace Suite',
		size: '42 m²',
		view: 'Private terrace',
		price: '€380',
		seed: 'dw-room-terrace',
		desc: 'Whitewashed walls, hand-thrown ceramics, and an outdoor daybed facing the cove.'
	},
	{
		name: 'Driftwood Loft',
		size: '56 m²',
		view: 'Panoramic coast',
		price: '€520',
		seed: 'dw-room-loft',
		desc: 'Double-height living space with reclaimed timber beams and a soaking tub carved from stone.'
	}
]

/** Future Payload mapping: roomCards (3 room types). */
export function Rooms() {
	return (
		<section id='rooms' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='dw-reveal mb-12 max-w-xl'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
						Accommodation
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] [color:var(--ink)]'>
						Twelve rooms, three ways to wake
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Natural fibres, muted terracotta, and windows that frame the
						Mediterranean like a living canvas.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					{rooms.map(r => (
						<article
							key={r.name}
							className='dw-reveal group border border-[var(--line)] transition-colors [background:var(--sand)]/40 hover:border-[var(--sea)]/30'
						>
							<div className='aspect-[4/3] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${r.seed}/800/600`}
									alt={r.name}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='p-6'>
								<div className='flex items-baseline justify-between gap-4'>
									<h3 className='font-[family-name:var(--font-display)] text-2xl [color:var(--ink)]'>
										{r.name}
									</h3>
									<span className='font-medium text-sm [color:var(--terra)]'>
										from {r.price}
									</span>
								</div>
								<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
									{r.desc}
								</p>
								<ul className='mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.65rem] uppercase tracking-[0.14em] [color:var(--mute)]'>
									<li>{r.size}</li>
									<li>{r.view}</li>
								</ul>
								<a
									href='#bookings'
									className='mt-6 inline-flex min-h-12 items-center font-medium text-[0.65rem] uppercase tracking-[0.18em] transition-colors [color:var(--sea)] hover:[color:var(--terra)]'
								>
									Reserve this room →
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
