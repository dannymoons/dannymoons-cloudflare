/** Future Payload mapping: siteHeader. */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 border-[var(--line)] border-b backdrop-blur-md [background:color-mix(in_oklch,var(--noir)_92%,transparent)]'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8'>
				<a
					href='#top'
					className='font-[family-name:var(--font-display)] text-xl tracking-[0.12em] [color:var(--cream)] sm:text-2xl'
				>
					Maison Lérins
				</a>
				<nav className='hidden gap-8 text-xs uppercase tracking-[0.2em] [color:var(--mute)] md:flex'>
					<a
						href='#collection'
						className='transition-colors hover:[color:var(--cream)]'
					>
						Collection
					</a>
					<a
						href='#atelier'
						className='transition-colors hover:[color:var(--cream)]'
					>
						Atelier
					</a>
					<a
						href='#stores'
						className='transition-colors hover:[color:var(--cream)]'
					>
						Maison
					</a>
				</nav>
				<a
					href='#appointment'
					className='border border-[var(--gold)] px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors [color:var(--gold)] hover:[background:var(--gold)] hover:[color:var(--noir)]'
				>
					Book fitting
				</a>
			</div>
		</header>
	)
}
