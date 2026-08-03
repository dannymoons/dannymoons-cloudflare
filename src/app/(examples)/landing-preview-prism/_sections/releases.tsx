const releases = [
	{
		title: 'Glass Cathedral',
		artist: 'Static Bloom',
		format: 'LP · Limited 500',
		date: 'Mar 2026',
		seed: 'prism-rel-1'
	},
	{
		title: 'Brutalist Lullabies',
		artist: 'Concrete Choir',
		format: 'LP · Standard',
		date: 'Jan 2026',
		seed: 'prism-rel-2'
	},
	{
		title: 'Slow Collapse',
		artist: 'Velvet Rust',
		format: '2×LP · Gatefold',
		date: 'Nov 2025',
		seed: 'prism-rel-3'
	},
	{
		title: 'First Ritual',
		artist: 'The Hollow Men',
		format: 'LP · Debut',
		date: 'Sep 2025',
		seed: 'prism-rel-4'
	}
]

/** Future Payload mapping: releaseCatalog. */
export function Releases() {
	return (
		<section
			id='releases'
			className='px-5 py-20 [background:var(--ink)] [color:var(--paper)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pr-reveal'>
					<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--lime)]'>
						Releases
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
						Fresh wax
					</h2>
				</div>

				<ul className='mt-12 divide-y-2 divide-[var(--paper)]/20'>
					{releases.map(r => (
						<li
							key={r.seed}
							className='flex flex-col gap-4 py-6 pr-reveal sm:flex-row sm:items-center'
						>
							<div className='h-20 w-20 shrink-0 overflow-hidden border-2 border-[var(--paper)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${r.seed}/160/160`}
									alt={`${r.title} cover`}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='min-w-0 flex-1'>
								<p className='font-[family-name:var(--font-display)] text-2xl uppercase'>
									{r.title}
								</p>
								<p className='text-sm [color:var(--paper)]/60'>{r.artist}</p>
							</div>
							<div className='flex shrink-0 flex-wrap gap-4 text-sm'>
								<span className='font-bold uppercase [color:var(--lime)]'>
									{r.format}
								</span>
								<span className='[color:var(--paper)]/50'>{r.date}</span>
							</div>
							<a
								href='#merch'
								className='inline-flex min-h-12 shrink-0 items-center border-2 border-[var(--paper)] px-5 font-bold text-sm uppercase hover:[background:var(--magenta)]'
							>
								Order
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
