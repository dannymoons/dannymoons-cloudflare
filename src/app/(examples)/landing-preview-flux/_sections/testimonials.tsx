const quotes = [
	{
		q: 'They took our boring fintech and made teenagers actually care about it.',
		a: 'VP Brand, Monzo',
		color: 'var(--cobalt)'
	},
	{
		q: 'The launch film broke our site. In the good way.',
		a: 'CMO, Bloom',
		color: 'var(--magenta)'
	},
	{
		q: 'Fastest, weirdest, most fun agency we have ever briefed.',
		a: 'Founder, Önd',
		color: 'var(--tangerine)'
	}
]

/** Future Payload mapping: testimonialStack. */
export function Testimonials() {
	return (
		<section className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
				{quotes.map(t => (
					<figure
						key={t.a}
						className='flx-reveal flex flex-col justify-between rounded-3xl border-2 border-[var(--ink)] p-7'
						style={{ background: t.color }}
					>
						<blockquote className='font-[family-name:var(--font-serif)] text-2xl leading-snug [color:var(--ink)]'>
							&ldquo;{t.q}&rdquo;
						</blockquote>
						<figcaption className='mt-6 font-[family-name:var(--font-mono)] text-xs uppercase [color:var(--ink)]'>
							{t.a}
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
