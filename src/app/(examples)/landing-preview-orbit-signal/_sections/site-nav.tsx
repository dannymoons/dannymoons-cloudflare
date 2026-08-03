import { Radio } from 'lucide-react'

/** Future Payload mapping: siteHeader (developer). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[var(--line)] border-b px-5 py-4 backdrop-blur-md [background:color-mix(in_oklch,var(--void)_88%,transparent)] sm:px-8'>
			<a href='#top' className='flex items-center gap-2.5'>
				<span className='grid h-8 w-8 place-items-center rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] [background:var(--panel)] [color:var(--lime)]'>
					<Radio className='h-4 w-4' />
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold text-lg tracking-tight [color:var(--text)]'>
					moonsio
					<span className='ml-1.5 font-[family-name:var(--font-body)] font-medium text-sm [color:var(--mute)]'>
						Orbit Signal
					</span>
				</span>
			</a>
			<nav className='hidden gap-6 font-medium text-[11px] uppercase tracking-[0.16em] [color:var(--mute)] md:flex'>
				<a href='#cli' className='transition-colors hover:[color:var(--lime)]'>
					CLI
				</a>
				<a href='#api' className='transition-colors hover:[color:var(--lime)]'>
					API
				</a>
				<a
					href='#dashboard'
					className='transition-colors hover:[color:var(--lime)]'
				>
					Dashboard
				</a>
				<a
					href='#pricing'
					className='transition-colors hover:[color:var(--lime)]'
				>
					Pricing
				</a>
			</nav>
			<a
				href='#docs'
				className='inline-flex min-h-12 items-center rounded border border-[color-mix(in_oklch,var(--lime)_50%,transparent)] px-4 font-medium text-xs transition-colors [background:var(--lime)] [color:var(--void)] hover:opacity-90'
			>
				Get API key
			</a>
		</header>
	)
}
