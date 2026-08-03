/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--navy)] [color:var(--sand)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl'>
						Root<span className='[color:var(--teal)]'>line</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						Sustainability strategy for marketing leaders — credible claims,
						measured impact, editorial clarity.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70'>
					<a href='#framework' className='transition-opacity hover:opacity-100'>
						Framework
					</a>
					<a href='#programs' className='transition-opacity hover:opacity-100'>
						Programs
					</a>
					<a href='#metrics' className='transition-opacity hover:opacity-100'>
						Metrics
					</a>
					<a href='#toolkit' className='transition-opacity hover:opacity-100'>
						Toolkit
					</a>
					<a
						href='#case-studies'
						className='transition-opacity hover:opacity-100'
					>
						Case studies
					</a>
					<a href='#team' className='transition-opacity hover:opacity-100'>
						Team
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Rootline — Concept preview
				</p>
			</div>
		</footer>
	)
}
