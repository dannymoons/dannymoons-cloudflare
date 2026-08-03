/** Future Payload mapping: escalation (block). */
const LEVELS = [
	{
		level: 1,
		delay: 'Immediate',
		channel: 'Slack #sustainability',
		rule: 'All warnings'
	},
	{
		level: 2,
		delay: '+15 min unresolved',
		channel: 'Email team@acme.com',
		rule: 'Budget & checkout'
	},
	{
		level: 3,
		delay: '+1 hr unresolved',
		channel: 'SMS on-call',
		rule: 'Critical only'
	}
]

export function Escalation() {
	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<h2 className='mb-4 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Escalation policy
			</h2>
			<ol className='space-y-3'>
				{LEVELS.map(l => (
					<li
						key={l.level}
						className='relative rounded-lg border border-[var(--line)] p-3 pl-10 [background:var(--surface)]'
					>
						<span className='absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full font-[family-name:var(--font-display)] font-bold text-[10px] text-[oklch(0.12_0.02_265)] [background:var(--olive)]'>
							{l.level}
						</span>
						<p className='font-medium text-xs'>{l.delay}</p>
						<p className='text-[11px] [color:var(--mute)]'>
							{l.channel} · {l.rule}
						</p>
					</li>
				))}
			</ol>
			<button
				type='button'
				className='mt-3 w-full rounded-lg border border-[var(--line)] border-dashed py-2 text-[11px] [color:var(--mute)] hover:[color:var(--olive)]'
			>
				+ Add escalation step
			</button>
		</section>
	)
}
