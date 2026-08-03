const quotes = [
	{
		q: 'After my ACL surgery, the team at Restore got me back on the pitch in five months — stronger than before.',
		a: 'Daniel R.',
		r: 'Amateur footballer'
	},
	{
		q: 'The vestibular programme completely changed my daily life. I finally feel steady and confident again.',
		a: 'Margaret L.',
		r: 'Retired teacher'
	},
	{
		q: 'Professional, evidence-based, and genuinely caring. They explained every step of my recovery plan.',
		a: 'Alex T.',
		r: 'Software engineer'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 [background:var(--sky)]/15 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='rs-reveal text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
					Patient stories
				</h2>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{quotes.map(t => (
						<figure
							key={t.a}
							className='rs-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--white)]'
						>
							<blockquote className='leading-relaxed [color:var(--slate)]'>
								&ldquo;{t.q}&rdquo;
							</blockquote>
							<figcaption className='mt-6 border-[var(--line)] border-t pt-4'>
								<p className='font-medium text-sm'>{t.a}</p>
								<p className='mt-0.5 text-xs [color:var(--mute)]'>{t.r}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
