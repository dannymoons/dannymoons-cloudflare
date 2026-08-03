import { Mail, MapPin, Phone } from 'lucide-react'

/** Future Payload mapping: contactBlock. */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--blue)_4%,var(--ice))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Talk to our ESG solutions team
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Enterprise deployments, custom integrations, and RFP responses — our
						team responds within one business day.
					</p>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					<div className='grid gap-6'>
						<div className='me-reveal flex gap-4'>
							<MapPin
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--blue)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Headquarters</p>
								<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
									200 Park Avenue South, 12th Floor
									<br />
									New York, NY 10003
								</p>
							</div>
						</div>

						<div className='me-reveal flex gap-4'>
							<Phone
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--blue)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Sales</p>
								<a
									href='tel:+12125550142'
									className='mt-1 block text-sm transition-colors [color:var(--mute)] hover:[color:var(--blue)]'
								>
									+1 212 555 0142
								</a>
							</div>
						</div>

						<div className='me-reveal flex gap-4'>
							<Mail
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--blue)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Enquiries</p>
								<a
									href='mailto:enterprise@measure-esg.com'
									className='mt-1 block text-sm transition-colors [color:var(--mute)] hover:[color:var(--blue)]'
								>
									enterprise@measure-esg.com
								</a>
							</div>
						</div>
					</div>

					<form className='me-reveal flex flex-col gap-4 rounded-sm border border-[var(--line)] p-6 [background:var(--ice)]'>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Name</span>
							<input
								type='text'
								placeholder='Your full name'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Role</span>
							<input
								type='text'
								placeholder='CMO, ESG lead, etc.'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Message</span>
							<textarea
								rows={4}
								placeholder='Tell us about your reporting needs'
								className='rounded-sm border border-[var(--line)] px-4 py-3 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<button
							type='button'
							className='inline-flex min-h-12 items-center justify-center rounded-sm text-[var(--ice)] text-sm transition-opacity [background:var(--blue)] hover:opacity-90'
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
