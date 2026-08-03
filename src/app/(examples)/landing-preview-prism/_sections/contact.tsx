/** Future Payload mapping: contactCta. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-24 sm:px-8 sm:py-32'>
			<div className='mx-auto max-w-3xl pr-reveal text-center'>
				<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
					Contact
				</p>
				<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
					Demos · Press · Bookings
				</h2>
				<p className='mx-auto mt-4 max-w-md [color:var(--mute)]'>
					Send demos as private links only. We listen to everything — but we
					sign rarely. Press and booking inquiries welcome.
				</p>
				<a
					href='mailto:hello@prism-records.nl'
					className='mt-8 inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-8 font-bold uppercase [background:var(--magenta)] [color:var(--paper)]'
				>
					hello@prism-records.nl
				</a>
			</div>
		</section>
	)
}
