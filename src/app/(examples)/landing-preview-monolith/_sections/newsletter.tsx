/** Future Payload mapping: subscribeCta. Mobile-first, labelled. */
export function Newsletter() {
	return (
		<section
			id='subscribe'
			className='px-5 py-20 [background:var(--paper)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-end lg:gap-16'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-medium text-[clamp(2rem,6vw,3.75rem)] leading-[1.02]'>
						Four issues a year.
						<br />
						Zero algorithms.
					</h2>
					<p className='mt-5 max-w-md text-[var(--ink-soft)] leading-relaxed'>
						Join 60,000 readers who get Monolith delivered to their door — and a
						weekly note from the editors in between.
					</p>
				</div>

				<form className='w-full'>
					<label
						htmlFor='ml-email'
						className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--ink-soft)]'
					>
						Email address
					</label>
					<div className='flex flex-col gap-3 sm:flex-row'>
						<input
							id='ml-email'
							type='email'
							autoComplete='email'
							placeholder='you@studio.com'
							className='min-h-[3.25rem] flex-1 border-[var(--ink)] border-b bg-transparent px-1 text-base outline-none transition-colors focus:border-[var(--accent)] placeholder:[color:var(--ink-soft)]'
						/>
						<button
							type='button'
							className='inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-8 font-medium text-[var(--bg)] text-sm transition-opacity [background:var(--ink)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2'
						>
							Subscribe
						</button>
					</div>
					<p className='mt-3 text-xs [color:var(--ink-soft)]'>
						€60 / year · Cancel anytime · Concept preview only
					</p>
				</form>
			</div>
		</section>
	)
}
