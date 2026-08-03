import { Orbit } from 'lucide-react'

const links = [
	{ label: 'Portfolio', href: '#portfolio' },
	{ label: 'Dashboard', href: '#dashboard' },
	{ label: 'Reports', href: '#reports' },
	{ label: 'Widgets', href: '#widgets' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Get started', href: '#get-started' }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t bg-white/70 px-5 py-12 backdrop-blur-xl sm:px-8'>
			<div className='mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<a href='#top' className='flex items-center gap-2.5'>
						<span className='grid h-9 w-9 place-items-center rounded-xl border border-[var(--line)] bg-white/80 [color:var(--blue)]'>
							<Orbit className='h-4 w-4' />
						</span>
						<span className='font-[family-name:var(--font-display)] font-bold text-xl tracking-tight'>
							moonsio
							<span
								className='ml-1 bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
								style={{ backgroundImage: 'var(--grad-text)' }}
							>
								Orbit Aero
							</span>
						</span>
					</a>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Glassmorphism agency carbon workspace — portfolio dashboards,
						branded reports, and embeddable badges for every client site.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 font-medium text-xs uppercase tracking-widest'>
					{links.map(l => (
						<a
							key={l.label}
							href={l.href}
							className='transition-colors [color:var(--mute)] hover:[color:var(--blue)]'
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
			<div className='mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-[var(--line)] border-t pt-6 text-xs [color:var(--mute)] sm:flex-row sm:items-center sm:justify-between'>
				<p>© {new Date().getFullYear()} moonsio — Orbit Aero concept preview</p>
				<p className='font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--blue)]'>
					Per sectie opgebouwd voor Payload
				</p>
			</div>
		</footer>
	)
}
