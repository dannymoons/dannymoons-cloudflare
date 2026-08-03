const pillars = [
	{
		label: 'Govern',
		title: 'Claim governance',
		desc: 'A living register of every sustainability claim in market — owner, evidence, expiry, and approval trail.'
	},
	{
		label: 'Measure',
		title: 'Campaign footprint',
		desc: 'Scope 3 media, production, and event emissions tied to each campaign brief before sign-off.'
	},
	{
		label: 'Narrate',
		title: 'Editorial standards',
		desc: 'Tone guides, disclosure templates, and stakeholder-specific messaging that passes legal review.'
	},
	{
		label: 'Report',
		title: 'Board-ready metrics',
		desc: 'Quarterly dashboards linking marketing activity to corporate ESG targets and CSRD disclosures.'
	}
]

/** Future Payload mapping: methodologyFramework. */
export function Framework() {
	return (
		<section id='framework' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						The Rootline framework
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--navy)]'>
						Four pillars between ambition and accountability
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						We embed sustainability into the marketing operating model — not as
						a one-off report, but as a repeatable discipline your teams can run.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{pillars.map(p => (
						<article
							key={p.label}
							className='rl-reveal rounded-sm border border-[var(--line)] p-6 [background:color-mix(in_oklch,var(--teal)_4%,var(--sand))]'
						>
							<span className='inline-block rounded-full border border-[var(--line)] px-3 py-1 text-xs uppercase tracking-[0.2em] [color:var(--teal)]'>
								{p.label}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--navy)]'>
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
