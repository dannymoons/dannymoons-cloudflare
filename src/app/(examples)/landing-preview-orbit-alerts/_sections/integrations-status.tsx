import { CheckCircle, XCircle } from 'lucide-react'

/** Future Payload mapping: integrationsStatus (block). */
const INTEGRATIONS = [
	{
		name: 'Slack',
		status: 'connected',
		last: 'Delivered 2m ago',
		latency: '142ms'
	},
	{ name: 'PagerDuty', status: 'connected', last: 'No events', latency: '—' },
	{
		name: 'Microsoft Teams',
		status: 'error',
		last: 'Token expired',
		latency: '—'
	},
	{
		name: 'Datadog',
		status: 'connected',
		last: 'Synced metrics 1h ago',
		latency: '89ms'
	}
]

export function IntegrationsStatus() {
	return (
		<section className='rounded-xl border border-[var(--line)] [background:var(--panel)]'>
			<div className='border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Integrations
				</h2>
			</div>
			<ul className='divide-y divide-[var(--line)]'>
				{INTEGRATIONS.map(int => (
					<li
						key={int.name}
						className='flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5'
					>
						<div className='flex items-center gap-2.5'>
							{int.status === 'connected' ? (
								<CheckCircle className='h-4 w-4 [color:var(--mint)]' />
							) : (
								<XCircle className='h-4 w-4 [color:var(--danger)]' />
							)}
							<div>
								<p className='font-medium text-xs'>{int.name}</p>
								<p className='text-[11px] [color:var(--mute)]'>{int.last}</p>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							{int.latency !== '—' ? (
								<span className='text-[10px] [color:var(--mute)]'>
									{int.latency}
								</span>
							) : null}
							<button
								type='button'
								className='rounded-lg border border-[var(--line)] px-2.5 py-1 text-[10px] hover:[background:var(--surface)]'
							>
								{int.status === 'error' ? 'Reconnect' : 'Configure'}
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
