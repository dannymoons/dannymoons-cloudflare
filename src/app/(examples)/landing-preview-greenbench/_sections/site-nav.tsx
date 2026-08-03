/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--white)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-tight [color:var(--ink)] sm:text-2xl'
				>
					Green<span className='[color:var(--green)]'>bench</span>
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#live-terminal'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Live feed
					</a>
					<a
						href='#radar-benchmark'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Radar
					</a>
					<a
						href='#leaderboard'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Leaderboard
					</a>
					<a
						href='#features'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Features
					</a>
					<a
						href='#pricing'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Pricing
					</a>
				</nav>

				<a
					href='#trial'
					className='inline-flex min-h-10 items-center rounded-lg px-5 py-2 font-medium text-sm transition-opacity [background:var(--green)] [color:var(--white)] hover:opacity-90'
				>
					Start trial
				</a>
			</div>
		</header>
	)
}
