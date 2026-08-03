const metrics = [
	{
		label: 'Avg claim approval time',
		value: '4.2 days',
		change: '−62% vs baseline'
	},
	{
		label: 'Campaign carbon per £1M spend',
		value: '8.4 tCO₂e',
		change: '−28% YoY'
	},
	{ label: 'Stakeholder trust index', value: '78 / 100', change: '+14 pts' },
	{ label: 'Greenwashing incidents', value: '0', change: '3-year streak' }
]

/** Future Payload mapping: impactMetrics. */
export function Metrics() {
	return (
		<section id='metrics' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Measured outcomes
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						What changes when marketing gets rigorous
					</h2>
				</div>

				<div className='rl-reveal mt-12 overflow-x-auto rounded-sm border border-[var(--line)]'>
					<table className='w-full min-w-[32rem] text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b [background:color-mix(in_oklch,var(--navy)_6%,var(--sand))]'>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>
									Metric
								</th>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>
									Client average
								</th>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>
									Trend
								</th>
							</tr>
						</thead>
						<tbody>
							{metrics.map(m => (
								<tr key={m.label} className='border-[var(--line)] border-b'>
									<td className='px-5 py-4 [color:var(--ink)]'>{m.label}</td>
									<td className='px-5 py-4 font-[family-name:var(--font-display)] text-lg [color:var(--navy)]'>
										{m.value}
									</td>
									<td className='px-5 py-4 [color:var(--teal)]'>{m.change}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
