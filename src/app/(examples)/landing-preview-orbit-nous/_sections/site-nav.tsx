import { FlaskConical } from 'lucide-react'

/** Future Payload mapping: siteHeader (research). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[var(--line)] border-b px-5 py-4 backdrop-blur-md [background:color-mix(in_oklch,var(--parchment)_88%,transparent)] sm:px-8'>
			<a href='#top' className='flex items-center gap-2.5'>
				<span className='grid h-8 w-8 place-items-center rounded-md border border-[color-mix(in_oklch,var(--olive)_35%,transparent)] [background:color-mix(in_oklch,var(--sage)_25%,var(--parchment))] [color:var(--olive)]'>
					<FlaskConical className='h-4 w-4' />
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold text-lg tracking-tight [color:var(--ink)]'>
					moonsio
					<span className='ml-1.5 font-normal text-sm [color:var(--mute)]'>
						Orbit Research
					</span>
				</span>
			</a>
			<nav className='hidden gap-6 text-[11px] uppercase tracking-[0.18em] [color:var(--mute)] md:flex'>
				<a
					href='#philosophy'
					className='transition-colors hover:[color:var(--olive)]'
				>
					Philosophy
				</a>
				<a
					href='#dashboard'
					className='transition-colors hover:[color:var(--olive)]'
				>
					Dashboard
				</a>
				<a
					href='#publications'
					className='transition-colors hover:[color:var(--olive)]'
				>
					Papers
				</a>
				<a
					href='#pricing'
					className='transition-colors hover:[color:var(--olive)]'
				>
					Pricing
				</a>
			</nav>
			<a
				href='#trial'
				className='inline-flex min-h-12 items-center rounded-md border border-[color-mix(in_oklch,var(--olive)_35%,transparent)] px-4 text-xs transition-colors hover:[background:color-mix(in_oklch,var(--olive)_8%,transparent)] hover:[color:var(--olive)]'
			>
				Request access
			</a>
		</header>
	)
}
