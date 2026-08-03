/** Future Payload mapping: global Footer. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-8 sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
				<span className='font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-[0.35em]'>
					Atrium
				</span>

				<div className='flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.15em] [color:var(--concrete)]'>
					<a
						href='#projects'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Work
					</a>
					<a
						href='#studio'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Studio
					</a>
					<a
						href='#contact'
						className='transition-colors hover:[color:var(--ink)]'
					>
						Contact
					</a>
				</div>

				<span className='text-xs uppercase tracking-[0.15em] [color:var(--concrete)]'>
					© {new Date().getFullYear()} — Concept preview
				</span>
			</div>
		</footer>
	)
}
