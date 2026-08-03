const bands = [
	{ name: 'Static Bloom', genre: 'Noise pop', seed: 'prism-band-1', albums: 3 },
	{
		name: 'Concrete Choir',
		genre: 'Post-punk',
		seed: 'prism-band-2',
		albums: 2
	},
	{ name: 'Velvet Rust', genre: 'Shoegaze', seed: 'prism-band-3', albums: 4 },
	{ name: 'The Hollow Men', genre: 'Art rock', seed: 'prism-band-4', albums: 1 }
]

/** Future Payload mapping: artistRoster. */
export function Roster() {
	return (
		<section
			id='roster'
			className='border-[var(--ink)] border-t-2 px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='flex flex-wrap items-end justify-between gap-4 pr-reveal'>
					<div>
						<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
							Roster
						</p>
						<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
							Signed &amp; dangerous
						</h2>
					</div>
					<p className='max-w-xs text-sm [color:var(--mute)]'>
						Every artist keeps masters. We take 15% and stay out of the way.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2'>
					{bands.map(b => (
						<article
							key={b.seed}
							className='group border-2 border-[var(--ink)] pr-reveal [background:var(--paper)]'
						>
							<div className='aspect-[16/10] overflow-hidden border-[var(--ink)] border-b-2'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${b.seed}/640/400`}
									alt={b.name}
									className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
								/>
							</div>
							<div className='flex items-baseline justify-between p-5'>
								<div>
									<h3 className='font-[family-name:var(--font-display)] text-2xl uppercase'>
										{b.name}
									</h3>
									<p className='mt-1 text-sm [color:var(--mute)]'>{b.genre}</p>
								</div>
								<span className='font-bold text-sm [color:var(--magenta)]'>
									{b.albums} LPs
								</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
