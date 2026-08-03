'use client'

import { useState } from 'react'

/** Future Payload mapping: addSite (block). */
export function AddSite() {
	const [domain, setDomain] = useState('')
	const [step, setStep] = useState<'form' | 'verify'>('form')

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Add site
			</h2>
			{step === 'form' ? (
				<form
					onSubmit={e => {
						e.preventDefault()
						if (domain.trim()) setStep('verify')
					}}
					className='space-y-3'
				>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Domain
						</span>
						<input
							type='text'
							value={domain}
							onChange={e => setDomain(e.target.value)}
							placeholder='example.com'
							className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs outline-none focus:border-[var(--stroke-strong)] focus:shadow-[3px_3px_0_var(--shadow)]'
						/>
					</label>
					<label className='block'>
						<span className='mb-1 block text-[11px] [color:var(--mute)]'>
							Environment
						</span>
						<select className='h-9 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 text-xs'>
							<option>Production</option>
							<option>Staging</option>
							<option>Preview</option>
						</select>
					</label>
					<button
						type='submit'
						className='w-full rounded-lg py-2 font-medium text-[oklch(0.12_0.02_265)] text-xs [background:var(--olive)]'
					>
						Continue
					</button>
				</form>
			) : (
				<div className='space-y-3'>
					<p className='text-xs'>
						Add this DNS TXT record to verify <strong>{domain}</strong>:
					</p>
					<code className='block overflow-x-auto rounded-lg border border-[var(--line)] p-3 text-[10px] [background:var(--surface)] [color:var(--positive)]'>
						orbit-verify=acme-8f3k2m9x
					</code>
					<div className='flex gap-2'>
						<button
							type='button'
							onClick={() => setStep('form')}
							className='flex-1 rounded-lg border border-[var(--line)] py-2 text-[11px]'
						>
							Back
						</button>
						<button
							type='button'
							className='flex-1 rounded-lg py-2 font-medium text-[11px] text-[oklch(0.12_0.02_165)] [background:var(--positive)]'
						>
							Verify DNS
						</button>
					</div>
				</div>
			)}
		</section>
	)
}
