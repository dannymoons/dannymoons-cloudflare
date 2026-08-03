/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute top-0 -right-20 h-80 w-80 rounded-full opacity-40 blur-3xl [background:var(--mint)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ha-reveal'>
					<p className='mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs [background:var(--mint)] [color:var(--leaf)]'>
						<span className='h-1.5 w-1.5 rounded-full [background:var(--leaf)]' />
						Personal sustainability coach
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] [color:var(--ink)]'>
						Green living,{' '}
						<span className='italic [color:var(--leaf)]'>one gentle habit</span>{' '}
						at a time.
					</h1>
					<p className='mt-6 max-w-lg text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Habit turns overwhelming climate anxiety into daily wins —
						personalised nudges, progress tracking, and a community that
						celebrates every step forward.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#download'
							className='inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm transition-opacity [background:var(--leaf)] [color:var(--cream)] hover:opacity-90'
						>
							Download free
						</a>
						<a
							href='#app-preview'
							className='inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-8 text-sm transition-colors hover:border-[var(--leaf)] hover:[color:var(--leaf)]'
						>
							See the app
						</a>
					</div>
					<p className='mt-6 text-sm [color:var(--mute)]'>
						★ 4.9 on App Store · 280k active members · No guilt, just progress
					</p>
				</div>

				<div className='ha-reveal relative mx-auto w-full max-w-sm'>
					<div className='aspect-[9/19] overflow-hidden rounded-[2rem] border-4 border-[var(--ink)] shadow-xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/habit-hero/390/820'
							alt='Habit app home screen showing daily sustainability streak'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='absolute top-12 -right-4 hidden rounded-2xl border border-[var(--line)] p-4 [background:var(--cream)] sm:block'>
						<p className='font-[family-name:var(--font-display)] text-lg [color:var(--leaf)]'>
							🔥 42-day streak
						</p>
						<p className='mt-1 text-xs [color:var(--mute)]'>
							−18 kg CO₂e this month
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
