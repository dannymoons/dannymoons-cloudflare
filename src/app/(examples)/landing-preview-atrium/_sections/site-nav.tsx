/** Future Payload mapping: global Header. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-sm [background:color-mix(in_oklch,var(--white)_92%,transparent)]'>
			<div className='mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] font-bold text-lg uppercase tracking-[0.35em]'
				>
					Atrium
				</a>

				<nav className='hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex'>
					<a
						href='#projects'
						className='transition-colors [color:var(--concrete)] hover:[color:var(--ink)]'
					>
						Work
					</a>
					<a
						href='#studio'
						className='transition-colors [color:var(--concrete)] hover:[color:var(--ink)]'
					>
						Studio
					</a>
					<a
						href='#process'
						className='transition-colors [color:var(--concrete)] hover:[color:var(--ink)]'
					>
						Process
					</a>
				</nav>

				<a
					href='#contact'
					className='border-[var(--ink)] border-b-2 pb-0.5 font-medium text-xs uppercase tracking-[0.18em] transition-colors hover:[color:var(--gold)]'
				>
					Contact
				</a>
			</div>
		</header>
	)
}
