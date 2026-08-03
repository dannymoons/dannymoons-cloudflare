import { ArrowRight, Check } from 'lucide-react'

/** Future Payload mapping: pricingTiers (API plans). */
const tiers = [
	{
		name: 'Free',
		price: '€0',
		note: 'forever',
		requests: '1,000 req / mo',
		features: ['1 site', 'Daily scans', 'REST API access', 'Community support'],
		featured: false
	},
	{
		name: 'Pro',
		price: '€29',
		note: '/ mo',
		requests: '50,000 req / mo',
		features: [
			'10 sites',
			'Hourly scans',
			'Webhooks + SSE events',
			'Carbon budgets',
			'Email alerts'
		],
		featured: true
	},
	{
		name: 'Platform',
		price: '€149',
		note: '/ mo',
		requests: 'Unlimited requests',
		features: [
			'Unlimited sites',
			'Real-time RUM',
			'Slack + PagerDuty',
			'SSO + team seats',
			'SLA 99.9%',
			'Dedicated support'
		],
		featured: false
	}
] as const

/** Future Payload mapping: pricingTiers (API plans). */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='osg-reveal mb-3 block font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Pricing
					</span>
					<h2 className='osg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						API tiers
					</h2>
					<p className='osg-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Start free, scale with request volume. All tiers include REST API
						access and CLI — no seat tax on developers.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`osg-reveal flex h-full flex-col rounded border p-6 sm:p-7 ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--lime)_40%,transparent)] [background:var(--panel)]'
									: 'border-[var(--line)] [background:color-mix(in_oklch,var(--panel)_50%,var(--void))]'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg'>
									{t.name}
								</h3>
								{t.featured ? (
									<span className='rounded border border-[color-mix(in_oklch,var(--lime)_35%,transparent)] px-2.5 py-0.5 font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-widest [color:var(--lime)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-[family-name:var(--font-display)] font-semibold text-3xl tabular-nums tracking-tight'>
									{t.price}
								</span>
								<span className='font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
									{t.note}
								</span>
							</div>
							<p className='mt-2 font-[family-name:var(--font-body)] font-medium text-sm [color:var(--violet)]'>
								{t.requests}
							</p>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 font-[family-name:var(--font-body)] text-sm [color:var(--mute)]'
									>
										<Check className='h-4 w-4 shrink-0 [color:var(--lime)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#docs'
								className={`group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded px-5 font-medium text-sm transition-opacity ${
									t.featured
										? '[background:var(--lime)] [color:var(--void)] hover:opacity-90'
										: 'border border-[var(--line)] hover:border-[color-mix(in_oklch,var(--lime)_35%,var(--line))]'
								}`}
							>
								{t.name === 'Free' ? 'Start free' : 'Get started'}
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
