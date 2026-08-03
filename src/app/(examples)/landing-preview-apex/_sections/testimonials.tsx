const quotes = [
	{
		q: "Apex understood our board's risk tolerance within the first meeting. Their written strategy became our internal playbook.",
		a: 'Helena Marsh',
		r: 'General counsel, FTSE 250 energy group'
	},
	{
		q: 'They declined to over-litigate when a negotiated exit was available — and secured terms better than our damages model projected.',
		a: 'David Chen',
		r: 'Founder & CEO, Series C fintech'
	},
	{
		q: "Under SFO scrutiny, clarity and composure mattered. Catherine's team delivered both, without alarming stakeholders.",
		a: 'Margaret Okello',
		r: 'Chair, regulated financial services firm'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='ax-reveal text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--stone)]'>
					Client counsel
				</h2>
				<p className='ax-reveal mx-auto mt-4 max-w-lg text-center text-sm [color:var(--mute)]'>
					Anonymised where required. Full references available on request.
				</p>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{quotes.map(t => (
						<figure
							key={t.a}
							className='ax-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<blockquote className='leading-relaxed [color:var(--slate)]'>
								&ldquo;{t.q}&rdquo;
							</blockquote>
							<figcaption className='mt-6 border-[var(--line)] border-t pt-4'>
								<p className='font-medium text-sm [color:var(--stone)]'>
									{t.a}
								</p>
								<p className='mt-0.5 text-xs [color:var(--mute)]'>{t.r}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
