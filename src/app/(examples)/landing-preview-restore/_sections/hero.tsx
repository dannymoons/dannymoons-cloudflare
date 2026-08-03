/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl [background:var(--sky)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='rs-reveal'>
					<p className='mb-4 text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Physical therapy &amp; rehabilitation
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.04] [color:var(--slate)]'>
						Move{' '}
						<span
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--ocean), var(--coral), var(--ocean))'
							}}
						>
							without limits
						</span>
					</h1>
					<p className='mt-6 max-w-md text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Evidence-based physiotherapy that restores strength, mobility, and
						confidence — from post-surgical recovery to peak athletic
						performance.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#schedule'
							className='inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm text-white transition-opacity [background:var(--ocean)] hover:opacity-90'
						>
							Schedule a visit
						</a>
						<a
							href='#approach'
							className='inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-7 text-sm transition-colors hover:border-[var(--ocean)] hover:[color:var(--ocean)]'
						>
							Our approach
						</a>
					</div>
				</div>

				<div className='rs-reveal grid grid-cols-2 gap-3 sm:gap-4'>
					<div className='aspect-[3/4] overflow-hidden rounded-2xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/restore-hero/600/800'
							alt='Therapist guiding a patient through rehabilitation exercises'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='mt-8 aspect-[3/4] overflow-hidden rounded-2xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/restore-hero-b/600/800'
							alt='Modern physiotherapy clinic treatment room'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
