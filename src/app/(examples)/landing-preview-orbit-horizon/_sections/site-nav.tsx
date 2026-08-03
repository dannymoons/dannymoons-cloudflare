import { Orbit } from 'lucide-react'

const links = [
	{ label: 'Dashboard', href: '#dashboard' },
	{ label: 'Features', href: '#features' },
	{ label: 'Benchmarks', href: '#benchmarks' },
	{ label: 'Pricing', href: '#pricing' }
]

/** Future Payload mapping: siteHeader (brutal editorial). */
export function SiteNav() {
	return (
		<header className='sticky top-0 z-40 flex items-center justify-between border-[var(--ink)] border-b-2 px-5 py-4 [background:var(--parchment)] sm:px-8'>
			<a href='#top' className='flex items-center gap-2.5'>
				<span className='grid h-8 w-8 place-items-center border-2 border-[var(--ink)] [background:var(--ink)] [color:var(--parchment)]'>
					<Orbit className='h-4 w-4' />
				</span>
				<span className='font-[family-name:var(--font-display)] font-semibold text-xl tracking-tight [color:var(--ink)]'>
					moonsio
					<span className='ml-1.5 font-normal text-base italic [color:var(--mute)]'>
						Orbit
					</span>
				</span>
			</a>
			<nav className='hidden gap-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] [color:var(--mute)] md:flex'>
				{links.map(l => (
					<a
						key={l.label}
						href={l.href}
						className='cursor-pointer transition-colors hover:[color:var(--ink)]'
					>
						{l.label}
					</a>
				))}
			</nav>
			<a
				href='#trial'
				className='inline-flex min-h-12 cursor-pointer items-center border-2 border-[var(--ink)] px-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] transition-colors [color:var(--ink)] hover:[background:var(--ink)] hover:[color:var(--parchment)]'
			>
				Start free trial
			</a>
		</header>
	)
}
