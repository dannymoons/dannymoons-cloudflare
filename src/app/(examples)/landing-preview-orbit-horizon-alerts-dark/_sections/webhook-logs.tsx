/** Future Payload mapping: webhookLogs (block). */
const LOGS = [
	{
		time: '14:32:08',
		status: 200,
		event: 'alert.triggered',
		latency: '124ms',
		payload: 'checkout_co2_cap'
	},
	{
		time: '14:32:09',
		status: 200,
		event: 'alert.delivered',
		latency: '89ms',
		payload: 'slack'
	},
	{
		time: '09:15:42',
		status: 200,
		event: 'alert.triggered',
		latency: '156ms',
		payload: 'budget_80'
	},
	{
		time: '09:15:43',
		status: 502,
		event: 'alert.failed',
		latency: '2.1s',
		payload: 'teams_webhook'
	},
	{
		time: '09:16:01',
		status: 200,
		event: 'alert.retry',
		latency: '98ms',
		payload: 'email_fallback'
	}
]

export function WebhookLogs() {
	return (
		<section className='overflow-hidden border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Webhook logs
				</h2>
				<button
					type='button'
					className='text-[11px] [color:var(--olive)] hover:underline'
				>
					Export logs
				</button>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[560px] font-mono text-[11px]'>
					<thead>
						<tr className='border-[var(--line)] border-b [color:var(--mute)]'>
							<th className='px-4 py-2 text-left font-medium sm:px-5'>Time</th>
							<th className='px-3 py-2 text-left font-medium'>Status</th>
							<th className='px-3 py-2 text-left font-medium'>Event</th>
							<th className='px-3 py-2 text-left font-medium'>Latency</th>
							<th className='px-4 py-2 text-left font-medium sm:px-5'>
								Payload
							</th>
						</tr>
					</thead>
					<tbody>
						{LOGS.map(log => (
							<tr
								key={`${log.time}-${log.event}-${log.payload}`}
								className='border-[var(--line)] border-b last:border-0 hover:[background:var(--surface)]'
							>
								<td className='px-4 py-2.5 [color:var(--mute)] sm:px-5'>
									{log.time}
								</td>
								<td className='px-3 py-2.5'>
									<span
										className={
											log.status === 200
												? '[color:var(--positive)]'
												: '[color:var(--danger)]'
										}
									>
										{log.status}
									</span>
								</td>
								<td className='px-3 py-2.5'>{log.event}</td>
								<td className='px-3 py-2.5 [color:var(--mute)]'>
									{log.latency}
								</td>
								<td className='px-4 py-2.5 [color:var(--olive)] sm:px-5'>
									{log.payload}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
