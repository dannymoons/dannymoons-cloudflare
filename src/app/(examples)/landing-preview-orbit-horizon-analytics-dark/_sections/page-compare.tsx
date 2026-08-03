'use client'

import { useState } from 'react'

/** Future Payload mapping: pageCompare (block). */
const PAGES = [
	{ id: 'home', label: 'Homepage', co2: [0.44, 0.42, 0.4, 0.38, 0.35, 0.35] },
	{
		id: 'checkout',
		label: 'Checkout',
		co2: [0.88, 0.85, 0.84, 0.83, 0.82, 0.82]
	}
]

const chartW = 400
const chartH = 120
const pad = 8

function linePath(values: number[]): string {
	const max = Math.max(...values) * 1.05
	const min = Math.min(...values) * 0.95
	const range = max - min || 1
	const step = (chartW - pad * 2) / (values.length - 1)
	return values
		.map((v, i) => {
			const x = pad + i * step
			const y = pad + (1 - (v - min) / range) * (chartH - pad * 2)
			return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
		})
		.join(' ')
}

export function PageCompare() {
	const [selected, setSelected] = useState<string[]>(['home', 'checkout'])

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Page comparison
			</h2>
			<div className='mb-4 flex flex-wrap gap-2'>
				{PAGES.map(p => (
					<button
						key={p.id}
						type='button'
						onClick={() =>
							setSelected(prev =>
								prev.includes(p.id)
									? prev.filter(x => x !== p.id)
									: [...prev, p.id]
							)
						}
						className={`rounded-lg border px-2.5 py-1 text-[11px] ${
							selected.includes(p.id)
								? 'border-[color-mix(in_oklch,var(--olive)_40%,var(--line))] [color:var(--olive)]'
								: 'border-[var(--line)] [color:var(--mute)]'
						}`}
					>
						{p.label}
					</button>
				))}
			</div>
			<svg
				viewBox={`0 0 ${chartW} ${chartH}`}
				className='h-auto w-full'
				role='img'
				aria-label='Line chart comparing page emissions'
			>
				{PAGES.filter(p => selected.includes(p.id)).map((p, idx) => (
					<path
						key={p.id}
						d={linePath(p.co2)}
						fill='none'
						stroke={idx === 0 ? 'var(--olive)' : 'var(--positive)'}
						strokeWidth='2'
						strokeLinecap='round'
					/>
				))}
			</svg>
			<div className='mt-3 flex gap-4 text-[11px]'>
				{PAGES.filter(p => selected.includes(p.id)).map((p, idx) => (
					<span key={p.id} className='flex items-center gap-1.5'>
						<span
							className='h-2 w-4 rounded-full'
							style={{ background: idx === 0 ? 'var(--olive)' : 'var(--positive)' }}
						/>
						{p.label}: {p.co2[p.co2.length - 1]}g
					</span>
				))}
			</div>
		</section>
	)
}
