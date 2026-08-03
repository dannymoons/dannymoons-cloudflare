/** Future Payload mapping: atmosphericScene. */
export function CandlelitTable() {
	return (
		<section className='relative min-h-[70dvh] overflow-hidden'>
			{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
			<img
				src='https://picsum.photos/seed/solstice-table/1920/1080'
				alt='Long dining table lit by candles and low amber light'
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div
				aria-hidden
				className='absolute inset-0'
				style={{
					background:
						'linear-gradient(to top, oklch(0.16 0.02 30 / 0.92) 0%, oklch(0.16 0.02 30 / 0.5) 40%, transparent 75%),' +
						'radial-gradient(ellipse 60% 50% at 50% 80%, oklch(0.75 0.1 80 / 0.2), transparent 70%)'
				}}
			/>

			<div className='relative flex min-h-[70dvh] flex-col justify-end px-5 py-16 sm:px-8 sm:py-24'>
				<div className='mx-auto w-full max-w-6xl text-center'>
					<p className='so-reveal text-xs uppercase tracking-[0.32em] [color:var(--gold)]'>
						The table
					</p>
					<h2 className='so-reveal mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] italic leading-[1.1] [color:var(--cream)]'>
						Twelve seats. One flame between each pair of hands.
					</h2>
					<p className='so-reveal mx-auto mt-6 max-w-xl text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Our candlelit service runs without music — only the sound of
						porcelain, poured wine, and the quiet choreography of service.
					</p>
					<a
						href='#reservations'
						className='so-reveal mt-10 inline-flex min-h-12 items-center border border-[var(--gold)] px-10 text-xs uppercase tracking-[0.2em] transition-colors hover:[background:var(--gold)] hover:[color:var(--noir)]'
					>
						Reserve the chef&apos;s table
					</a>
				</div>
			</div>
		</section>
	)
}
