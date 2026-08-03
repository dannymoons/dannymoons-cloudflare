'use client'

import { ExternalLink, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: sitesGrid (block). */
const SITES = [
	{
		id: '1',
		domain: 'acme.com',
		co2: '0.35',
		grade: 'B',
		pages: 248,
		status: 'healthy' as const
	},
	{
		id: '2',
		domain: 'shop.acme.com',
		co2: '0.52',
		grade: 'C',
		pages: 892,
		status: 'warn' as const
	},
	{
		id: '3',
		domain: 'docs.acme.io',
		co2: '0.28',
		grade: 'A',
		pages: 156,
		status: 'healthy' as const
	},
	{
		id: '4',
		domain: 'staging.acme.dev',
		co2: '0.61',
		grade: 'D',
		pages: 64,
		status: 'sync' as const
	}
]

const STATUS: Record<string, { label: string; color: string }> = {
	healthy: { label: 'Healthy', color: 'var(--positive)' },
	warn: { label: '2 alerts', color: 'var(--olive)' },
	sync: { label: 'Syncing', color: 'var(--mute)' }
}

export function SitesGrid() {
	const [selected, setSelected] = useState<string[]>([])

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					All sites
				</h2>
				<span className='text-[11px] [color:var(--mute)]'>
					{SITES.length} workspaces
				</span>
			</div>
			<div className='grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4'>
				{SITES.map(site => (
					<article
						key={site.id}
						className={`rounded-xl border p-4 transition-colors ${
							selected.includes(site.id)
								? 'border-[color-mix(in_oklch,var(--olive)_40%,var(--line))] [background:var(--surface)]'
								: 'border-[var(--line)] hover:[background:var(--surface)]'
						}`}
					>
						<div className='mb-3 flex items-start justify-between gap-2'>
							<label className='flex items-center gap-2'>
								<input
									type='checkbox'
									checked={selected.includes(site.id)}
									onChange={() =>
										setSelected(prev =>
											prev.includes(site.id)
												? prev.filter(x => x !== site.id)
												: [...prev, site.id]
										)
									}
									className='rounded border-[var(--line)]'
								/>
								<span className='font-medium text-xs'>{site.domain}</span>
							</label>
							<button
								type='button'
								className='[color:var(--mute)]'
								aria-label={`Options for ${site.domain}`}
							>
								<MoreHorizontal className='h-4 w-4' />
							</button>
						</div>
						<div className='mb-3 flex items-baseline gap-2'>
							<span className='font-[family-name:var(--font-display)] font-bold text-xl'>
								{site.co2}
							</span>
							<span className='text-[11px] [color:var(--mute)]'>
								g CO₂/visit
							</span>
							<span className='ml-auto rounded-md px-1.5 py-0.5 font-bold text-[10px] [background:color-mix(in_oklch,var(--olive)_15%,transparent)] [color:var(--olive)]'>
								{site.grade}
							</span>
						</div>
						<div className='flex items-center justify-between text-[11px] [color:var(--mute)]'>
							<span>{site.pages} pages</span>
							<span style={{ color: STATUS[site.status].color }}>
								{STATUS[site.status].label}
							</span>
						</div>
						<button
							type='button'
							className='mt-3 flex w-full items-center justify-center gap-1 rounded-lg border border-[var(--line)] py-1.5 text-[10px] hover:[background:var(--panel)]'
						>
							Open dashboard
							<ExternalLink className='h-3 w-3' />
						</button>
					</article>
				))}
			</div>
		</section>
	)
}
