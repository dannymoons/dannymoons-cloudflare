/** Future Payload mapping: contactForm. */
export function Contact() {
	return (
		<section
			id='contact'
			className='px-5 py-20 [background:var(--green)] [color:var(--cream)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2'>
				<div className='pw-reveal'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--yellow)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[1] tracking-tight'>
						Let&apos;s make something that matters
					</h2>
					<p className='mt-4 text-sm leading-relaxed opacity-85 sm:text-base'>
						New business, partnerships, or press — we respond within two
						business days. Projects typically start from €45k.
					</p>
					<dl className='mt-8 space-y-4 text-sm'>
						<div>
							<dt className='opacity-70'>Email</dt>
							<dd className='mt-1 font-medium'>hello@patchwork.studio</dd>
						</div>
						<div>
							<dt className='opacity-70'>Studio</dt>
							<dd className='mt-1 font-medium'>Prinsengracht 284, Amsterdam</dd>
						</div>
					</dl>
				</div>

				<form className='pw-reveal space-y-4 border-2 border-[var(--cream)] p-6 [background:var(--cream)] [color:var(--ink)]'>
					<div>
						<label
							htmlFor='pw-name'
							className='block font-medium text-xs uppercase tracking-wide'
						>
							Name
						</label>
						<input
							id='pw-name'
							type='text'
							className='mt-2 w-full border-2 border-[var(--ink)] bg-transparent px-4 py-3 text-sm outline-none focus:[background:var(--yellow)]'
						/>
					</div>
					<div>
						<label
							htmlFor='pw-email'
							className='block font-medium text-xs uppercase tracking-wide'
						>
							Email
						</label>
						<input
							id='pw-email'
							type='email'
							className='mt-2 w-full border-2 border-[var(--ink)] bg-transparent px-4 py-3 text-sm outline-none focus:[background:var(--yellow)]'
						/>
					</div>
					<div>
						<label
							htmlFor='pw-budget'
							className='block font-medium text-xs uppercase tracking-wide'
						>
							Project budget
						</label>
						<select
							id='pw-budget'
							className='mt-2 w-full border-2 border-[var(--ink)] bg-transparent px-4 py-3 text-sm outline-none focus:[background:var(--yellow)]'
						>
							<option>€45k – €100k</option>
							<option>€100k – €250k</option>
							<option>€250k+</option>
							<option>Not sure yet</option>
						</select>
					</div>
					<div>
						<label
							htmlFor='pw-message'
							className='block font-medium text-xs uppercase tracking-wide'
						>
							Tell us about the project
						</label>
						<textarea
							id='pw-message'
							rows={4}
							className='mt-2 w-full resize-none border-2 border-[var(--ink)] bg-transparent px-4 py-3 text-sm outline-none focus:[background:var(--yellow)]'
						/>
					</div>
					<button
						type='button'
						className='min-h-12 w-full border-2 border-[var(--ink)] font-medium text-sm uppercase tracking-wide transition-colors [background:var(--pink)] hover:[background:var(--yellow)]'
					>
						Send enquiry
					</button>
				</form>
			</div>
		</section>
	)
}
