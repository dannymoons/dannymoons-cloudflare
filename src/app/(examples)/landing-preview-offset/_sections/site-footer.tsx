/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
				<span className='font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.22em] [color:var(--forest)]'>
					Offset
				</span>
				<nav className='flex flex-wrap gap-6 text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
					<a href='#services' className='hover:[color:var(--ink)]'>
						Services
					</a>
					<a href='#work' className='hover:[color:var(--ink)]'>
						Work
					</a>
					<a href='#contact' className='hover:[color:var(--ink)]'>
						Contact
					</a>
				</nav>
				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} OFFSET Studio — Concept preview
				</p>
			</div>
		</footer>
	)
}
