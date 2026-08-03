/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--forest)] [color:var(--cream)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.04em]'>
						BEACON<span className='[color:var(--gold)]'>.</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-75'>
						B Corp certification consultancy — guiding purpose-driven companies
						from assessment to verified impact.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-75'>
					<a href='#pathway' className='transition-opacity hover:opacity-100'>
						Pathway
					</a>
					<a
						href='#certification'
						className='transition-opacity hover:opacity-100'
					>
						Certification
					</a>
					<a href='#impact' className='transition-opacity hover:opacity-100'>
						Impact
					</a>
					<a href='#resources' className='transition-opacity hover:opacity-100'>
						Resources
					</a>
					<a href='#team' className='transition-opacity hover:opacity-100'>
						Team
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Beacon Impact Partners — Concept preview
				</p>
			</div>
		</footer>
	)
}
