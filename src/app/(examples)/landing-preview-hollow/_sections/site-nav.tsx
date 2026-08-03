/** Future Payload mapping: siteHeader (fixed, velvet noir). */
export function SiteNav() {
	return (
		<header className='fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-5 sm:px-8'>
			<a
				href='#top'
				className='font-[family-name:var(--font-display)] text-lg tracking-[0.28em] [color:var(--gold)] sm:text-xl'
			>
				HOLLOW
			</a>
			<nav className='hidden items-center gap-7 text-[0.65rem] uppercase tracking-[0.24em] [color:var(--mute)] lg:flex'>
				<a
					href='#cocktails'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Cocktails
				</a>
				<a
					href='#spirits'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Spirits
				</a>
				<a
					href='#atmosphere'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Room
				</a>
				<a
					href='#events'
					className='transition-colors hover:[color:var(--gold)]'
				>
					Events
				</a>
			</nav>
			<a
				href='#entrance'
				className='border border-[var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
			>
				Find us
			</a>
		</header>
	)
}
