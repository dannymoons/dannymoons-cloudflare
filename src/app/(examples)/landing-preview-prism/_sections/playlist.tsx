const tracks = [
	{ num: '01', title: 'Glass Cathedral', artist: 'Static Bloom', dur: '4:12' },
	{
		num: '02',
		title: 'Brutalist Lullabies',
		artist: 'Concrete Choir',
		dur: '3:48'
	},
	{ num: '03', title: 'Slow Collapse', artist: 'Velvet Rust', dur: '5:21' },
	{ num: '04', title: 'First Ritual', artist: 'The Hollow Men', dur: '6:03' },
	{ num: '05', title: 'Feedback Prayer', artist: 'Static Bloom', dur: '3:17' },
	{ num: '06', title: 'Rotterdam Winter', artist: 'PRISM Comp.', dur: '4:55' }
]

/** Future Payload mapping: playlistEmbed. */
export function Playlist() {
	return (
		<section
			id='playlist'
			className='px-5 py-20 [background:var(--ink)] [color:var(--paper)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 pr-reveal lg:grid-cols-[0.9fr_1.1fr]'>
					<div>
						<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--lime)]'>
							Playlist
						</p>
						<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none'>
							PRISM Selects
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--paper)]/60'>
							Six tracks from the roster — updated monthly. No algorithms. Just
							what we are spinning in the studio.
						</p>
						<div className='mt-8 aspect-square max-w-xs overflow-hidden border-4 border-[var(--paper)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/prism-playlist/400/400'
								alt='Playlist cover art'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>

					<ol className='divide-y-2 divide-[var(--paper)]/15'>
						{tracks.map(t => (
							<li
								key={t.num}
								className='flex items-center gap-4 py-4 pr-reveal'
							>
								<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--magenta)]'>
									{t.num}
								</span>
								<div className='min-w-0 flex-1'>
									<p className='truncate font-bold uppercase'>{t.title}</p>
									<p className='truncate text-sm [color:var(--paper)]/50'>
										{t.artist}
									</p>
								</div>
								<span className='shrink-0 font-mono text-sm [color:var(--paper)]/40'>
									{t.dur}
								</span>
							</li>
						))}
					</ol>
				</div>

				<a
					href='#subscribe'
					className='mt-10 inline-flex min-h-12 items-center border-2 border-[var(--paper)] px-7 pr-reveal font-bold uppercase [color:var(--paper)] hover:[background:var(--magenta)]'
				>
					Get the full mixtape
				</a>
			</div>
		</section>
	)
}
