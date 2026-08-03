/** Future Payload mapping: contactForm. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2'>
				<div className='gb-reveal'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						Questions about enterprise or integrations?
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Our team helps network agencies roll out Greenbench across offices
						and connect custom data sources.
					</p>
					<dl className='mt-8 space-y-4 text-sm'>
						<div>
							<dt className='[color:var(--mute)]'>Sales</dt>
							<dd className='mt-1'>sales@greenbench.io</dd>
						</div>
						<div>
							<dt className='[color:var(--mute)]'>Support</dt>
							<dd className='mt-1'>help@greenbench.io</dd>
						</div>
					</dl>
				</div>

				<form className='gb-reveal space-y-4 rounded-xl border border-[var(--line)] p-6'>
					<div>
						<label
							htmlFor='gb-name'
							className='block font-medium text-xs [color:var(--mute)]'
						>
							Name
						</label>
						<input
							id='gb-name'
							type='text'
							className='mt-2 w-full rounded-lg border border-[var(--line)] px-4 py-3 text-sm outline-none focus:border-[var(--green)]'
						/>
					</div>
					<div>
						<label
							htmlFor='gb-email'
							className='block font-medium text-xs [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='gb-email'
							type='email'
							className='mt-2 w-full rounded-lg border border-[var(--line)] px-4 py-3 text-sm outline-none focus:border-[var(--green)]'
						/>
					</div>
					<div>
						<label
							htmlFor='gb-message'
							className='block font-medium text-xs [color:var(--mute)]'
						>
							Message
						</label>
						<textarea
							id='gb-message'
							rows={4}
							className='mt-2 w-full resize-none rounded-lg border border-[var(--line)] px-4 py-3 text-sm outline-none focus:border-[var(--green)]'
						/>
					</div>
					<button
						type='button'
						className='min-h-12 w-full rounded-lg font-medium text-sm transition-opacity [background:var(--green)] [color:var(--white)] hover:opacity-90'
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	)
}
