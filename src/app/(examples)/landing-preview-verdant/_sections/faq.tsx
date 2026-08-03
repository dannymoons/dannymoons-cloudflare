const faqs = [
	{
		q: 'Who do you typically work with?',
		a: 'Mid-market to enterprise brands with €50M+ revenue and a board-level sustainability mandate.'
	},
	{
		q: 'How long does a typical engagement last?',
		a: 'Strategy projects run 8–16 weeks; transformation programmes span 2–5 years.'
	},
	{
		q: 'Do you help with regulatory compliance?',
		a: 'Yes — CSRD, SEC climate rules, and emerging disclosure frameworks are core to our practice.'
	}
]

/** Future Payload mapping: faqAccordion (static). */
export function Faq() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='vd-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Questions
				</h2>
				<dl className='mt-10 space-y-6'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='vd-reveal border-[var(--line)] border-b pb-6'
						>
							<dt className='font-medium text-lg'>{f.q}</dt>
							<dd className='mt-2 leading-relaxed [color:var(--mute)]'>
								{f.a}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}
