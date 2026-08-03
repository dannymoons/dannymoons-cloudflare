'use client'

import { useState } from 'react'

/** Future Payload mapping: teamSubscriptions (block). */
const MEMBERS = [
	{
		name: 'Danny K.',
		email: 'danny@acme.com',
		rules: 'All alerts',
		digest: true
	},
	{
		name: 'Sarah M.',
		email: 'sarah@acme.com',
		rules: 'Budget only',
		digest: true
	},
	{
		name: 'Jules L.',
		email: 'jules@acme.com',
		rules: 'Critical',
		digest: false
	},
	{
		name: 'Alex R.',
		email: 'alex@agency.io',
		rules: 'shop.acme.com',
		digest: false
	}
]

export function TeamSubscriptions() {
	const [subs, setSubs] = useState(MEMBERS)

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Team subscriptions
			</h2>
			<ul className='space-y-2'>
				{subs.map(m => (
					<li
						key={m.email}
						className='flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--line)] p-2.5 [background:var(--surface)]'
					>
						<div>
							<p className='font-medium text-xs'>{m.name}</p>
							<p className='text-[10px] [color:var(--mute)]'>
								{m.email} · {m.rules}
							</p>
						</div>
						<label className='flex items-center gap-2 text-[10px] [color:var(--mute)]'>
							Weekly digest
							<input
								type='checkbox'
								checked={m.digest}
								onChange={() =>
									setSubs(prev =>
										prev.map(x =>
											x.email === m.email ? { ...x, digest: !x.digest } : x
										)
									)
								}
							/>
						</label>
					</li>
				))}
			</ul>
			<button
				type='button'
				className='mt-3 w-full rounded-lg border border-[var(--line)] py-2 text-[11px] hover:[background:var(--surface)]'
			>
				Invite subscriber
			</button>
		</section>
	)
}
