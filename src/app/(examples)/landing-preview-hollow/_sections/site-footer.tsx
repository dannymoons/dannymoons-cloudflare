/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--smoke)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-xl tracking-[0.24em] [color:var(--gold)]'>
						HOLLOW
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Speakeasy cocktail lounge · Amsterdam · Est. 1923
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-[0.14em] [color:var(--mute)]'>
					<a
						href='#cocktails'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Cocktails
					</a>
					<a
						href='#entrance'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Entrance
					</a>
					<a
						href='#events'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Events
					</a>
					<a
						href='#location'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Location
					</a>
					<a
						href='#reservations'
						className='transition-colors hover:[color:var(--gold)]'
					>
						Reserve
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Hollow — Concept preview
				</p>
			</div>
		</footer>
	)
}
