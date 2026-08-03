/** Future Payload mapping: newsletterSubscribe. */
export function Subscribe() {
	return (
		<section
			id='subscribe'
			className='border-[var(--ink)] border-y-2 px-5 py-20 [background:var(--lime)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-2xl pr-reveal text-center'>
				<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--ink)]'>
					Subscribe
				</p>
				<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none [color:var(--ink)]'>
					Never miss a drop
				</h2>
				<p className='mt-4 [color:var(--ink)]/70'>
					New releases, tour dates, and label news — one email per month. No
					spam. Unsubscribe anytime.
				</p>
				<form className='mt-8 flex flex-col gap-3 sm:flex-row'>
					<input
						type='email'
						placeholder='your@email.com'
						className='min-h-12 flex-1 border-2 border-[var(--ink)] px-4 [background:var(--paper)]'
					/>
					<button
						type='submit'
						className='inline-flex min-h-12 items-center justify-center border-2 border-[var(--ink)] px-8 font-bold uppercase [background:var(--ink)] [color:var(--paper)]'
					>
						Join
					</button>
				</form>
			</div>
		</section>
	)
}
