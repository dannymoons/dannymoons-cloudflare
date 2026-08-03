const faqs = [
	{
		q: 'What is a performance budget?',
		a: 'A hard cap on page weight, request count and JavaScript size. We set budgets at the start of every project and enforce them in CI.'
	},
	{
		q: 'Can you work with our existing CMS?',
		a: 'Yes — we often pair headless CMS backends with static front-ends, or migrate content to lighter platforms when the ROI is clear.'
	},
	{
		q: 'How do you measure carbon emissions?',
		a: 'We use transfer size, hosting location and Green Web Foundation data to estimate grams of CO₂ per page view, verified against tools like Website Carbon.'
	},
	{
		q: 'What does a typical engagement cost?',
		a: 'Audits start at €4,500. Full builds range from €18,000 depending on scope. We provide a fixed quote after the initial discovery call.'
	}
]

/** Future Payload mapping: faqAccordion (static). */
export function Faq() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Questions
				</h2>
				<dl className='mt-10 space-y-6'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='of-reveal border-[var(--line)] border-b pb-6'
						>
							<dt className='font-[family-name:var(--font-display)] text-lg'>
								{f.q}
							</dt>
							<dd className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{f.a}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}
