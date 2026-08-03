const phases = [
	{
		step: '01',
		title: 'Discovery & mapping',
		desc: 'Inventory your vendor roster, production types, and client ESG requirements. Cascade builds your baseline supply chain graph.'
	},
	{
		step: '02',
		title: 'Vendor onboarding',
		desc: 'Structured data collection via the vendor portal — certs, emissions, labour policies, and material specs.'
	},
	{
		step: '03',
		title: 'Validation & scoring',
		desc: 'Third-party data cross-referenced against industry databases. Risk flags surfaced for procurement review.'
	},
	{
		step: '04',
		title: 'Client reporting',
		desc: 'Branded transparency reports, live dashboards, and audit-ready exports delivered per project or account.'
	}
]

/** Future Payload mapping: methodologySteps. */
export function Methodology() {
	return (
		<section
			id='methodology'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Methodology
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						A proven four-phase implementation.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Most agencies go live in 6–8 weeks. Aligned with GHG Protocol, CDP
						Supply Chain, and emerging EU CSDDD requirements.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{phases.map(p => (
						<article key={p.step} className='ca-reveal'>
							<p className='font-[family-name:var(--font-display)] text-4xl opacity-40 [color:var(--pine)]'>
								{p.step}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{p.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
