/** Future Payload mapping: siteHeader (coastal boutique, linen palette). */
export function SiteNav() {
	return (
		<header className='fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-5 py-5 sm:px-8'>
			<a
				href='#top'
				className='font-[family-name:var(--font-display)] text-xl tracking-[0.2em] [color:var(--sea)] sm:text-2xl'
			>
				DRIFTWOOD
			</a>
			<nav className='hidden items-center gap-7 font-medium text-[0.65rem] uppercase tracking-[0.22em] [color:var(--mute)] lg:flex'>
				<a
					href='#rooms'
					className='transition-colors hover:[color:var(--terra)]'
				>
					Rooms
				</a>
				<a
					href='#dining'
					className='transition-colors hover:[color:var(--terra)]'
				>
					Dining
				</a>
				<a href='#spa' className='transition-colors hover:[color:var(--terra)]'>
					Spa
				</a>
				<a
					href='#experiences'
					className='transition-colors hover:[color:var(--terra)]'
				>
					Experiences
				</a>
			</nav>
			<a
				href='#bookings'
				className='inline-flex min-h-12 items-center border border-[var(--line)] px-5 text-[0.65rem] uppercase tracking-[0.18em] transition-colors hover:border-[var(--terra)] hover:[color:var(--terra)]'
			>
				Reserve
			</a>
		</header>
	)
}
