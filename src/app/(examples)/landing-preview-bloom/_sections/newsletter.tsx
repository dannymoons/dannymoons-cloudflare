/** Future Payload mapping: newsletterSignup. Mobile-first, labelled. */
export function Newsletter() {
	return (
		<section id='newsletter' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='bl-reveal mx-auto max-w-xl rounded-3xl border border-[var(--line)] p-8 text-center [background:var(--blush)] sm:p-10'>
				<p className='text-3xl' aria-hidden>
					🌸
				</p>
				<h2 className='mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,4vw,2.25rem)] [color:var(--ink)]'>
					Stay in the Bloom
				</h2>
				<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
					Monthly updates on construction progress, patient stories, and
					upcoming events. No spam — unsubscribe anytime.
				</p>

				<form className='mt-6 flex flex-col gap-3 sm:flex-row'>
					<label className='sr-only' htmlFor='bloom-email'>
						Email address
					</label>
					<input
						id='bloom-email'
						type='email'
						placeholder='you@example.com'
						className='min-h-12 flex-1 rounded-full border border-[var(--line)] px-5 text-sm [background:var(--blush)] [color:var(--ink)]'
					/>
					<button
						type='button'
						className='inline-flex min-h-12 items-center justify-center rounded-full px-7 font-semibold text-sm text-white transition-opacity [background:var(--petal)] hover:opacity-90'
					>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	)
}
