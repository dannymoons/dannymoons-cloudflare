import { Mail, MapPin, Phone } from 'lucide-react'

/** Future Payload mapping: contactBlock. */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--copper)_5%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--stone)]'>
						Request a confidential consultation
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						New enquiries reviewed within one business day. Conflict checks
						conducted before any substantive discussion.
					</p>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					<div className='grid gap-6 sm:grid-cols-1'>
						<div className='ax-reveal flex gap-4'>
							<MapPin
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--copper)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--stone)]'>Chambers</p>
								<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
									14 Lincoln&apos;s Inn Fields
									<br />
									London WC2A 3ED
								</p>
							</div>
						</div>

						<div className='ax-reveal flex gap-4'>
							<Phone
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--copper)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--stone)]'>Telephone</p>
								<a
									href='tel:+442071234567'
									className='mt-1 block text-sm transition-colors [color:var(--mute)] hover:[color:var(--copper)]'
								>
									+44 20 7123 4567
								</a>
							</div>
						</div>

						<div className='ax-reveal flex gap-4'>
							<Mail
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--copper)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--stone)]'>Enquiries</p>
								<a
									href='mailto:chambers@apex-litigation.co.uk'
									className='mt-1 block text-sm transition-colors [color:var(--mute)] hover:[color:var(--copper)]'
								>
									chambers@apex-litigation.co.uk
								</a>
							</div>
						</div>
					</div>

					<form className='ax-reveal flex flex-col gap-4 rounded-sm border border-[var(--line)] p-6 [background:var(--parchment)]'>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--stone)]'>Name</span>
							<input
								type='text'
								placeholder='Your full name'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--stone)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--stone)]'>Organisation</span>
							<input
								type='text'
								placeholder='Company or firm'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--stone)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--stone)]'>Matter summary</span>
							<textarea
								rows={4}
								placeholder='Brief, non-privileged description'
								className='rounded-sm border border-[var(--line)] px-4 py-3 [color:var(--stone)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<button
							type='button'
							className='inline-flex min-h-12 items-center justify-center rounded-sm text-[var(--parchment)] text-sm transition-opacity [background:var(--stone)] hover:opacity-90'
						>
							Submit enquiry
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
