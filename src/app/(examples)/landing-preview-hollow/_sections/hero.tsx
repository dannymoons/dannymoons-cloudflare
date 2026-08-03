/** Future Payload mapping: heroCinematic (speakeasy, art deco). */
export function Hero() {
	return (
		<section className='relative flex min-h-dvh items-end overflow-hidden'>
			{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
			<img
				src='https://picsum.photos/seed/hollow-hero/1600/1000'
				alt='Velvet-draped speakeasy bar with art deco lighting'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div
				aria-hidden
				className='absolute inset-0'
				style={{
					background:
						'linear-gradient(to top, oklch(0.18 0.06 25 / 0.97) 0%, oklch(0.18 0.06 25 / 0.55) 40%, transparent 72%),' +
						'radial-gradient(ellipse 45% 35% at 15% 80%, oklch(0.72 0.1 80 / 0.15), transparent 60%),' +
						'radial-gradient(ellipse 30% 25% at 85% 30%, oklch(0.28 0.02 280 / 0.4), transparent 55%)'
				}}
			/>
			<div className='relative w-full px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24'>
				<div className='mx-auto max-w-6xl'>
					<div className='mb-6 flex items-center gap-4'>
						<span aria-hidden className='h-px w-12 [background:var(--gold)]' />
						<p className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							Speakeasy · Est. 1923
						</p>
					</div>
					<h1 className='max-w-4xl font-[family-name:var(--font-display)] font-medium text-[clamp(2.25rem,8vw,5rem)] leading-[1.08] tracking-[0.06em] [color:var(--cream)]'>
						Behind the unmarked door,{' '}
						<span className='block italic tracking-[0.04em] [color:var(--gold)]'>
							the night remembers
						</span>
					</h1>
					<p className='mt-6 max-w-md text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						A velvet-lined sanctuary for stirred classics, rare spirits, and
						conversations that outlast last call.
					</p>
					<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#entrance'
							className='inline-flex min-h-12 items-center justify-center px-8 text-sm uppercase tracking-[0.18em] transition-opacity [background:var(--gold)] [color:var(--velvet)] hover:opacity-90'
						>
							Seek the entrance
						</a>
						<a
							href='#cocktails'
							className='inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-8 text-sm uppercase tracking-[0.18em] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
						>
							View the list
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
