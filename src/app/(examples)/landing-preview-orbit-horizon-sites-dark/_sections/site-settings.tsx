'use client'

import { useState } from 'react'

/** Future Payload mapping: siteSettings (block). */
export function SiteSettings() {
	const [budget, setBudget] = useState('200')
	const [greenCdn, setGreenCdn] = useState(true)
	const [autoAudit, setAutoAudit] = useState(true)

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Site settings
			</h2>
			<form className='space-y-4' onSubmit={e => e.preventDefault()}>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Monthly carbon budget (kg CO₂)
					</span>
					<input
						type='number'
						value={budget}
						onChange={e => setBudget(e.target.value)}
						className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
					/>
				</label>
				<label className='flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'>
					<span className='text-xs'>Prefer green CDN routing</span>
					<input
						type='checkbox'
						checked={greenCdn}
						onChange={e => setGreenCdn(e.target.checked)}
					/>
				</label>
				<label className='flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'>
					<span className='text-xs'>Weekly auto-audit</span>
					<input
						type='checkbox'
						checked={autoAudit}
						onChange={e => setAutoAudit(e.target.checked)}
					/>
				</label>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Default report timezone
					</span>
					<select className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'>
						<option>Europe/Amsterdam</option>
						<option>UTC</option>
						<option>America/New_York</option>
					</select>
				</label>
				<button
					type='submit'
					className='w-full rounded-lg py-2 font-medium text-xs [background:var(--surface)] hover:[background:color-mix(in_oklch,var(--olive)_12%,var(--surface))]'
				>
					Save settings
				</button>
			</form>
		</section>
	)
}
