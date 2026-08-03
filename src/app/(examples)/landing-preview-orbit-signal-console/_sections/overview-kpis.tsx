import { Activity, Clock, Globe, Webhook } from 'lucide-react'

/** Future Payload mapping: overviewKpis (block). */
const KPIS = [
	{
		label: 'API requests',
		value: '2.4M',
		unit: '/ 30d',
		change: '+22.8%',
		up: true,
		icon: Activity,
		note: 'All endpoints'
	},
	{
		label: 'Webhooks delivered',
		value: '98.7',
		unit: '%',
		change: '+0.4%',
		up: true,
		icon: Webhook,
		note: 'Success rate'
	},
	{
		label: 'p99 latency',
		value: '142',
		unit: 'ms',
		change: '-18ms',
		up: false,
		icon: Clock,
		note: 'GET /v1/pages'
	},
	{
		label: 'Pages monitored',
		value: '1,284',
		unit: '',
		change: '+48 new',
		up: true,
		icon: Globe,
		note: 'acme.com'
	}
]

export function OverviewKpis() {
	return (
		<section aria-label='Key performance indicators'>
			<div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
				{KPIS.map(kpi => {
					const Icon = kpi.icon
					return (
						<div
							key={kpi.label}
							className='rounded border border-[var(--line)] p-4 [background:var(--panel)]'
						>
							<div className='mb-3 flex items-start justify-between gap-2'>
								<span className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.15em] [color:var(--mute)]'>
									{kpi.label}
								</span>
								<Icon
									className='h-4 w-4 shrink-0 [color:var(--violet)]'
									aria-hidden
								/>
							</div>
							<div className='flex items-baseline gap-1.5'>
								<span className='font-[family-name:var(--font-body)] font-medium text-2xl tabular-nums tracking-tight [color:var(--lime)]'>
									{kpi.value}
								</span>
								{kpi.unit ? (
									<span className='font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
										{kpi.unit}
									</span>
								) : null}
							</div>
							<div className='mt-2 flex items-center justify-between gap-2 font-[family-name:var(--font-body)] text-[10px]'>
								<span
									className={
										kpi.up ? '[color:var(--lime)]' : '[color:var(--violet)]'
									}
								>
									{kpi.change}
								</span>
								<span className='[color:var(--mute)]'>{kpi.note}</span>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
