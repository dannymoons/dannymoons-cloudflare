'use client'

import { Bookmark, Star } from 'lucide-react'
import { useState } from 'react'

/** Future Payload mapping: savedViews (block). */
const VIEWS = [
	{ id: '1', name: 'Executive summary', range: '30d', default: true },
	{ id: '2', name: 'Checkout deep-dive', range: '7d', default: false },
	{ id: '3', name: 'Mobile performance', range: '90d', default: false }
]

export function SavedViews() {
	const [active, setActive] = useState('1')

	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Saved views
			</h2>
			<ul className='space-y-1.5'>
				{VIEWS.map(v => (
					<li key={v.id}>
						<button
							type='button'
							onClick={() => setActive(v.id)}
							className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-xs ${
								active === v.id
									? '[background:var(--surface)]'
									: 'hover:[background:var(--surface)]'
							}`}
						>
							<Bookmark
								className={`h-3.5 w-3.5 ${active === v.id ? '[color:var(--olive)]' : '[color:var(--mute)]'}`}
							/>
							<span className='flex-1 font-medium'>{v.name}</span>
							{v.default ? (
								<Star
									className='h-3 w-3 [color:var(--positive)]'
									aria-label='Default view'
								/>
							) : null}
							<span className='text-[10px] [color:var(--mute)]'>{v.range}</span>
						</button>
					</li>
				))}
			</ul>
			<button
				type='button'
				className='mt-3 w-full rounded-lg border border-[var(--line)] border-dashed py-2 text-[11px] [color:var(--mute)] hover:[color:var(--olive)]'
			>
				+ Save current view
			</button>
		</section>
	)
}
