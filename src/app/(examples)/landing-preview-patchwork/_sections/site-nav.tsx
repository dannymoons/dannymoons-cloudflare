/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b-2 backdrop-blur-md [background:color-mix(in_oklch,var(--cream)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl uppercase tracking-tight [color:var(--ink)] sm:text-2xl'
				>
					Patch<span className='[color:var(--green)]'>work</span>
				</a>

				<nav className='hidden items-center gap-6 font-medium text-sm uppercase tracking-wide [color:var(--mute)] md:flex'>
					<a
						href='#services'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Services
					</a>
					<a
						href='#work'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Work
					</a>
					<a
						href='#process'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Process
					</a>
					<a
						href='#studio'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Studio
					</a>
				</nav>

				<a
					href='#contact'
					className='inline-flex min-h-10 items-center rounded-none border-2 border-[var(--ink)] px-5 py-2 font-medium text-sm uppercase tracking-wide transition-colors [background:var(--yellow)] hover:[background:var(--green)] hover:[color:var(--cream)]'
				>
					Let&apos;s talk
				</a>
			</div>
		</header>
	)
}
