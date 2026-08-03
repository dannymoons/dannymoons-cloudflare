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

const values = [
	0.52, 0.5, 0.48, 0.46, 0.44, 0.42, 0.4, 0.39, 0.37, 0.36, 0.35, 0.34
]

const chartW = 560
const chartH = 180
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

/** Future Payload mapping: dashboardChart (single-line). */
export function Dashboard() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const linePath = buildLinePath(values)
	const areaPath = `${linePath} L ${padX + ((chartW - padX * 2) / (values.length - 1)) * (values.length - 1)} ${chartH} L ${padX} ${chartH} Z`

	return (
		<section id='dashboard' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Dashboard
						</span>
						<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Carbon trend · acme.com
						</h2>
						<p className='osg-reveal mt-3 max-w-md text-sm [color:var(--mute)]'>
							Monthly g CO₂ per visit. Hover data points for detail — same data
							available via GET /v1/sites/&#123;id&#125;/pages.
						</p>
					</div>
					<span className='osg-reveal flex items-center gap-2 font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
						<span className='h-0.5 w-6 rounded-full [background:var(--lime)]' />
						acme.com
					</span>
				</div>

				<div className='osg-reveal overflow-hidden rounded border border-[var(--line)] [background:var(--panel)]'>
					<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-b px-4 py-3 sm:px-6'>
						<div className='flex items-baseline gap-3'>
							<span className='font-[family-name:var(--font-display)] font-semibold text-3xl tabular-nums tracking-tight [color:var(--lime)]'>
								0.34
							</span>
							<span className='text-sm [color:var(--mute)]'>g CO₂ / visit</span>
						</div>
						<select
							className='min-h-12 rounded border border-[var(--line)] bg-transparent px-3 font-[family-name:var(--font-body)] text-xs [color:var(--text)]'
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
							aria-label='Line chart showing monthly carbon emissions for acme.com declining from 0.52g to 0.34g over 12 months'
						>
							<defs>
								<linearGradient id='osg-area' x1='0' y1='0' x2='0' y2='1'>
									<stop
										offset='0%'
										stopColor='var(--lime)'
										stopOpacity='0.25'
									/>
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

							<path d={areaPath} fill='url(#osg-area)' />
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
													x={x - 36}
													y={y - 40}
													width={72}
													height={28}
													rx={2}
													fill='var(--void)'
													stroke='var(--line)'
												/>
												<text
													x={x}
													y={y - 22}
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
