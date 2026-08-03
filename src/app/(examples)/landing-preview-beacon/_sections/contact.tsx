import { Mail, MapPin, Phone } from 'lucide-react'

/** Future Payload mapping: contactBlock. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Contact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Start your certification conversation
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Whether you&apos;re exploring B Corp for the first time or preparing
						for recertification, our team responds within one business day.
					</p>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					<div className='grid gap-6'>
						<div className='be-reveal flex gap-4'>
							<MapPin
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--forest)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Offices</p>
								<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
									San Francisco · London · Amsterdam
								</p>
							</div>
						</div>
						<div className='be-reveal flex gap-4'>
							<Phone
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--forest)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Phone</p>
								<a
									href='tel:+14155550142'
									className='mt-1 block text-sm [color:var(--mute)] hover:[color:var(--forest)]'
								>
									+1 415 555 0142
								</a>
							</div>
						</div>
						<div className='be-reveal flex gap-4'>
							<Mail
								className='mt-0.5 h-5 w-5 shrink-0 [color:var(--forest)]'
								strokeWidth={1.5}
							/>
							<div>
								<p className='font-medium [color:var(--ink)]'>Email</p>
								<a
									href='mailto:hello@beacon-impact.co'
									className='mt-1 block text-sm [color:var(--mute)] hover:[color:var(--forest)]'
								>
									hello@beacon-impact.co
								</a>
							</div>
						</div>
					</div>

					<form className='be-reveal flex flex-col gap-4 rounded-sm border border-[var(--line)] p-6 [background:var(--cream)]'>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Name</span>
							<input
								type='text'
								placeholder='Your full name'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>Company</span>
							<input
								type='text'
								placeholder='Organisation name'
								className='min-h-11 rounded-sm border border-[var(--line)] px-4 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='[color:var(--ink)]'>How can we help?</span>
							<textarea
								rows={4}
								placeholder='Tell us about your certification goals'
								className='rounded-sm border border-[var(--line)] px-4 py-3 [color:var(--ink)] placeholder:[color:var(--mute)]'
							/>
						</label>
						<button
							type='button'
							className='inline-flex min-h-12 items-center justify-center rounded-sm text-sm [background:var(--forest)] [color:var(--cream)] hover:opacity-90'
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
