/** Future Payload mapping: heroCinematic. */
export function Hero() {
	return (
		<section className='relative flex min-h-dvh items-end overflow-hidden'>
			{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
			<img
				src='https://picsum.photos/seed/solstice-hero/1600/1000'
				alt='Candlelit dining room at dusk'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div
				aria-hidden
				className='absolute inset-0'
				style={{
					background:
						'linear-gradient(to top, oklch(0.16 0.02 30 / 0.95) 0%, oklch(0.16 0.02 30 / 0.4) 45%, transparent 70%),' +
						'radial-gradient(ellipse 50% 40% at 75% 60%, oklch(0.75 0.1 80 / 0.18), transparent 65%),' +
						'radial-gradient(ellipse 35% 30% at 20% 70%, oklch(0.38 0.1 25 / 0.25), transparent 60%)'
				}}
			/>
			<div className='relative w-full px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24'>
				<div className='mx-auto max-w-6xl'>
					<p className='mb-4 text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Fine dining collective
					</p>
					<h1 className='max-w-3xl font-[family-name:var(--font-display)] font-light text-[clamp(2.5rem,8vw,5.5rem)] italic leading-[1.05] [color:var(--cream)]'>
						Where season becomes{' '}
						<span
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent not-italic [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--gold), var(--cream), var(--gold))'
							}}
						>
							ceremony
						</span>
					</h1>
					<p className='mt-6 max-w-md text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Three cities. One philosophy. Cuisine shaped by the turning of the
						earth — plated with reverence, served in silence.
					</p>
					<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#reservations'
							className='inline-flex min-h-12 items-center justify-center px-8 text-sm uppercase tracking-[0.16em] transition-opacity [background:var(--burgundy)] [color:var(--cream)] hover:opacity-90'
						>
							Book a table
						</a>
						<a
							href='#menu'
							className='inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-8 text-sm uppercase tracking-[0.16em] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
						>
							View tasting menu
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
