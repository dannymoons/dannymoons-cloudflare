'use client'

import { useState } from 'react'

/** Future Payload mapping: rulesList (block). */
const RULES = [
	{
		id: '1',
		name: 'Checkout CO₂ cap',
		metric: 'Page emissions',
		threshold: '> 0.75 g',
		active: true,
		triggered: 3
	},
	{
		id: '2',
		name: 'Monthly budget 80%',
		metric: 'Site budget',
		threshold: '> 80%',
		active: true,
		triggered: 1
	},
	{
		id: '3',
		name: 'Page weight spike',
		metric: 'Transfer size',
		threshold: '> 3 MB',
		active: true,
		triggered: 0
	},
	{
		id: '4',
		name: 'Grade drop alert',
		metric: 'Carbon grade',
		threshold: 'Below B',
		active: false,
		triggered: 0
	},
	{
		id: '5',
		name: 'Weekly digest',
		metric: 'Report',
		threshold: 'Every Mon 09:00',
		active: true,
		triggered: 0
	}
]

export function RulesList() {
	const [rules, setRules] = useState(RULES)

	return (
		<section className='overflow-hidden border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Alert rules
				</h2>
				<span className='text-[11px] [color:var(--mute)]'>
					{rules.filter(r => r.active).length} active ·{' '}
					{rules.reduce((a, r) => a + r.triggered, 0)} fired this week
				</span>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[600px] text-left text-xs'>
					<thead>
						<tr className='border-[var(--line)] border-b [color:var(--mute)]'>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Rule</th>
							<th className='px-3 py-2.5 font-medium'>Metric</th>
							<th className='px-3 py-2.5 font-medium'>Threshold</th>
							<th className='px-3 py-2.5 font-medium'>Triggered</th>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Active</th>
						</tr>
					</thead>
					<tbody>
						{rules.map(rule => (
							<tr
								key={rule.id}
								className='border-[var(--line)] border-b last:border-0 hover:[background:var(--surface)]'
							>
								<td className='px-4 py-3 font-medium sm:px-5'>{rule.name}</td>
								<td className='px-3 py-3 [color:var(--mute)]'>{rule.metric}</td>
								<td className='px-3 py-3'>{rule.threshold}</td>
								<td className='px-3 py-3'>
									{rule.triggered > 0 ? (
										<span className='rounded-full px-2 py-0.5 [background:color-mix(in_oklch,var(--danger)_20%,transparent)] [color:var(--danger)]'>
											{rule.triggered}
										</span>
									) : (
										<span className='[color:var(--mute)]'>—</span>
									)}
								</td>
								<td className='px-4 py-3 sm:px-5'>
									<button
										type='button'
										role='switch'
										aria-checked={rule.active}
										onClick={() =>
											setRules(prev =>
												prev.map(r =>
													r.id === rule.id ? { ...r, active: !r.active } : r
												)
											)
										}
										className={`relative h-5 w-9 rounded-full transition-colors ${
											rule.active
												? '[background:var(--olive)]'
												: '[background:var(--surface)]'
										}`}
									>
										<span
											className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
												rule.active ? 'left-4' : 'left-0.5'
											}`}
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
