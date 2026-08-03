/** Future Payload mapping: contactForm. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16'>
				<div className='rl-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						Start with a 45-minute briefing
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Tell us about your brand, your sustainability commitments, and where
						marketing feels exposed. We will respond within two business days
						with a tailored scope.
					</p>
					<dl className='mt-8 space-y-4 text-sm'>
						<div>
							<dt className='[color:var(--mute)]'>Email</dt>
							<dd className='mt-1 [color:var(--ink)]'>hello@rootline.co</dd>
						</div>
						<div>
							<dt className='[color:var(--mute)]'>Offices</dt>
							<dd className='mt-1 [color:var(--ink)]'>
								London · Amsterdam · New York
							</dd>
						</div>
					</dl>
				</div>

				<form className='rl-reveal space-y-4 rounded-sm border border-[var(--line)] p-6 [background:color-mix(in_oklch,var(--teal)_3%,var(--sand))]'>
					<div>
						<label
							htmlFor='rl-name'
							className='block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Name
						</label>
						<input
							id='rl-name'
							type='text'
							className='mt-2 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--teal)]'
						/>
					</div>
					<div>
						<label
							htmlFor='rl-email'
							className='block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Work email
						</label>
						<input
							id='rl-email'
							type='email'
							className='mt-2 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--teal)]'
						/>
					</div>
					<div>
						<label
							htmlFor='rl-company'
							className='block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Company
						</label>
						<input
							id='rl-company'
							type='text'
							className='mt-2 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--teal)]'
						/>
					</div>
					<div>
						<label
							htmlFor='rl-message'
							className='block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							What brings you to Rootline?
						</label>
						<textarea
							id='rl-message'
							rows={4}
							className='mt-2 w-full resize-none rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--teal)]'
						/>
					</div>
					<button
						type='button'
						className='min-h-12 w-full rounded-sm text-sm transition-opacity [background:var(--navy)] [color:var(--sand)] hover:opacity-90'
					>
						Request briefing
					</button>
				</form>
			</div>
		</section>
	)
}
