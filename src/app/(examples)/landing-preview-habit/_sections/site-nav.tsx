/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--cream)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl [color:var(--ink)]'
				>
					Habit
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#habits'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Habits
					</a>
					<a
						href='#features'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Features
					</a>
					<a
						href='#science'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Science
					</a>
					<a
						href='#community'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Community
					</a>
					<a
						href='#pricing'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Pricing
					</a>
				</nav>

				<a
					href='#download'
					className='inline-flex min-h-10 items-center rounded-full px-5 py-2 text-sm transition-opacity [background:var(--leaf)] [color:var(--cream)] hover:opacity-90'
				>
					Get the app
				</a>
			</div>
		</header>
	)
}
