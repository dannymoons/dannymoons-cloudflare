const frames = [
	{
		seed: 'kestrel-gal-1',
		caption: 'Ice shelf · Day 04',
		aspect: 'aspect-[4/5]'
	},
	{
		seed: 'kestrel-gal-2',
		caption: 'Canopy mist · Day 22',
		aspect: 'aspect-square'
	},
	{
		seed: 'kestrel-gal-3',
		caption: 'Drake crossing · Day 41',
		aspect: 'aspect-[16/10]'
	},
	{
		seed: 'kestrel-gal-4',
		caption: 'Atlas dawn · Day 58',
		aspect: 'aspect-[3/4]'
	},
	{
		seed: 'kestrel-gal-5',
		caption: 'Night vision · Day 11',
		aspect: 'aspect-square'
	},
	{
		seed: 'kestrel-gal-6',
		caption: 'Telemetry camp · Day 33',
		aspect: 'aspect-[4/5]'
	}
]

/** Future Payload mapping: galleryMasonry. */
export function Gallery() {
	return (
		<section id='gallery' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
						Frame log
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
						Selected frames from Route IV
					</h2>
				</div>

				<div className='mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3'>
					{frames.map(f => (
						<figure key={f.seed} className='ks-reveal mb-4 break-inside-avoid'>
							<div className={`${f.aspect} overflow-hidden rounded-sm`}>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${f.seed}/600/750`}
									alt={f.caption}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-2 font-mono text-xs uppercase tracking-widest [color:var(--mute)]'>
								{f.caption}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
