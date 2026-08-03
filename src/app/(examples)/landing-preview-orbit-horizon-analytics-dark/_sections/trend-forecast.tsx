'use client'

import { useState } from 'react'

/** Future Payload mapping: trendForecast (block). */
const actual = [9.4, 9.8, 10.1, 10.5, 10.2, 9.9]
const forecast = [9.9, 9.6, 9.2, 8.8, 8.5, 8.2]
const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']

const chartW = 400
const chartH = 140
const pad = 10

function paths(values: number[]) {
	const all = [...actual, ...forecast]
	const max = Math.max(...all)
	const min = Math.min(...all) * 0.9
	const range = max - min || 1
	const step = (chartW - pad * 2) / (values.length - 1)
	const pts = values.map((v, i) => ({
		x: pad + i * step,
		y: pad + (1 - (v - min) / range) * (chartH - pad * 2)
	}))
	return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
}

export function TrendForecast() {
	const [showForecast, setShowForecast] = useState(true)

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-4 flex flex-wrap items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Trend forecast
				</h2>
				<label className='flex items-center gap-2 text-[11px] [color:var(--mute)]'>
					<input
						type='checkbox'
						checked={showForecast}
						onChange={e => setShowForecast(e.target.checked)}
						className='rounded border-[var(--line)]'
					/>
					Show projection
				</label>
			</div>
			<p className='mb-3 text-[11px] [color:var(--mute)]'>
				Projected monthly kg CO₂ based on optimization pipeline
			</p>
			<svg
				viewBox={`0 0 ${chartW} ${chartH + 16}`}
				className='h-auto w-full'
				role='img'
				aria-label='Trend forecast chart'
			>
				<path
					d={paths(actual)}
					fill='none'
					stroke='var(--olive)'
					strokeWidth='2.5'
					strokeLinecap='round'
				/>
				{showForecast ? (
					<path
						d={paths(forecast)}
						fill='none'
						stroke='var(--positive)'
						strokeWidth='2'
						strokeDasharray='6 4'
						strokeLinecap='round'
					/>
				) : null}
				{labels.map((l, i) => (
					<text
						key={l}
						x={pad + i * ((chartW - pad * 2) / (labels.length - 1))}
						y={chartH + 12}
						textAnchor='middle'
						fill='var(--mute)'
						fontSize='8'
					>
						{l}
					</text>
				))}
			</svg>
			<p className='mt-2 text-[11px] [color:var(--positive)]'>
				Forecast: −22% emissions by Nov if current fixes deploy
			</p>
		</section>
	)
}
