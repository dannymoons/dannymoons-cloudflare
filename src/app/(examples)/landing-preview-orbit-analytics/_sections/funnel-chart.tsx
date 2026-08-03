/** Future Payload mapping: funnelChart (block). */
const STAGES = [
	{ label: 'Page loads', value: 408000, co2: 142.8, pct: 100 },
	{ label: 'Engaged (>10s)', value: 244800, co2: 68.4, pct: 72 },
	{ label: 'Converted', value: 32640, co2: 18.2, pct: 48 },
	{ label: 'Return visit', value: 12288, co2: 6.1, pct: 28 }
]

export function FunnelChart() {
	const max = STAGES[0].value

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-5 flex flex-wrap items-end justify-between gap-2'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						Emissions funnel
					</h2>
					<p className='text-[11px] [color:var(--mute)]'>
						kg CO₂ attributed per journey stage
					</p>
				</div>
				<span className='text-[11px] [color:var(--mint)]'>
					−14% drop-off emissions vs prior
				</span>
			</div>
			<div className='space-y-3'>
				{STAGES.map((stage, i) => (
					<div key={stage.label}>
						<div className='mb-1 flex flex-wrap items-center justify-between gap-2 text-xs'>
							<span className='font-medium'>{stage.label}</span>
							<span className='[color:var(--mute)]'>
								{stage.co2} kg · {(stage.value / 1000).toFixed(0)}K sessions
							</span>
						</div>
						<div className='relative h-10 overflow-hidden rounded-lg [background:var(--surface)]'>
							<div
								className='flex h-full items-center rounded-lg px-3 font-medium text-[11px] text-[oklch(0.12_0.02_265)] transition-all'
								style={{
									width: `${(stage.value / max) * 100}%`,
									background: `color-mix(in oklch, var(--orbit) ${100 - i * 18}%, var(--mint))`,
									minWidth: '80px'
								}}
							>
								{stage.pct}% width
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
