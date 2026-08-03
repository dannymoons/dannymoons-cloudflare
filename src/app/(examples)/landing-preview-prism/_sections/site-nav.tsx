/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--ink)] border-b-2 [background:var(--paper)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-3xl uppercase tracking-wide [color:var(--ink)]'
				>
					PRISM
				</a>
				<nav className='hidden gap-7 font-semibold text-sm uppercase tracking-wide [color:var(--mute)] md:flex'>
					<a href='#roster' className='hover:[color:var(--magenta)]'>
						Roster
					</a>
					<a href='#releases' className='hover:[color:var(--magenta)]'>
						Releases
					</a>
					<a href='#tour' className='hover:[color:var(--magenta)]'>
						Tour
					</a>
					<a href='#merch' className='hover:[color:var(--magenta)]'>
						Merch
					</a>
				</nav>
				<a
					href='#subscribe'
					className='inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-5 font-bold text-sm uppercase [background:var(--lime)]'
				>
					Subscribe
				</a>
			</div>
		</header>
	)
}
