const offerings = [
	{
		title: 'Jazz & gin nights',
		desc: 'Live trio every Thursday. A flight of three house gins paired with small bites from our kitchen — olives, oysters, dark chocolate.',
		detail: '€45 per person · Doors 20:30'
	},
	{
		title: 'Prohibition dinner',
		desc: 'Five-course tasting menu with cocktail pairings. Speakeasy dress required. Password delivered upon confirmation.',
		detail: '€95 per person · Last Saturday monthly'
	}
]

/** Future Payload mapping: eventCards. */
export function Events() {
	return (
		<section
			id='events'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ho-reveal mb-12 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
						After hours
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
						Events &amp; gatherings
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
					{offerings.map(o => (
						<article
							key={o.title}
							className='ho-reveal border border-[var(--line)] p-8 transition-colors hover:border-[var(--gold)]/40 sm:p-10'
						>
							<h3 className='font-[family-name:var(--font-display)] text-2xl tracking-[0.04em] [color:var(--cream)]'>
								{o.title}
							</h3>
							<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
								{o.desc}
							</p>
							<p className='mt-6 text-[0.65rem] uppercase tracking-[0.16em] [color:var(--gold)]'>
								{o.detail}
							</p>
							<a
								href='#reservations'
								className='mt-6 inline-flex text-[0.65rem] uppercase tracking-[0.16em] transition-colors [color:var(--cream)] hover:[color:var(--gold)]'
							>
								Reserve →
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
