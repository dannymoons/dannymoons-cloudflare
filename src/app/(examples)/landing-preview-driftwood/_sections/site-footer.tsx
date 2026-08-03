/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--sand)]/50 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-xl tracking-[0.2em] [color:var(--sea)]'>
						DRIFTWOOD
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Coastal boutique hotel · Cala Salada · Costa Brava
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-[0.14em] [color:var(--mute)]'>
					<a
						href='#rooms'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Rooms
					</a>
					<a
						href='#dining'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Dining
					</a>
					<a
						href='#spa'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Spa
					</a>
					<a
						href='#experiences'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Experiences
					</a>
					<a
						href='#location'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Location
					</a>
					<a
						href='#bookings'
						className='transition-colors hover:[color:var(--terra)]'
					>
						Book
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Driftwood — Concept preview
				</p>
			</div>
		</footer>
	)
}
