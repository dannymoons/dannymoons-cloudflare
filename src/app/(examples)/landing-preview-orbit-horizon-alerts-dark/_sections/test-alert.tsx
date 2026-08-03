'use client'

import { useState } from 'react'

/** Future Payload mapping: testAlert (block). */
export function TestAlert() {
	const [channel, setChannel] = useState('slack')
	const [sent, setSent] = useState(false)

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Test alert
			</h2>
			<p className='mb-4 text-[11px] leading-relaxed [color:var(--mute)]'>
				Send a sample notification to verify channel delivery and formatting.
			</p>
			<label className='mb-3 block'>
				<span className='mb-1 block text-[11px] [color:var(--mute)]'>
					Channel
				</span>
				<select
					value={channel}
					onChange={e => setChannel(e.target.value)}
					className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'
				>
					<option value='slack'>Slack</option>
					<option value='email'>Email</option>
					<option value='webhook'>Webhook</option>
				</select>
			</label>
			<div className='mb-4'>
				<p className='mb-1 text-[11px] [color:var(--mute)]'>Severity</p>
				<div className='flex gap-1'>
					{(['info', 'warn', 'danger'] as const).map(s => (
						<button
							key={s}
							type='button'
							className='flex-1 rounded-lg border border-[var(--line)] py-1.5 text-[10px] capitalize hover:[background:var(--surface)]'
						>
							{s}
						</button>
					))}
				</div>
			</div>
			<button
				type='button'
				onClick={() => {
					setSent(true)
					setTimeout(() => setSent(false), 3000)
				}}
				className='w-full rounded-lg py-2 font-medium text-[oklch(0.12_0.02_265)] text-xs [background:var(--olive)]'
			>
				{sent ? 'Test sent ✓' : 'Send test alert'}
			</button>
		</section>
	)
}
