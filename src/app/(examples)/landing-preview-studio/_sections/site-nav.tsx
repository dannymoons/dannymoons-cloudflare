import { ArrowUpRight } from 'lucide-react'

/** Future Payload mapping: siteHeader (minimal). */
export function SiteNav() {
	return (
		<header className='mrd-rise sticky top-0 z-40 flex items-center justify-between border-[var(--line)] border-b px-6 py-5 backdrop-blur-md [background:color-mix(in_oklch,var(--paper)_82%,transparent)] sm:px-10'>
			<a
				href='#top'
				className='font-[family-name:var(--font-display)] text-xl tracking-tight'
			>
				MERIDIAN<span className='text-[var(--clay)]'>.</span>
			</a>
			<nav className='hidden items-center gap-8 text-[var(--ink-soft)] text-sm sm:flex'>
				<a href='#work' className='transition-colors hover:text-[var(--ink)]'>
					Work
				</a>
				<a
					href='#approach'
					className='transition-colors hover:text-[var(--ink)]'
				>
					Approach
				</a>
				<a href='#studio' className='transition-colors hover:text-[var(--ink)]'>
					Studio
				</a>
				<a
					href='#journal'
					className='transition-colors hover:text-[var(--ink)]'
				>
					Journal
				</a>
			</nav>
			<a
				href='#contact'
				className='group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--clay)]'
			>
				Contact
				<ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
			</a>
		</header>
	)
}
