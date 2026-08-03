/** Future Payload mapping: contactCta. */
export function ContactCta() {
	return (
		<section
			id='contact'
			className='px-5 py-24 [background:var(--clay)] sm:px-8 sm:py-32'
		>
			<div className='vd-reveal mx-auto max-w-3xl text-center'>
				<h2 className='font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-[1.02]'>
					Let&rsquo;s build what comes next.
				</h2>
				<p className='mx-auto mt-4 max-w-md [color:var(--mute)]'>
					Tell us where you are on your transition journey. We&rsquo;ll respond
					within two business days.
				</p>
				<a
					href='mailto:hello@verdant.agency'
					className='mt-8 inline-flex min-h-12 items-center rounded-full px-8 text-white [background:var(--moss)]'
				>
					hello@verdant.agency
				</a>
			</div>
		</section>
	)
}
