const frames = [
	{ seed: 'dw-gal-1', caption: 'Morning terrace', aspect: 'aspect-[4/5]' },
	{ seed: 'dw-gal-2', caption: 'Linen detail', aspect: 'aspect-square' },
	{ seed: 'dw-gal-3', caption: 'Cove at dusk', aspect: 'aspect-[16/10]' },
	{ seed: 'dw-gal-4', caption: 'Terracotta courtyard', aspect: 'aspect-[3/4]' },
	{ seed: 'dw-gal-5', caption: 'Salt pool', aspect: 'aspect-square' },
	{ seed: 'dw-gal-6', caption: 'Boat departure', aspect: 'aspect-[4/5]' }
]

/** Future Payload mapping: galleryMasonry. */
export function Gallery() {
	return (
		<section
			id='gallery'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--sand)]/30 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='dw-reveal max-w-2xl'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--sea)]'>
						Gallery
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						Light, linen, and horizon
					</h2>
				</div>

				<div className='mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3'>
					{frames.map(f => (
						<figure key={f.seed} className='dw-reveal mb-4 break-inside-avoid'>
							<div className={`${f.aspect} overflow-hidden`}>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${f.seed}/600/750`}
									alt={f.caption}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-2 text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'>
								{f.caption}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
