/** Future Payload mapping: contactForm. */
export function Appointment() {
	return (
		<section
			id='appointment'
			className='px-5 py-20 [background:oklch(0.10_0.005_80)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<p className='ml-reveal text-center text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Private fitting
				</p>
				<h2 className='mt-3 ml-reveal text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Request an appointment
				</h2>
				<p className='mx-auto mt-4 ml-reveal max-w-sm text-center text-sm leading-relaxed [color:var(--mute)]'>
					Our client advisors respond within forty-eight hours to arrange a
					private fitting at the maison of your choice.
				</p>
				<form className='mt-10 ml-reveal space-y-5' action='#' method='post'>
					<div className='grid gap-5 sm:grid-cols-2'>
						<label className='block'>
							<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								First name
							</span>
							<input
								type='text'
								name='firstName'
								autoComplete='given-name'
								className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--gold)]'
							/>
						</label>
						<label className='block'>
							<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								Last name
							</span>
							<input
								type='text'
								name='lastName'
								autoComplete='family-name'
								className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--gold)]'
							/>
						</label>
					</div>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Email
						</span>
						<input
							type='email'
							name='email'
							autoComplete='email'
							className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--gold)]'
						/>
					</label>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Preferred maison
						</span>
						<select
							name='location'
							className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--gold)]'
							defaultValue='paris'
						>
							<option value='paris'>Paris</option>
							<option value='milan'>Milan</option>
							<option value='tokyo'>Tokyo</option>
						</select>
					</label>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Message
						</span>
						<textarea
							name='message'
							rows={4}
							className='w-full resize-none border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--gold)]'
							placeholder='Tell us about the occasion or garment you have in mind.'
						/>
					</label>
					<button
						type='submit'
						className='mt-4 w-full border border-[var(--gold)] py-4 text-xs uppercase tracking-[0.22em] transition-colors [color:var(--gold)] hover:[background:var(--gold)] hover:[color:var(--noir)]'
					>
						Submit request
					</button>
				</form>
			</div>
		</section>
	)
}
