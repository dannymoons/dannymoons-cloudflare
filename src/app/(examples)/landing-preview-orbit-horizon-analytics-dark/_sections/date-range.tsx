'use client'

import { Calendar } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: dateRange (block). */
const PRESETS = [
	{ id: '7d', label: '7 days' },
	{ id: '30d', label: '30 days' },
	{ id: '90d', label: '90 days' },
	{ id: 'ytd', label: 'YTD' },
	{ id: 'custom', label: 'Custom' }
] as const

export function DateRange() {
	const [active, setActive] = useState<(typeof PRESETS)[number]['id']>('30d')

	return (
		<section className='flex flex-col gap-3 border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:flex-row sm:items-center sm:justify-between'>
			<div className='flex items-center gap-2'>
				<Calendar className='h-4 w-4 [color:var(--olive)]' aria-hidden />
				<span className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Date range
				</span>
				<span className='text-[11px] [color:var(--mute)]'>
					May 9 – Jun 8, 2026
				</span>
			</div>
			<div className='flex flex-wrap gap-1'>
				{PRESETS.map(p => (
					<button
						key={p.id}
						type='button'
						onClick={() => setActive(p.id)}
						className={`rounded-lg px-3 py-1.5 font-medium text-[11px] transition-colors ${
							active === p.id
								? 'text-[oklch(0.12_0.02_265)] [background:var(--olive)]'
								: 'border border-[var(--line)] [color:var(--mute)] hover:[color:var(--ink)]'
						}`}
					>
						{p.label}
					</button>
				))}
			</div>
		</section>
	)
}
