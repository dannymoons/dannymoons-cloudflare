/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--white)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl tracking-tight [color:var(--ocean)]'
				>
					RESTORE
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#approach'
						className='transition-colors hover:[color:var(--slate)]'
					>
						Approach
					</a>
					<a
						href='#treatments'
						className='transition-colors hover:[color:var(--slate)]'
					>
						Treatments
					</a>
					<a
						href='#therapists'
						className='transition-colors hover:[color:var(--slate)]'
					>
						Team
					</a>
					<a
						href='#programs'
						className='transition-colors hover:[color:var(--slate)]'
					>
						Programs
					</a>
				</nav>

				<a
					href='#schedule'
					className='inline-flex min-h-10 items-center rounded-full px-5 py-2 text-sm text-white transition-opacity [background:var(--ocean)] hover:opacity-90'
				>
					Book appointment
				</a>
			</div>
		</header>
	)
}
