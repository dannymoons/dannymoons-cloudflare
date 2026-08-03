const races = [
	{
		name: 'Relay City',
		distance: '42.2 km',
		date: '22 Mar 2026',
		location: 'Rotterdam',
		terrain: 'Road marathon',
		status: 'Open',
		seed: 'relay-city'
	},
	{
		name: 'Relay Trail',
		distance: '42 km',
		date: '14 Jun 2026',
		location: 'Amersfoort',
		terrain: 'Trail · 1,200m gain',
		status: 'Open',
		seed: 'relay-trail'
	},
	{
		name: 'Relay Ultra',
		distance: '80 km',
		date: '4 Oct 2026',
		location: 'Veluwe',
		terrain: 'Mountain ultra',
		status: 'Waitlist',
		seed: 'relay-ultra'
	}
]

/** Future Payload mapping: raceCards. */
export function Races() {
	return (
		<section id='races' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						2026 season
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Three races. One season.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						From flat asphalt to forest singletrack. Chip timing, live splits,
						and aid stations every 8 km.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{races.map(r => (
						<article
							key={r.name}
							className='rl-reveal group overflow-hidden rounded-sm border border-[var(--line)]'
						>
							<div className='relative aspect-[16/10] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${r.seed}/640/400`}
									alt={r.name}
									className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
								<span
									className={`absolute top-3 right-3 rounded-sm px-2 py-1 font-medium text-xs uppercase tracking-[0.1em] ${r.status === 'Open' ? '[background:var(--orange)] [color:var(--black)]' : '[background:var(--black)] [color:var(--white)]'}`}
								>
									{r.status}
								</span>
							</div>
							<div className='p-5'>
								<p className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
									{r.date} · {r.location}
								</p>
								<h3 className='mt-2 font-[family-name:var(--font-display)] text-2xl uppercase [color:var(--black)]'>
									{r.name}
								</h3>
								<p className='mt-2 font-medium text-lg [color:var(--orange)]'>
									{r.distance}
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>{r.terrain}</p>
								<a
									href='#register'
									className='mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-sm font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--black)] [color:var(--white)] hover:opacity-90'
								>
									Register
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
