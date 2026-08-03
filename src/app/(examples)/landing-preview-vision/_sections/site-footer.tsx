const columns = [
	{
		title: 'Shop',
		links: ['Aura', 'Aura Pro', 'Accessories', 'Trade in', 'Gift cards']
	},
	{
		title: 'Learn',
		links: ['Sound', 'Design', 'Tech specs', 'Compare', 'Support']
	},
	{ title: 'Account', links: ['Manage', 'Orders', 'Returns', 'Warranty'] },
	{
		title: 'Company',
		links: ['About', 'Sustainability', 'Newsroom', 'Careers']
	}
]

/** Future Payload mapping: siteFooter (fine print). */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-6 py-12 text-[var(--mute)] text-xs [background:color-mix(in_oklch,var(--paper)_60%,oklch(0.94_0.003_270))]'>
			<div className='mx-auto max-w-5xl'>
				<p className='max-w-3xl leading-relaxed'>
					Battery life varies by use and configuration. €33.25/mo. pricing
					requires a 12-month installment plan. Pricing shown is a concept
					illustration.
				</p>
				<div className='mt-8 grid grid-cols-2 gap-8 border-[var(--line)] border-t pt-8 sm:grid-cols-4'>
					{columns.map(col => (
						<div key={col.title}>
							<h4 className='font-semibold text-[var(--ink)]'>{col.title}</h4>
							<ul className='mt-3 flex flex-col gap-2'>
								{col.links.map(l => (
									<li key={l}>
										<a
											href='#top'
											className='transition-colors hover:[color:var(--ink)]'
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='mt-8 flex flex-col items-start justify-between gap-2 border-[var(--line)] border-t pt-6 sm:flex-row sm:items-center'>
					<span>© {new Date().getFullYear()} Aura Audio — concept preview</span>
					<span>Designed in a parallel universe</span>
				</div>
			</div>
		</footer>
	)
}
