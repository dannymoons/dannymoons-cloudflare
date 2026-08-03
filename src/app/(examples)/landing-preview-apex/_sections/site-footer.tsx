/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--stone)] [color:var(--parchment)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.1em]'>
						APEX <span className='[color:var(--copper)]'>CHAMBERS</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						Boutique litigation · Commercial disputes · International
						arbitration · London
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70'>
					<a
						href='#practice-areas'
						className='transition-opacity hover:opacity-100'
					>
						Practice
					</a>
					<a href='#cases' className='transition-opacity hover:opacity-100'>
						Results
					</a>
					<a href='#partners' className='transition-opacity hover:opacity-100'>
						Partners
					</a>
					<a href='#insights' className='transition-opacity hover:opacity-100'>
						Insights
					</a>
					<a href='#pro-bono' className='transition-opacity hover:opacity-100'>
						Pro bono
					</a>
					<a href='#careers' className='transition-opacity hover:opacity-100'>
						Careers
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Apex Chambers — Concept preview
				</p>
			</div>
		</footer>
	)
}
