const cols = [
	{
		title: 'Catalogue',
		links: ['Lab Grotesk', 'Lab Serif', 'Lab Mono', 'Lab Display']
	},
	{
		title: 'Services',
		links: ['Licensing', 'Custom type', 'Consulting', 'Workshops']
	},
	{ title: 'Resources', links: ['Specimens', 'OpenType guide', 'EULA', 'FAQ'] }
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
							className='font-[family-name:var(--font-display)] text-base'
						>
							Typelab
						</a>
						<p className='mt-3 max-w-xs text-[var(--mute)] text-sm leading-relaxed'>
							Independent type foundry. Drawn in Zürich, licensed worldwide.
						</p>
					</div>
					{cols.map(c => (
						<nav key={c.title}>
							<p className='text-xs uppercase tracking-[0.16em] [color:var(--mute)]'>
								{c.title}
							</p>
							<ul className='mt-4 space-y-2.5 text-sm'>
								{c.links.map(l => (
									<li key={l}>
										<a
											href='#top'
											className='transition-colors hover:[color:var(--red)]'
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<div className='mt-12 flex flex-col gap-2 border-[var(--line)] border-t pt-6 text-[var(--mute)] text-xs sm:flex-row sm:justify-between'>
					<p>© {new Date().getFullYear()} Typelab — Concept preview</p>
					<p>Specimens set in Lab Grotesk &amp; Lab Serif.</p>
				</div>
			</div>
		</footer>
	)
}
