/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--ice)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.08em] [color:var(--ink)] sm:text-2xl'
				>
					MEASURE<span className='[color:var(--blue)]'>.</span>
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#audit-trail'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Audit trail
					</a>
					<a
						href='#compliance-framework'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Frameworks
					</a>
					<a
						href='#dashboard'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Platform
					</a>
					<a
						href='#reporting'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Reporting
					</a>
					<a
						href='#security'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Security
					</a>
					<a
						href='#pricing'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Pricing
					</a>
				</nav>

				<a
					href='#trial'
					className='inline-flex min-h-10 items-center rounded-sm border border-[var(--blue)] px-5 py-2 text-sm transition-colors [color:var(--blue)] hover:text-[var(--ice)] hover:[background:var(--blue)]'
				>
					Start trial
				</a>
			</div>
		</header>
	)
}
