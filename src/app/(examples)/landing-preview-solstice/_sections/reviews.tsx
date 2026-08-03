const quotes = [
	{
		q: 'A meal at Solstice is less dinner than liturgy — precise, reverent, and quietly transcendent.',
		source: 'Michelin Guide',
		year: '2025'
	},
	{
		q: 'The most compelling new restaurant group in Europe. Each city outdoes the last.',
		source: 'The New York Times',
		year: '2024'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Reviews() {
	return (
		<section id='reviews' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='so-reveal mb-12 text-center'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Press
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Spoken of widely
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					{quotes.map(r => (
						<figure
							key={r.source}
							className='so-reveal border border-[var(--line)] p-8 sm:p-10'
						>
							<blockquote className='font-[family-name:var(--font-display)] text-xl italic leading-relaxed [color:var(--cream)] sm:text-2xl'>
								&ldquo;{r.q}&rdquo;
							</blockquote>
							<figcaption className='mt-8 flex items-baseline justify-between gap-4 border-[var(--line)] border-t pt-6'>
								<span className='text-sm uppercase tracking-[0.16em] [color:var(--gold)]'>
									{r.source}
								</span>
								<span className='text-xs [color:var(--mute)]'>{r.year}</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
