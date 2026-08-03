/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] [color:var(--cream)]'>
						Maison Lérins
					</span>
					<p className='mt-2 text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
						Haute couture since 1924
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
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
					<a
						href='#appointment'
						className='transition-colors hover:[color:var(--cream)]'
					>
						Contact
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Maison Lérins — Concept preview
				</p>
			</div>
		</footer>
	)
}
