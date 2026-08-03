/** Future Payload mapping: siteHeader (sticky). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-sm [background:color-mix(in_oklch,var(--white)_92%,transparent)]'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] [color:var(--black)] sm:text-3xl'
				>
					RELAY
				</a>
				<nav className='hidden items-center gap-6 font-medium text-sm uppercase tracking-[0.12em] [color:var(--mute)] md:flex'>
					<a
						href='#races'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Races
					</a>
					<a
						href='#routes'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Routes
					</a>
					<a
						href='#results'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Results
					</a>
					<a
						href='#training'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Training
					</a>
				</nav>
				<a
					href='#register'
					className='inline-flex min-h-12 items-center rounded-sm px-4 font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--orange)] [color:var(--black)] hover:opacity-90'
				>
					Register
				</a>
			</div>
		</header>
	)
}
