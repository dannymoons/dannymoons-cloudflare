const axes = [
	{ label: 'Page weight', you: 82, sector: 58 },
	{ label: 'Hosting', you: 74, sector: 62 },
	{ label: 'Assets', you: 68, sector: 55 },
	{ label: 'CDN', you: 88, sector: 70 },
	{ label: 'Reporting', you: 91, sector: 48 }
]

function polarPoint(
	cx: number,
	cy: number,
	r: number,
	angleDeg: number
): { x: number; y: number } {
	const rad = ((angleDeg - 90) * Math.PI) / 180
	return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function buildPolygon(
	values: number[],
	cx: number,
	cy: number,
	maxR: number
): string {
	const step = 360 / values.length
	return values
		.map((v, i) => {
			const p = polarPoint(cx, cy, (v / 100) * maxR, i * step)
			return `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
		})
		.join(' ')
		.concat(' Z')
}

/** Future Payload mapping: radarBenchmark (SVG chart). */
export function RadarBenchmark() {
	const cx = 160
	const cy = 160
	const maxR = 120
	const youPath = buildPolygon(
		axes.map(a => a.you),
		cx,
		cy,
		maxR
	)
	const sectorPath = buildPolygon(
		axes.map(a => a.sector),
		cx,
		cy,
		maxR
	)

	return (
		<section id='radar-benchmark' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center'>
				<div className='gb-reveal'>
					<p className='text-[10px] uppercase tracking-[0.28em] [color:var(--green)]'>
						Benchmark radar
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.06] tracking-tight'>
						See exactly where you outperform — and where you leak carbon.
					</h2>
					<p className='mt-5 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Five-axis scoring compares your studio against sector medians across
						page weight, hosting, asset optimisation, CDN efficiency, and client
						reporting depth.
					</p>
					<dl className='mt-8 grid grid-cols-2 gap-4'>
						<div className='rounded-lg border border-[var(--line)] p-4'>
							<dt className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
								Your composite
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] font-bold text-3xl [color:var(--green)]'>
								81
							</dd>
						</div>
						<div className='rounded-lg border border-[var(--line)] p-4'>
							<dt className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
								Sector median
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] font-bold text-3xl'>
								59
							</dd>
						</div>
					</dl>
				</div>

				<div className='gb-reveal flex justify-center'>
					<svg
						viewBox='0 0 320 320'
						className='h-auto w-full max-w-[20rem]'
						aria-label='Agency benchmark radar chart comparing your studio to sector median'
						role='img'
					>
						<title>Agency benchmark radar chart</title>
						{[0.25, 0.5, 0.75, 1].map(scale => {
							const ring = axes
								.map((_, i) =>
									polarPoint(cx, cy, maxR * scale, (360 / axes.length) * i)
								)
								.map(p => `${p.x},${p.y}`)
								.join(' ')
							return (
								<polygon
									key={scale}
									points={ring}
									fill='none'
									stroke='var(--line)'
									strokeWidth='1'
								/>
							)
						})}
						<path
							d={sectorPath}
							fill='color-mix(in oklch, var(--mute) 15%, transparent)'
							stroke='var(--mute)'
							strokeWidth='1.5'
						/>
						<path
							d={youPath}
							fill='color-mix(in oklch, var(--green) 25%, transparent)'
							stroke='var(--green)'
							strokeWidth='2'
						/>
						{axes.map((a, i) => {
							const p = polarPoint(cx, cy, maxR + 18, (360 / axes.length) * i)
							return (
								<text
									key={a.label}
									x={p.x}
									y={p.y}
									textAnchor='middle'
									dominantBaseline='middle'
									className='fill-[var(--ink)] font-[family-name:var(--font-body)] text-[9px]'
								>
									{a.label}
								</text>
							)
						})}
					</svg>
				</div>
			</div>
		</section>
	)
}
