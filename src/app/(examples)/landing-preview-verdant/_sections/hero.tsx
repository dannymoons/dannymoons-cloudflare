/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full opacity-30 blur-3xl [background:var(--sage)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
				<div>
					<p className='mb-4 text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Sustainability strategy
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02]'>
						We help ambitious brands grow without outgrowing the planet.
					</h1>
					<p className='mt-6 max-w-md text-lg leading-relaxed [color:var(--mute)]'>
						Verdant partners with Fortune 500 and scale-ups to turn climate
						commitments into measurable strategy — from supply chains to brand
						narrative.
					</p>
					<a
						href='#contact'
						className='mt-8 inline-flex min-h-12 items-center rounded-full px-7 text-white [background:var(--moss)]'
					>
						Book a discovery call
					</a>
				</div>
				<div className='aspect-[4/5] overflow-hidden rounded-3xl'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/verdant-hero/800/1000'
						alt='Forest canopy'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
