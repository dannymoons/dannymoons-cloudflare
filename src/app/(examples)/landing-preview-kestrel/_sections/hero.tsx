/** Future Payload mapping: heroCinematic. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,color-mix(in_oklch,var(--earth)_40%,transparent),transparent_60%)]'
			/>
			<div className='mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
				<div className='ks-reveal'>
					<p className='mb-4 text-xs uppercase tracking-[0.32em] [color:var(--amber)]'>
						Wildlife documentary · Season IV
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.04] [color:var(--cream)]'>
						Films forged in the last wild places on earth.
					</h1>
					<p className='mt-6 max-w-lg text-lg leading-relaxed [color:var(--mute)]'>
						KESTREL is an expedition unit — cinematographers, biologists, and
						pilots — tracking species across tundra, rainforest, and open ocean
						for cinema and conservation.
					</p>
					<div className='mt-8 flex flex-wrap gap-4'>
						<a
							href='#expedition'
							className='inline-flex min-h-12 items-center rounded-sm px-7 [background:var(--amber)] [color:var(--night)]'
						>
							Follow the route
						</a>
						<a
							href='#gallery'
							className='inline-flex min-h-12 items-center rounded-sm border border-[var(--line)] px-7 [color:var(--fog)]'
						>
							Watch trailer
						</a>
					</div>
				</div>
				<div className='ks-reveal relative aspect-[4/5] overflow-hidden rounded-sm'>
					<div
						aria-hidden
						className='absolute inset-0 z-10 bg-gradient-to-t from-[var(--night)] via-transparent to-transparent'
					/>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/kestrel-hero/800/1000'
						alt='Expedition cinematographer at dawn'
						className='h-full w-full object-cover'
					/>
					<p className='absolute right-4 bottom-4 z-20 font-mono text-xs uppercase tracking-widest [color:var(--fog)]'>
						04:17 · 62°N · Roll A
					</p>
				</div>
			</div>
		</section>
	)
}
