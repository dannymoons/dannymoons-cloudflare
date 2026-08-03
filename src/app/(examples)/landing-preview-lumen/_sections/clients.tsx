const logos = [
	'Nike',
	'Spotify',
	'BMW',
	'Google',
	'Apple',
	'Adobe',
	'Netflix',
	'Samsung'
]

/** Future Payload mapping: clientLogos. */
export function Clients() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-14 sm:px-8'>
			<p className='lu-reveal mb-10 text-center text-xs uppercase tracking-[0.3em] [color:var(--mute)]'>
				Trusted by global brands
			</p>
			<div className='lu-reveal flex flex-wrap items-center justify-center gap-x-12 gap-y-6'>
				{logos.map(name => (
					<span
						key={name}
						className='font-[family-name:var(--font-display)] font-bold text-[clamp(1.25rem,3vw,2rem)] uppercase tracking-tight transition-all [color:var(--mute)] hover:bg-clip-text hover:text-transparent hover:[-webkit-text-fill-color:transparent] hover:[background-image:linear-gradient(120deg,var(--violet),var(--cyan),var(--violet))]'
					>
						{name}
					</span>
				))}
			</div>
		</section>
	)
}
