/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-25 blur-3xl [background:var(--lime)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
				<div>
					<p className='mb-4 text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Carbon-first web design
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02]'>
						Websites that weigh{' '}
						<span
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--forest), var(--lime), var(--forest))'
							}}
						>
							less than a feather
						</span>
						.
					</h1>
					<p className='mt-6 max-w-md text-sm leading-relaxed [color:var(--mute)]'>
						OFFSET builds low-carbon digital experiences — performance budgets,
						green hosting, and lean code that keeps every page load honest about
						its environmental cost.
					</p>
					<div className='mt-8 flex flex-wrap gap-4'>
						<a
							href='#contact'
							className='inline-flex min-h-12 items-center rounded-full px-7 text-white text-xs uppercase tracking-[0.14em] [background:var(--forest)]'
						>
							Request an audit
						</a>
						<a
							href='#work'
							className='inline-flex min-h-12 items-center rounded-full border border-[var(--line)] px-7 text-xs uppercase tracking-[0.14em] [color:var(--ink)]'
						>
							View work
						</a>
					</div>
				</div>
				<div className='of-reveal aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--line)]'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/offset-hero/800/1000'
						alt='Minimal landscape'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
