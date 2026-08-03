import { Mail, MapPin, Phone } from 'lucide-react'

/** Future Payload mapping: contactBlock. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Book a supply chain audit demo
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						See how Cascade maps your vendor network in a 45-minute walkthrough
						with our agency solutions team.
					</p>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					<div className='grid gap-6'>
						<div className='ca-reveal flex gap-4'>
							<MapPin
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>London HQ</p>
								<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
									45 Clerkenwell Road
									<br />
									London EC1M 5RS
								</p>
							</div>
						</div>
						<div className='ca-reveal flex gap-4'>
							<Phone
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Sales</p>
								<a
									href='tel:+442071234567'
									className='mt-1 block text-sm [color:var(--mute)] hover:[color:var(--pine)]'
								>
									+44 20 7123 4567
								</a>
							</div>
						</div>
						<div className='ca-reveal flex gap-4'>
							<Mail
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Enquiries</p>
								<a
									href='mailto:hello@cascade-supply.co'
									className='mt-1 block text-sm [color:var(--mute)] hover:[color:var(--pine)]'
								>
									hello@cascade-supply.co
								</a>
							</div>
						</div>
					</div>

					<form className='ca-reveal flex flex-col gap-4 rounded-sm border border-[var(--line)] p-6 [background:var(--fog)]'>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Agency name</span>
							<input
								type='text'
								placeholder='Your agency'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Work email</span>
							<input
								type='email'
								placeholder='you@agency.com'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>
								Primary production types
							</span>
							<textarea
								rows={3}
								placeholder='Print, events, digital, etc.'
								className='rounded-sm border border-[var(--line)] px-4 py-3 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<button
							type='button'
							className='inline-flex min-h-12 items-center justify-center rounded-sm text-sm [background:var(--pine)] [color:var(--fog)] hover:opacity-90'
						>
							Request demo
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
