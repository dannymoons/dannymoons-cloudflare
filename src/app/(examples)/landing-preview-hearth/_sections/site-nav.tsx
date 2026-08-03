/** Future Payload mapping: siteHeader (sticky). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-sm [background:var(--cream)]/92'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.1em] [color:var(--wood)] sm:text-2xl'
				>
					HEARTH
				</a>
				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#menu'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Menu
					</a>
					<a
						href='#story'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Our story
					</a>
					<a
						href='#sourcing'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Farms
					</a>
					<a
						href='#events'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Events
					</a>
				</nav>
				<a
					href='#reservations'
					className='rounded-sm px-4 py-2 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--cream)] hover:opacity-90'
				>
					Book a table
				</a>
			</div>
		</header>
	)
}
