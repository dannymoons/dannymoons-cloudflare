/** Future Payload mapping: contactCta (speakeasy). */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-24 sm:px-8 sm:py-36'>
			<div className='ho-reveal mx-auto max-w-3xl text-center'>
				<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
					Discreet enquiries
				</span>
				<a
					href='mailto:whisper@hollow.bar'
					className='mt-8 block font-[family-name:var(--font-display)] text-[clamp(1.5rem,6vw,4rem)] tracking-[0.04em] transition-colors [color:var(--cream)] hover:[color:var(--gold)]'
				>
					whisper@hollow.bar
				</a>
				<p className='mx-auto mt-8 max-w-md text-sm leading-relaxed [color:var(--mute)]'>
					Private hire, lost reservations, and press requests. We respond within
					48 hours — usually sooner, always quietly.
				</p>
			</div>
		</section>
	)
}
