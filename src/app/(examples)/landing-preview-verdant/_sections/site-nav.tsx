/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--parchment)_88%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl [color:var(--moss)]'
				>
					Verdant
				</a>
				<nav className='hidden gap-7 text-sm [color:var(--mute)] md:flex'>
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
					className='rounded-full px-5 py-2.5 text-sm text-white [background:var(--moss)]'
				>
					Start a project
				</a>
			</div>
		</header>
	)
}
