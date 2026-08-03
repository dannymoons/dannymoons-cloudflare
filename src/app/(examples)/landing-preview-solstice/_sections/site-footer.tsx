/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.14em] [color:var(--gold)]'>
						SOLSTICE
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Fine dining collective · Amsterdam · London · Copenhagen
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
					<a
						href='#menu'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Menu
					</a>
					<a
						href='#wine'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Wine
					</a>
					<a
						href='#events'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Events
					</a>
					<a
						href='#locations'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Locations
					</a>
					<a
						href='#reservations'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Reserve
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Solstice Collective — Concept preview
				</p>
			</div>
		</footer>
	)
}
