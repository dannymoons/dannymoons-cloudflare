/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t-2 px-5 py-12 [background:var(--ink)] [color:var(--cream)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl uppercase'>
						Patch<span className='[color:var(--green)]'>work</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						Creative sustainability agency — bold campaigns, measurable impact,
						zero greenwash.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wide opacity-70'>
					<a href='#manifesto' className='transition-opacity hover:opacity-100'>
						Manifesto
					</a>
					<a href='#work' className='transition-opacity hover:opacity-100'>
						Work
					</a>
					<a href='#impact' className='transition-opacity hover:opacity-100'>
						Impact
					</a>
					<a href='#team' className='transition-opacity hover:opacity-100'>
						Team
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Patchwork Studio — Concept preview
				</p>
			</div>
		</footer>
	)
}
