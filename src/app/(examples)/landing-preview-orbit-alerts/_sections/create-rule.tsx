'use client'

import { useState } from 'react'

/** Future Payload mapping: createRule (block). */
const METRICS = [
	'Page emissions (g CO₂)',
	'Transfer size (MB)',
	'Site budget (%)',
	'Carbon grade'
]

export function CreateRule() {
	const [name, setName] = useState('')
	const [metric, setMetric] = useState(METRICS[0])

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Create rule
			</h2>
			<form className='space-y-3' onSubmit={e => e.preventDefault()}>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Rule name
					</span>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='e.g. Homepage weight limit'
						className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs outline-none focus:border-[color-mix(in_oklch,var(--orbit)_40%,var(--line))]'
					/>
				</label>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Metric
					</span>
					<select
						value={metric}
						onChange={e => setMetric(e.target.value)}
						className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
					>
						{METRICS.map(m => (
							<option key={m}>{m}</option>
						))}
					</select>
				</label>
				<div className='grid grid-cols-2 gap-2'>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Operator
						</span>
						<select className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'>
							<option>{'>'}</option>
							<option>{'<'}</option>
							<option>=</option>
						</select>
					</label>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Value
						</span>
						<input
							type='text'
							defaultValue='0.75'
							className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
						/>
					</label>
				</div>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Apply to
					</span>
					<select className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'>
						<option>All pages</option>
						<option>/checkout</option>
						<option>/products/*</option>
					</select>
				</label>
				<button
					type='submit'
					className='w-full rounded-lg py-2 font-medium text-[oklch(0.12_0.02_265)] text-xs [background:var(--orbit)]'
				>
					Create rule
				</button>
			</form>
		</section>
	)
}
