import { Orbit } from 'lucide-react'

/** Future Payload mapping: siteHeader (glass). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[color-mix(in_oklch,var(--orbit)_20%,var(--line))] border-b px-5 py-4 backdrop-blur-xl [background:color-mix(in_oklch,var(--void)_78%,transparent)] sm:px-8'>
			<a href='#top' className='flex items-center gap-2.5'>
				<span className='grid h-8 w-8 place-items-center rounded-lg border border-[color-mix(in_oklch,var(--orbit)_35%,transparent)] shadow-[0_0_20px_-6px_var(--orbit)] [background:linear-gradient(135deg,var(--orbit),var(--mint))] [color:var(--void)]'>
					<Orbit className='h-4 w-4' />
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold text-lg tracking-tight'>
					moonsio
					<span className='ml-1.5 font-normal text-sm [color:var(--mute)]'>
						Orbit
					</span>
				</span>
			</a>
			<nav className='hidden gap-6 text-[11px] uppercase tracking-[0.2em] [color:var(--mute)] md:flex'>
				<a
					href='#dashboard'
					className='transition-colors hover:[color:var(--orbit)]'
				>
					Dashboard
				</a>
				<a
					href='#features'
					className='transition-colors hover:[color:var(--orbit)]'
				>
					Features
				</a>
				<a
					href='#benchmarks'
					className='transition-colors hover:[color:var(--orbit)]'
				>
					Benchmarks
				</a>
				<a
					href='#pricing'
					className='transition-colors hover:[color:var(--orbit)]'
				>
					Pricing
				</a>
			</nav>
			<a
				href='#trial'
				className='inline-flex min-h-12 items-center rounded-full border border-[color-mix(in_oklch,var(--orbit)_40%,transparent)] px-4 text-xs transition-all duration-300 hover:shadow-[0_0_24px_-6px_var(--orbit)] hover:[background:color-mix(in_oklch,var(--orbit)_10%,transparent)] hover:[color:var(--orbit)]'
			>
				Start free trial
			</a>
		</header>
	)
}
