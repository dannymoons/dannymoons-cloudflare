/** Future Payload mapping: deviceSplit (block). */
const DEVICES = [
	{ type: 'Mobile', pct: 58, co2: 82.8, avg: '0.41' },
	{ type: 'Desktop', pct: 36, co2: 48.2, avg: '0.32' },
	{ type: 'Tablet', pct: 6, co2: 11.8, avg: '0.38' }
]

export function DeviceSplit() {
	const r = 44
	const c = 2 * Math.PI * r
	let offset = 0

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Device split
			</h2>
			<div className='flex flex-col items-center gap-4 sm:flex-row'>
				<svg
					viewBox='0 0 120 120'
					className='h-28 w-28 shrink-0'
					role='img'
					aria-label='Donut chart of emissions by device'
				>
					{DEVICES.map((d, i) => {
						const dash = (d.pct / 100) * c
						const el = (
							<circle
								key={d.type}
								cx='60'
								cy='60'
								r={r}
								fill='none'
								stroke={
									i === 0
										? 'var(--orbit)'
										: i === 1
											? 'var(--mint)'
											: 'color-mix(in oklch, var(--mute) 60%, transparent)'
								}
								strokeWidth='16'
								strokeDasharray={`${dash} ${c - dash}`}
								strokeDashoffset={-offset}
								transform='rotate(-90 60 60)'
							/>
						)
						offset += dash
						return el
					})}
				</svg>
				<ul className='flex-1 space-y-2 text-xs'>
					{DEVICES.map(d => (
						<li
							key={d.type}
							className='flex justify-between gap-2 border-[var(--line)] border-b pb-2 last:border-0'
						>
							<span>{d.type}</span>
							<span className='[color:var(--mute)]'>
								{d.pct}% · {d.co2} kg · {d.avg}g avg
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
