/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:var(--mint)] sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--ink)]'>
						Habit
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Your personal sustainability coach — small daily actions that add up
						to real planetary impact.
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm [color:var(--mute)]'>
					<a
						href='#journey'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Journey
					</a>
					<a
						href='#stories'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Stories
					</a>
					<a
						href='#testimonials'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Reviews
					</a>
					<a
						href='#pricing'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Pricing
					</a>
					<a
						href='#download'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Download
					</a>
				</nav>

				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Habit Labs — Concept preview
				</p>
			</div>
		</footer>
	)
}
