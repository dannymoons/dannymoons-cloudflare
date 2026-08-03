const quotes = [
	{
		publication: "Harper's Bazaar",
		quote:
			'Lérins does not follow fashion — it preserves a disappearing art form with uncompromising grace.'
	},
	{
		publication: 'Vogue Paris',
		quote:
			'In an age of acceleration, Maison Lérins remains the last house where time is measured in stitches, not seasons.'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Press() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='ml-reveal text-center text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					In the press
				</p>
				<div className='mt-12 grid gap-10 md:grid-cols-2 md:gap-16'>
					{quotes.map(item => (
						<blockquote
							key={item.publication}
							className='ml-reveal border-[var(--line)] border-t pt-8'
						>
							<p className='font-[family-name:var(--font-display)] text-[clamp(1.25rem,3vw,1.75rem)] italic leading-[1.4] [color:var(--cream)]'>
								&ldquo;{item.quote}&rdquo;
							</p>
							<cite className='mt-6 block text-xs uppercase not-italic tracking-[0.22em] [color:var(--mute)]'>
								— {item.publication}
							</cite>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	)
}
