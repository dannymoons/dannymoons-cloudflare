'use client'

import { useState } from 'react'

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
]

const emissions = [
	0.58, 0.55, 0.52, 0.54, 0.49, 0.47, 0.45, 0.44, 0.41, 0.39, 0.37, 0.35
]

const chartW = 560
const chartH = 180
const padX = 8
const padY = 12

function buildAreaPath(values: number[]): string {
	const max = Math.max(...values)
	const min = Math.min(...values) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)

	const points = values.map((v, i) => {
		const x = padX + i * step
		const y = padY + (1 - (v - min) / range) * (chartH - padY * 2)
		return { x, y }
	})

	const line = points
		.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
		.join(' ')
	const area = `${line} L ${points[points.length - 1].x} ${chartH - padY} L ${points[0].x} ${chartH - padY} Z`
	return area
}

function buildLinePath(values: number[]): string {
	const max = Math.max(...values)
	const min = Math.min(...values) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)

	return values
		.map((v, i) => {
			const x = padX + i * step
			const y = padY + (1 - (v - min) / range) * (chartH - padY * 2)
			return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
		})
		.join(' ')
}

function getPointCoords(
	values: number[],
	index: number
): { x: number; y: number } {
	const max = Math.max(...values)
	const min = Math.min(...values) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)
	const x = padX + index * step
	const y = padY + (1 - (values[index] - min) / range) * (chartH - padY * 2)
	return { x, y }
}

/** Future Payload mapping: dashboardChart (interactive). */
export function DashboardPreview() {
	const [hovered, setHovered] = useState<number | null>(null)
	const areaPath = buildAreaPath(emissions)
	const linePath = buildLinePath(emissions)

	return (
		<section
			id='dashboard'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
							Emissions over time
						</span>
						<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
							acme.com —{' '}
							<span className='italic [color:var(--olive)]'>
								12 month trend
							</span>
						</h2>
						<p className='ohd-reveal mt-3 max-w-md text-sm [color:var(--mute)]'>
							Average grams CO₂ per page view across all tracked URLs. Hover
							data points for monthly detail.
						</p>
					</div>
					<div className='ohd-reveal flex flex-wrap gap-4 text-xs'>
						<span className='flex items-center gap-2'>
							<span className='h-2 w-6 rounded-full [background:var(--olive)]' />
							Site average
						</span>
						<span className='flex items-center gap-2 [color:var(--mute)]'>
							<span className='h-2 w-6 rounded-full border border-[color-mix(in_oklch,var(--sage)_50%,transparent)] border-dashed [background:color-mix(in_oklch,var(--sage)_20%,transparent)]' />
							Target budget
						</span>
					</div>
				</div>

				<div className='ohd-reveal overflow-hidden border-2 border-[var(--stroke)] [background:var(--panel)]'>
					<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-b px-4 py-3 sm:px-6'>
						<div className='flex items-baseline gap-3'>
							<span className='font-[family-name:var(--font-display)] font-semibold text-3xl tabular-nums tracking-tight [color:var(--ink)]'>
								0.35
							</span>
							<span className='text-sm [color:var(--mute)]'>g CO₂ / visit</span>
							<span className='rounded-full border border-[color-mix(in_oklch,var(--positive)_40%,transparent)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] tabular-nums [color:var(--positive)]'>
								−40% YoY
							</span>
						</div>
						<select
							className='min-h-12 cursor-pointer rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs [color:var(--ink)]'
							defaultValue='monthly'
							aria-label='Chart interval'
						>
							<option value='daily'>Daily</option>
							<option value='weekly'>Weekly</option>
							<option value='monthly'>Monthly</option>
						</select>
					</div>

					<div className='relative px-2 py-6 sm:px-4'>
						<svg
							viewBox={`0 0 ${chartW} ${chartH + 24}`}
							className='h-auto w-full'
							role='img'
							aria-label='Area chart showing monthly carbon emissions declining from 0.58 to 0.35 grams CO2 per visit'
						>
							<title>
								Monthly carbon emissions trend declining from 0.58 to 0.35 grams
								CO₂ per visit
							</title>
							<defs>
								<linearGradient
									id='horizon-area-fill'
									x1='0'
									y1='0'
									x2='0'
									y2='1'
								>
									<stop
										offset='0%'
										stopColor='var(--olive)'
										stopOpacity='0.32'
									/>
									<stop
										offset='100%'
										stopColor='var(--olive)'
										stopOpacity='0'
									/>
								</linearGradient>
								<linearGradient id='horizon-line' x1='0' y1='0' x2='1' y2='0'>
									<stop offset='0%' stopColor='var(--olive)' />
									<stop offset='100%' stopColor='var(--clay)' />
								</linearGradient>
							</defs>

							{[0.25, 0.5, 0.75].map(p => (
								<line
									key={p}
									x1={padX}
									x2={chartW - padX}
									y1={padY + p * (chartH - padY * 2)}
									y2={padY + p * (chartH - padY * 2)}
									stroke='var(--line)'
									strokeWidth='1'
								/>
							))}

							<path d={areaPath} fill='url(#horizon-area-fill)' />
							<path
								d={linePath}
								fill='none'
								stroke='url(#horizon-line)'
								strokeWidth='2.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>

							<line
								x1={padX}
								x2={chartW - padX}
								y1={padY + 0.62 * (chartH - padY * 2)}
								y2={padY + 0.62 * (chartH - padY * 2)}
								stroke='var(--sage)'
								strokeWidth='1'
								strokeDasharray='4 4'
								opacity='0.7'
							/>

							{emissions.map((v, i) => {
								const { x, y } = getPointCoords(emissions, i)
								const active = hovered === i
								return (
									<g key={months[i]}>
										{/* biome-ignore lint/a11y/useSemanticElements: SVG chart hit targets cannot be HTML buttons */}
										<rect
											x={x - 16}
											y={0}
											width={32}
											height={chartH}
											fill='transparent'
											onMouseEnter={() => setHovered(i)}
											onMouseLeave={() => setHovered(null)}
											onFocus={() => setHovered(i)}
											onBlur={() => setHovered(null)}
											tabIndex={0}
											role='button'
											aria-label={`${months[i]}: ${v.toFixed(2)}g CO₂ per visit`}
										/>
										<circle
											cx={x}
											cy={y}
											r={active ? 5 : 3}
											fill={active ? 'var(--clay)' : 'var(--olive)'}
											className='transition-all duration-150'
										/>
										{active ? (
											<g>
												<rect
													x={x - 28}
													y={y - 36}
													width={56}
													height={24}
													rx={4}
													fill='var(--surface)'
													stroke='var(--line)'
												/>
												<text
													x={x}
													y={y - 20}
													textAnchor='middle'
													fill='var(--ink)'
													fontSize='10'
													fontFamily='var(--font-mono)'
													className='tabular-nums'
												>
													{v.toFixed(2)}g
												</text>
											</g>
										) : null}
									</g>
								)
							})}

							{months.map((m, i) => {
								const step = (chartW - padX * 2) / (months.length - 1)
								const x = padX + i * step
								return (
									<text
										key={m}
										x={x}
										y={chartH + 8}
										textAnchor='middle'
										fill='var(--mute)'
										fontSize='9'
										fontFamily='var(--font-mono)'
									>
										{m}
									</text>
								)
							})}
						</svg>
					</div>
				</div>
			</div>
		</section>
	)
}
