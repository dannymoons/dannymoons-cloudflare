/** Future Payload mapping: contactForm. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16'>
				<div className='cp-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Partnerships
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.05]'>
						Build circular systems with us
					</h2>
					<p className='mt-4 max-w-md leading-relaxed [color:var(--mute)]'>
						Whether you&rsquo;re a brand ready to transition, an NGO seeking
						collaboration, or a community leader starting a chapter — we&rsquo;d
						love to hear from you.
					</p>
					<div className='mt-8 space-y-2 text-sm [color:var(--mute)]'>
						<p>
							<span className='[color:var(--bark)]'>General:</span>{' '}
							<a
								href='mailto:hello@canopy.collective'
								className='underline-offset-2 hover:underline'
							>
								hello@canopy.collective
							</a>
						</p>
						<p>
							<span className='[color:var(--bark)]'>Partnerships:</span>{' '}
							<a
								href='mailto:partners@canopy.collective'
								className='underline-offset-2 hover:underline'
							>
								partners@canopy.collective
							</a>
						</p>
					</div>
				</div>

				<form
					className='cp-reveal space-y-4 rounded-2xl border border-[var(--line)] p-6 sm:p-8'
					action='#'
					method='post'
				>
					<div>
						<label
							htmlFor='contact-name'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Name
						</label>
						<input
							id='contact-name'
							type='text'
							name='name'
							autoComplete='name'
							required
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-transparent px-4 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<div>
						<label
							htmlFor='contact-email'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='contact-email'
							type='email'
							name='email'
							autoComplete='email'
							required
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-transparent px-4 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<div>
						<label
							htmlFor='contact-type'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Inquiry type
						</label>
						<select
							id='contact-type'
							name='type'
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-transparent px-4 text-sm outline-none focus:border-[var(--leaf)]'
						>
							<option value='brand'>Brand partnership</option>
							<option value='ngo'>NGO collaboration</option>
							<option value='chapter'>Start a chapter</option>
							<option value='program'>Program application</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='contact-message'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Message
						</label>
						<textarea
							id='contact-message'
							name='message'
							rows={4}
							required
							className='w-full resize-y rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<button
						type='submit'
						className='min-h-12 w-full rounded-full [background:var(--earth)] [color:var(--sand)]'
					>
						Send inquiry
					</button>
				</form>
			</div>
		</section>
	)
}
