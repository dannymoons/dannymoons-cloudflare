const groups = [
	{
		title: 'Getting started',
		items: [
			{ label: 'Introduction', href: '#introduction', active: true },
			{ label: 'Installation', href: '#installation' },
			{ label: 'Quick start', href: '#quick-start' }
		]
	},
	{
		title: 'Core concepts',
		items: [
			{ label: 'Clients', href: '#clients' },
			{ label: 'Authentication', href: '#authentication' },
			{ label: 'Streaming', href: '#streaming' },
			{ label: 'Error handling', href: '#errors' }
		]
	},
	{
		title: 'Guides',
		items: [
			{ label: 'Webhooks', href: '#top' },
			{ label: 'Rate limits', href: '#top' },
			{ label: 'Pagination', href: '#top' }
		]
	}
]

/** Future Payload mapping: docsSidebar (nav tree). */
export function DocSidebar() {
	return (
		<aside className='sticky top-[3.75rem] hidden h-[calc(100vh-3.75rem)] overflow-y-auto border-border border-r px-4 py-8 lg:block'>
			<nav className='flex flex-col gap-7'>
				{groups.map(g => (
					<div key={g.title}>
						<p className='mb-2 px-2 font-semibold text-foreground text-xs uppercase tracking-wide'>
							{g.title}
						</p>
						<ul className='flex flex-col gap-0.5'>
							{g.items.map(it => (
								<li key={it.label}>
									<a
										href={it.href}
										className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
											it.active
												? 'bg-primary-50 font-medium text-primary'
												: 'text-muted-foreground hover:bg-muted hover:text-foreground'
										}`}
									>
										{it.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	)
}
