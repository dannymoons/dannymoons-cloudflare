/** Future Payload mapping: comparePeriod (block). */
const METRICS = [
	{
		label: 'Total emissions',
		current: '142.8 kg',
		prior: '162.9 kg',
		delta: '-12.4%'
	},
	{
		label: 'Avg page weight',
		current: '1.4 MB',
		prior: '1.6 MB',
		delta: '-11.8%'
	},
	{ label: 'Page views', current: '408K', prior: '345K', delta: '+18.1%' },
	{ label: 'Clean pages (A/B)', current: '68%', prior: '54%', delta: '+14 pts' }
]

export function ComparePeriod() {
	return (
		<section className='border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-4 flex flex-wrap items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Period comparison
				</h2>
				<span className='rounded-lg border border-[var(--line)] px-2 py-1 text-[10px] [color:var(--mute)]'>
					Last 30d vs prior 30d
				</span>
			</div>
			<div className='grid gap-3 sm:grid-cols-2'>
				{METRICS.map(m => (
					<div
						key={m.label}
						className='rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'
					>
						<p className='mb-2 text-[11px] [color:var(--mute)]'>{m.label}</p>
						<div className='flex items-end justify-between gap-2'>
							<div>
								<p className='font-[family-name:var(--font-display)] font-semibold text-lg'>
									{m.current}
								</p>
								<p className='text-[11px] [color:var(--mute)]'>was {m.prior}</p>
							</div>
							<span
								className={`rounded-full px-2 py-0.5 font-medium text-[10px] ${
									m.delta.startsWith('+') && !m.delta.includes('pts')
										? '[color:var(--warn)]'
										: '[color:var(--positive)]'
								}`}
							>
								{m.delta}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
