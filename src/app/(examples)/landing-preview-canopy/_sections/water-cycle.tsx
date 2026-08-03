const stages = [
	{ id: 'rain', label: 'Rainfall', angle: 0 },
	{ id: 'soil', label: 'Soil infiltration', angle: 60 },
	{ id: 'root', label: 'Root uptake', angle: 120 },
	{ id: 'crop', label: 'Crop cycle', angle: 180 },
	{ id: 'return', label: 'Nutrient return', angle: 240 },
	{ id: 'stream', label: 'Watershed', angle: 300 }
]

/** Future Payload mapping: waterCycleDiagram. */
export function WaterCycle() {
	const cx = 50
	const cy = 50
	const r = 38

	return (
		<section id='water-cycle' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
					<div className='cp-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
							Regenerative hydrology
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
							Water that returns to the land
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--mute)]'>
							Canopy partners design closed water loops — every drop captured,
							filtered through living soil, and cycled back to crops and
							communities.
						</p>
						<ul className='mt-8 space-y-3 text-sm'>
							{stages.map(s => (
								<li key={s.id} className='flex items-center gap-3'>
									<span className='h-2 w-2 shrink-0 rounded-full [background:var(--leaf)]' />
									<span>{s.label}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='cp-reveal relative mx-auto aspect-square w-full max-w-md'>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative diagram */}
						<svg viewBox='0 0 100 100' className='h-full w-full' aria-hidden>
							<defs>
								<linearGradient
									id='cp-water'
									x1='0%'
									y1='0%'
									x2='100%'
									y2='100%'
								>
									<stop offset='0%' stopColor='var(--leaf)' stopOpacity='0.3' />
									<stop
										offset='100%'
										stopColor='var(--earth)'
										stopOpacity='0.6'
									/>
								</linearGradient>
							</defs>
							<circle
								cx={cx}
								cy={cy}
								r={r}
								fill='none'
								stroke='url(#cp-water)'
								strokeWidth='0.6'
								strokeDasharray='2 1.5'
							/>
							<circle
								cx={cx}
								cy={cy}
								r={r * 0.55}
								fill='color-mix(in oklch, var(--sand) 80%, var(--leaf))'
								opacity='0.35'
							/>
							{stages.map((s, i) => {
								const rad = ((s.angle - 90) * Math.PI) / 180
								const x = cx + r * Math.cos(rad)
								const y = cy + r * Math.sin(rad)
								const next = stages[(i + 1) % stages.length]
								const rad2 = ((next.angle - 90) * Math.PI) / 180
								const x2 = cx + r * Math.cos(rad2)
								const y2 = cy + r * Math.sin(rad2)
								return (
									<g key={s.id}>
										<path
											d={`M ${x} ${y} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
											fill='none'
											stroke='var(--leaf)'
											strokeWidth='0.4'
											opacity='0.5'
										/>
										<circle
											cx={x}
											cy={y}
											r='2.2'
											fill='var(--earth)'
											stroke='var(--leaf)'
											strokeWidth='0.3'
										/>
									</g>
								)
							})}
							<text
								x={cx}
								y={cy}
								textAnchor='middle'
								dominantBaseline='middle'
								className='fill-[var(--bark)] font-[family-name:var(--font-display)] text-[5px]'
							>
								Cycle
							</text>
						</svg>

						{stages.map(s => {
							const rad = ((s.angle - 90) * Math.PI) / 180
							const labelR = r + 14
							const left = 50 + labelR * Math.cos(rad)
							const top = 50 + labelR * Math.sin(rad)
							return (
								<span
									key={`lbl-${s.id}`}
									className='absolute -translate-x-1/2 -translate-y-1/2 text-center text-[9px] leading-tight sm:text-[10px]'
									style={{ left: `${left}%`, top: `${top}%` }}
								>
									{s.label}
								</span>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
