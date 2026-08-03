/** Future Payload mapping: contactForm. Mobile-first, labelled. */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--clay)_8%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<div className='ci-reveal mb-8 text-center'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Commission or enquiry
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Custom chawan, wedding sets, and gallery orders — we reply within
						three days.
					</p>
				</div>

				<form className='ci-reveal w-full space-y-5'>
					<div>
						<label
							htmlFor='ci-name'
							className='mb-2 block font-medium text-sm [color:var(--ash)]'
						>
							Name
						</label>
						<input
							id='ci-name'
							type='text'
							autoComplete='name'
							placeholder='Your name'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--ash)] focus:border-[var(--ember)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ci-email'
							className='mb-2 block font-medium text-sm [color:var(--ash)]'
						>
							Email
						</label>
						<input
							id='ci-email'
							type='email'
							autoComplete='email'
							placeholder='you@example.com'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--ash)] focus:border-[var(--ember)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ci-subject'
							className='mb-2 block font-medium text-sm [color:var(--ash)]'
						>
							Subject
						</label>
						<select
							id='ci-subject'
							defaultValue='commission'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--ash)] focus:border-[var(--ember)]'
						>
							<option value='commission'>Custom commission</option>
							<option value='workshop'>Workshop booking</option>
							<option value='visit'>Studio visit</option>
							<option value='wholesale'>Wholesale enquiry</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='ci-message'
							className='mb-2 block font-medium text-sm [color:var(--ash)]'
						>
							Message
						</label>
						<textarea
							id='ci-message'
							rows={4}
							placeholder='Tell us about the piece you have in mind…'
							className='w-full rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-base outline-none transition-colors [color:var(--ash)] focus:border-[var(--ember)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<button
						type='button'
						className='min-h-12 w-full rounded-sm font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--paper)] hover:opacity-90'
					>
						Send enquiry
					</button>

					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview only — no message will be sent
					</p>
				</form>
			</div>
		</section>
	)
}
