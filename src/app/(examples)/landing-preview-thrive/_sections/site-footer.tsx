/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--forest)] [color:var(--sage)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl'>
						Thrive
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-75'>
						Executive sustainability coaching for leaders navigating the
						transition with clarity and confidence.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-75'>
					<a
						href='#philosophy'
						className='transition-opacity hover:opacity-100'
					>
						Philosophy
					</a>
					<a href='#method' className='transition-opacity hover:opacity-100'>
						Method
					</a>
					<a href='#packages' className='transition-opacity hover:opacity-100'>
						Packages
					</a>
					<a href='#about' className='transition-opacity hover:opacity-100'>
						About
					</a>
					<a href='#faq' className='transition-opacity hover:opacity-100'>
						FAQ
					</a>
					<a href='#booking' className='transition-opacity hover:opacity-100'>
						Booking
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Thrive Coaching — Concept preview
				</p>
			</div>
		</footer>
	)
}
