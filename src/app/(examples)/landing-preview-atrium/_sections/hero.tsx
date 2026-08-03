/** Future Payload mapping: heroStatement. */
export function Hero() {
	return (
		<section className='px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='at-reveal mb-8 max-w-xs text-xs uppercase tracking-[0.28em] [color:var(--concrete)]'>
					Architecture &amp; spatial design — Copenhagen
				</p>

				<h1 className='at-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(3.5rem,14vw,11rem)] uppercase leading-[0.88] tracking-[-0.02em]'>
					<span
						className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--ink), var(--gold), var(--ink))'
						}}
					>
						Architecture
					</span>
				</h1>

				<div
					aria-hidden
					className='at-reveal mt-8 h-px w-full max-w-md [background:var(--gold)] sm:mt-10 sm:max-w-lg'
				/>

				<div className='at-reveal mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-12'>
					<p className='max-w-md text-base leading-relaxed [color:var(--concrete)] lg:col-span-5'>
						We compose buildings as quiet instruments — proportion, light and
						material held in deliberate tension.
					</p>
					<p className='max-w-sm text-sm leading-relaxed [color:var(--concrete)] lg:col-span-4 lg:col-start-9'>
						Est. 2011. Residential, cultural and workspace commissions across
						Northern Europe.
					</p>
				</div>
			</div>
		</section>
	)
}
