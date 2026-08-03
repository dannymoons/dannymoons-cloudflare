/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--ocean)]'>
						RESTORE
					</span>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Physical therapy &amp; rehabilitation · Movement science · Portland,
						OR
					</p>
				</div>

				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm [color:var(--mute)]'>
					<a
						href='#approach'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Approach
					</a>
					<a
						href='#treatments'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Treatments
					</a>
					<a
						href='#therapists'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Team
					</a>
					<a
						href='#programs'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Programs
					</a>
					<a
						href='#schedule'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Book
					</a>
					<a
						href='#contact'
						className='transition-colors hover:[color:var(--ocean)]'
					>
						Contact
					</a>
				</nav>

				<p className='text-xs [color:var(--mute)]'>
					© {new Date().getFullYear()} Restore Physiotherapy — Concept preview
				</p>
			</div>
		</footer>
	)
}
