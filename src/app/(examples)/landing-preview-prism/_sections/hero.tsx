const marqueeWords = [
	'VINYL ONLY',
	'★',
	'LOUD AS HELL',
	'★',
	'INDIE FOREVER',
	'★',
	'PRISM RECORDS',
	'★',
	'NO ALGORITHMS',
	'★'
]
const marqueeItems = [...marqueeWords, ...marqueeWords].map((label, i) => ({
	id: `pr-mq-${i}`,
	label
}))

/** Future Payload mapping: heroBrutalist. */
export function Hero() {
	return (
		<section className='relative overflow-hidden'>
			<div className='overflow-hidden border-[var(--ink)] border-b-2 [background:var(--magenta)] [color:var(--paper)]'>
				<div className='flex w-max whitespace-nowrap py-3 pr-marquee font-[family-name:var(--font-display)] text-lg uppercase tracking-wide'>
					{marqueeItems.map(item => (
						<span key={item.id} className='mx-4'>
							{item.label}
						</span>
					))}
				</div>
			</div>

			<div className='px-5 py-16 sm:px-8 sm:py-24'>
				<div className='mx-auto max-w-6xl'>
					<div className='grid gap-10 pr-reveal lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
						<div>
							<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
								Independent · Est. 2011 · Rotterdam
							</p>
							<h1 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.9] tracking-tight'>
								We press
								<br />
								<span className='[-webkit-text-stroke:2px_var(--ink)] [color:transparent]'>
									the noise
								</span>
								<br />
								you can&rsquo;t
								<br />
								<span className='[color:var(--magenta)]'>unhear.</span>
							</h1>
							<p className='mt-6 max-w-md text-lg leading-snug [color:var(--mute)]'>
								PRISM is a brutalist indie label — vinyl-first, artist-owned,
								and allergic to playlist culture. We sign bands that rattle
								walls.
							</p>
							<a
								href='#releases'
								className='mt-8 inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-8 font-bold uppercase [background:var(--ink)] [color:var(--paper)]'
							>
								Latest drops
							</a>
						</div>

						<div className='relative aspect-square overflow-hidden border-4 border-[var(--ink)] pr-reveal'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/prism-hero/720/720'
								alt='Vinyl record on turntable'
								className='h-full w-full object-cover'
							/>
							<div className='absolute right-0 bottom-0 border-[var(--ink)] border-t-2 border-l-2 px-4 py-2 font-bold text-sm uppercase [background:var(--lime)]'>
								33⅓ RPM
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
