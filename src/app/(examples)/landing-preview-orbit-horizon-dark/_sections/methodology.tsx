const pillars = [
	{
		title: 'Website Carbon API',
		desc: 'Baseline measurements using the open Website Carbon methodology — transparent, peer-reviewed, and widely adopted.'
	},
	{
		title: 'Real user monitoring',
		desc: 'Lightweight RUM beacon captures actual page weight, transfer size, and hosting region for every visit — not lab-only estimates.'
	},
	{
		title: 'Hosting factors',
		desc: 'Grid intensity and renewable mix adjust results by CDN edge and data centre location, reflecting where your pages actually serve.'
	}
]

/** Future Payload mapping: methodologyPillars. */
export function Methodology() {
	return (
		<section id='methodology' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
					Methodology
				</span>
				<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] tracking-[-0.02em] [color:var(--ink)]'>
					Numbers you can{' '}
					<span className='italic [color:var(--olive)]'>
						defend in a boardroom
					</span>
				</h2>
				<p className='ohd-reveal mt-4 max-w-2xl text-sm leading-relaxed [color:var(--mute)]'>
					Orbit combines established carbon models with live performance data.
					Every gram is traceable to page weight, energy mix, and visit patterns
					— ready for CSRD, SEC climate disclosure, and internal ESG reports.
				</p>

				<div className='ohd-reveal mt-12 grid gap-0 border-2 border-[var(--stroke)] sm:grid-cols-3'>
					{pillars.map((p, i) => (
						<article
							key={p.title}
							className='relative border-[var(--stroke)] p-5 sm:p-6 [&:not(:last-child)]:border-b-2 sm:[&:not(:last-child)]:border-r-2 sm:[&:not(:last-child)]:border-b-0'
						>
							<span className='block font-[family-name:var(--font-display)] font-bold text-7xl leading-none opacity-10 [color:var(--ink)]'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='-mt-4 font-[family-name:var(--font-display)] font-semibold text-lg [color:var(--ink)]'>
								{p.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
						</article>
					))}
				</div>

				<div className='ohd-reveal mt-10 border-[var(--stroke)] border-l-4 p-4 font-[family-name:var(--font-mono)] text-xs leading-relaxed [background:color-mix(in_oklch,var(--sage)_10%,var(--parchment))] [color:var(--mute)] sm:p-5'>
					<span className='[color:var(--olive)]'>formula → </span>
					CO₂ (g) = data transferred (MB) × energy per byte × grid carbon
					intensity × hosting renewable factor · updated hourly from regional
					grid APIs
				</div>
			</div>
		</section>
	)
}
