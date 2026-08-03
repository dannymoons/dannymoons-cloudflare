/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--ink)] [color:var(--blush)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] font-bold text-2xl [color:var(--petal)]'>
						Bloom
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed opacity-75'>
						Children&apos;s hospital wing fundraiser · Riverside Children&apos;s
						Hospital · Registered charity 1184726
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-75'>
					<a href='#mission' className='transition-opacity hover:opacity-100'>
						Mission
					</a>
					<a href='#programs' className='transition-opacity hover:opacity-100'>
						Programs
					</a>
					<a href='#ward' className='transition-opacity hover:opacity-100'>
						The wing
					</a>
					<a
						href='#volunteers'
						className='transition-opacity hover:opacity-100'
					>
						Volunteer
					</a>
					<a href='#donate' className='transition-opacity hover:opacity-100'>
						Donate
					</a>
					<a href='#events' className='transition-opacity hover:opacity-100'>
						Events
					</a>
					<a
						href='#newsletter'
						className='transition-opacity hover:opacity-100'
					>
						Newsletter
					</a>
				</nav>

				<p className='text-xs opacity-50'>
					© {new Date().getFullYear()} Bloom Foundation — Concept preview
				</p>
			</div>
		</footer>
	)
}
