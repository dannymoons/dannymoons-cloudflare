/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--steel)] [color:var(--fog)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl'>
						Cascade
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						Supply chain transparency for creative agencies — trace materials,
						vendors, and emissions from brief to delivery.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70'>
					<a
						href='#agency-services'
						className='transition-opacity hover:opacity-100'
					>
						Services
					</a>
					<a
						href='#vendor-portal'
						className='transition-opacity hover:opacity-100'
					>
						Vendor portal
					</a>
					<a
						href='#transparency'
						className='transition-opacity hover:opacity-100'
					>
						Transparency
					</a>
					<a href='#trust' className='transition-opacity hover:opacity-100'>
						Trust
					</a>
					<a href='#partners' className='transition-opacity hover:opacity-100'>
						Partners
					</a>
					<a href='#contact' className='transition-opacity hover:opacity-100'>
						Contact
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Cascade Supply Co. — Concept preview
				</p>
			</div>
		</footer>
	)
}
