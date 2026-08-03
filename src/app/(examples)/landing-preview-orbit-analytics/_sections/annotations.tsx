'use client'

import { useState } from 'react'

/** Future Payload mapping: annotations (block). */
const INITIAL = [
	{
		id: '1',
		date: 'Jun 4',
		text: 'Deployed WebP on homepage — expect −8% weight',
		author: 'Danny'
	},
	{
		id: '2',
		date: 'May 28',
		text: 'Black Friday campaign spike noted',
		author: 'Sarah'
	}
]

export function Annotations() {
	const [notes, setNotes] = useState(INITIAL)
	const [draft, setDraft] = useState('')

	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Annotations
			</h2>
			<ul className='mb-3 max-h-36 space-y-2 overflow-y-auto'>
				{notes.map(n => (
					<li
						key={n.id}
						className='rounded-lg border border-[var(--line)] p-2.5 text-[11px] [background:var(--surface)]'
					>
						<div className='mb-1 flex justify-between [color:var(--mute)]'>
							<span>{n.date}</span>
							<span>{n.author}</span>
						</div>
						<p>{n.text}</p>
					</li>
				))}
			</ul>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!draft.trim()) return
					setNotes(prev => [
						{
							id: String(Date.now()),
							date: 'Today',
							text: draft.trim(),
							author: 'You'
						},
						...prev
					])
					setDraft('')
				}}
			>
				<textarea
					value={draft}
					onChange={e => setDraft(e.target.value)}
					placeholder='Add note to chart timeline…'
					rows={2}
					className='mb-2 w-full resize-none rounded-lg border border-[var(--line)] bg-transparent p-2 text-[11px] outline-none focus:border-[color-mix(in_oklch,var(--orbit)_40%,var(--line))]'
				/>
				<button
					type='submit'
					className='w-full rounded-lg py-1.5 font-medium text-[11px] [background:var(--surface)] hover:[background:color-mix(in_oklch,var(--orbit)_15%,var(--surface))]'
				>
					Add annotation
				</button>
			</form>
		</section>
	)
}
