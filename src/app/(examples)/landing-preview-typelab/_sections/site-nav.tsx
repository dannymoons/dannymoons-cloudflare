/** Future Payload mapping: siteHeader (specimen sheet nav). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--white)_90%,transparent)]'>
			<div className='mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-base tracking-tight'
				>
					Typelab
				</a>

				<nav className='hidden items-center gap-7 text-[var(--mute)] text-sm md:flex'>
					<a
						href='#specimens'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Specimens
					</a>
					<a
						href='#families'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Families
					</a>
					<a
						href='#licensing'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Licensing
					</a>
					<a
						href='#foundry'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Foundry
					</a>
				</nav>

				<a
					href='#trial'
					className='inline-flex min-h-9 items-center border border-[var(--ink)] px-4 font-medium text-sm transition-colors hover:[background:var(--ink)] hover:[color:var(--white)]'
				>
					Trial fonts
				</a>
			</div>
		</header>
	)
}
