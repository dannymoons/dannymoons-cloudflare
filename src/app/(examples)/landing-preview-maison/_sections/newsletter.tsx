/** Future Payload mapping: newsletterSignup. */
export function Newsletter() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-24'>
			<div className='mx-auto ml-reveal max-w-lg text-center'>
				<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Correspondence
				</p>
				<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)]'>
					Join the maison list
				</h2>
				<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
					Receive invitations to private viewings, collection previews, and
					atelier open days.
				</p>
				<form
					className='mt-8 flex flex-col gap-3 sm:flex-row'
					action='#'
					method='post'
				>
					<label className='sr-only' htmlFor='newsletter-email'>
						Email address
					</label>
					<input
						id='newsletter-email'
						type='email'
						name='email'
						autoComplete='email'
						placeholder='your@email.com'
						className='min-h-12 flex-1 border border-[var(--line)] bg-transparent px-4 text-sm outline-none focus:border-[var(--gold)]'
					/>
					<button
						type='submit'
						className='min-h-12 shrink-0 border border-[var(--gold)] px-6 text-xs uppercase tracking-[0.18em] transition-colors [color:var(--gold)] hover:[background:var(--gold)] hover:[color:var(--noir)]'
					>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	)
}
