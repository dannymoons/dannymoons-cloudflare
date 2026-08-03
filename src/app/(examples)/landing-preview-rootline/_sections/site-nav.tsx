/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--sand)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl [color:var(--navy)] sm:text-2xl'
				>
					Root<span className='[color:var(--teal)]'>line</span>
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#cmo-index'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Index
					</a>
					<a
						href='#claim-audit'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Claim audit
					</a>
					<a
						href='#programs'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Programs
					</a>
					<a
						href='#case-studies'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Case studies
					</a>
					<a
						href='#insights'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Insights
					</a>
				</nav>

				<a
					href='#contact'
					className='inline-flex min-h-10 items-center rounded-sm px-5 py-2 text-sm transition-opacity [background:var(--navy)] [color:var(--sand)] hover:opacity-90'
				>
					Brief us
				</a>
			</div>
		</header>
	)
}
