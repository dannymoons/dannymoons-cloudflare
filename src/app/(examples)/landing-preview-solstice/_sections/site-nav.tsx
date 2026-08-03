/** Future Payload mapping: siteHeader (transparent). */
export function SiteNav() {
	return (
		<header className='fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-5 sm:px-8'>
			<a
				href='#top'
				className='font-[family-name:var(--font-display)] text-xl tracking-[0.18em] [color:var(--cream)] sm:text-2xl'
			>
				SOLSTICE
			</a>
			<nav className='hidden items-center gap-8 text-xs uppercase tracking-[0.22em] [color:var(--mute)] md:flex'>
				<a href='#menu' className='transition-colors hover:[color:var(--gold)]'>
					Menu
				</a>
				<a
					href='#spaces'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Spaces
				</a>
				<a href='#wine' className='transition-colors hover:[color:var(--gold)]'>
					Wine
				</a>
				<a
					href='#events'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Events
				</a>
			</nav>
			<a
				href='#reservations'
				className='border border-[var(--line)] px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
			>
				Reserve
			</a>
		</header>
	)
}
