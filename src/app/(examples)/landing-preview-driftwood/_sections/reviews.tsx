const quotes = [
	{
		q: 'The kind of hotel that makes you forget your phone exists — linen sheets, sea air, and nowhere to be.',
		source: 'Condé Nast Traveller',
		year: '2025'
	},
	{
		q: "Driftwood proves boutique doesn't need grandeur. Just light, stone, and a terrace that faces the right way.",
		source: 'Monocle',
		year: '2024'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Reviews() {
	return (
		<section id='reviews' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='dw-reveal mb-12 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--sea)]'>
						Guest notes
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						Word from the shore
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					{quotes.map(r => (
						<figure
							key={r.source}
							className='dw-reveal border border-[var(--line)] p-8 [background:var(--linen)] sm:p-10'
						>
							<blockquote className='font-[family-name:var(--font-display)] text-xl italic leading-relaxed [color:var(--ink)] sm:text-2xl'>
								&ldquo;{r.q}&rdquo;
							</blockquote>
							<figcaption className='mt-8 flex items-baseline justify-between gap-4 border-[var(--line)] border-t pt-6'>
								<span className='text-[0.65rem] uppercase tracking-[0.16em] [color:var(--terra)]'>
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
