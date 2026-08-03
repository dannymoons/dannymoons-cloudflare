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
	18.2, 17.4, 16.8, 15.9, 14.2, 13.8, 12.4, 11.9, 11.2, 10.8, 10.1, 9.4
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
		<section className='border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<div>
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						Monthly emissions
					</h2>
					<p className='text-[11px] [color:var(--mute)]'>
						Total kg CO₂ across all pages
					</p>
				</div>
				<select
					className='h-8 rounded-lg border border-[var(--line)] bg-transparent px-2 text-[11px]'
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
					9.4
				</span>
				<span className='text-xs [color:var(--mute)]'>kg CO₂ this month</span>
				<span className='rounded-full border border-[color-mix(in_oklch,var(--positive)_35%,transparent)] px-2 py-0.5 text-[10px] [color:var(--positive)]'>
					−48% YoY
				</span>
			</div>
			<div className='px-2 py-4 sm:px-4'>
				<svg
					viewBox={`0 0 ${chartW} ${chartH + 20}`}
					className='h-auto w-full'
					role='img'
					aria-label='Area chart of monthly emissions declining from 18.2 to 9.4 kg CO2'
				>
					<defs>
						<linearGradient id='console-area' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='var(--olive)' stopOpacity='0.35' />
							<stop offset='100%' stopColor='var(--olive)' stopOpacity='0' />
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
					<path d={areaPath} fill='url(#console-area)' />
					<path
						d={linePath}
						fill='none'
						stroke='var(--olive)'
						strokeWidth='2'
						strokeLinecap='round'
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
									tabIndex={0}
									role='button'
									aria-label={`${months[i]}: ${v} kg CO₂`}
								/>
								<circle
									cx={x}
									cy={y}
									r={active ? 4 : 2.5}
									fill={active ? 'var(--positive)' : 'var(--olive)'}
								/>
								{active ? (
									<text
										x={x}
										y={y - 10}
										textAnchor='middle'
										fill='var(--ink)'
										fontSize='9'
									>
										{v}kg
									</text>
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
