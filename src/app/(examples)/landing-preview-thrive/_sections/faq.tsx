const faqs = [
	{
		q: 'Who is Thrive coaching for?',
		a: 'C-suite executives, board members, and senior leaders with ESG or sustainability responsibilities — whether newly appointed or years into the role.'
	},
	{
		q: 'Is this therapy or coaching?',
		a: 'Executive coaching focused on professional leadership. We address personal resilience as it relates to your role, but we are not a clinical service.'
	},
	{
		q: 'Do you work with teams?',
		a: 'Our core offering is 1:1 coaching. The Advisory package includes optional leadership team workshops and retreats.'
	},
	{
		q: 'How are sessions delivered?',
		a: 'Video calls by default, with in-person options in London for Executive and Advisory clients.'
	},
	{
		q: 'What if my organisation already has sustainability consultants?',
		a: 'We complement technical advisors. Thrive focuses on you as the leader — decision-making, communication, and resilience — not carbon accounting.'
	}
]

/** Future Payload mapping: faqAccordion. */
export function Faq() {
	return (
		<section
			id='faq'
			className='px-5 py-20 [background:var(--wheat)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-3xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						FAQ
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Common questions
					</h2>
				</div>

				<dl className='th-reveal mt-10 space-y-4'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='rounded-2xl border border-[var(--line)] p-5 [background:var(--sage)]'
						>
							<dt className='font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
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
