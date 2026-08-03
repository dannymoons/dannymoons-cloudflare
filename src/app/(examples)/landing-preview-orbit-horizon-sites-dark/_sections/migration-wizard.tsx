'use client'

import { useState } from 'react'

/** Future Payload mapping: migrationWizard (block). */
const STEPS = ['Source', 'Map fields', 'Review', 'Import']

export function MigrationWizard() {
	const [step, setStep] = useState(0)

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Import from competitor
			</h2>
			<ol className='mb-5 flex gap-1'>
				{STEPS.map((s, i) => (
					<li
						key={s}
						className={`flex-1 rounded-md py-1.5 text-center text-[10px] ${
							i <= step
								? 'text-[oklch(0.12_0.02_265)] [background:var(--olive)]'
								: '[background:var(--surface)] [color:var(--mute)]'
						}`}
					>
						{s}
					</li>
				))}
			</ol>
			{step === 0 ? (
				<div className='space-y-3'>
					<p className='text-[11px] [color:var(--mute)]'>
						Export file (CSV/JSON)
					</p>
					<div className='rounded-lg border border-[var(--line)] border-dashed p-6 text-center text-[11px] [color:var(--mute)]'>
						Drop Website Carbon export or click to browse
					</div>
				</div>
			) : step === 1 ? (
				<ul className='space-y-2 text-xs'>
					<li className='flex justify-between rounded-lg border border-[var(--line)] p-2 [background:var(--surface)]'>
						<span>url → page path</span>
						<span className='[color:var(--positive)]'>Mapped</span>
					</li>
					<li className='flex justify-between rounded-lg border border-[var(--line)] p-2 [background:var(--surface)]'>
						<span>co2_per_visit → emissions</span>
						<span className='[color:var(--positive)]'>Mapped</span>
					</li>
				</ul>
			) : step === 2 ? (
				<p className='text-xs [color:var(--mute)]'>
					Ready to import 1,842 page records across 3 sites. Historical data
					from Jan 2024.
				</p>
			) : (
				<p className='text-xs [color:var(--positive)]'>
					Import complete — 1,842 pages synced.
				</p>
			)}
			<div className='mt-4 flex gap-2'>
				{step > 0 ? (
					<button
						type='button'
						onClick={() => setStep(s => s - 1)}
						className='flex-1 rounded-lg border border-[var(--line)] py-2 text-[11px]'
					>
						Back
					</button>
				) : null}
				<button
					type='button'
					onClick={() => setStep(s => Math.min(s + 1, STEPS.length - 1))}
					className='flex-1 rounded-lg py-2 font-medium text-[11px] text-[oklch(0.12_0.02_265)] [background:var(--olive)]'
				>
					{step === STEPS.length - 1 ? 'Done' : 'Next'}
				</button>
			</div>
		</section>
	)
}
