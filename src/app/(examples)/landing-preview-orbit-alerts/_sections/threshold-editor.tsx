'use client'

import { useState } from 'react'

/** Future Payload mapping: thresholdEditor (block). */
const PRESETS = [
	{
		label: 'Strict (A grade)',
		emissions: '0.30',
		weight: '1.0 MB',
		budget: '60%'
	},
	{
		label: 'Standard (B grade)',
		emissions: '0.50',
		weight: '1.5 MB',
		budget: '80%'
	},
	{
		label: 'Relaxed (C grade)',
		emissions: '0.75',
		weight: '2.5 MB',
		budget: '95%'
	}
]

export function ThresholdEditor() {
	const [preset, setPreset] = useState(1)
	const [emissions, setEmissions] = useState(PRESETS[1].emissions)
	const [weightMb, setWeightMb] = useState(1.5)

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Threshold editor
			</h2>
			<div className='mb-4 flex flex-wrap gap-1'>
				{PRESETS.map((p, i) => (
					<button
						key={p.label}
						type='button'
						onClick={() => {
							setPreset(i)
							setEmissions(p.emissions)
							setWeightMb(Number.parseFloat(p.weight))
						}}
						className={`rounded-lg px-2.5 py-1 text-[10px] ${
							preset === i
								? 'text-[oklch(0.12_0.02_265)] [background:var(--orbit)]'
								: 'border border-[var(--line)] [color:var(--mute)]'
						}`}
					>
						{p.label}
					</button>
				))}
			</div>
			<div className='space-y-4'>
				<label className='block'>
					<div className='mb-1 flex justify-between text-[11px]'>
						<span className='[color:var(--mute)]'>
							Max emissions (g CO₂ / visit)
						</span>
						<span className='[color:var(--orbit)]'>{emissions}</span>
					</div>
					<input
						type='range'
						min='0.2'
						max='1'
						step='0.05'
						value={emissions}
						onChange={e => setEmissions(e.target.value)}
						className='w-full accent-[var(--orbit)]'
					/>
				</label>
				<label className='block'>
					<div className='mb-1 flex justify-between text-[11px]'>
						<span className='[color:var(--mute)]'>Max page weight</span>
						<span className='[color:var(--orbit)]'>{weightMb} MB</span>
					</div>
					<input
						type='range'
						min='0.5'
						max='4'
						step='0.1'
						value={weightMb}
						onChange={e => setWeightMb(Number.parseFloat(e.target.value))}
						className='w-full accent-[var(--orbit)]'
					/>
				</label>
			</div>
			<p className='mt-4 rounded-lg border border-[var(--line)] p-2.5 text-[11px] [background:var(--surface)] [color:var(--mute)]'>
				At current traffic, strict thresholds would trigger ~12 alerts/week on
				acme.com.
			</p>
		</section>
	)
}
