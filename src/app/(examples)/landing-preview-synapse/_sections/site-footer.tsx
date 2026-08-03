const links = [
	{ label: 'Documentation', href: '#models' },
	{ label: 'API reference', href: '#integrations' },
	{ label: 'Research', href: '#research' },
	{ label: 'Security', href: '#security' },
	{ label: 'Careers', href: '#team' }
]

/** Future Payload mapping: siteFooter. */
export function SiteFooter() {
	return (
		<footer className='border-[color-mix(in_oklch,var(--neon)_15%,var(--line))] border-t px-5 py-12 sm:px-8'>
			<div className='flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<a
						href='#top'
						className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'
					>
						SYNAPSE
						<span
							className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--neon), var(--pulse))'
							}}
						>
							.ai
						</span>
					</a>
					<p className='mt-3 max-w-xs text-sm leading-relaxed [color:var(--mute)]'>
						Cognitive AI infrastructure. Neural inference at the edge — San
						Francisco · London · Tokyo.
					</p>
				</div>
				<nav className='flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest'>
					{links.map(l => (
						<a
							key={l.label}
							href={l.href}
							className='transition-colors [color:var(--mute)] hover:[color:var(--neon)]'
						>
							{l.label}
						</a>
					))}
				</nav>
			</div>
			<div className='mt-10 flex flex-col gap-2 border-[var(--line)] border-t pt-6 text-xs [color:var(--mute)] sm:flex-row sm:items-center sm:justify-between'>
				<p>© {new Date().getFullYear()} Synapse AI — Concept preview</p>
				<p className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.2em] [color:var(--neon)]'>
					Per sectie opgebouwd voor Payload
				</p>
			</div>
		</footer>
	)
}
