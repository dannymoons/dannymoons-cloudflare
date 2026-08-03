import { Globe, Leaf, Target, TrendingDown } from 'lucide-react'

/** Future Payload mapping: overviewKpis (block). */
const KPIS = [
	{
		label: 'Avg g CO₂ / visit',
		value: '0.35',
		unit: 'g',
		change: '−40% YoY',
		tone: 'positive' as const,
		icon: Leaf,
		note: 'Site-wide average'
	},
	{
		label: 'Pages tracked',
		value: '847',
		unit: '',
		change: '+12 this week',
		tone: 'neutral' as const,
		icon: TrendingDown,
		note: 'Across acme.com'
	},
	{
		label: 'Sites monitored',
		value: '3',
		unit: '',
		change: 'acme · shop · docs',
		tone: 'neutral' as const,
		icon: Globe,
		note: 'Multi-site plan'
	},
	{
		label: 'Budget target',
		value: '88%',
		unit: '',
		change: '0.40g ceiling',
		tone: 'on-track' as const,
		icon: Target,
		note: '12% margin left'
	}
]

const TONE_COLOR = {
	positive: 'var(--positive)',
	neutral: 'var(--mute)',
	'on-track': 'var(--olive)'
} as const

export function OverviewKpis() {
	return (
		<section aria-label='Key performance indicators' className='ohc-reveal'>
			<div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
				{KPIS.map(kpi => {
					const Icon = kpi.icon
					return (
						<div
							key={kpi.label}
							className='border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'
						>
							<div className='mb-3 flex items-start justify-between gap-2'>
								<span className='font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
									{kpi.label}
								</span>
								<Icon
									className='h-4 w-4 shrink-0 [color:var(--olive)]'
									aria-hidden
								/>
							</div>
							<div className='flex items-baseline gap-1.5'>
								<span className='font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
									{kpi.value}
								</span>
								{kpi.unit ? (
									<span className='font-[family-name:var(--font-mono)] text-xs [color:var(--mute)]'>
										{kpi.unit}
									</span>
								) : null}
							</div>
							<div className='mt-2 flex items-center justify-between gap-2 font-[family-name:var(--font-mono)] text-[11px]'>
								<span style={{ color: TONE_COLOR[kpi.tone] }}>
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
