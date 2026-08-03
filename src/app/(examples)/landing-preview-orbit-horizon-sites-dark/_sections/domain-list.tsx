/** Future Payload mapping: domainList (block). */
const DOMAINS = [
	{ host: 'acme.com', verified: true, primary: true, added: 'Jan 2025' },
	{ host: 'www.acme.com', verified: true, primary: false, added: 'Jan 2025' },
	{ host: 'shop.acme.com', verified: true, primary: false, added: 'Mar 2025' },
	{
		host: 'preview.acme.dev',
		verified: false,
		primary: false,
		added: 'Pending DNS'
	}
]

export function DomainList() {
	return (
		<section className='overflow-hidden border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Domains
				</h2>
			</div>
			<ul className='divide-y divide-[var(--line)]'>
				{DOMAINS.map(d => (
					<li
						key={d.host}
						className='flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5'
					>
						<div>
							<p className='font-medium text-xs'>
								{d.host}
								{d.primary ? (
									<span className='ml-2 rounded px-1.5 py-0.5 text-[9px] [background:color-mix(in_oklch,var(--olive)_15%,transparent)] [color:var(--olive)]'>
										Primary
									</span>
								) : null}
							</p>
							<p className='text-[11px] [color:var(--mute)]'>{d.added}</p>
						</div>
						<span
							className={`rounded-full px-2 py-0.5 text-[10px] ${
								d.verified
									? '[background:color-mix(in_oklch,var(--positive)_15%,transparent)] [color:var(--positive)]'
									: '[background:var(--surface)] [color:var(--mute)]'
							}`}
						>
							{d.verified ? 'Verified' : 'Awaiting DNS'}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
