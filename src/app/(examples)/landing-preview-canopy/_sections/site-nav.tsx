/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--sand)_88%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl tracking-tight [color:var(--earth)]'
				>
					Canopy
				</a>
				<nav className='hidden gap-7 text-sm [color:var(--mute)] md:flex'>
					<a href='#pillars' className='hover:[color:var(--bark)]'>
						Pillars
					</a>
					<a href='#programs' className='hover:[color:var(--bark)]'>
						Programs
					</a>
					<a href='#stories' className='hover:[color:var(--bark)]'>
						Stories
					</a>
					<a href='#community' className='hover:[color:var(--bark)]'>
						Community
					</a>
				</nav>
				<a
					href='#pledge'
					className='rounded-full px-5 py-2.5 text-sm [background:var(--earth)] [color:var(--sand)]'
				>
					Sign the pledge
				</a>
			</div>
		</header>
	)
}
