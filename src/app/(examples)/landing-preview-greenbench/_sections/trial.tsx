/** Future Payload mapping: trialCta. */
export function Trial() {
	return (
		<section
			id='trial'
			className='px-5 py-20 [background:var(--green)] [color:var(--white)] sm:px-8 sm:py-28'
		>
			<div className='gb-reveal mx-auto max-w-2xl text-center'>
				<p className='text-xs uppercase tracking-[0.24em] opacity-80'>
					14-day free trial
				</p>
				<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
					Score your first 5 client sites today
				</h2>
				<p className='mt-4 text-sm leading-relaxed opacity-85 sm:text-base'>
					No credit card required. Connect your hosting stack and see your
					agency score in under 30 minutes.
				</p>
				<form className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
					<input
						type='email'
						placeholder='Work email'
						className='min-h-12 flex-1 rounded-lg border border-[color:oklch(1_0_0/0.2)] bg-[color:oklch(1_0_0/0.1)] px-4 text-sm outline-none placeholder:opacity-60 sm:max-w-xs'
					/>
					<button
						type='button'
						className='min-h-12 rounded-lg px-8 font-medium text-sm transition-opacity [background:var(--white)] [color:var(--green)] hover:opacity-90'
					>
						Start free trial
					</button>
				</form>
			</div>
		</section>
	)
}
