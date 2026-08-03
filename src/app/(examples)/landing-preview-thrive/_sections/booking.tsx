/** Future Payload mapping: bookingForm. */
export function Booking() {
	return (
		<section id='booking' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Book a call
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						30-minute discovery call — no obligation
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Tell us about your role and what you are navigating. We will confirm
						a time within 48 hours.
					</p>
				</div>

				<form className='th-reveal mt-10 space-y-4 rounded-2xl border border-[var(--line)] p-6 [background:color-mix(in_oklch,var(--forest)_3%,var(--sage))]'>
					<div>
						<label
							htmlFor='th-name'
							className='block text-xs [color:var(--mute)]'
						>
							Full name
						</label>
						<input
							id='th-name'
							type='text'
							className='mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</div>
					<div>
						<label
							htmlFor='th-email'
							className='block text-xs [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='th-email'
							type='email'
							className='mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</div>
					<div>
						<label
							htmlFor='th-role'
							className='block text-xs [color:var(--mute)]'
						>
							Current role
						</label>
						<input
							id='th-role'
							type='text'
							className='mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</div>
					<div>
						<label
							htmlFor='th-focus'
							className='block text-xs [color:var(--mute)]'
						>
							What would you like to focus on?
						</label>
						<textarea
							id='th-focus'
							rows={3}
							className='mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</div>
					<button
						type='button'
						className='min-h-12 w-full rounded-full text-sm transition-opacity [background:var(--forest)] [color:var(--sage)] hover:opacity-90'
					>
						Request discovery call
					</button>
				</form>
			</div>
		</section>
	)
}
