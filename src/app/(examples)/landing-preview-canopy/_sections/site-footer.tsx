/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--earth)]'>
						Canopy
					</span>
					<p className='mt-2 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						A regenerative sustainability collective building circular economy
						systems — from soil to shelf.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-8 gap-y-2 text-sm [color:var(--mute)]'>
					<a href='#pillars' className='hover:[color:var(--bark)]'>
						Pillars
					</a>
					<a href='#programs' className='hover:[color:var(--bark)]'>
						Programs
					</a>
					<a href='#stories' className='hover:[color:var(--bark)]'>
						Stories
					</a>
					<a href='#community' className='hover:[color:var(--bark)]'>
						Community
					</a>
					<a href='#pledge' className='hover:[color:var(--bark)]'>
						Pledge
					</a>
					<a href='#contact' className='hover:[color:var(--bark)]'>
						Contact
					</a>
				</nav>
			</div>
			<div className='mx-auto mt-8 max-w-6xl border-[var(--line)] border-t pt-8'>
				<p className='text-sm [color:var(--mute)]'>
					© {new Date().getFullYear()} Canopy Collective — Concept preview
				</p>
			</div>
		</footer>
	)
}
