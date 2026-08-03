const principles = [
	{
		t: 'Measure everything',
		d: 'If it cannot be weighed in kilobytes or grams of CO₂, it cannot be improved.'
	},
	{
		t: 'Defaults matter',
		d: 'Lazy loading, system fonts and static HTML should be the baseline, not the upgrade.'
	},
	{
		t: 'Third parties pay rent',
		d: 'Every analytics script, chat widget and font CDN must justify its carbon cost.'
	},
	{
		t: 'Design for slow networks',
		d: 'A site that works on 3G works everywhere — and uses less energy doing it.'
	},
	{
		t: 'Maintain the budget',
		d: 'Performance regressions are treated like security vulnerabilities — caught and fixed fast.'
	}
]

/** Future Payload mapping: principlesGrid. */
export function Principles() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--paper)_92%,var(--stone))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					Our principles
				</h2>
				<ul className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{principles.map((p, i) => (
						<li
							key={p.t}
							className='of-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--paper)] lg:last:col-span-1'
						>
							<span className='font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.18em] [color:var(--stone)]'>
								0{i + 1}
							</span>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-xl'>
								{p.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.d}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
