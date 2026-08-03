/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--sage)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl [color:var(--forest)] sm:text-2xl'
				>
					Thrive
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#breathing-space'
						className='transition-colors hover:[color:var(--ink)]'
					>
						The pause
					</a>
					<a
						href='#seasonal-journey'
						className='transition-colors hover:[color:var(--ink)]'
					>
						The arc
					</a>
					<a
						href='#coaching-paths'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Paths
					</a>
					<a
						href='#packages'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Packages
					</a>
					<a
						href='#stories'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Stories
					</a>
				</nav>

				<a
					href='#booking'
					className='inline-flex min-h-10 items-center rounded-full px-5 py-2 text-sm transition-opacity [background:var(--forest)] [color:var(--sage)] hover:opacity-90'
				>
					Book a call
				</a>
			</div>
		</header>
	)
}
