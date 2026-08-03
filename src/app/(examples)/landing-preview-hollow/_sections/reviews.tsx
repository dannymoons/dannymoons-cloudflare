const quotes = [
	{
		q: 'The most convincing speakeasy in Amsterdam — if you can find it, you deserve every sip.',
		source: 'Time Out Amsterdam',
		year: '2025'
	},
	{
		q: 'Hollow proves that secrecy still sells. The cocktails are worth the hunt.',
		source: "Difford's Guide",
		year: '2024'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Reviews() {
	return (
		<section
			id='reviews'
			className='px-5 py-20 [background:var(--smoke)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='ho-reveal mb-12 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
						Whispers
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
						Word travels quietly
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					{quotes.map(r => (
						<figure
							key={r.source}
							className='ho-reveal border border-[var(--line)] p-8 sm:p-10'
						>
							<blockquote className='font-[family-name:var(--font-display)] text-xl italic leading-relaxed [color:var(--cream)] sm:text-2xl'>
								&ldquo;{r.q}&rdquo;
							</blockquote>
							<figcaption className='mt-8 flex items-baseline justify-between gap-4 border-[var(--line)] border-t pt-6'>
								<span className='text-[0.65rem] uppercase tracking-[0.16em] [color:var(--gold)]'>
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
