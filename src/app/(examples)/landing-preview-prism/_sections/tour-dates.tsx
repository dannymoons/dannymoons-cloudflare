const dates = [
	{ date: 'Apr 12', city: 'Rotterdam', venue: 'WORM', act: 'Static Bloom' },
	{ date: 'Apr 19', city: 'Berlin', venue: 'SO36', act: 'Concrete Choir' },
	{
		date: 'May 3',
		city: 'London',
		venue: 'Corsica Studios',
		act: 'Velvet Rust'
	},
	{
		date: 'May 17',
		city: 'Amsterdam',
		venue: 'Paradiso',
		act: 'PRISM Showcase'
	},
	{
		date: 'Jun 8',
		city: 'Paris',
		venue: 'La Maroquinerie',
		act: 'The Hollow Men'
	}
]

/** Future Payload mapping: tourDatesList. */
export function TourDates() {
	return (
		<section
			id='tour'
			className='border-[var(--ink)] border-t-2 px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='max-w-2xl pr-reveal'>
					<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
						Tour dates
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
						On the road
					</h2>
				</div>

				<ul className='mt-12'>
					{dates.map(d => (
						<li
							key={`${d.date}-${d.city}`}
							className='flex flex-col gap-2 border-[var(--line)] border-b-2 py-5 pr-reveal sm:flex-row sm:items-center sm:justify-between'
						>
							<div className='flex items-baseline gap-6'>
								<span className='font-[family-name:var(--font-display)] text-2xl uppercase [color:var(--magenta)]'>
									{d.date}
								</span>
								<div>
									<p className='font-bold text-lg uppercase'>{d.city}</p>
									<p className='text-sm [color:var(--mute)]'>{d.venue}</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<span className='font-semibold text-sm uppercase'>{d.act}</span>
								<a
									href='#contact'
									className='inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-5 font-bold text-sm uppercase [background:var(--lime)]'
								>
									Tickets
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
