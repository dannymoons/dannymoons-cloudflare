/** Future Payload mapping: budgetTracker (block). */
export function BudgetTracker() {
	const used = 64
	const cap = 200
	const pct = Math.round((used / cap) * 100)

	return (
		<section className='border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Carbon budget
				</h2>
				<span className='text-[10px] uppercase tracking-wider [color:var(--positive)]'>
					On track
				</span>
			</div>
			<div className='mb-2 flex items-baseline justify-between'>
				<span className='font-[family-name:var(--font-display)] font-bold text-xl'>
					{used} kg
				</span>
				<span className='text-[11px] [color:var(--mute)]'>
					of {cap} kg monthly
				</span>
			</div>
			<div className='h-2 overflow-hidden rounded-full [background:var(--surface)]'>
				<div
					className='h-full rounded-full [background:linear-gradient(90deg,var(--olive),var(--positive))]'
					style={{ width: `${pct}%` }}
					role='progressbar'
					aria-valuenow={used}
					aria-valuemin={0}
					aria-valuemax={cap}
					aria-label='Carbon budget usage'
				/>
			</div>
			<p className='mt-3 text-[11px] leading-relaxed [color:var(--mute)]'>
				Projected to reach {Math.round(used * 1.08)} kg by month end. 12 days
				remaining at current traffic.
			</p>
		</section>
	)
}
