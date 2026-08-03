/** Future Payload mapping: alertHistory (block). */
const HISTORY = [
	{
		time: 'Jun 8 14:32',
		rule: 'Checkout CO₂ cap',
		severity: 'warn',
		message: '/checkout hit 0.82 g (limit 0.75 g)',
		resolved: false
	},
	{
		time: 'Jun 8 09:15',
		rule: 'Monthly budget 80%',
		severity: 'danger',
		message: 'Site at 160 kg of 200 kg budget',
		resolved: false
	},
	{
		time: 'Jun 7 16:44',
		rule: 'Page weight spike',
		severity: 'warn',
		message: '/products loaded 3.2 MB',
		resolved: true
	},
	{
		time: 'Jun 6 11:02',
		rule: 'Checkout CO₂ cap',
		severity: 'warn',
		message: '/checkout hit 0.78 g',
		resolved: true
	},
	{
		time: 'Jun 5 08:00',
		rule: 'Weekly digest',
		severity: 'info',
		message: 'Report sent to 4 subscribers',
		resolved: true
	}
]

const SEV: Record<string, string> = {
	warn: 'var(--warn)',
	danger: 'var(--danger)',
	info: 'var(--orbit)'
}

export function AlertHistory() {
	return (
		<section className='rounded-xl border border-[var(--line)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Alert history
				</h2>
				<select
					className='h-8 rounded-lg border border-[var(--line)] bg-transparent px-2 text-[11px]'
					aria-label='Filter history'
				>
					<option>Last 7 days</option>
					<option>Last 30 days</option>
					<option>Unresolved only</option>
				</select>
			</div>
			<ul className='divide-y divide-[var(--line)]'>
				{HISTORY.map(h => (
					<li
						key={`${h.time}-${h.rule}`}
						className='flex flex-wrap items-start gap-3 px-4 py-3 sm:px-5'
					>
						<span
							className='mt-1 h-2 w-2 shrink-0 rounded-full'
							style={{ background: SEV[h.severity] }}
							aria-hidden
						/>
						<div className='min-w-0 flex-1'>
							<div className='flex flex-wrap items-center gap-2'>
								<span className='font-medium text-xs'>{h.rule}</span>
								{!h.resolved ? (
									<span className='rounded px-1.5 py-0.5 text-[9px] [background:color-mix(in_oklch,var(--danger)_20%,transparent)] [color:var(--danger)]'>
										Open
									</span>
								) : (
									<span className='text-[10px] [color:var(--mute)]'>
										Resolved
									</span>
								)}
							</div>
							<p className='text-[11px] [color:var(--mute)]'>{h.message}</p>
						</div>
						<time className='shrink-0 text-[10px] [color:var(--mute)]'>
							{h.time}
						</time>
					</li>
				))}
			</ul>
		</section>
	)
}
