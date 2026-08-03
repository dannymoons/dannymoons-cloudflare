/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.06em] [color:var(--wood)]'>
						HEARTH
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Farm-to-table neighborhood bistro · Kinkerstraat 142, Amsterdam
					</p>
					<p className='mt-2 text-sm [color:var(--mute)]'>
						<a
							href='mailto:hello@hearth.nl'
							className='transition-colors hover:[color:var(--ember)]'
						>
							hello@hearth.nl
						</a>
						{' · '}
						<a
							href='tel:+31201234567'
							className='transition-colors hover:[color:var(--ember)]'
						>
							020 123 45 67
						</a>
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-5 gap-y-2 text-sm [color:var(--mute)]'>
					<a
						href='#menu'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Menu
					</a>
					<a
						href='#hours'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Hours
					</a>
					<a
						href='#events'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Events
					</a>
					<a
						href='#private-dining'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Private dining
					</a>
					<a
						href='#reservations'
						className='transition-colors hover:[color:var(--ember)]'
					>
						Reservations
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Hearth Bistro — Concept preview
				</p>
			</div>
		</footer>
	)
}
