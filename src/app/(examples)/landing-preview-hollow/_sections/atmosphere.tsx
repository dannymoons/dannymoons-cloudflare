const details = [
	{
		title: 'Velvet & brass',
		desc: 'Burgundy booths, lacquered wood, and art deco sconces casting amber pools across the floor.'
	},
	{
		title: 'Jazz on vinyl',
		desc: 'No playlists. A curated wall of 78s and mono pressings — Coltrane, Billie, Django after midnight.'
	},
	{
		title: 'Low light policy',
		desc: 'Candles at every table. Phone screens dimmed by design. Photography discouraged, memory encouraged.'
	}
]

/** Future Payload mapping: atmosphereGallery. */
export function Atmosphere() {
	return (
		<section id='atmosphere' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12'>
					<div className='ho-reveal lg:col-span-5'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							The room
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
							Atmosphere by design
						</h2>
						<p className='mt-5 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Forty-two seats. No standing. Every detail calibrated for the
							feeling that you&rsquo;ve stepped out of time — and off the grid.
						</p>
						<ul className='mt-10 space-y-8'>
							{details.map(d => (
								<li key={d.title}>
									<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--gold)]'>
										{d.title}
									</h3>
									<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
										{d.desc}
									</p>
								</li>
							))}
						</ul>
					</div>

					<div className='ho-reveal grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4'>
						<figure className='col-span-2 aspect-[16/9] overflow-hidden'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/hollow-room/1200/675'
								alt='Art deco bar interior with velvet seating'
								className='h-full w-full object-cover'
							/>
						</figure>
						<figure className='aspect-square overflow-hidden'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/hollow-booth/600/600'
								alt='Velvet booth with candlelight'
								className='h-full w-full object-cover'
							/>
						</figure>
						<figure className='aspect-square overflow-hidden'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/hollow-bar/600/600'
								alt='Brass and marble bar top'
								className='h-full w-full object-cover'
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}
