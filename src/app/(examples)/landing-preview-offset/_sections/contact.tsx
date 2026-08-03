/** Future Payload mapping: contactForm. */
export function Contact() {
	return (
		<section
			id='contact'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--paper)_92%,var(--stone))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<p className='of-reveal text-center text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
					Project inquiry
				</p>
				<h2 className='of-reveal mt-3 text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Start a conversation
				</h2>
				<p className='of-reveal mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed [color:var(--mute)]'>
					Tell us about your site, your goals and your current carbon footprint.
					We respond within two business days.
				</p>
				<form className='of-reveal mt-10 space-y-5' action='#' method='post'>
					<div className='grid gap-5 sm:grid-cols-2'>
						<label className='block'>
							<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								First name
							</span>
							<input
								type='text'
								name='firstName'
								autoComplete='given-name'
								className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
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
								className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
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
							className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</label>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Company
						</span>
						<input
							type='text'
							name='company'
							autoComplete='organization'
							className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
						/>
					</label>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Project type
						</span>
						<select
							name='projectType'
							className='w-full border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
							defaultValue='audit'
						>
							<option value='audit'>Carbon audit</option>
							<option value='build'>New build</option>
							<option value='migrate'>Migration</option>
							<option value='maintain'>Ongoing maintenance</option>
						</select>
					</label>
					<label className='block'>
						<span className='mb-2 block text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Message
						</span>
						<textarea
							name='message'
							rows={4}
							className='w-full resize-none border-[var(--line)] border-b bg-transparent py-3 text-sm outline-none focus:border-[var(--forest)]'
							placeholder='Share your current URL, page count and any performance concerns.'
						/>
					</label>
					<button
						type='submit'
						className='mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full text-white text-xs uppercase tracking-[0.14em] [background:var(--forest)]'
					>
						Submit inquiry
					</button>
				</form>
			</div>
		</section>
	)
}
