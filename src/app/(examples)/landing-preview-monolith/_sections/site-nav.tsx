/** Future Payload mapping: siteHeader (editorial, slim sticky). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--bg)_85%,transparent)]'>
			<div className='mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-bold text-base uppercase tracking-[0.18em]'
				>
					Monolith
				</a>

				<nav className='hidden items-center gap-7 text-[var(--ink-soft)] text-sm md:flex'>
					<a
						href='#stories'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Stories
					</a>
					<a
						href='#about'
						className='transition-colors hover:[color:var(--ink)]'
					>
						About
					</a>
					<a
						href='#contributors'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Masthead
					</a>
				</nav>

				<a
					href='#subscribe'
					className='inline-flex min-h-9 items-center rounded-full px-4 font-medium text-[var(--bg)] text-sm transition-opacity [background:var(--ink)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2'
				>
					Subscribe
				</a>
			</div>
		</header>
	)
}
