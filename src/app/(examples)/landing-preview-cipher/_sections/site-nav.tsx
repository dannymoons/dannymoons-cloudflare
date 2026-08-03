/** Future Payload mapping: siteHeader (terminal messenger). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur [background:color-mix(in_oklch,var(--void)_85%,transparent)]'>
			<div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-lg tracking-tight [color:var(--green)]'
				>
					CIPHER<span className='cf-blink [color:var(--text)]'>_</span>
				</a>

				<nav className='hidden items-center gap-6 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest [color:var(--mute)] md:flex'>
					<a
						href='#encryption'
						className='transition-colors hover:[color:var(--green)]'
					>
						Encryption
					</a>
					<a
						href='#protocol'
						className='transition-colors hover:[color:var(--green)]'
					>
						Protocol
					</a>
					<a
						href='#developers'
						className='transition-colors hover:[color:var(--green)]'
					>
						Developers
					</a>
					<a
						href='#privacy'
						className='transition-colors hover:[color:var(--green)]'
					>
						Privacy
					</a>
				</nav>

				<a
					href='#download'
					className='inline-flex min-h-12 items-center border border-[color-mix(in_oklch,var(--green)_40%,var(--line))] px-4 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-colors [color:var(--green)] hover:[background:color-mix(in_oklch,var(--green)_12%,transparent)]'
				>
					Download
				</a>
			</div>
		</header>
	)
}
