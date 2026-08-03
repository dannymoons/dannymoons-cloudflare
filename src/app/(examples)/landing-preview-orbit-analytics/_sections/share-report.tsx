'use client'

import { Copy, Link2, Mail } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: shareReport (block). */
export function ShareReport() {
	const [copied, setCopied] = useState(false)
	const link = 'https://orbit.app/share/acme-analytics-jun2026'

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Share report
			</h2>
			<p className='mb-3 text-[11px] leading-relaxed [color:var(--mute)]'>
				Generate a read-only link for stakeholders. Expires in 30 days.
			</p>
			<div className='flex gap-1 rounded-lg border border-[var(--line)] p-1 [background:var(--surface)]'>
				<Link2
					className='ml-2 h-4 w-4 shrink-0 self-center [color:var(--mute)]'
					aria-hidden
				/>
				<input
					readOnly
					value={link}
					className='min-w-0 flex-1 bg-transparent py-2 text-[10px] outline-none'
					aria-label='Share link'
				/>
				<button
					type='button'
					onClick={() => {
						void navigator.clipboard?.writeText(link)
						setCopied(true)
						setTimeout(() => setCopied(false), 2000)
					}}
					className='flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[10px] text-[oklch(0.12_0.02_265)] [background:var(--orbit)]'
				>
					<Copy className='h-3 w-3' />
					{copied ? 'Copied' : 'Copy'}
				</button>
			</div>
			<button
				type='button'
				className='mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--line)] py-2 text-[11px] hover:[background:var(--surface)]'
			>
				<Mail className='h-3.5 w-3.5' />
				Email to team
			</button>
		</section>
	)
}
