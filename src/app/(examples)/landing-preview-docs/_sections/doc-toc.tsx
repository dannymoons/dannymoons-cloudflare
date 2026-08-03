const items = [
	{ label: 'Introduction', href: '#introduction' },
	{ label: 'Installation', href: '#installation' },
	{ label: 'Quick start', href: '#quick-start' },
	{ label: 'Clients', href: '#clients' },
	{ label: 'Authentication', href: '#authentication' },
	{ label: 'Streaming', href: '#streaming' },
	{ label: 'Error handling', href: '#errors' }
]

/** Future Payload mapping: docsToc (on this page). */
export function DocToc() {
	return (
		<aside className='sticky top-[3.75rem] hidden h-[calc(100vh-3.75rem)] overflow-y-auto px-4 py-10 xl:block'>
			<p className='mb-3 font-semibold text-foreground text-xs uppercase tracking-wide'>
				On this page
			</p>
			<ul className='flex flex-col gap-1 border-border border-l'>
				{items.map(it => (
					<li key={it.href}>
						<a
							href={it.href}
							className='-ml-px block border-transparent border-l py-1 pl-4 text-muted-foreground text-sm transition-colors hover:border-primary hover:text-foreground'
						>
							{it.label}
						</a>
					</li>
				))}
			</ul>
		</aside>
	)
}
