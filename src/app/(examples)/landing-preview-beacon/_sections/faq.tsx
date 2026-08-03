const faqs = [
	{
		q: 'How long does B Corp certification take?',
		a: 'Most Beacon clients certify in 9–14 months from initial assessment. Timeline depends on your starting score, company size, and how quickly you can implement governance and operational improvements.'
	},
	{
		q: 'What score do I need to certify?',
		a: 'A minimum verified score of 80 points across the B Impact Assessment. Beacon clients achieve a median score of 92.4 — well above the threshold.'
	},
	{
		q: 'How much does certification cost?',
		a: 'B Lab fees vary by revenue (from $1,000/year for small companies). Beacon consulting fees depend on company size and scope — typically $25k–$120k for full-service certification support.'
	},
	{
		q: 'Do we need to change our legal structure?',
		a: 'You must amend governing documents to consider all stakeholders. Options include Benefit Corporation status, Purpose Trust clauses, or equivalent depending on jurisdiction. Beacon provides legal templates and coordination.'
	},
	{
		q: "Can we certify if we're not perfect yet?",
		a: 'Certification requires meeting the 80-point threshold, not perfection. Beacon helps you identify high-impact improvements and document existing practices you may undervalue.'
	},
	{
		q: 'What happens after certification?',
		a: 'Recertification is required every three years. Beacon offers ongoing support for impact reporting, score maintenance, and continuous improvement programmes.'
	}
]

/** Future Payload mapping: faqAccordion. */
export function Faq() {
	return (
		<section
			id='faq'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--gold)_5%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-3xl'>
				<div className='be-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						FAQ
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Common questions about B Corp certification.
					</h2>
				</div>

				<div className='mt-12 space-y-4'>
					{faqs.map(f => (
						<details
							key={f.q}
							className='be-reveal group rounded-sm border border-[var(--line)] [background:var(--cream)]'
						>
							<summary className='cursor-pointer list-none px-6 py-4 font-medium [color:var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden'>
								{f.q}
							</summary>
							<p className='border-[var(--line)] border-t px-6 py-4 text-sm leading-relaxed [color:var(--mute)]'>
								{f.a}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
