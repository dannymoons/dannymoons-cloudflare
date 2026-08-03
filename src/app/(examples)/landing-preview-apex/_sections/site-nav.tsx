/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--parchment)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.12em] [color:var(--stone)] sm:text-2xl'
				>
					APEX <span className='[color:var(--copper)]'>CHAMBERS</span>
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#practice-areas'
						className='transition-colors hover:[color:var(--stone)]'
					>
						Practice
					</a>
					<a
						href='#cases'
						className='transition-colors hover:[color:var(--stone)]'
					>
						Results
					</a>
					<a
						href='#partners'
						className='transition-colors hover:[color:var(--stone)]'
					>
						Partners
					</a>
					<a
						href='#insights'
						className='transition-colors hover:[color:var(--stone)]'
					>
						Insights
					</a>
				</nav>

				<a
					href='#contact'
					className='inline-flex min-h-10 items-center rounded-sm border border-[var(--copper)] px-5 py-2 text-sm transition-colors [color:var(--copper)] hover:text-[var(--parchment)] hover:[background:var(--copper)]'
				>
					Consultation
				</a>
			</div>
		</header>
	)
}
