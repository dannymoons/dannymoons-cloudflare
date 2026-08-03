/** Future Payload mapping: teamPerSite (block). */
const TEAMS = [
	{ site: 'acme.com', members: ['DK', 'SM', 'JL'], role: 'Admin' },
	{ site: 'shop.acme.com', members: ['SM', 'AR'], role: 'Editor' },
	{ site: 'docs.acme.io', members: ['JL', 'MK', 'PT', 'RW'], role: 'Viewer' }
]

export function TeamPerSite() {
	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Team access
			</h2>
			<ul className='space-y-3'>
				{TEAMS.map(t => (
					<li
						key={t.site}
						className='flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'
					>
						<div>
							<p className='font-medium text-xs'>{t.site}</p>
							<p className='text-[11px] [color:var(--mute)]'>
								Default role: {t.role}
							</p>
						</div>
						<div className='flex -space-x-2'>
							{t.members.map(m => (
								<span
									key={m}
									className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--surface)] font-[family-name:var(--font-display)] font-semibold text-[9px] [background:var(--panel)]'
								>
									{m}
								</span>
							))}
							<button
								type='button'
								className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--surface)] text-[10px] text-[oklch(0.12_0.02_265)] [background:var(--orbit)]'
								aria-label={`Invite to ${t.site}`}
							>
								+
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
