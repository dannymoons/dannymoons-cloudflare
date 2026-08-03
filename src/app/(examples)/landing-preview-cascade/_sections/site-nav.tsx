/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--fog)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-2xl [color:var(--ink)]'
				>
					Cascade
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#supply-chain'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Supply chain
					</a>
					<a
						href='#traceability'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Traceability
					</a>
					<a
						href='#methodology'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Methodology
					</a>
					<a
						href='#case-studies'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Case studies
					</a>
				</nav>

				<a
					href='#contact'
					className='inline-flex min-h-10 items-center rounded-sm px-5 py-2 text-sm transition-opacity [background:var(--pine)] [color:var(--fog)] hover:opacity-90'
				>
					Book a demo
				</a>
			</div>
		</header>
	)
}
