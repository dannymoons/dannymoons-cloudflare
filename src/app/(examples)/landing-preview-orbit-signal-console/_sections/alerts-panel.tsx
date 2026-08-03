import { AlertTriangle, Info, Webhook } from 'lucide-react'

/** Future Payload mapping: alertsPanel (block). */
const ALERTS = [
	{
		level: 'warn' as const,
		title: 'Webhook delivery slow',
		detail: 'POST /hooks/carbon — p99 842ms (limit 500ms)',
		time: '12m ago'
	},
	{
		level: 'danger' as const,
		title: 'Rate limit threshold',
		detail: 'GET /v1/pages — 94% of 10k/min quota consumed',
		time: '1h ago'
	},
	{
		level: 'warn' as const,
		title: 'Carbon budget exceeded',
		detail: '/checkout — 0.82g vs 0.75g budget via webhook evt_3k9m',
		time: '2h ago'
	},
	{
		level: 'info' as const,
		title: 'API key rotated',
		detail: 'sk_live_…8f2a expired — new key active',
		time: '6h ago'
	}
]

export function AlertsPanel() {
	return (
		<section className='rounded border border-[var(--line)] p-4 [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					API alerts
				</h2>
				<span className='rounded border border-[color-mix(in_oklch,var(--danger)_35%,var(--line))] px-2 py-0.5 font-[family-name:var(--font-body)] text-[10px] [color:var(--danger)]'>
					3 active
				</span>
			</div>
			<ul className='space-y-2'>
				{ALERTS.map(alert => (
					<li
						key={alert.title}
						className='flex gap-2.5 rounded border border-[var(--line)] p-2.5 [background:color-mix(in_oklch,var(--void)_50%,transparent)]'
					>
						{alert.level === 'danger' ? (
							<AlertTriangle
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--danger)]'
								aria-hidden
							/>
						) : alert.level === 'warn' ? (
							<Webhook
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--warn)]'
								aria-hidden
							/>
						) : (
							<Info
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--violet)]'
								aria-hidden
							/>
						)}
						<div className='min-w-0 flex-1'>
							<p className='font-[family-name:var(--font-body)] font-medium text-[11px] leading-snug'>
								{alert.title}
							</p>
							<p className='font-[family-name:var(--font-body)] text-[10px] leading-relaxed [color:var(--mute)]'>
								{alert.detail}
							</p>
						</div>
						<span className='shrink-0 font-[family-name:var(--font-body)] text-[10px] tabular-nums [color:var(--mute)]'>
							{alert.time}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
