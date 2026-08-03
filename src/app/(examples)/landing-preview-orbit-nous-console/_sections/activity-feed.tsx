/** Future Payload mapping: activityFeed (block). */
const EVENTS = [
	{
		action: 'Budget alert triggered',
		site: 'acme.com',
		time: '14:32',
		type: 'alert'
	},
	{
		action: 'Page grade improved to A',
		site: '/about',
		time: '11:08',
		type: 'success'
	},
	{
		action: 'Weekly report exported',
		site: 'acme.com',
		time: '09:15',
		type: 'export'
	},
	{
		action: 'New domain verified',
		site: 'shop.acme.com',
		time: 'Yesterday',
		type: 'site'
	},
	{
		action: 'Threshold rule updated',
		site: 'Checkout CO₂ cap',
		time: 'Yesterday',
		type: 'rule'
	},
	{
		action: 'Image lazy-load enabled',
		site: '/products',
		time: '2d ago',
		type: 'fix'
	}
]

const DOT: Record<string, string> = {
	alert: 'var(--danger)',
	success: 'var(--sage)',
	export: 'var(--olive)',
	site: 'var(--olive)',
	rule: 'var(--warn)',
	fix: 'var(--sage)'
}

export function ActivityFeed() {
	return (
		<section className='rounded-xl border border-[var(--line)] p-4 shadow-[0_1px_0_0_var(--line)] [background:var(--card)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Activity feed
			</h2>
			<ol className='relative space-y-0 border-[var(--line)] border-l pl-4'>
				{EVENTS.map(ev => (
					<li
						key={`${ev.time}-${ev.action}`}
						className='relative pb-4 last:pb-0'
					>
						<span
							className='absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full ring-2 ring-[var(--card)]'
							style={{ background: DOT[ev.type] }}
							aria-hidden
						/>
						<p className='font-medium text-xs'>{ev.action}</p>
						<p className='text-[11px] [color:var(--mute)]'>
							{ev.site} · {ev.time}
						</p>
					</li>
				))}
			</ol>
		</section>
	)
}
