const quarters = [
	{ month: 'Jan', value: 42 },
	{ month: 'Feb', value: 38 },
	{ month: 'Mar', value: 35 },
	{ month: 'Apr', value: 31 },
	{ month: 'May', value: 28 },
	{ month: 'Jun', value: 24 }
]

/** Future Payload mapping: heroSplit (data-led). */
export function Hero() {
	const max = Math.max(...quarters.map(q => q.value))
	const w = 280
	const h = 120
	const pad = 8
	const step = (w - pad * 2) / (quarters.length - 1)

	const line = quarters
		.map((q, i) => {
			const x = pad + i * step
			const y = pad + (1 - q.value / max) * (h - pad * 2)
			return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
		})
		.join(' ')

	return (
		<section className='grid min-h-[85vh] lg:grid-cols-2'>
			<div className='flex flex-col justify-center px-5 py-16 [background:var(--slate)] [color:var(--ice)] sm:px-8 sm:py-24'>
				<div className='mx-auto me-reveal w-full max-w-lg'>
					<p className='font-mono text-[10px] uppercase tracking-[0.32em] [color:color-mix(in_oklch,var(--ice)_55%,transparent)]'>
						ESG intelligence · audit-ready
					</p>
					<h1 className='mt-6 font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.06]'>
						Marketing emissions your board can{' '}
						<span className='italic [color:var(--blue)]'>sign off on</span>.
					</h1>
					<p className='mt-6 text-sm leading-relaxed [color:color-mix(in_oklch,var(--ice)_72%,transparent)] sm:text-base'>
						Measure unifies campaign carbon, media spend, and supplier Scope 3
						into one forensic dashboard — built for CMOs, trusted by auditors.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
						<a
							href='#trial'
							className='inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-sm transition-opacity [background:var(--blue)] [color:var(--ice)] hover:opacity-90'
						>
							Start 14-day trial
						</a>
						<a
							href='#audit-trail'
							className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[color-mix(in_oklch,var(--ice)_25%,transparent)] px-7 font-mono text-sm transition-colors hover:border-[var(--blue)]'
						>
							View audit trail →
						</a>
					</div>
				</div>
			</div>

			<div className='flex flex-col justify-center px-5 py-16 [background:var(--ice)] sm:px-8 sm:py-24'>
				<div className='mx-auto me-reveal w-full max-w-md'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Live trajectory
					</p>
					<p className='mt-2 font-[family-name:var(--font-display)] text-5xl tabular-nums [color:var(--ink)]'>
						−34%
					</p>
					<p className='text-sm [color:var(--mute)]'>
						Marketing tCO₂e vs. 2023 baseline
					</p>

					<svg
						viewBox={`0 0 ${w} ${h}`}
						className='mt-8 h-auto w-full'
						role='img'
						aria-label='Marketing emissions trend declining 34 percent over six months'
					>
						<title>Marketing emissions trend chart</title>
						<path
							d={`${line} L ${pad + (quarters.length - 1) * step} ${h - pad} L ${pad} ${h - pad} Z`}
							fill='color-mix(in oklch, var(--blue) 12%, transparent)'
						/>
						<path d={line} fill='none' stroke='var(--blue)' strokeWidth='2' />
						{quarters.map(q => {
							const i = quarters.indexOf(q)
							const x = pad + i * step
							const y = pad + (1 - q.value / max) * (h - pad * 2)
							return (
								<circle key={q.month} cx={x} cy={y} r='3' fill='var(--blue)' />
							)
						})}
					</svg>

					<dl className='mt-10 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						{(
							[
								['Scope 3', '847'],
								['Audit pass', '99.2%'],
								['CMOs', '126']
							] as const
						).map(([label, val]) => (
							<div key={label}>
								<dt className='text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'>
									{label}
								</dt>
								<dd className='mt-1 font-[family-name:var(--font-display)] text-xl tabular-nums [color:var(--blue)]'>
									{val}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}
