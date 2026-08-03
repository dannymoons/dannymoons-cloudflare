const quotes = [
	{
		q: 'The kind of place you wish was on your street — honest food, fair prices, and a Sunday roast that actually tastes like Sunday.',
		source: 'Het Parool',
		year: '2025'
	},
	{
		q: 'Hearth proves farm-to-table doesn\u2019t need to be precious. Grab a seat at the bar, order the soup, and stay for the wine.',
		source: 'Culy',
		year: '2024'
	},
	{
		q: 'Amsterdam\u2019s coziest weeknight dinner. The patio alone is worth the bike ride from Centrum.',
		source: 'Time Out Amsterdam',
		year: '2024'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Reviews() {
	return (
		<section id='reviews' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='ht-reveal mb-10 text-center'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Local press
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						What neighbors are saying
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{quotes.map(r => (
						<figure
							key={r.source}
							className='ht-reveal flex flex-col rounded-sm border border-[var(--line)] p-6 [background:var(--cream)] sm:p-7'
						>
							<blockquote className='flex-1 font-[family-name:var(--font-display)] text-lg leading-relaxed [color:var(--wood)]'>
								&ldquo;{r.q}&rdquo;
							</blockquote>
							<figcaption className='mt-6 border-[var(--line)] border-t pt-5'>
								<cite className='font-medium not-italic [color:var(--ember)]'>
									{r.source}
								</cite>
								<span className='mt-1 block text-sm [color:var(--mute)]'>
									{r.year}
								</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
