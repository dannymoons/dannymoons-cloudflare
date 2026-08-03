const pairings = [
	{
		display: 'Lab Display',
		body: 'Lab Grotesk',
		note: 'Headline compression meets neutral text. Our most requested editorial pairing.'
	},
	{
		display: 'Lab Serif',
		body: 'Lab Grotesk',
		note: 'Serif lead with sans support. Ideal for annual reports and cultural institutions.'
	},
	{
		display: 'Lab Mono',
		body: 'Lab Grotesk',
		note: 'Code and prose in harmony. Used across developer docs and product UI.'
	}
]

/** Future Payload mapping: pairingRecommendations. */
export function Pairings() {
	return (
		<section id='pairings' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						Recommended pairings
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Designed to work together
					</h2>
				</div>

				<div className='space-y-8'>
					{pairings.map(p => (
						<article
							key={`${p.display}-${p.body}`}
							className='ty-reveal border-[var(--line)] border-t pt-8 first:border-0 first:pt-0'
						>
							<div className='grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8'>
								<div className='lg:col-span-5'>
									<p className='font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.25rem)] leading-tight'>
										{p.display}
									</p>
									<p className='mt-2 text-[var(--mute)] text-sm'>+ {p.body}</p>
								</div>
								<div className='lg:col-span-7'>
									<p className='text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed'>
										{p.note}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
