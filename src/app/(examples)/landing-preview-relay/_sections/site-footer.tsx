/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--black)] [color:var(--white)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-3xl uppercase tracking-[0.08em]'>
						RELAY
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--gray)]'>
						Endurance race events · Rotterdam · Amersfoort · Veluwe
					</p>
					<p className='mt-2 text-sm [color:var(--gray)]'>
						<a
							href='mailto:hello@relay.run'
							className='transition-colors hover:[color:var(--orange)]'
						>
							hello@relay.run
						</a>
						{' · '}
						<a
							href='tel:+31201234567'
							className='transition-colors hover:[color:var(--orange)]'
						>
							020 123 45 67
						</a>
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-[0.1em] [color:var(--gray)]'>
					<a
						href='#races'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Races
					</a>
					<a
						href='#routes'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Routes
					</a>
					<a
						href='#results'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Results
					</a>
					<a
						href='#training'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Training
					</a>
					<a
						href='#register'
						className='transition-colors hover:[color:var(--orange)]'
					>
						Register
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Relay Events — Concept preview
				</p>
			</div>
		</footer>
	)
}
