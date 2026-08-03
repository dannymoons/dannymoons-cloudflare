import { Orbit } from 'lucide-react'

const links = [
	{ label: 'Dashboard', href: '#dashboard' },
	{ label: 'Features', href: '#features' },
	{ label: 'Benchmarks', href: '#benchmarks' },
	{ label: 'Integrations', href: '#integrations' },
	{ label: 'Pricing', href: '#pricing' }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8'>
			<div className='mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<a href='#top' className='flex items-center gap-2.5'>
						<span className='grid h-8 w-8 place-items-center border-2 border-[var(--stroke-strong)] [background:color-mix(in_oklch,var(--olive)_20%,var(--panel))] [color:var(--sage)]'>
							<Orbit className='h-4 w-4' />
						</span>
						<span className='font-[family-name:var(--font-display)] font-semibold text-xl tracking-tight [color:var(--ink)]'>
							moonsio
							<span className='ml-1 italic [color:var(--olive)]'>Orbit</span>
						</span>
					</a>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Carbon emission dashboard for modern web teams. Track every page,
						every site, over time — by moonsio.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest'>
					{links.map(l => (
						<a
							key={l.label}
							href={l.href}
							className='cursor-pointer transition-colors [color:var(--mute)] hover:[color:var(--olive)]'
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
			<div className='mx-auto mt-10 flex max-w-5xl flex-col gap-2 border-[var(--line)] border-t pt-6 text-xs [color:var(--mute)] sm:flex-row sm:items-center sm:justify-between'>
				<p>© {new Date().getFullYear()} moonsio — Orbit concept preview</p>
				<p className='font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] [color:var(--olive)]'>
					Per sectie opgebouwd voor Payload
				</p>
			</div>
		</footer>
	)
}
