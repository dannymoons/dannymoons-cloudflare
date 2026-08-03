import { Bell, MessageSquare, Webhook } from 'lucide-react'

/** Future Payload mapping: alertChannels (webhook, Slack, PagerDuty). */
const channels = [
	{
		id: 'webhook',
		name: 'Webhook',
		desc: 'Signed POST to any HTTPS endpoint. Filter by event type and carbon threshold.',
		icon: Webhook,
		color: 'var(--lime)',
		status: 'Active · 2 endpoints'
	},
	{
		id: 'slack',
		name: 'Slack',
		desc: 'Rich blocks with page path, CO₂ reading, and budget status. #carbon-alerts channel.',
		icon: MessageSquare,
		color: 'var(--violet)',
		status: 'Connected · #carbon-alerts'
	},
	{
		id: 'pagerduty',
		name: 'PagerDuty',
		desc: 'Escalate budget breaches and API downtime to on-call. Severity mapping included.',
		icon: Bell,
		color: 'oklch(0.72 0.18 45)',
		status: 'Configured · P2 default'
	}
] as const

/** Future Payload mapping: alertChannels (webhook, Slack, PagerDuty). */
export function Alerts() {
	return (
		<section
			id='alerts'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--panel)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-10'>
					<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Alerts
					</span>
					<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Alert channels
					</h2>
					<p className='osg-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
						Route carbon budget breaches, asset spikes, and scan completions to
						your existing incident stack — no custom integration required.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4'>
					{channels.map(ch => (
						<article
							key={ch.id}
							className='osg-reveal flex flex-col gap-4 rounded border border-[var(--line)] p-5 [background:var(--void)] sm:flex-row sm:items-center sm:justify-between sm:p-6'
						>
							<div className='flex items-start gap-4'>
								<span
									className='grid h-11 w-11 shrink-0 place-items-center rounded border'
									style={{
										color: ch.color,
										borderColor: `color-mix(in oklch, ${ch.color} 35%, transparent)`,
										background: `color-mix(in oklch, ${ch.color} 8%, var(--void))`
									}}
								>
									<ch.icon className='h-5 w-5' />
								</span>
								<div>
									<h3 className='font-[family-name:var(--font-display)] font-semibold text-base'>
										{ch.name}
									</h3>
									<p className='mt-1 text-sm leading-relaxed [color:var(--mute)]'>
										{ch.desc}
									</p>
								</div>
							</div>
							<span className='shrink-0 rounded border border-[var(--line)] px-3 py-1.5 font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider [color:var(--lime)] sm:ml-4'>
								{ch.status}
							</span>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
