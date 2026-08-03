/** Future Payload mapping: auditLog (block). */
const LOG = [
	{
		time: '14:32',
		user: 'Danny K.',
		action: 'Added domain preview.acme.dev',
		site: 'acme.com'
	},
	{
		time: '11:08',
		user: 'Sarah M.',
		action: 'Updated carbon budget to 200 kg',
		site: 'shop.acme.com'
	},
	{
		time: '09:15',
		user: 'System',
		action: 'Auto-sync completed (248 pages)',
		site: 'acme.com'
	},
	{
		time: 'Yesterday',
		user: 'Jules L.',
		action: 'Invited mk@agency.io as Viewer',
		site: 'docs.acme.io'
	},
	{
		time: 'Jun 5',
		user: 'Danny K.',
		action: 'Enabled green CDN routing',
		site: 'All sites'
	},
	{
		time: 'Jun 4',
		user: 'Sarah M.',
		action: 'Created workspace staging.acme.dev',
		site: '—'
	}
]

export function AuditLog() {
	return (
		<section className='overflow-hidden rounded-xl border border-[var(--line)] [background:var(--panel)]'>
			<div className='border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Audit log
				</h2>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[560px] text-left text-xs'>
					<thead>
						<tr className='border-[var(--line)] border-b [color:var(--mute)]'>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Time</th>
							<th className='px-3 py-2.5 font-medium'>User</th>
							<th className='px-3 py-2.5 font-medium'>Action</th>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Site</th>
						</tr>
					</thead>
					<tbody>
						{LOG.map(row => (
							<tr
								key={`${row.time}-${row.action}`}
								className='border-[var(--line)] border-b last:border-0 hover:[background:var(--surface)]'
							>
								<td className='whitespace-nowrap px-4 py-3 [color:var(--mute)] sm:px-5'>
									{row.time}
								</td>
								<td className='px-3 py-3 font-medium'>{row.user}</td>
								<td className='px-3 py-3'>{row.action}</td>
								<td className='px-4 py-3 [color:var(--mute)] sm:px-5'>
									{row.site}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
