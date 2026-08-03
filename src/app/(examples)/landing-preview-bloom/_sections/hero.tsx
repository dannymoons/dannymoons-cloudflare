/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full opacity-50 blur-3xl [background:var(--petal)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute bottom-10 left-0 h-56 w-56 rounded-full opacity-40 blur-3xl [background:var(--sky)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute top-1/2 right-1/4 h-40 w-40 rounded-full opacity-30 blur-2xl [background:var(--leaf)]'
			/>

			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='bl-reveal'>
					<p className='mb-4 font-semibold text-sm [color:var(--leaf)]'>
						Children&apos;s hospital wing fundraiser
					</p>
					<h1 className='font-[family-name:var(--font-display)] font-bold text-[clamp(2.25rem,7vw,4rem)] leading-[1.08] [color:var(--ink)]'>
						Every child deserves a room that feels like{' '}
						<span className='[color:var(--petal)]'>home</span>
					</h1>
					<p className='mt-6 max-w-md text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Bloom is raising £12 million to transform the pediatric oncology
						wing at Riverside Children&apos;s Hospital — warmer spaces, play
						therapy suites, and family accommodation under one roof.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#donate'
							className='inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold text-sm text-white transition-opacity [background:var(--petal)] hover:opacity-90'
						>
							Give today
						</a>
						<a
							href='#ward'
							className='inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--line)] px-7 font-semibold text-sm transition-colors hover:border-[var(--petal)] hover:[color:var(--petal)]'
						>
							See the vision
						</a>
					</div>

					<div className='mt-10 rounded-2xl border border-[var(--line)] p-4 [background:var(--sky)]/30'>
						<div className='flex items-center justify-between gap-4'>
							<div>
								<p className='font-semibold text-xs uppercase tracking-wide [color:var(--mute)]'>
									Campaign progress
								</p>
								<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-2xl [color:var(--ink)]'>
									£8.4M{' '}
									<span className='font-normal text-base [color:var(--mute)]'>
										of £12M
									</span>
								</p>
							</div>
							<span className='rounded-full px-3 py-1 font-semibold text-sm text-white [background:var(--leaf)]'>
								70%
							</span>
						</div>
						<div className='mt-3 h-2 overflow-hidden rounded-full [background:var(--line)]'>
							<div
								className='h-full rounded-full [background:var(--petal)]'
								style={{ width: '70%' }}
							/>
						</div>
					</div>
				</div>

				<div className='bl-reveal relative'>
					<div className='aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-lg'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/bloom-hero/700/875'
							alt='Bright, welcoming pediatric hospital room with soft colours and toys'
							className='h-full w-full object-cover'
						/>
					</div>
					<div
						aria-hidden
						className='absolute -right-3 -bottom-3 h-24 w-24 rounded-full opacity-60 [background:var(--leaf)]'
					/>
					<div
						aria-hidden
						className='absolute -top-3 -left-3 h-16 w-16 rounded-full opacity-50 [background:var(--petal)]'
					/>
				</div>
			</div>
		</section>
	)
}
