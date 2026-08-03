import { Clock, MapPin, Phone } from 'lucide-react'

/** Future Payload mapping: contactBlock. */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--sky)]/20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Visit us
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Find the clinic
					</h2>
				</div>

				<div className='mt-12 grid gap-8 sm:grid-cols-3'>
					<div className='rs-reveal flex gap-4'>
						<MapPin
							className='mt-0.5 h-5 w-5 shrink-0 [color:var(--ocean)]'
							strokeWidth={1.5}
						/>
						<div>
							<p className='font-medium [color:var(--slate)]'>Location</p>
							<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
								2847 Wellness Boulevard, Suite 120
								<br />
								Portland, OR 97209
							</p>
						</div>
					</div>

					<div className='rs-reveal flex gap-4'>
						<Phone
							className='mt-0.5 h-5 w-5 shrink-0 [color:var(--ocean)]'
							strokeWidth={1.5}
						/>
						<div>
							<p className='font-medium [color:var(--slate)]'>Phone</p>
							<a
								href='tel:+15035550142'
								className='mt-1 block text-sm transition-colors [color:var(--mute)] hover:[color:var(--ocean)]'
							>
								(503) 555-0142
							</a>
						</div>
					</div>

					<div className='rs-reveal flex gap-4'>
						<Clock
							className='mt-0.5 h-5 w-5 shrink-0 [color:var(--ocean)]'
							strokeWidth={1.5}
						/>
						<div>
							<p className='font-medium [color:var(--slate)]'>Hours</p>
							<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
								Mon – Fri: 7:00 – 19:00
								<br />
								Sat: 8:00 – 14:00
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
