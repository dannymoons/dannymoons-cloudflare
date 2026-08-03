/** Future Payload mapping: heroSplit. */
export function Hero() {
	return (
		<section className='relative overflow-hidden'>
			<div className='grid min-h-[85dvh] grid-cols-1 lg:grid-cols-2'>
				<div className='flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-28'>
					<div className='ht-reveal mx-auto w-full max-w-xl lg:mx-0'>
						<p className='font-medium text-sm tracking-wide [color:var(--ember)]'>
							Farm-to-table · Neighborhood bistro
						</p>
						<h1 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,7vw,4rem)] leading-[1.12] [color:var(--wood)]'>
							Food from the{' '}
							<span
								className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
								style={{
									backgroundImage:
										'linear-gradient(120deg, var(--ember), var(--wheat), var(--ember))'
								}}
							>
								field to your table
							</span>
						</h1>
						<p className='mt-6 text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
							Wood-fired plates, morning harvests, and the kind of warmth you
							only find at a corner bistro that knows your name. No white
							tablecloths — just honest cooking.
						</p>
						<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
							<a
								href='#reservations'
								className='inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--cream)] hover:opacity-90'
							>
								Reserve a table
							</a>
							<a
								href='#menu'
								className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-6 font-medium text-sm transition-colors [color:var(--wood)] hover:border-[var(--ember)] hover:[color:var(--ember)]'
							>
								See today&apos;s menu
							</a>
						</div>
					</div>
				</div>

				<div className='relative min-h-[50dvh] lg:min-h-0'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/hearth-hero/1200/1400'
						alt='Wood-fired oven and open kitchen at Hearth'
						className='absolute inset-0 h-full w-full object-cover'
					/>
					<div
						aria-hidden
						className='absolute inset-0 lg:hidden'
						style={{
							background:
								'linear-gradient(to top, var(--cream) 0%, transparent 35%)'
						}}
					/>
					<div
						aria-hidden
						className='absolute inset-0 hidden lg:block'
						style={{
							background:
								'linear-gradient(to right, var(--cream) 0%, transparent 28%),' +
								'linear-gradient(to top, oklch(0.28 0.05 55 / 0.15) 0%, transparent 40%)'
						}}
					/>
					<div className='ht-reveal absolute right-5 bottom-6 left-5 rounded-sm border border-[var(--line)] p-4 backdrop-blur-sm [background:var(--cream)]/90 sm:right-8 sm:bottom-8 sm:left-auto sm:max-w-xs lg:right-10 lg:bottom-10'>
						<p className='font-[family-name:var(--font-display)] text-lg [color:var(--wood)]'>
							Fire lit at 4pm daily
						</p>
						<p className='mt-1 text-sm [color:var(--mute)]'>
							Sourdough, roasts, and whatever the farmers dropped off this
							morning.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
