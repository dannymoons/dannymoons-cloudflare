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
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--surface)_20%,transparent)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='ob-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--orbit)]'>
						Pricing
					</span>
					<h2 className='ob-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Scale with your footprint
					</h2>
					<p className='ob-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Page limits that grow with your portfolio — no surprise overages on
						tracked URLs.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`ob-reveal flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm sm:p-7 ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--orbit)_45%,transparent)] shadow-[0_0_48px_-14px_var(--orbit)] [background:color-mix(in_oklch,var(--panel)_90%,transparent)]'
									: 'border-[color-mix(in_oklch,var(--orbit)_10%,var(--line))] [background:color-mix(in_oklch,var(--panel)_50%,transparent)]'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg'>
									{t.name}
								</h3>
								{t.featured ? (
									<span className='rounded-full border border-[color-mix(in_oklch,var(--orbit)_40%,transparent)] px-2.5 py-0.5 text-[10px] uppercase tracking-widest [color:var(--orbit)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-[family-name:var(--font-display)] font-bold text-3xl tracking-tight'>
									{t.price}
								</span>
								<span className='text-xs [color:var(--mute)]'>{t.note}</span>
							</div>
							<p className='mt-2 text-sm [color:var(--mint)]'>{t.pages}</p>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 text-sm [color:var(--mute)]'
									>
										<Check className='h-4 w-4 shrink-0 [color:var(--orbit)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className={`group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 font-[family-name:var(--font-display)] text-sm transition-all duration-200 ${
									t.featured
										? 'shadow-[0_0_28px_-10px_var(--orbit)] [background:linear-gradient(120deg,var(--orbit),var(--mint))] [color:var(--void)] hover:shadow-[0_0_36px_-8px_var(--orbit)]'
										: 'border border-[color-mix(in_oklch,var(--orbit)_25%,var(--line))] hover:border-[color-mix(in_oklch,var(--orbit)_40%,transparent)]'
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
