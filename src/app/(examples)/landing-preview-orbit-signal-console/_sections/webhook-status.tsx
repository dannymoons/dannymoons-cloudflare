import { CheckCircle2, RefreshCw, XCircle } from 'lucide-react'

/** Future Payload mapping: webhookStatus (block). */
const ENDPOINTS = [
	{
		url: 'https://api.acme.com/hooks/carbon',
		status: 'healthy' as const,
		delivered: '12,842',
		failed: '14',
		latency: '128ms'
	},
	{
		url: 'https://hooks.slack.com/services/T…',
		status: 'healthy' as const,
		delivered: '3,201',
		failed: '2',
		latency: '94ms'
	},
	{
		url: 'https://staging.acme.com/webhook',
		status: 'degraded' as const,
		delivered: '891',
		failed: '47',
		latency: '842ms'
	}
]

const STATUS_STYLE = {
	healthy: {
		label: 'healthy',
		color: 'var(--lime)',
		Icon: CheckCircle2
	},
	degraded: {
		label: 'degraded',
		color: 'var(--warn)',
		Icon: RefreshCw
	},
	failed: {
		label: 'failed',
		color: 'var(--danger)',
		Icon: XCircle
	}
}

export function WebhookStatus() {
	return (
		<section className='rounded border border-[var(--line)] [background:var(--panel)]'>
			<div className='border-[var(--line)] border-b px-4 py-3'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Webhook delivery
				</h2>
				<p className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--mute)]'>
					Last 24 hours · HMAC verified
				</p>
			</div>
			<ul className='divide-y divide-[var(--line)]'>
				{ENDPOINTS.map(endpoint => {
					const { label, color, Icon } = STATUS_STYLE[endpoint.status]
					return (
						<li key={endpoint.url} className='space-y-2 px-4 py-3'>
							<div className='flex items-start justify-between gap-2'>
								<code className='block min-w-0 flex-1 truncate text-[10px] leading-relaxed [color:var(--violet)]'>
									{endpoint.url}
								</code>
								<span
									className='flex shrink-0 items-center gap-1 rounded border px-1.5 py-0.5 font-[family-name:var(--font-body)] text-[9px] uppercase tracking-wider'
									style={{
										color,
										borderColor: `color-mix(in oklch, ${color} 35%, var(--line))`
									}}
								>
									<Icon className='h-3 w-3' aria-hidden />
									{label}
								</span>
							</div>
							<div className='grid grid-cols-3 gap-2 font-[family-name:var(--font-body)] text-[10px]'>
								<div>
									<span className='block [color:var(--mute)]'>Delivered</span>
									<span className='tabular-nums [color:var(--lime)]'>
										{endpoint.delivered}
									</span>
								</div>
								<div>
									<span className='block [color:var(--mute)]'>Failed</span>
									<span
										className={`tabular-nums ${endpoint.status === 'degraded' ? '[color:var(--warn)]' : '[color:var(--mute)]'}`}
									>
										{endpoint.failed}
									</span>
								</div>
								<div>
									<span className='block [color:var(--mute)]'>p99</span>
									<span className='tabular-nums'>{endpoint.latency}</span>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
			<div className='border-[var(--line)] border-t px-4 py-2.5'>
				<p className='font-[family-name:var(--font-body)] text-[10px] [color:var(--mute)]'>
					<span className='[color:var(--lime)]'>●</span> 98.7% success rate
					<span className='mx-2 [color:var(--line)]'>|</span>
					<span className='osg-blink [color:var(--lime)]'>_</span> auto-retry
					enabled
				</p>
			</div>
		</section>
	)
}
