/** Future Payload mapping: productDashboard. */
export function Dashboard() {
	const bars = [
		{ month: 'Jan', value: 72 },
		{ month: 'Feb', value: 65 },
		{ month: 'Mar', value: 58 },
		{ month: 'Apr', value: 52 },
		{ month: 'May', value: 48 },
		{ month: 'Jun', value: 44 },
		{ month: 'Jul', value: 41 },
		{ month: 'Aug', value: 39 },
		{ month: 'Sep', value: 38 },
		{ month: 'Oct', value: 36 },
		{ month: 'Nov', value: 35 },
		{ month: 'Dec', value: 34 }
	]

	return (
		<section
			id='dashboard'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--slate)_3%,var(--ice))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Platform
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						One dashboard. Every marketing emission source.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Drill from enterprise totals to individual campaigns, vendors, and
						media placements — with full audit trail on every figure.
					</p>
				</div>

				<div className='me-reveal mt-12 overflow-hidden rounded-sm border border-[var(--line)] [background:var(--ice)]'>
					<div className='flex flex-wrap items-center justify-between gap-4 border-[var(--line)] border-b px-5 py-4 sm:px-6'>
						<div>
							<p className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								FY2025 · Marketing emissions
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--ink)]'>
								18,247{' '}
								<span className='text-base [color:var(--mute)]'>tCO₂e</span>
							</p>
						</div>
						<div className='flex gap-2'>
							<span className='rounded-sm px-3 py-1 text-xs [background:var(--blue)] [color:var(--ice)]'>
								Live
							</span>
							<span className='rounded-sm border border-[var(--line)] px-3 py-1 text-xs [color:var(--mute)]'>
								All regions
							</span>
						</div>
					</div>

					<div className='grid gap-6 p-5 sm:grid-cols-[1fr_280px] sm:p-6'>
						<div>
							<p className='mb-4 text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								Monthly trend (tCO₂e)
							</p>
							<div className='flex h-40 items-end gap-1.5 sm:h-48'>
								{bars.map(bar => (
									<div
										key={bar.month}
										className='flex-1 rounded-t-sm transition-opacity [background:var(--blue)] hover:opacity-80'
										style={{
											height: `${bar.value}%`,
											opacity: 0.4 + (bar.value / 100) * 0.6
										}}
									/>
								))}
							</div>
							<div className='mt-2 flex justify-between text-[10px] uppercase tracking-wider [color:var(--mute)]'>
								<span>Jan</span>
								<span>Jun</span>
								<span>Dec</span>
							</div>
						</div>

						<div className='space-y-3'>
							<p className='text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								By category
							</p>
							{[
								{ label: 'Paid media', pct: 42, val: '7,664 t' },
								{ label: 'Production', pct: 28, val: '5,109 t' },
								{ label: 'Events & experiential', pct: 18, val: '3,284 t' },
								{ label: 'Martech & SaaS', pct: 12, val: '2,190 t' }
							].map(row => (
								<div key={row.label}>
									<div className='flex justify-between text-sm'>
										<span className='[color:var(--ink)]'>{row.label}</span>
										<span className='[color:var(--mute)]'>{row.val}</span>
									</div>
									<div className='mt-1.5 h-1.5 overflow-hidden rounded-full [background:var(--line)]'>
										<div
											className='h-full rounded-full [background:var(--blue)]'
											style={{ width: `${row.pct}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
