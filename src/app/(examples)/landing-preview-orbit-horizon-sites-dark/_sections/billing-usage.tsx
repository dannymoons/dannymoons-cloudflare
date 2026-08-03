/** Future Payload mapping: billingUsage (block). */
const USAGE = [
	{ label: 'Page views', used: 1.2, cap: 2, unit: 'M' },
	{ label: 'Sites', used: 4, cap: 10, unit: '' },
	{ label: 'Team seats', used: 8, cap: 15, unit: '' },
	{ label: 'API calls', used: 842, cap: 1000, unit: 'K' }
]

export function BillingUsage() {
	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-4 flex flex-wrap items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Plan usage
				</h2>
				<span className='rounded-lg border border-[var(--line)] px-2 py-0.5 text-[10px] [color:var(--olive)]'>
					Pro plan
				</span>
			</div>
			<ul className='space-y-4'>
				{USAGE.map(u => {
					const pct = Math.round((u.used / u.cap) * 100)
					return (
						<li key={u.label}>
							<div className='mb-1 flex justify-between text-xs'>
								<span>{u.label}</span>
								<span className='[color:var(--mute)]'>
									{u.used}
									{u.unit} / {u.cap}
									{u.unit}
								</span>
							</div>
							<div className='h-1.5 overflow-hidden rounded-full [background:var(--surface)]'>
								<div
									className='h-full rounded-full [background:var(--olive)]'
									style={{
										width: `${Math.min(pct, 100)}%`,
										opacity: pct > 85 ? 1 : 0.8
									}}
								/>
							</div>
						</li>
					)
				})}
			</ul>
			<p className='mt-4 text-[11px] [color:var(--mute)]'>
				Billing cycle resets Jul 1 · €149/mo
			</p>
		</section>
	)
}
