/** Future Payload mapping: bookingForm. Mobile-first, labelled. */
export function Schedule() {
	return (
		<section
			id='schedule'
			className='px-5 py-20 [background:var(--slate)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<div className='rs-reveal mb-10 text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--coral)]'>
						Appointments
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] text-white leading-[1.06]'>
						Book your first visit
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						New patients seen within 48 hours · No referral required
					</p>
				</div>

				<form className='rs-reveal w-full space-y-5'>
					<div>
						<label
							htmlFor='rs-name'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Full name
						</label>
						<input
							id='rs-name'
							type='text'
							autoComplete='name'
							placeholder='Jane Smith'
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-white/5 px-4 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--coral)]'
						/>
					</div>

					<div>
						<label
							htmlFor='rs-date'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Preferred date
						</label>
						<input
							id='rs-date'
							type='date'
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-white/5 px-4 text-base text-white outline-none transition-colors focus:border-[var(--coral)]'
						/>
					</div>

					<div>
						<label
							htmlFor='rs-concern'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Primary concern
						</label>
						<textarea
							id='rs-concern'
							rows={4}
							placeholder='Describe your injury, pain, or rehabilitation goal…'
							className='w-full rounded-lg border border-[var(--line)] bg-white/5 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--coral)]'
						/>
					</div>

					<button
						type='button'
						className='min-h-12 w-full rounded-full text-sm text-white transition-opacity [background:var(--coral)] hover:opacity-90'
					>
						Request appointment
					</button>

					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview only — no booking will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
