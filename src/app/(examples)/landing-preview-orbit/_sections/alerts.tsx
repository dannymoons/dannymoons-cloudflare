import { AlertTriangle, Bell } from 'lucide-react'

const alerts = [
	{
		page: '/blog/heavy-assets-post',
		site: 'acme.com',
		value: 0.72,
		budget: 0.5,
		level: 'danger' as const,
		when: '2 hours ago'
	},
	{
		page: '/checkout',
		site: 'shop.io',
		value: 0.61,
		budget: 0.5,
		level: 'warn' as const,
		when: 'Yesterday'
	},
	{
		page: '/landing/promo-q4',
		site: 'shop.io',
		value: 0.54,
		budget: 0.5,
		level: 'warn' as const,
		when: '3 days ago'
	},
	{
		page: '/api-reference',
		site: 'docs.dev',
		value: 0.31,
		budget: 0.4,
		level: 'ok' as const,
		when: 'Resolved'
	}
]

/** Future Payload mapping: thresholdAlerts. */
export function Alerts() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_35%,transparent)] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<span className='ob-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--orbit)]'>
							Threshold alerts
						</span>
						<h2 className='ob-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Know when a page exceeds budget
						</h2>
						<p className='ob-reveal mt-3 max-w-lg text-sm [color:var(--mute)]'>
							Set grams CO₂ limits per page or site. Orbit notifies your team
							via Slack, email, or webhook when emissions cross amber or red
							thresholds.
						</p>
					</div>
					<div className='ob-reveal flex gap-3 text-[10px] uppercase tracking-widest'>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklch,var(--warn)_40%,transparent)] px-2.5 py-1 [color:var(--warn)]'>
							<span className='h-1.5 w-1.5 rounded-full [background:var(--warn)]' />
							Warn
						</span>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklch,var(--danger)_40%,transparent)] px-2.5 py-1 [color:var(--danger)]'>
							<span className='h-1.5 w-1.5 rounded-full [background:var(--danger)]' />
							Critical
						</span>
					</div>
				</div>

				<ul className='ob-reveal space-y-3'>
					{alerts.map(a => (
						<li
							key={`${a.site}${a.page}`}
							className='flex flex-col gap-3 rounded-xl border border-[var(--line)] p-4 [background:color-mix(in_oklch,var(--void)_60%,transparent)] sm:flex-row sm:items-center sm:justify-between sm:p-5'
						>
							<div className='flex items-start gap-3'>
								<span
									className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
										a.level === 'danger'
											? '[background:color-mix(in_oklch,var(--danger)_15%,transparent)] [color:var(--danger)]'
											: a.level === 'warn'
												? '[background:color-mix(in_oklch,var(--warn)_15%,transparent)] [color:var(--warn)]'
												: '[background:color-mix(in_oklch,var(--mint)_15%,transparent)] [color:var(--mint)]'
									}`}
								>
									{a.level === 'ok' ? (
										<Bell className='h-4 w-4' />
									) : (
										<AlertTriangle className='h-4 w-4' />
									)}
								</span>
								<div>
									<p className='font-[family-name:var(--font-display)] text-sm'>
										{a.page}
									</p>
									<p className='mt-0.5 text-xs [color:var(--mute)]'>
										{a.site} · budget {a.budget.toFixed(2)}g
									</p>
								</div>
							</div>
							<div className='flex items-center gap-4 sm:gap-6'>
								<div className='text-right'>
									<p className='font-[family-name:var(--font-display)] font-semibold'>
										{a.value.toFixed(2)}g
									</p>
									<p className='text-[10px] [color:var(--mute)]'>{a.when}</p>
								</div>
								{a.level !== 'ok' ? (
									<span
										className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider ${
											a.level === 'danger'
												? 'border border-[color-mix(in_oklch,var(--danger)_45%,transparent)] [background:color-mix(in_oklch,var(--danger)_12%,transparent)] [color:var(--danger)]'
												: 'border border-[color-mix(in_oklch,var(--warn)_45%,transparent)] [background:color-mix(in_oklch,var(--warn)_12%,transparent)] [color:var(--warn)]'
										}`}
									>
										{a.level === 'danger' ? 'Over budget' : 'Approaching'}
									</span>
								) : (
									<span className='rounded-full border border-[color-mix(in_oklch,var(--mint)_35%,transparent)] px-2.5 py-1 text-[10px] uppercase tracking-wider [color:var(--mint)]'>
										Resolved
									</span>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
