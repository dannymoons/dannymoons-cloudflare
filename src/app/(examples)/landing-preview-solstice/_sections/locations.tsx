const addresses = [
	{
		city: 'Amsterdam',
		venue: 'Solstice Canal House',
		street: 'Keizersgracht 324',
		postal: '1016 EZ Amsterdam',
		country: 'Netherlands',
		phone: '+31 20 123 4567',
		hours: 'Tue–Sat · 18:30 & 21:00 seatings'
	},
	{
		city: 'London',
		venue: 'Solstice Mayfair',
		street: '14 Bruton Place',
		postal: 'W1J 6NL London',
		country: 'United Kingdom',
		phone: '+44 20 7946 0123',
		hours: 'Wed–Sat · 19:00 & 21:30 seatings'
	},
	{
		city: 'Copenhagen',
		venue: 'Solstice Harbour',
		street: 'Toldbodgade 24',
		postal: '1253 Copenhagen K',
		country: 'Denmark',
		phone: '+45 33 12 4567',
		hours: 'Thu–Sun · 18:00 & 20:30 seatings'
	}
]

/** Future Payload mapping: locationList. */
export function Locations() {
	return (
		<section
			id='locations'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='so-reveal mb-12'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Find us
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Three cities
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{addresses.map(loc => (
						<address key={loc.city} className='so-reveal not-italic'>
							<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--cream)]'>
								{loc.venue}
							</h3>
							<p className='mt-1 text-xs uppercase tracking-[0.16em] [color:var(--gold)]'>
								{loc.city}
							</p>
							<div className='mt-5 space-y-1 text-sm leading-relaxed [color:var(--mute)]'>
								<p>{loc.street}</p>
								<p>{loc.postal}</p>
								<p>{loc.country}</p>
							</div>
							<p className='mt-5 text-sm [color:var(--cream)]'>
								<a
									href={`tel:${loc.phone.replace(/\s/g, '')}`}
									className='transition-colors hover:[color:var(--gold)]'
								>
									{loc.phone}
								</a>
							</p>
							<p className='mt-2 text-xs [color:var(--mute)]'>{loc.hours}</p>
						</address>
					))}
				</div>
			</div>
		</section>
	)
}
