/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--blush)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight [color:var(--petal)]'
				>
					Bloom
				</a>

				<nav className='hidden items-center gap-6 font-medium text-sm [color:var(--mute)] md:flex'>
					<a
						href='#mission'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Mission
					</a>
					<a
						href='#programs'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Programs
					</a>
					<a
						href='#ward'
						className='transition-colors hover:[color:var(--ink)]'
					>
						The wing
					</a>
					<a
						href='#impact'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Impact
					</a>
				</nav>

				<a
					href='#donate'
					className='inline-flex min-h-10 items-center rounded-full px-5 py-2 font-semibold text-sm text-white transition-opacity [background:var(--petal)] hover:opacity-90'
				>
					Donate
				</a>
			</div>
		</header>
	)
}
