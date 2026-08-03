'use client'

import { useState } from 'react'

/** Future Payload mapping: emissionsChart (block). */
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

const chartW = 520
const chartH = 160
const padX = 8
const padY = 12

function buildAreaPath(values: number[]): string {
	const max = Math.max(...values)
	const min = Math.min(...values) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)
	const points = values.map((v, i) => ({
		x: padX + i * step,
		y: padY + (1 - (v - min) / range) * (chartH - padY * 2)
	}))
	const line = points
		.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
		.join(' ')
	return `${line} L ${points[points.length - 1].x} ${chartH - padY} L ${points[0].x} ${chartH - padY} Z`
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

function getPointCoords(values: number[], index: number) {
	const max = Math.max(...values)
	const min = Math.min(...values) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (values.length - 1)
	return {
		x: padX + index * step,
		y: padY + (1 - (values[index] - min) / range) * (chartH - padY * 2)
	}
}

export function EmissionsChart() {
	const [hovered, setHovered] = useState<number | null>(null)
	const areaPath = buildAreaPath(emissions)
	const linePath = buildLinePath(emissions)

	return (
		<section className='ohc-reveal overflow-hidden border-2 border-[var(--ink)] shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--ink)] border-b-2 px-4 py-3 sm:px-5'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						Emissions over time
					</h2>
					<p className='font-[family-name:var(--font-mono)] text-[11px] [color:var(--mute)]'>
						Average grams CO₂ per page view — acme.com
					</p>
				</div>
				<select
					className='h-10 cursor-pointer border-2 border-[var(--ink)] px-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider [background:var(--panel)] hover:shadow-[2px_2px_0_var(--ink)]'
					defaultValue='monthly'
					aria-label='Chart interval'
				>
					<option value='daily'>Daily</option>
					<option value='weekly'>Weekly</option>
					<option value='monthly'>Monthly</option>
				</select>
			</div>
			<div className='flex flex-wrap items-baseline gap-3 px-4 pt-4 sm:px-5'>
				<span className='font-[family-name:var(--font-display)] font-bold text-2xl'>
					0.35
				</span>
				<span className='font-[family-name:var(--font-mono)] text-xs [color:var(--mute)]'>
					g CO₂ / visit
				</span>
				<span className='border border-[var(--ink)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [color:var(--positive)]'>
					−40% YoY
				</span>
			</div>
			<div className='flex flex-wrap gap-4 px-4 pb-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider sm:px-5'>
				<span className='flex items-center gap-2'>
					<span className='h-2 w-6 [background:var(--olive)]' />
					Site average
				</span>
				<span className='flex items-center gap-2 [color:var(--mute)]'>
					<span className='h-2 w-6 border border-[var(--ink)] border-dashed [background:color-mix(in_oklch,var(--sage)_20%,transparent)]' />
					Target budget
				</span>
			</div>
			<div className='px-2 py-4 sm:px-4'>
				<svg
					viewBox={`0 0 ${chartW} ${chartH + 20}`}
					className='h-auto w-full'
					role='img'
					aria-label='Area chart showing monthly carbon emissions declining from 0.58 to 0.35 grams CO2 per visit'
				>
					<title>Monthly emissions trend</title>
					<defs>
						<linearGradient id='ohc-area-fill' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='var(--olive)' stopOpacity='0.32' />
							<stop offset='100%' stopColor='var(--olive)' stopOpacity='0' />
						</linearGradient>
						<linearGradient id='ohc-line' x1='0' y1='0' x2='1' y2='0'>
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
						/>
					))}
					<path d={areaPath} fill='url(#ohc-area-fill)' />
					<path
						d={linePath}
						fill='none'
						stroke='url(#ohc-line)'
						strokeWidth='2.5'
						strokeLinecap='square'
						strokeLinejoin='miter'
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
								{/* biome-ignore lint/a11y/useSemanticElements: SVG chart hit targets */}
								<rect
									x={x - 14}
									y={0}
									width={28}
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
								<rect
									x={x - (active ? 4 : 2.5)}
									y={y - (active ? 4 : 2.5)}
									width={active ? 8 : 5}
									height={active ? 8 : 5}
									fill={active ? 'var(--clay)' : 'var(--olive)'}
								/>
								{active ? (
									<g>
										<rect
											x={x - 28}
											y={y - 32}
											width={56}
											height={22}
											fill='var(--surface)'
											stroke='var(--ink)'
											strokeWidth='2'
										/>
										<text
											x={x}
											y={y - 18}
											textAnchor='middle'
											fill='var(--ink)'
											fontSize='9'
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
						return (
							<text
								key={m}
								x={padX + i * step}
								y={chartH + 14}
								textAnchor='middle'
								fill='var(--mute)'
								fontSize='8'
								fontFamily='var(--font-mono)'
							>
								{m}
							</text>
						)
					})}
				</svg>
			</div>
		</section>
	)
}
