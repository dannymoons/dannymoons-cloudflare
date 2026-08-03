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

const series = [
	{
		id: 'northwind',
		label: 'northwind.studio',
		color: 'var(--cyan)',
		values: [
			0.38, 0.36, 0.34, 0.33, 0.31, 0.3, 0.29, 0.28, 0.28, 0.27, 0.28, 0.28
		]
	},
	{
		id: 'harbor',
		label: 'harborand.co',
		color: 'var(--blue)',
		values: [
			0.52, 0.5, 0.48, 0.46, 0.45, 0.44, 0.43, 0.42, 0.41, 0.41, 0.41, 0.41
		]
	},
	{
		id: 'lumen',
		label: 'shop.lumen.io',
		color: 'oklch(0.68 0.12 85)',
		values: [
			0.72, 0.68, 0.65, 0.62, 0.58, 0.56, 0.55, 0.54, 0.53, 0.52, 0.52, 0.52
		]
	}
]

const chartW = 560
const chartH = 180
const padX = 8
const padY = 12

function buildLinePath(values: number[], allValues: number[]): string {
	const max = Math.max(...allValues)
	const min = Math.min(...allValues) * 0.85
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
	index: number,
	allValues: number[]
): { x: number; y: number } {
	const max = Math.max(...allValues)
	const min = Math.min(...allValues) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)
	const x = padX + index * step
	const y = padY + (1 - (values[index] - min) / range) * (chartH - padY * 2)
	return { x, y }
}

/** Future Payload mapping: clientDashboardChart (multi-site). */
export function Dashboard() {
	const [hovered, setHovered] = useState<{
		series: string
		index: number
	} | null>(null)
	const allValues = series.flatMap(s => s.values)

	return (
		<section id='dashboard' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
					<div>
						<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Client dashboard
						</span>
						<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Multi-site emissions chart
						</h2>
						<p className='oa-reveal mt-3 max-w-md text-sm [color:var(--mute)]'>
							Compare g CO₂ per visit across client properties in one frosted
							panel — hover data points for monthly detail per site.
						</p>
					</div>
					<div className='oa-reveal flex flex-wrap gap-4 text-xs'>
						{series.map(s => (
							<span key={s.id} className='flex items-center gap-2'>
								<span
									className='h-0.5 w-6 rounded-full'
									style={{ background: s.color }}
								/>
								{s.label}
							</span>
						))}
					</div>
				</div>

				<div className='oa-reveal overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--blue)_20%,transparent)] backdrop-blur-xl'>
					<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-b px-4 py-4 sm:px-6'>
						<div className='flex items-baseline gap-3'>
							<span className='rounded-full border border-[var(--line)] bg-white/60 px-2.5 py-0.5 font-medium text-[10px] uppercase tracking-widest [color:var(--blue)]'>
								Client
							</span>
							<span className='font-[family-name:var(--font-display)] font-bold text-3xl tabular-nums tracking-tight'>
								0.37
							</span>
							<span className='text-sm [color:var(--mute)]'>
								g CO₂ / visit avg
							</span>
						</div>
						<select
							className='min-h-12 rounded-xl border border-[var(--line)] bg-white/60 px-3 text-xs backdrop-blur-xl [color:var(--ink)]'
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
							aria-label='Multi-line chart showing monthly carbon emissions for three client websites declining over 12 months'
						>
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

							{series.map(s => (
								<path
									key={s.id}
									d={buildLinePath(s.values, allValues)}
									fill='none'
									stroke={s.color}
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							))}

							{series.map(s =>
								s.values.map((v, i) => {
									const { x, y } = getPointCoords(s.values, i, allValues)
									const active =
										hovered?.series === s.id && hovered?.index === i
									return (
										<g key={`${s.id}-${months[i]}`}>
											{/* biome-ignore lint/a11y/useSemanticElements: SVG chart hit targets cannot be HTML buttons */}
											<rect
												x={x - 12}
												y={0}
												width={24}
												height={chartH}
												fill='transparent'
												onMouseEnter={() =>
													setHovered({ series: s.id, index: i })
												}
												onMouseLeave={() => setHovered(null)}
												onFocus={() => setHovered({ series: s.id, index: i })}
												onBlur={() => setHovered(null)}
												tabIndex={0}
												role='button'
												aria-label={`${s.label} ${months[i]}: ${v.toFixed(2)}g CO₂ per visit`}
											/>
											<circle
												cx={x}
												cy={y}
												r={active ? 4 : 2.5}
												fill={s.color}
												className='transition-all duration-150'
											/>
											{active ? (
												<g>
													<rect
														x={x - 36}
														y={y - 40}
														width={72}
														height={28}
														rx={8}
														fill='white'
														fillOpacity={0.9}
														stroke='var(--line)'
													/>
													<text
														x={x}
														y={y - 22}
														textAnchor='middle'
														fill='var(--ink)'
														fontSize='9'
														fontFamily='var(--font-body)'
														fontWeight='500'
													>
														{v.toFixed(2)}g
													</text>
												</g>
											) : null}
										</g>
									)
								})
							)}

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
										fontFamily='var(--font-body)'
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
