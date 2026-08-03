import { Radio } from 'lucide-react'

/** Future Payload mapping: siteFooter. */
const links = [
	{ label: 'CLI', href: '#cli' },
	{ label: 'API', href: '#api' },
	{ label: 'Dashboard', href: '#dashboard' },
	{ label: 'Webhooks', href: '#webhooks' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Docs', href: '#docs' }
] as const

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[var(--line)] border-t px-5 py-12 sm:px-8'>
			<div className='mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<a href='#top' className='flex items-center gap-2.5'>
						<span className='grid h-8 w-8 place-items-center rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] [background:var(--panel)] [color:var(--lime)]'>
							<Radio className='h-4 w-4' />
						</span>
						<span className='font-[family-name:var(--font-display)] font-semibold text-xl tracking-tight'>
							moonsio
							<span
								className='ml-1 bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
								style={{ backgroundImage: 'var(--grad-text)' }}
							>
								Orbit Signal
							</span>
						</span>
					</a>
					<p className='mt-3 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed [color:var(--mute)]'>
						Developer API-first carbon monitoring. REST, CLI, webhooks, and
						real-time events — by moonsio.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-body)] font-medium text-xs uppercase tracking-widest'>
					{links.map(l => (
						<a
							key={l.label}
							href={l.href}
							className='transition-colors [color:var(--mute)] hover:[color:var(--lime)]'
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
			<div className='mx-auto mt-10 flex max-w-5xl flex-col gap-2 border-[var(--line)] border-t pt-6 font-[family-name:var(--font-body)] text-xs [color:var(--mute)] sm:flex-row sm:items-center sm:justify-between'>
				<p>
					© {new Date().getFullYear()} moonsio — Orbit Signal concept preview
				</p>
				<p className='font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--lime)]'>
					Per sectie opgebouwd voor Payload
				</p>
			</div>
		</footer>
	)
}
