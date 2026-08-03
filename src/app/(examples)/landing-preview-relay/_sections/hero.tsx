	/** Future Payload mapping: heroBold. */
export function Hero() {
	return (
		<section className='relative overflow-hidden [background:var(--black)] [color:var(--white)]'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full opacity-40 blur-3xl [background:var(--orange)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-25 blur-3xl [background:var(--orange)]'
			/>

			<div className='relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32'>
				<div className='rl-reveal'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Endurance · Trail · Marathon
					</p>
					<h1 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.92] tracking-[0.02em]'>
						Run the <span className='[color:var(--orange)]'>relay</span>
					</h1>
					<p className='mt-6 max-w-lg text-base leading-relaxed [color:var(--gray)] sm:text-lg'>
						Split times. Elevation gain. Orange bib, black trail. Three races
						across the season — from city marathon to mountain ultra. Not a gym
						app. A start line.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#register'
							className='inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--orange)] [color:var(--black)] hover:opacity-90'
						>
							Enter a race
						</a>
						<a
							href='#races'
							className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-6 font-medium text-sm uppercase tracking-[0.1em] transition-colors [color:var(--white)] hover:border-[var(--orange)] hover:[color:var(--orange)]'
						>
							2026 calendar
						</a>
					</div>

					<dl className='rl-reveal mt-12 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--gray)]'>
								Races
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-3xl [color:var(--orange)]'>
								3
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--gray)]'>
								Max distance
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-3xl'>
								80K
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--gray)]'>
								Runners
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-3xl'>
								4.2K
							</dd>
						</div>
					</dl>
				</div>

				<div className='rl-reveal relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[3/4] lg:aspect-auto lg:min-h-[28rem]'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/relay-hero/900/1100'
						alt='Trail runners ascending a ridge at sunrise during Relay endurance race'
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div
						aria-hidden
						className='absolute inset-0 [background:linear-gradient(to_top,var(--black)_0%,transparent_45%)]'
					/>
					<div className='absolute right-4 bottom-4 left-4 rounded-sm border border-[var(--line)] p-4 backdrop-blur-sm [background:color-mix(in_oklch,var(--black)_75%,transparent)] sm:right-6 sm:bottom-6 sm:left-auto sm:max-w-xs'>
						<p className='font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.06em] [color:var(--orange)]'>
							Next start · 14 Jun
						</p>
						<p className='mt-1 text-sm [color:var(--gray)]'>
							Relay Trail 42K — Amersfoort heathlands
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
