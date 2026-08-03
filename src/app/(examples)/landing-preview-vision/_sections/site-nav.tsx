const links = ['Overview', 'Sound', 'Design', 'Tech specs']

/** Future Payload mapping: siteHeader (translucent). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-xl [background:color-mix(in_oklch,var(--paper)_72%,transparent)]'>
			<div className='mx-auto flex h-12 max-w-5xl items-center justify-between px-6'>
				<a href='#top' className='font-semibold text-sm tracking-tight'>
					Aura
				</a>
				<nav className='hidden items-center gap-7 text-[var(--mute)] text-xs sm:flex'>
					{links.map(l => (
						<a
							key={l}
							href='#top'
							className='transition-colors hover:[color:var(--ink)]'
						>
							{l}
						</a>
					))}
				</nav>
				<a
					href='#buy'
					className='rounded-full px-3.5 py-1 font-medium text-white text-xs transition-opacity [background:var(--accent)] hover:opacity-90'
				>
					Buy
				</a>
			</div>
		</header>
	)
}
