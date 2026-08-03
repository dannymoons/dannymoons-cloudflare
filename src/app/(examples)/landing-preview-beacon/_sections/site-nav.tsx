/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--cream)_94%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.06em] [color:var(--ink)] sm:text-2xl'
				>
					BEACON<span className='[color:var(--gold)]'>.</span>
				</a>

				<nav className='hidden items-center gap-6 text-sm [color:var(--mute)] md:flex'>
					<a
						href='#why-bcorp'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Why B Corp
					</a>
					<a
						href='#pathway'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Pathway
					</a>
					<a
						href='#standards'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Standards
					</a>
					<a
						href='#success-stories'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Stories
					</a>
					<a href='#faq' className='transition-colors hover:[color:var(--ink)]'>
						FAQ
					</a>
				</nav>

				<a
					href='#assessment'
					className='inline-flex min-h-10 items-center rounded-sm border border-[var(--forest)] px-5 py-2 text-sm transition-colors [color:var(--forest)] hover:text-[var(--cream)] hover:[background:var(--forest)]'
				>
					Free assessment
				</a>
			</div>
		</header>
	)
}
