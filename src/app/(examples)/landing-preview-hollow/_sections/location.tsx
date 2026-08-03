/** Future Payload mapping: locationSingle (hidden address). */
export function Location() {
	return (
		<section
			id='location'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
					<div className='ho-reveal'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							Find us
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
							Prinsengracht, unmarked
						</h2>
						<address className='mt-6 space-y-1 text-sm not-italic leading-relaxed [color:var(--mute)] sm:text-base'>
							<p>Look for the brass owl</p>
							<p>1016 Amsterdam</p>
							<p>Netherlands</p>
						</address>
						<p className='mt-6 text-sm [color:var(--cream)]'>
							<a
								href='tel:+31201234567'
								className='transition-colors hover:[color:var(--gold)]'
							>
								+31 20 123 4567
							</a>
						</p>
						<p className='mt-2 text-xs [color:var(--mute)]'>
							Wed–Sat · 21:00–02:00 · No map pin — by design
						</p>
					</div>

					<figure className='ho-reveal aspect-[4/3] overflow-hidden border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/hollow-street/900/675'
							alt='Canal-side Amsterdam street at night'
							className='h-full w-full object-cover grayscale-[30%]'
						/>
					</figure>
				</div>
			</div>
		</section>
	)
}
