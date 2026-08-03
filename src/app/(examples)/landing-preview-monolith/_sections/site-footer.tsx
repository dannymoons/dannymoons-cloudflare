const cols = [
	{
		title: 'Magazine',
		links: ['Current issue', 'Archive', 'Stockists', 'Submissions']
	},
	{ title: 'About', links: ['Masthead', 'Ethos', 'Contact', 'Advertising'] },
	{ title: 'Follow', links: ['Instagram', 'Are.na', 'Newsletter', 'RSS'] }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-14 sm:px-8'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
					<div>
						<a
							href='#top'
							className='font-bold text-base uppercase tracking-[0.18em]'
						>
							Monolith
						</a>
						<p className='mt-3 max-w-xs text-[var(--ink-soft)] text-sm leading-relaxed'>
							An independent design quarterly. Printed in Rotterdam since 2019.
						</p>
					</div>
					{cols.map(c => (
						<nav key={c.title}>
							<p className='text-xs uppercase tracking-[0.16em] [color:var(--ink-soft)]'>
								{c.title}
							</p>
							<ul className='mt-4 space-y-2.5 text-sm'>
								{c.links.map(l => (
									<li key={l}>
										<a
											href='#top'
											className='transition-colors hover:[color:var(--accent-ink)]'
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<div className='mt-12 flex flex-col gap-2 border-[var(--line)] border-t pt-6 text-xs [color:var(--ink-soft)] sm:flex-row sm:justify-between'>
					<p>© {new Date().getFullYear()} Monolith — Concept preview</p>
					<p>Designed on a 12-column grid.</p>
				</div>
			</div>
		</footer>
	)
}
