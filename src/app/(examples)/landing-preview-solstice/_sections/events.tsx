const offerings = [
	{
		title: 'Private dining',
		desc: 'Exclusive use of our canal house salon for up to 24 guests. Bespoke menu composed with Chef Voss, dedicated service team, and optional live fire cooking.',
		detail: 'From €4,200 · Amsterdam & London'
	},
	{
		title: 'Masterclasses',
		desc: 'Half-day intensives in fermentation, fire cooking, and seasonal foraging. Limited to 8 participants, concluding with a four-course lunch and wine pairing.',
		detail: '€385 per person · All locations'
	}
]

/** Future Payload mapping: eventCards. */
export function Events() {
	return (
		<section
			id='events'
			className='px-5 py-20 [background:var(--burgundy)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='so-reveal mb-12 text-center'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Beyond the table
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Events &amp; experiences
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
					{offerings.map(o => (
						<article
							key={o.title}
							className='so-reveal border border-[var(--line)] p-8 transition-colors hover:border-[var(--gold)]/40 sm:p-10'
						>
							<h3 className='font-[family-name:var(--font-display)] text-2xl [color:var(--cream)]'>
								{o.title}
							</h3>
							<p className='mt-4 text-sm leading-relaxed [color:var(--cream)]/70 sm:text-base'>
								{o.desc}
							</p>
							<p className='mt-6 text-xs uppercase tracking-[0.16em] [color:var(--gold)]'>
								{o.detail}
							</p>
							<a
								href='#reservations'
								className='mt-6 inline-flex text-xs uppercase tracking-[0.16em] transition-colors [color:var(--cream)] hover:[color:var(--gold)]'
							>
								Enquire →
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
