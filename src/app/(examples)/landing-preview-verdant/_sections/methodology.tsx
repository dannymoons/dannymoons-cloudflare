const steps = [
	{
		n: '01',
		t: 'Diagnose',
		d: 'Baseline your footprint, supply chain and stakeholder expectations.'
	},
	{
		n: '02',
		t: 'Design',
		d: 'Co-create a strategy that is ambitious, auditable and commercially viable.'
	},
	{
		n: '03',
		t: 'Deploy',
		d: 'Embed change across operations, procurement and communications.'
	},
	{
		n: '04',
		t: 'Demonstrate',
		d: 'Report progress with data your investors and regulators trust.'
	}
]

/** Future Payload mapping: processSteps. */
export function Methodology() {
	return (
		<section className='px-5 py-20 [background:var(--clay)] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='vd-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					The Verdant method
				</h2>
				<ol className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{steps.map(s => (
						<li
							key={s.n}
							className='vd-reveal border-[var(--line)] border-t pt-6'
						>
							<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--sage)]'>
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
