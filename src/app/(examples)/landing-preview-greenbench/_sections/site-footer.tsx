/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--ink)] [color:var(--white)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl tracking-tight'>
						Green<span className='[color:var(--lime)]'>bench</span>
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-70'>
						Agency carbon benchmarking — measure, compare, and improve client
						portfolio emissions.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-70'>
					<a
						href='#how-it-works'
						className='transition-opacity hover:opacity-100'
					>
						How it works
					</a>
					<a
						href='#benchmarks'
						className='transition-opacity hover:opacity-100'
					>
						Benchmarks
					</a>
					<a href='#features' className='transition-opacity hover:opacity-100'>
						Features
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
					© {new Date().getFullYear()} Greenbench — Concept preview
				</p>
			</div>
		</footer>
	)
}
