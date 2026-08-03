const steps = [
	{
		n: '01',
		t: 'Measure',
		d: 'Baseline page weight, transfer size, third-party scripts and hosting emissions.'
	},
	{
		n: '02',
		t: 'Prioritise',
		d: 'Rank fixes by carbon impact and effort — quick wins first, structural changes second.'
	},
	{
		n: '03',
		t: 'Reduce',
		d: 'Strip unused assets, compress media, defer non-critical JavaScript and fonts.'
	},
	{
		n: '04',
		t: 'Report',
		d: 'Deliver a before/after carbon score with ongoing monitoring thresholds.'
	}
]

/** Future Payload mapping: processSteps. */
export function Audit() {
	return (
		<section className='px-5 py-20 [background:color-mix(in_oklch,var(--paper)_92%,var(--stone))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='of-reveal text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
					Carbon audit
				</p>
				<h2 className='of-reveal mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					How we diagnose
				</h2>
				<ol className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{steps.map(s => (
						<li
							key={s.n}
							className='of-reveal border-[var(--line)] border-t pt-6'
						>
							<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--lime)]'>
								{s.n}
							</span>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-2xl'>
								{s.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.d}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
