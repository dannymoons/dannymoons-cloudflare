'use client'

import { useState } from 'react'

/** Future Payload mapping: snoozeSettings (block). */
export function SnoozeSettings() {
	const [quietStart, setQuietStart] = useState('22:00')
	const [quietEnd, setQuietEnd] = useState('07:00')
	const [weekends, setWeekends] = useState(true)
	const [dedupe, setDedupe] = useState('30')

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Snooze & quiet hours
			</h2>
			<div className='space-y-4'>
				<div className='grid grid-cols-2 gap-3'>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Quiet from
						</span>
						<input
							type='time'
							value={quietStart}
							onChange={e => setQuietStart(e.target.value)}
							className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-2 text-xs'
						/>
					</label>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Quiet until
						</span>
						<input
							type='time'
							value={quietEnd}
							onChange={e => setQuietEnd(e.target.value)}
							className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-2 text-xs'
						/>
					</label>
				</div>
				<label className='flex items-center justify-between rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'>
					<span className='text-xs'>Mute non-critical alerts on weekends</span>
					<input
						type='checkbox'
						checked={weekends}
						onChange={e => setWeekends(e.target.checked)}
					/>
				</label>
				<label className='block'>
					<span className='mb-1 block text-[11px] [color:var(--mute)]'>
						Dedupe window (minutes)
					</span>
					<select
						value={dedupe}
						onChange={e => setDedupe(e.target.value)}
						className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
					>
						<option value='15'>15</option>
						<option value='30'>30</option>
						<option value='60'>60</option>
					</select>
				</label>
			</div>
		</section>
	)
}
