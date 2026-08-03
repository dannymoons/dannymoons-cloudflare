import { ArrowUpRight, Scan, Zap } from 'lucide-react'
import Link from 'next/link'

/** Future Payload mapping: activityFeed (block). */
const EVENTS = [
	{
		id: 'scan-847',
		kind: 'Full site scan',
		title: '847 pages re-indexed',
		summary: 'acme.com crawl complete — 3 new URLs detected.',
		date: '2h ago',
		icon: Scan
	},
	{
		id: 'opt-blog',
		kind: 'Optimisation',
		title: '/blog image payload reduced',
		summary: 'WebP conversion — −18% weight, −0.06g CO₂/visit.',
		date: '6h ago',
		icon: Zap
	},
	{
		id: 'scan-shop',
		kind: 'Full site scan',
		title: 'shop.io weekly scan',
		summary: '412 pages — 2 alerts triggered on checkout flow.',
		date: 'Yesterday',
		icon: Scan
	},
	{
		id: 'opt-docs',
		kind: 'Optimisation',
		title: '/docs lazy-load applied',
		summary: 'Below-fold assets deferred — −0.04g CO₂/visit.',
		date: '2d ago',
		icon: Zap
	}
]

export function ActivityFeed() {
	return (
		<section className='ohc-reveal border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between gap-2'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Recent activity
				</h2>
				<Link
					href='/landing-preview-orbit-horizon#dashboard'
					className='font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [color:var(--olive)] hover:underline'
				>
					View all
				</Link>
			</div>
			<ul className='space-y-2'>
				{EVENTS.map(item => {
					const Icon = item.icon
					return (
						<li
							key={item.id}
							className='border-2 border-[var(--ink)] p-3 transition-colors hover:shadow-[2px_2px_0_var(--ink)]'
						>
							<div className='flex items-start justify-between gap-2'>
								<span className='inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [color:var(--olive)]'>
									<Icon className='h-3 w-3' aria-hidden />
									{item.kind}
								</span>
								<span className='shrink-0 font-[family-name:var(--font-mono)] text-[10px] [color:var(--mute)]'>
									{item.date}
								</span>
							</div>
							<p className='mt-1.5 font-[family-name:var(--font-display)] font-medium text-xs leading-snug'>
								{item.title}
							</p>
							<p className='mt-1 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed [color:var(--mute)]'>
								{item.summary}
							</p>
						</li>
					)
				})}
			</ul>
			<Link
				href='/landing-preview-orbit-horizon'
				className='mt-3 flex min-h-11 items-center justify-center gap-1.5 border-2 border-[var(--ink)] font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider transition-colors [color:var(--mute)] hover:shadow-[3px_3px_0_var(--ink)] hover:[background:var(--ink)] hover:[color:var(--parchment)]'
			>
				Back to marketing site
				<ArrowUpRight className='h-3.5 w-3.5' aria-hidden />
			</Link>
		</section>
	)
}
