const quotes = [
	{
		quote:
			'PRISM is what indie labels used to be — artist-first, vinyl-obsessed, and zero corporate polish.',
		source: 'The Quietus',
		year: '2026'
	},
	{
		quote:
			'Static Bloom\'s "Glass Cathedral" is the loudest, most beautiful noise record of the year.',
		source: 'Pitchfork',
		year: '2026'
	},
	{
		quote:
			'A Rotterdam institution. If you care about physical music, PRISM is essential.',
		source: 'NME',
		year: '2025'
	}
]

/** Future Payload mapping: pressQuotes. */
export function Press() {
	return (
		<section
			id='press'
			className='border-[var(--ink)] border-t-2 px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pr-reveal'>
					<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
						Press
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
						What they said
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{quotes.map(q => (
						<blockquote
							key={q.source}
							className='flex flex-col border-2 border-[var(--ink)] p-6 pr-reveal'
						>
							<p className='flex-1 text-lg leading-snug'>
								&ldquo;{q.quote}&rdquo;
							</p>
							<footer className='mt-6 flex items-baseline justify-between border-[var(--line)] border-t-2 pt-4'>
								<cite className='font-[family-name:var(--font-display)] text-lg uppercase not-italic [color:var(--magenta)]'>
									{q.source}
								</cite>
								<span className='text-sm [color:var(--mute)]'>{q.year}</span>
							</footer>
						</blockquote>
					))}
				</div>

				<a
					href='#contact'
					className='mt-8 inline-flex min-h-12 items-center pr-reveal font-bold text-sm uppercase [color:var(--magenta)] hover:underline'
				>
					Press kit &amp; assets →
				</a>
			</div>
		</section>
	)
}
