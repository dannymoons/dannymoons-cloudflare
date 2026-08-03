'use client'

import { useState } from 'react'

/** Future Payload mapping: exportBar (block). */
const FORMATS = ['CSV', 'PDF', 'JSON'] as const

export function ExportBar() {
	const [format, setFormat] = useState<(typeof FORMATS)[number]>('CSV')
	const [range, setRange] = useState('30d')

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Export data
			</h2>
			<div className='flex flex-col gap-3 sm:flex-row sm:items-end'>
				<label className='flex-1'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Date range
					</span>
					<select
						value={range}
						onChange={e => setRange(e.target.value)}
						className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
					>
						<option value='7d'>Last 7 days</option>
						<option value='30d'>Last 30 days</option>
						<option value='90d'>Last 90 days</option>
						<option value='ytd'>Year to date</option>
					</select>
				</label>
				<div className='flex-1'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Format
					</span>
					<div className='flex gap-1 rounded-lg border border-[var(--line)] p-1'>
						{FORMATS.map(f => (
							<button
								key={f}
								type='button'
								onClick={() => setFormat(f)}
								className={`flex-1 rounded-md py-1.5 font-medium text-[11px] transition-colors ${
									format === f
										? 'text-[oklch(0.12_0.02_265)] [background:var(--orbit)]'
										: '[color:var(--mute)] hover:[color:var(--text)]'
								}`}
							>
								{f}
							</button>
						))}
					</div>
				</div>
				<button
					type='button'
					className='h-9 shrink-0 rounded-lg px-4 font-medium text-[oklch(0.12_0.02_265)] text-xs [background:var(--orbit)] hover:opacity-90'
				>
					Download {format}
				</button>
			</div>
			<p className='mt-3 text-[11px] [color:var(--mute)]'>
				Includes page-level emissions, asset breakdown, and alert history for
				acme.com.
			</p>
		</section>
	)
}
