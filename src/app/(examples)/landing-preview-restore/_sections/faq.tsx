const faqs = [
	{
		q: 'Do I need a referral from my doctor?',
		a: 'No referral is required in most cases. We accept direct self-referrals and can coordinate with your physician if needed.'
	},
	{
		q: 'What should I bring to my first appointment?',
		a: 'Bring your insurance card, photo ID, any relevant imaging reports (X-ray, MRI), and wear comfortable clothing that allows movement assessment.'
	},
	{
		q: 'How long is a typical session?',
		a: 'Initial evaluations last 60 minutes. Follow-up sessions are 45 minutes and include hands-on treatment plus guided exercise.'
	},
	{
		q: 'Do you offer telehealth appointments?',
		a: 'Yes — virtual follow-ups are available for exercise review, progress check-ins, and post-discharge maintenance programmes.'
	},
	{
		q: 'What is your cancellation policy?',
		a: 'Please provide 24 hours notice to reschedule. Late cancellations may incur a fee per your insurance plan guidelines.'
	}
]

/** Future Payload mapping: faqAccordion (static). */
export function Faq() {
	return (
		<section id='faq' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='rs-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
					Common questions
				</h2>

				<dl className='mt-10 space-y-6'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='rs-reveal border-[var(--line)] border-b pb-6'
						>
							<dt className='font-medium text-lg [color:var(--slate)]'>
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
