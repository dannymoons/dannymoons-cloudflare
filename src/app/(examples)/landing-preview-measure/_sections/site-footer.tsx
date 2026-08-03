/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--slate)] [color:var(--ice)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-[0.06em]'>
						MEASURE<span className='[color:var(--blue)]'>.</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						ESG metrics for marketing leaders — scope 3, campaign carbon, and
						board-ready disclosures from one dashboard.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70'>
					<a href='#cmo-brief' className='transition-opacity hover:opacity-100'>
						CMO brief
					</a>
					<a href='#use-cases' className='transition-opacity hover:opacity-100'>
						Use cases
					</a>
					<a
						href='#integrations'
						className='transition-opacity hover:opacity-100'
					>
						Integrations
					</a>
					<a href='#pricing' className='transition-opacity hover:opacity-100'>
						Pricing
					</a>
					<a href='#trial' className='transition-opacity hover:opacity-100'>
						Trial
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Measure Analytics — Concept preview
				</p>
			</div>
		</footer>
	)
}
