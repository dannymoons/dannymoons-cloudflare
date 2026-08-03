/** Future Payload mapping: contactCta. */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-24 [background:color-mix(in_oklch,var(--earth)_25%,var(--night))] sm:px-8 sm:py-32'
		>
			<div className='ks-reveal mx-auto max-w-3xl text-center'>
				<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
					Contact
				</p>
				<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-[1.04] [color:var(--cream)]'>
					Join the next expedition.
				</h2>
				<p className='mx-auto mt-4 max-w-md [color:var(--mute)]'>
					Partnerships, press, fellowships, and screening requests — we respond
					within five field days.
				</p>
				<a
					href='mailto:crew@kestrel.film'
					className='mt-8 inline-flex min-h-12 items-center rounded-sm px-8 [background:var(--amber)] [color:var(--night)]'
				>
					crew@kestrel.film
				</a>
			</div>
		</section>
	)
}
