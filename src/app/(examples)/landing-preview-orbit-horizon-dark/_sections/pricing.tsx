import { ArrowRight, Check } from 'lucide-react'

const tiers = [
	{
		name: 'Starter',
		price: '€0',
		note: '14-day trial',
		pages: 'Up to 50 pages',
		features: ['1 website', 'Daily measurements', 'Email alerts', 'CSV export'],
		featured: false
	},
	{
		name: 'Team',
		price: '€79',
		note: '/ mo',
		pages: 'Up to 500 pages',
		features: [
			'5 websites',
			'Hourly measurements',
			'Slack + webhook alerts',
			'API access',
			'Team roles'
		],
		featured: true
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		note: 'annual contract',
		pages: 'Unlimited pages',
		features: [
			'Unlimited sites',
			'Real-time RUM',
			'SSO & audit logs',
			'Dedicated success manager',
			'Custom integrations'
		],
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section
			id='pricing'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_10%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
						Pricing
					</span>
					<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
						Scale with your footprint
					</h2>
					<p className='ohd-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Page limits that grow with your portfolio — no surprise overages on
						tracked URLs.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`ohd-reveal flex h-full flex-col border-2 p-6 sm:p-7 ${
								t.featured
									? 'border-[var(--stroke-strong)] [background:var(--panel)]'
									: 'border-[var(--stroke)] [background:var(--panel)]'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-body)] font-semibold text-lg [color:var(--ink)]'>
									{t.name}
								</h3>
								{t.featured ? (
									<span className='border border-[var(--stroke)] px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest [color:var(--ink)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight [color:var(--ink)]'>
									{t.price}
								</span>
								<span className='font-[family-name:var(--font-mono)] text-xs tabular-nums [color:var(--mute)]'>
									{t.note}
								</span>
							</div>
							<p className='mt-2 font-[family-name:var(--font-body)] text-sm [color:var(--olive)]'>
								{t.pages}
							</p>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 text-sm [color:var(--mute)]'
									>
										<Check
											className={`h-4 w-4 shrink-0 ${t.featured ? '[color:var(--clay)]' : '[color:var(--olive)]'}`}
										/>
										{f}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className={`group mt-7 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 border-2 border-[var(--stroke)] px-5 font-[family-name:var(--font-body)] font-medium text-sm ${
									t.featured
										? '[background:color-mix(in_oklch,var(--olive)_24%,var(--surface))] [color:var(--ink)]'
										: '[color:var(--ink)] hover:border-[var(--stroke-strong)] hover:[background:color-mix(in_oklch,var(--olive)_14%,var(--surface))] hover:[color:var(--ink)]'
								}`}
							>
								Get started
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
