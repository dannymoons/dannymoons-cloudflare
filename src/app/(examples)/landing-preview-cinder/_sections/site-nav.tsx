/** Future Payload mapping: siteHeader (sticky). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-sm [background:color-mix(in_oklch,var(--paper)_92%,transparent)]'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.14em] [color:var(--ash)] sm:text-2xl'
				>
					CINDER
				</a>
				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#collection'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Collection
					</a>
					<a
						href='#kiln'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Kiln
					</a>
					<a
						href='#workshops'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Workshops
					</a>
					<a
						href='#visit'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Visit
					</a>
				</nav>
				<a
					href='#contact'
					className='inline-flex min-h-12 items-center rounded-sm px-4 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--paper)] hover:opacity-90'
				>
					Enquire
				</a>
			</div>
		</header>
	)
}
