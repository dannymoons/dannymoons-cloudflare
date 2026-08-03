import { AlertTriangle, Info } from 'lucide-react'

/** Future Payload mapping: alertsPanel (block). */
const ALERTS = [
	{
		level: 'warn' as const,
		title: 'Checkout page above threshold',
		detail: '0.82 g CO₂ — limit 0.75 g',
		time: '2h ago'
	},
	{
		level: 'danger' as const,
		title: 'Weekly budget at 80%',
		detail: '160 kg of 200 kg consumed',
		time: '5h ago'
	},
	{
		level: 'info' as const,
		title: 'Image audit complete',
		detail: '14 assets flagged for compression',
		time: '1d ago'
	}
]

export function AlertsPanel() {
	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Recent alerts
				</h2>
				<span className='rounded-full px-2 py-0.5 text-[10px] [background:color-mix(in_oklch,var(--danger)_20%,transparent)] [color:var(--danger)]'>
					2 active
				</span>
			</div>
			<ul className='space-y-2'>
				{ALERTS.map(alert => (
					<li
						key={alert.title}
						className='flex gap-2.5 rounded-lg border border-[var(--line)] p-2.5 [background:var(--surface)]'
					>
						{alert.level === 'danger' ? (
							<AlertTriangle
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--danger)]'
								aria-hidden
							/>
						) : alert.level === 'warn' ? (
							<AlertTriangle
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--warn)]'
								aria-hidden
							/>
						) : (
							<Info
								className='mt-0.5 h-4 w-4 shrink-0 [color:var(--orbit)]'
								aria-hidden
							/>
						)}
						<div className='min-w-0 flex-1'>
							<p className='font-medium text-xs leading-snug'>{alert.title}</p>
							<p className='text-[11px] [color:var(--mute)]'>{alert.detail}</p>
						</div>
						<span className='shrink-0 text-[10px] [color:var(--mute)]'>
							{alert.time}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
