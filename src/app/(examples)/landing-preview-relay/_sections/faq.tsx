const faqs = [
	{
		q: 'What is the cut-off time?',
		a: 'City marathon: 6 hours. Trail 42K: 8 hours. Ultra 80K: 14 hours. Checkpoints have individual cut-offs listed in the race guide.'
	},
	{
		q: 'Can I transfer my entry?',
		a: 'Yes — transfer to another 2026 Relay race or to a friend until 14 days before event day. Admin fee €10.'
	},
	{
		q: 'How do live splits work?',
		a: 'RFID mats every 5 km push times to the results page and our public API. Spectators can track by bib number in real time.'
	},
	{
		q: 'Is there pacemaker support?',
		a: 'City marathon offers 3:00, 3:30, 4:00, and 4:30 pace groups. Trail races are self-paced with course markers only.'
	},
	{
		q: 'What refund policy applies?',
		a: 'Full refund until 60 days out. 50% until 30 days. No refund inside 30 days, but transfers remain available.'
	}
]

/** Future Payload mapping: faqAccordion (static). */
export function Faq() {
	return (
		<section
			id='faq'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--black)_3%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-3xl'>
				<div className='rl-reveal mb-10 text-center'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						FAQ
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Before you toe the line
					</h2>
				</div>

				<dl className='space-y-6'>
					{faqs.map(f => (
						<div
							key={f.q}
							className='rl-reveal border-[var(--line)] border-b pb-6'
						>
							<dt className='font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.04em] [color:var(--black)]'>
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
