/** Future Payload mapping: heroCinematic (Mediterranean coastal boutique). */
export function Hero() {
	return (
		<section className='relative flex min-h-dvh items-end overflow-hidden'>
			{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
			<img
				src='https://picsum.photos/seed/driftwood-hero/1600/1000'
				alt='Whitewashed coastal hotel terrace overlooking the Mediterranean'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div
				aria-hidden
				className='absolute inset-0'
				style={{
					background:
						'linear-gradient(to top, oklch(0.98 0.01 90 / 0.97) 0%, oklch(0.94 0.03 85 / 0.55) 38%, transparent 68%),' +
						'radial-gradient(ellipse 50% 40% at 80% 25%, oklch(0.52 0.1 230 / 0.2), transparent 60%),' +
						'radial-gradient(ellipse 35% 30% at 15% 70%, oklch(0.58 0.12 45 / 0.12), transparent 55%)'
				}}
			/>
			<div className='relative w-full px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24'>
				<div className='mx-auto max-w-6xl'>
					<div className='mb-6 flex items-center gap-4'>
						<span aria-hidden className='h-px w-12 [background:var(--terra)]' />
						<p className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--sea)]'>
							Costa Brava · Boutique hotel
						</p>
					</div>
					<h1 className='max-w-4xl font-[family-name:var(--font-display)] font-medium text-[clamp(2.5rem,8vw,5.25rem)] leading-[1.06] [color:var(--ink)]'>
						Where linen meets{' '}
						<span className='block italic [color:var(--sea)]'>
							the open sea
						</span>
					</h1>
					<p className='mt-6 max-w-md text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Twelve rooms carved into sun-bleached stone — terracotta floors,
						salt-air terraces, and horizons that never hurry.
					</p>
					<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#bookings'
							className='inline-flex min-h-12 items-center justify-center px-8 font-medium text-sm uppercase tracking-[0.16em] transition-opacity [background:var(--terra)] [color:var(--linen)] hover:opacity-90'
						>
							Check availability
						</a>
						<a
							href='#rooms'
							className='inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-8 font-medium text-sm uppercase tracking-[0.16em] transition-colors hover:border-[var(--sea)] hover:[color:var(--sea)]'
						>
							View rooms
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
