const faqs = [
	{
		q: 'How can I watch KESTREL films?',
		a: 'Route IV premieres at festival circuit in Q4, then streams on partner platforms. Sign up for expedition alerts to get early access.'
	},
	{
		q: 'Do you take commercial sponsorships?',
		a: 'We partner with brands aligned to conservation outcomes — gear, logistics, and research funding only. No greenwashing placements.'
	},
	{
		q: 'Can researchers access telemetry data?',
		a: 'Yes. All Route IV satellite tracks publish under open research licenses within 90 days. Contact us for early partner access.'
	},
	{
		q: 'How do I join an expedition?',
		a: 'Fellowships open twice yearly. Crew roles require proven field experience — pilots, cinematographers, and biologists with remote deployment history.'
	}
]

/** Future Payload mapping: faqAccordion (static). */
export function Faq() {
	return (
		<section id='faq' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='ks-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] [color:var(--cream)]'>
					Questions
				</h2>
				<dl className='mt-10 space-y-6'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='ks-reveal border-[var(--line)] border-b pb-6'
						>
							<dt className='font-medium text-lg [color:var(--cream)]'>
								{f.q}
							</dt>
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
