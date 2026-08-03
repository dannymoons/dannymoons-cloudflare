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
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='ob-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--orbit)]'>
					Methodology
				</span>
				<h2 className='ob-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
					Numbers you can{' '}
					<span
						className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--orbit), var(--mint), var(--text))'
						}}
					>
						defend in a boardroom
					</span>
				</h2>
				<p className='ob-reveal mt-4 max-w-2xl text-sm leading-relaxed [color:var(--mute)]'>
					Orbit combines established carbon models with live performance data.
					Every gram is traceable to page weight, energy mix, and visit patterns
					— ready for CSRD, SEC climate disclosure, and internal ESG reports.
				</p>

				<div className='ob-reveal mt-12 grid gap-6 sm:grid-cols-3'>
					{pillars.map((p, i) => (
						<article
							key={p.title}
							className='relative rounded-2xl border border-[color-mix(in_oklch,var(--orbit)_12%,var(--line))] p-5 [background:color-mix(in_oklch,var(--panel)_55%,transparent)] sm:p-6'
						>
							<span className='font-[family-name:var(--font-display)] text-4xl opacity-25 [color:var(--orbit)]'>
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] font-semibold text-lg'>
								{p.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
						</article>
					))}
				</div>

				<div className='ob-reveal mt-10 rounded-xl border border-[var(--line)] p-4 font-[family-name:var(--font-body)] text-xs leading-relaxed [background:var(--void)] [color:var(--mute)] sm:p-5'>
					<span className='[color:var(--orbit)]'>formula → </span>
					CO₂ (g) = data transferred (MB) × energy per byte × grid carbon
					intensity × hosting renewable factor · updated hourly from regional
					grid APIs
				</div>
			</div>
		</section>
	)
}
