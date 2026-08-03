/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--paper)_88%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.22em] [color:var(--ink)]'
				>
					Offset
				</a>
				<nav className='hidden gap-7 text-xs uppercase tracking-[0.14em] [color:var(--mute)] md:flex'>
					<a href='#services' className='hover:[color:var(--ink)]'>
						Services
					</a>
					<a href='#work' className='hover:[color:var(--ink)]'>
						Work
					</a>
					<a href='#team' className='hover:[color:var(--ink)]'>
						Team
					</a>
				</nav>
				<a
					href='#contact'
					className='inline-flex min-h-12 items-center rounded-full px-5 text-white text-xs uppercase tracking-[0.14em] [background:var(--forest)]'
				>
					Start a project
				</a>
			</div>
		</header>
	)
}
