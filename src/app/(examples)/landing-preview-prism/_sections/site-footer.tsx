/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--ink)] border-t-2 px-5 py-12 [background:var(--ink)] [color:var(--paper)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-3xl uppercase'>
						PRISM
					</span>
					<p className='mt-2 text-sm [color:var(--paper)]/50'>
						Independent record label · Rotterdam
					</p>
				</div>
				<nav className='flex flex-wrap gap-6 font-semibold text-sm uppercase'>
					<a href='#roster' className='hover:[color:var(--lime)]'>
						Roster
					</a>
					<a href='#releases' className='hover:[color:var(--lime)]'>
						Releases
					</a>
					<a href='#tour' className='hover:[color:var(--lime)]'>
						Tour
					</a>
					<a href='#subscribe' className='hover:[color:var(--lime)]'>
						Subscribe
					</a>
				</nav>
				<p className='text-sm [color:var(--paper)]/40'>
					© {new Date().getFullYear()} PRISM Records — Concept preview
				</p>
			</div>
		</footer>
	)
}
