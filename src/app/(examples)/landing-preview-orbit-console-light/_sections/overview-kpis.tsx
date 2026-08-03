import { ArrowDown, ArrowUp, Leaf, Zap } from 'lucide-react'

/** Future Payload mapping: overviewKpis (block). */
const KPIS = [
	{
		label: 'Total emissions',
		value: '142.8',
		unit: 'kg CO₂',
		change: '-12.4%',
		up: false,
		icon: Leaf,
		note: 'Last 30 days'
	},
	{
		label: 'Avg per page view',
		value: '0.35',
		unit: 'g CO₂',
		change: '-8.2%',
		up: false,
		icon: Zap,
		note: 'Site average'
	},
	{
		label: 'Page views tracked',
		value: '408K',
		unit: '',
		change: '+18.1%',
		up: true,
		icon: ArrowUp,
		note: 'vs prior period'
	},
	{
		label: 'Budget remaining',
		value: '68%',
		unit: '',
		change: 'On track',
		up: null,
		icon: ArrowDown,
		note: '200 kg monthly cap'
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
							className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'
						>
							<div className='mb-3 flex items-start justify-between gap-2'>
								<span className='text-[11px] uppercase tracking-wider [color:var(--mute)]'>
									{kpi.label}
								</span>
								<Icon
									className='h-4 w-4 shrink-0 [color:var(--orbit)]'
									aria-hidden
								/>
							</div>
							<div className='flex items-baseline gap-1.5'>
								<span className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
									{kpi.value}
								</span>
								{kpi.unit ? (
									<span className='text-xs [color:var(--mute)]'>
										{kpi.unit}
									</span>
								) : null}
							</div>
							<div className='mt-2 flex items-center justify-between gap-2 text-[11px]'>
								<span
									className={
										kpi.up === true
											? '[color:var(--mint)]'
											: kpi.up === false
												? '[color:var(--orbit)]'
												: '[color:var(--mute)]'
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
