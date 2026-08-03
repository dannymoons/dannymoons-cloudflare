'use client'

import { Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: siteSwitcher (block). */
const SITES = [
	{ domain: 'acme.com', co2: '0.35', active: true },
	{ domain: 'shop.acme.com', co2: '0.52', active: false },
	{ domain: 'docs.acme.io', co2: '0.28', active: false },
	{ domain: 'staging.acme.dev', co2: '0.61', active: false }
]

export function SiteSwitcher() {
	const [open, setOpen] = useState(false)
	const current = SITES.find(s => s.active) ?? SITES[0]

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Active site
			</h2>
			<div className='relative'>
				<button
					type='button'
					onClick={() => setOpen(v => !v)}
					className='flex w-full items-center justify-between gap-2 rounded-lg border border-[var(--line)] px-3 py-2.5 text-left hover:[background:var(--surface)]'
					aria-expanded={open}
					aria-haspopup='listbox'
				>
					<div>
						<span className='block font-medium'>{current.domain}</span>
						<span className='text-[11px] [color:var(--mute)]'>
							{current.co2} g CO₂ / visit
						</span>
					</div>
					<ChevronDown
						className={`h-4 w-4 shrink-0 transition-transform [color:var(--mute)] ${open ? 'rotate-180' : ''}`}
					/>
				</button>
				{open ? (
					<div className='absolute top-full right-0 left-0 z-10 mt-1 overflow-hidden rounded-lg border border-[var(--line)] shadow-lg [background:var(--surface)]'>
						{SITES.map(site => (
							<li key={site.domain}>
								<button
									type='button'
									className='flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-xs hover:[background:var(--panel)]'
									role='option'
									aria-selected={site.active}
									onClick={() => setOpen(false)}
								>
									<span>{site.domain}</span>
									<span className='flex items-center gap-2 [color:var(--mute)]'>
										{site.co2}g
										{site.active ? (
											<Check className='h-3.5 w-3.5 [color:var(--orbit)]' />
										) : null}
									</span>
								</button>
							</li>
						))}
					</div>
				) : null}
			</div>
		</section>
	)
}
