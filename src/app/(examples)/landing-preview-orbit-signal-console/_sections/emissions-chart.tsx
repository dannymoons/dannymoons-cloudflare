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

const values = [
	0.52, 0.5, 0.48, 0.46, 0.44, 0.42, 0.4, 0.39, 0.37, 0.36, 0.35, 0.34
]

const chartW = 520
const chartH = 160
const padX = 8
const padY = 12

function buildLinePath(vals: number[]): string {
	const max = Math.max(...vals)
	const min = Math.min(...vals) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (vals.length - 1)

	return vals
		.map((v, i) => {
			const x = padX + i * step
			const y = padY + (1 - (v - min) / range) * (chartH - padY * 2)
			return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
		})
		.join(' ')
}

function getPointCoords(
	vals: number[],
	index: number
): { x: number; y: number } {
	const max = Math.max(...vals)
	const min = Math.min(...vals) * 0.85
	const range = max - min || 1
	const step = (chartW - padX * 2) / (vals.length - 1)
	const x = padX + index * step
	const y = padY + (1 - (vals[index] - min) / range) * (chartH - padY * 2)
	return { x, y }
}

export function EmissionsChart() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const linePath = buildLinePath(values)
	const areaPath = `${linePath} L ${padX + ((chartW - padX * 2) / (values.length - 1)) * (values.length - 1)} ${chartH} L ${padX} ${chartH} Z`

	return (
		<section className='overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						Carbon trend
					</h2>
					<p className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--mute)]'>
						GET /v1/sites/acme.com/emissions
					</p>
				</div>
				<select
					className='min-h-9 rounded border border-[var(--line)] bg-transparent px-3 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--text)]'
					defaultValue='monthly'
					aria-label='Chart interval'
				>
					<option value='daily'>Daily</option>
					<option value='weekly'>Weekly</option>
					<option value='monthly'>Monthly</option>
				</select>
			</div>

			<div className='flex flex-wrap items-baseline gap-3 px-4 pt-4 sm:px-5'>
				<span className='font-[family-name:var(--font-body)] font-medium text-2xl tabular-nums [color:var(--lime)]'>
					0.34
				</span>
				<span className='font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
					g CO₂ / visit
				</span>
				<span className='rounded border border-[color-mix(in_oklch,var(--lime)_35%,var(--line))] px-2 py-0.5 font-[family-name:var(--font-body)] text-[10px] [color:var(--lime)]'>
					−35% YoY
				</span>
			</div>

			<div className='relative px-2 py-4 sm:px-4'>
				<svg
					viewBox={`0 0 ${chartW} ${chartH + 24}`}
					className='h-auto w-full'
					role='img'
					aria-label='Line chart showing monthly carbon emissions for acme.com declining from 0.52g to 0.34g over 12 months'
				>
					<defs>
						<linearGradient id='osg-console-area' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='var(--lime)' stopOpacity='0.25' />
							<stop offset='100%' stopColor='var(--lime)' stopOpacity='0' />
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

					<path d={areaPath} fill='url(#osg-console-area)' />
					<path
						d={linePath}
						fill='none'
						stroke='var(--lime)'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>

					{values.map((v, i) => {
						const { x, y } = getPointCoords(values, i)
						const active = hoveredIndex === i
						return (
							<g key={months[i]}>
								{/* biome-ignore lint/a11y/useSemanticElements: SVG chart hit targets cannot be HTML buttons */}
								<rect
									x={x - 12}
									y={0}
									width={24}
									height={chartH}
									fill='transparent'
									onMouseEnter={() => setHoveredIndex(i)}
									onMouseLeave={() => setHoveredIndex(null)}
									onFocus={() => setHoveredIndex(i)}
									onBlur={() => setHoveredIndex(null)}
									tabIndex={0}
									role='button'
									aria-label={`${months[i]}: ${v.toFixed(2)}g CO₂ per visit`}
								/>
								<circle
									cx={x}
									cy={y}
									r={active ? 4 : 2.5}
									fill='var(--lime)'
									className='transition-all duration-150'
								/>
								{active ? (
									<g>
										<rect
											x={x - 40}
											y={y - 42}
											width={80}
											height={30}
											rx={2}
											fill='var(--void)'
											stroke='var(--line)'
										/>
										<text
											x={x}
											y={y - 28}
											textAnchor='middle'
											fill='var(--mute)'
											fontSize='8'
											fontFamily='var(--font-body)'
										>
											{months[i]}
										</text>
										<text
											x={x}
											y={y - 16}
											textAnchor='middle'
											fill='var(--lime)'
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
								fontSize='8'
								fontFamily='var(--font-body)'
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
