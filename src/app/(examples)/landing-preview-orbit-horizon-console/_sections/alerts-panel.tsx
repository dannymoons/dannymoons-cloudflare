import { AlertTriangle, Bell, Info, TrendingUp } from 'lucide-react'

/** Future Payload mapping: alertsPanel (block). */
const ALERTS = [
	{
		id: 'blog-heavy',
		level: 'danger' as const,
		title: '/blog/heavy-assets-post exceeded budget',
		detail: '0.72g vs 0.50g threshold — acme.com',
		time: '2h ago',
		icon: TrendingUp
	},
	{
		id: 'checkout-warn',
		level: 'warn' as const,
		title: '/checkout approaching amber threshold',
		detail: '0.61g vs 0.50g budget — shop.io',
		time: 'Yesterday',
		icon: AlertTriangle
	},
	{
		id: 'promo-warn',
		level: 'warn' as const,
		title: '/landing/promo-q4 above target',
		detail: '0.54g — shop.io campaign page',
		time: '3d ago',
		icon: Bell
	},
	{
		id: 'methodology',
		level: 'info' as const,
		title: 'Grid-intensity update applied',
		detail: 'EU-West coefficients revised — −3% estimates',
		time: '1d ago',
		icon: Info
	}
]

const LEVEL_STYLE = {
	warn: {
		color: 'var(--warn)',
		bg: 'color-mix(in oklch, var(--warn) 10%, var(--panel))'
	},
	danger: {
		color: 'var(--danger)',
		bg: 'color-mix(in oklch, var(--danger) 10%, var(--panel))'
	},
	info: {
		color: 'var(--sage)',
		bg: 'color-mix(in oklch, var(--sage) 10%, var(--panel))'
	}
} as const

export function AlertsPanel() {
	return (
		<section className='ohc-reveal border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Threshold alerts
				</h2>
				<span className='border-2 border-[var(--ink)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [background:var(--danger)] [color:var(--parchment)]'>
					2 active
				</span>
			</div>
			<ul className='space-y-2'>
				{ALERTS.map(alert => {
					const Icon = alert.icon
					const style = LEVEL_STYLE[alert.level]
					return (
						<li
							key={alert.id}
							className='flex gap-2.5 border-2 border-[var(--ink)] p-2.5'
							style={{ background: style.bg }}
						>
							<Icon
								className='mt-0.5 h-4 w-4 shrink-0'
								style={{ color: style.color }}
								aria-hidden
							/>
							<div className='min-w-0 flex-1'>
								<p className='font-medium text-xs leading-snug'>
									{alert.title}
								</p>
								<p className='font-[family-name:var(--font-mono)] text-[11px] [color:var(--mute)]'>
									{alert.detail}
								</p>
							</div>
							<span className='shrink-0 font-[family-name:var(--font-mono)] text-[10px] [color:var(--mute)]'>
								{alert.time}
							</span>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
