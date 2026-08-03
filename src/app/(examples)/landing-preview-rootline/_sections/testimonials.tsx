const quotes = [
	{
		text: 'Rootline gave us the language and evidence to speak about sustainability without hedging every sentence.',
		name: 'Elena Vasquez',
		role: 'CMO, Northwind Foods'
	},
	{
		text: 'Our agencies finally understand what "net zero" means in a brief — and what it does not.',
		name: 'James Okonkwo',
		role: 'Director of Brand, Meridian Bank'
	},
	{
		text: 'The claim register alone saved us from three potential regulatory headaches.',
		name: 'Sarah Chen',
		role: 'VP Communications, Volt Mobility'
	}
]

/** Future Payload mapping: testimonialCarousel. */
export function Testimonials() {
	return (
		<section id='testimonials' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Testimonials
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						Trusted by marketing teams under scrutiny
					</h2>
				</div>

				<div className='mt-12 grid gap-6 md:grid-cols-3'>
					{quotes.map(q => (
						<blockquote
							key={q.name}
							className='rl-reveal rounded-sm border border-[var(--line)] p-6 [background:color-mix(in_oklch,var(--teal)_4%,var(--sand))]'
						>
							<p className='font-[family-name:var(--font-display)] text-lg italic leading-relaxed [color:var(--navy)]'>
								&ldquo;{q.text}&rdquo;
							</p>
							<footer className='mt-6 border-[var(--line)] border-t pt-4'>
								<cite className='font-medium text-sm not-italic [color:var(--ink)]'>
									{q.name}
								</cite>
								<p className='text-xs [color:var(--mute)]'>{q.role}</p>
							</footer>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	)
}
