import { CheckCircle, Loader2, RefreshCw } from 'lucide-react'

/** Future Payload mapping: syncStatus (block). */
const SYNCS = [
	{ site: 'acme.com', status: 'done' as const, last: '2 min ago', pages: 248 },
	{
		site: 'shop.acme.com',
		status: 'running' as const,
		last: 'In progress',
		pages: 412
	},
	{
		site: 'docs.acme.io',
		status: 'done' as const,
		last: '18 min ago',
		pages: 156
	},
	{
		site: 'staging.acme.dev',
		status: 'queued' as const,
		last: 'Scheduled 14:00',
		pages: 64
	}
]

export function SyncStatus() {
	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Sync status
				</h2>
				<button
					type='button'
					className='flex items-center gap-1.5 rounded-lg border border-[var(--line)] px-2.5 py-1 text-[11px] hover:[background:var(--surface)]'
				>
					<RefreshCw className='h-3 w-3' />
					Sync all
				</button>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[480px] text-left text-xs'>
					<thead>
						<tr className='border-[var(--line)] border-b [color:var(--mute)]'>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Site</th>
							<th className='px-3 py-2.5 font-medium'>Status</th>
							<th className='px-3 py-2.5 font-medium'>Pages</th>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Last sync</th>
						</tr>
					</thead>
					<tbody>
						{SYNCS.map(s => (
							<tr
								key={s.site}
								className='border-[var(--line)] border-b last:border-0'
							>
								<td className='px-4 py-3 font-medium sm:px-5'>{s.site}</td>
								<td className='px-3 py-3'>
									<span className='inline-flex items-center gap-1.5'>
										{s.status === 'done' ? (
											<CheckCircle className='h-3.5 w-3.5 [color:var(--positive)]' />
										) : s.status === 'running' ? (
											<Loader2 className='h-3.5 w-3.5 animate-spin [color:var(--olive)]' />
										) : (
											<span className='h-2 w-2 rounded-full [background:var(--mute)]' />
										)}
										{s.status}
									</span>
								</td>
								<td className='px-3 py-3 [color:var(--mute)]'>{s.pages}</td>
								<td className='px-4 py-3 [color:var(--mute)] sm:px-5'>
									{s.last}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
