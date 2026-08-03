const cols = [
	{ title: 'Product', links: ['Features', 'Savings', 'Cards', 'Pricing'] },
	{ title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
	{ title: 'Support', links: ['Help centre', 'Contact', 'Status', 'Security'] },
	{ title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licences'] }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-14 sm:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5'>
					<div className='col-span-2 sm:col-span-4 lg:col-span-1'>
						<a
							href='#top'
							className='flex items-center gap-2 font-bold text-lg'
						>
							<span className='grid h-8 w-8 place-items-center rounded-lg font-bold text-[oklch(0.16_0.03_265)] [background:var(--mint)]'>
								V
							</span>
							Vault
						</a>
						<p className='mt-3 text-[var(--mute)] text-sm'>
							Money that moves with you.
						</p>
					</div>
					{cols.map(c => (
						<div key={c.title}>
							<p className='font-semibold text-sm'>{c.title}</p>
							<ul className='mt-3 space-y-2 text-[var(--mute)] text-sm'>
								{c.links.map(l => (
									<li key={l}>
										<a href='#top' className='hover:[color:var(--text)]'>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<p className='mt-12 border-[var(--line)] border-t pt-6 text-[var(--mute)] text-xs'>
					© {new Date().getFullYear()} Vault — Concept preview. Not a real
					financial product.
				</p>
			</div>
		</footer>
	)
}
