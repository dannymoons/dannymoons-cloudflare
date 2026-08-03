'use client'

import { useState } from 'react'

/** Future Payload mapping: bulkActions (block). */
const ACTIONS = [
	{ id: 'audit', label: 'Run audit on selected' },
	{ id: 'export', label: 'Export emissions report' },
	{ id: 'budget', label: 'Apply budget template' },
	{ id: 'archive', label: 'Archive sites' }
]

export function BulkActions() {
	const [selected, setSelected] = useState<string | null>(null)

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-2 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Bulk actions
			</h2>
			<p className='mb-4 text-[11px] [color:var(--mute)]'>
				Select sites above, then choose an action
			</p>
			<div className='space-y-2'>
				{ACTIONS.map(a => (
					<button
						key={a.id}
						type='button'
						onClick={() => setSelected(a.id)}
						className={`w-full rounded-lg border px-3 py-2.5 text-left text-xs transition-colors ${
							selected === a.id
								? 'border-[color-mix(in_oklch,var(--olive)_40%,var(--line))] [background:color-mix(in_oklch,var(--olive)_10%,var(--surface))]'
								: 'border-[var(--line)] [background:var(--surface)] hover:[background:var(--panel)]'
						}`}
					>
						{a.label}
					</button>
				))}
			</div>
			<button
				type='button'
				disabled={!selected}
				className='mt-4 w-full rounded-lg py-2 font-medium text-[oklch(0.12_0.02_265)] text-xs [background:var(--olive)] disabled:opacity-40'
			>
				Apply to selection
			</button>
		</section>
	)
}
