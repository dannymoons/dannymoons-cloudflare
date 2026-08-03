const assets = [
	{ label: 'JavaScript bundle', before: 840, after: 12 },
	{ label: 'Web fonts', before: 320, after: 0 },
	{ label: 'Hero image', before: 980, after: 48 },
	{ label: 'Third-party scripts', before: 260, after: 0 }
]

/** Future Payload mapping: byteBudgetComparison. */
export function ByteBudget() {
	const totalBefore = 2400
	const totalAfter = 180

	return (
		<section
			id='byte-budget'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='of-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Performance budget
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						From{' '}
						<span
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--stone), var(--lime), var(--stone))'
							}}
						>
							2.4MB
						</span>{' '}
						to 180KB
					</h2>
					<p className='mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
						A real client audit — same content, same brand, radically leaner
						delivery. Every kilobyte removed is carbon saved at scale.
					</p>
				</div>

				<div className='of-reveal mt-12 overflow-hidden rounded-2xl border border-[var(--line)]'>
					<div className='grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-[var(--line)] border-b px-4 py-3 text-[10px] uppercase tracking-[0.18em] [color:var(--mute)] sm:grid-cols-[1.2fr_1fr_1fr] sm:px-6'>
						<span>Asset</span>
						<span className='text-right'>Before</span>
						<span className='text-right [color:var(--forest)]'>After</span>
					</div>

					<ul>
						{assets.map(a => {
							const beforePct = (a.before / totalBefore) * 100
							const afterPct = Math.max((a.after / totalBefore) * 100, 0.8)
							return (
								<li
									key={a.label}
									className='grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-[var(--line)] border-b px-4 py-4 last:border-b-0 sm:grid-cols-[1.2fr_1fr_1fr] sm:px-6'
								>
									<span className='text-sm'>{a.label}</span>
									<div className='flex items-center justify-end gap-2'>
										<div className='hidden h-2 w-24 overflow-hidden rounded-full [background:var(--line)] sm:block'>
											<div
												className='h-full rounded-full [background:var(--stone)]'
												style={{ width: `${beforePct}%` }}
											/>
										</div>
										<span className='min-w-[3.5rem] text-right font-[family-name:var(--font-body)] text-xs tabular-nums [color:var(--mute)]'>
											{a.before}KB
										</span>
									</div>
									<div className='flex items-center justify-end gap-2'>
										<div className='hidden h-2 w-24 overflow-hidden rounded-full [background:var(--line)] sm:block'>
											<div
												className='h-full rounded-full [background:var(--lime)]'
												style={{ width: `${afterPct}%` }}
											/>
										</div>
										<span className='min-w-[3.5rem] text-right font-[family-name:var(--font-body)] text-xs tabular-nums [color:var(--forest)]'>
											{a.after}KB
										</span>
									</div>
								</li>
							)
						})}
					</ul>

					<div className='grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6'>
						<div>
							<p className='mb-2 text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
								Before — 2.4MB total
							</p>
							<div className='flex h-10 overflow-hidden rounded-lg'>
								{assets.map(a => (
									<div
										key={`b-${a.label}`}
										className='[background:var(--stone)]'
										style={{
											width: `${(a.before / totalBefore) * 100}%`,
											opacity: 0.35 + (a.before / totalBefore) * 0.65
										}}
										title={`${a.label}: ${a.before}KB`}
									/>
								))}
							</div>
						</div>
						<div>
							<p className='mb-2 text-[10px] uppercase tracking-[0.18em] [color:var(--forest)]'>
								After — 180KB total
							</p>
							<div className='flex h-10 overflow-hidden rounded-lg border border-[var(--line)]'>
								{assets
									.filter(a => a.after > 0)
									.map(a => (
										<div
											key={`a-${a.label}`}
											className='[background:var(--lime)]'
											style={{
												width: `${(a.after / totalAfter) * 100}%`
											}}
											title={`${a.label}: ${a.after}KB`}
										/>
									))}
								<div
									className='[background:var(--forest)]'
									style={{ width: `${(12 / totalAfter) * 100}%` }}
									title='HTML + CSS: 12KB'
								/>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap items-center justify-between gap-4 border-[var(--line)] border-t px-4 py-4 sm:px-6'>
						<p className='text-xs [color:var(--mute)]'>
							92.5% reduction · 0.09g CO₂ saved per page load
						</p>
						<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--forest)]'>
							−2.22MB
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
