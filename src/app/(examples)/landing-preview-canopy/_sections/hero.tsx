/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative min-h-[85dvh] overflow-hidden'>
			<div
				aria-hidden
				className='absolute inset-0 [background:linear-gradient(165deg,var(--earth)_0%,color-mix(in_oklch,var(--bark)_70%,var(--earth))_45%,var(--bark)_100%)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl [background:var(--leaf)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute bottom-0 left-0 h-64 w-full opacity-20 [background:linear-gradient(to_top,var(--sand),transparent)]'
			/>

			<div className='relative mx-auto flex min-h-[85dvh] max-w-6xl flex-col justify-end px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24'>
				<p className='mb-5 text-xs uppercase tracking-[0.32em] [color:var(--sun)]'>
					Regenerative sustainability collective
				</p>
				<h1 className='max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.5rem)] leading-[1.02] [color:var(--sand)]'>
					<span
						className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--sun), var(--leaf), var(--sun))'
						}}
					>
						Regeneration
					</span>{' '}
					is the new growth.
				</h1>
				<p className='mt-6 max-w-xl text-lg leading-relaxed [color:color-mix(in_oklch,var(--sand)_75%,transparent)]'>
					Canopy unites brands, farmers, and communities in a circular economy —
					where every product returns nutrients to the soil and every supply
					chain heals what it touches.
				</p>
				<div className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'>
					<a
						href='#programs'
						className='inline-flex min-h-12 items-center justify-center rounded-full px-8 [background:var(--sun)] [color:var(--bark)]'
					>
						Explore programs
					</a>
					<a
						href='#vision'
						className='inline-flex min-h-12 items-center justify-center rounded-full border border-[color-mix(in_oklch,var(--sand)_35%,transparent)] px-8 [color:var(--sand)]'
					>
						Our vision
					</a>
				</div>
			</div>
		</section>
	)
}
