/** Future Payload mapping: apiEvents (event stream). */
const EVENTS = [
	{
		method: 'GET',
		endpoint: '/v1/sites/acme.com/pages',
		status: 200,
		latency: '42ms',
		time: '2s ago'
	},
	{
		method: 'POST',
		endpoint: '/v1/webhooks/deliver',
		status: 200,
		latency: '128ms',
		time: '2s ago'
	},
	{
		method: 'GET',
		endpoint: '/v1/sites/acme.com/emissions',
		status: 200,
		latency: '38ms',
		time: '5s ago'
	},
	{
		method: 'POST',
		endpoint: '/v1/events/page_view',
		status: 201,
		latency: '56ms',
		time: '5s ago'
	},
	{
		method: 'GET',
		endpoint: '/v1/pages/checkout',
		status: 429,
		latency: '12ms',
		time: '8s ago'
	},
	{
		method: 'POST',
		endpoint: '/v1/webhooks/deliver',
		status: 502,
		latency: '842ms',
		time: '8s ago'
	},
	{
		method: 'GET',
		endpoint: '/v1/sites/acme.com/alerts',
		status: 200,
		latency: '31ms',
		time: '12s ago'
	},
	{
		method: 'POST',
		endpoint: '/v1/keys/rotate',
		status: 200,
		latency: '94ms',
		time: '12s ago'
	}
] as const

function statusColor(code: number): string {
	if (code >= 500) return 'var(--danger)'
	if (code >= 400) return 'var(--warn)'
	return 'var(--lime)'
}

function methodColor(method: string): string {
	return method === 'GET' ? 'var(--lime)' : 'var(--violet)'
}

export function ApiEvents() {
	return (
		<section className='overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						API event stream
					</h2>
					<p className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--mute)]'>
						Live tail · acme.com · production
					</p>
				</div>
				<span className='flex items-center gap-1.5 font-[family-name:var(--font-body)] text-[10px] [color:var(--mute)]'>
					<span className='h-1.5 w-1.5 rounded-full [background:var(--lime)]' />
					streaming
					<span className='osg-blink [color:var(--lime)]'>_</span>
				</span>
			</div>
			<div
				className='overflow-x-auto p-4 font-[family-name:var(--font-body)] text-[11px] leading-relaxed sm:p-5'
				role='log'
				aria-label='Recent API events'
				aria-live='polite'
			>
				<ul className='min-w-[480px] space-y-1'>
					{EVENTS.map(event => (
						<li
							key={`${event.method}-${event.endpoint}-${event.time}`}
							className='flex flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded border border-transparent px-2 py-1 hover:border-[var(--line)] hover:[background:color-mix(in_oklch,var(--void)_60%,transparent)]'
						>
							<span className='shrink-0 tabular-nums [color:var(--mute)]'>
								{event.time}
							</span>
							<span
								className='shrink-0 font-medium'
								style={{ color: methodColor(event.method) }}
							>
								{event.method}
							</span>
							<code className='min-w-0 flex-1 truncate [color:var(--text)]'>
								{event.endpoint}
							</code>
							<span
								className='shrink-0 font-medium tabular-nums'
								style={{ color: statusColor(event.status) }}
							>
								{event.status}
							</span>
							<span className='shrink-0 tabular-nums [color:var(--mute)]'>
								{event.latency}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
