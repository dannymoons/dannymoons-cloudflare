import { Lightbulb, TrendingDown, Zap } from 'lucide-react'

/** Future Payload mapping: insightsPanel (block). */
const INSIGHTS = [
	{
		icon: TrendingDown,
		title: 'Checkout images drive 38% of page weight',
		impact: '−0.18 g CO₂/visit if WebP deployed',
		priority: 'high'
	},
	{
		icon: Zap,
		title: 'Mobile LCP correlates with +0.09 g emissions',
		impact: 'Lazy-load hero on /products',
		priority: 'medium'
	},
	{
		icon: Lightbulb,
		title: 'NL traffic uses greener CDN edge',
		impact: 'Route DE users to Frankfurt PoP',
		priority: 'medium'
	}
]

export function InsightsPanel() {
	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)] sm:p-5'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					AI insights
				</h2>
				<span className='text-[10px] [color:var(--olive)]'>
					3 recommendations
				</span>
			</div>
			<div className='grid gap-3 md:grid-cols-3'>
				{INSIGHTS.map(({ icon: Icon, title, impact, priority }) => (
					<article
						key={title}
						className='rounded-lg border border-[var(--line)] p-3 [background:var(--surface)]'
					>
						<div className='mb-2 flex items-center justify-between'>
							<Icon className='h-4 w-4 [color:var(--olive)]' aria-hidden />
							<span
								className={`rounded px-1.5 py-0.5 text-[9px] uppercase ${
									priority === 'high'
										? '[background:color-mix(in_oklch,var(--olive)_20%,transparent)] [color:var(--olive)]'
										: '[color:var(--mute)]'
								}`}
							>
								{priority}
							</span>
						</div>
						<h3 className='mb-1 font-medium text-xs leading-snug'>{title}</h3>
						<p className='text-[11px] [color:var(--positive)]'>{impact}</p>
					</article>
				))}
			</div>
		</section>
	)
}
