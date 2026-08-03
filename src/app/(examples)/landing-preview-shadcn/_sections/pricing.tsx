import { Check } from 'lucide-react'

const tiers = [
	{
		name: 'Free',
		price: '$0',
		per: '/ forever',
		desc: 'For small teams getting started.',
		features: [
			'Up to 10 members',
			'Unlimited issues',
			'2 projects',
			'Community support'
		],
		featured: false,
		cta: 'Get started'
	},
	{
		name: 'Team',
		price: '$8',
		per: '/ user / mo',
		desc: 'For growing product teams.',
		features: [
			'Everything in Free',
			'Unlimited projects',
			'AI triage',
			'Insights & SLA',
			'Priority support'
		],
		featured: true,
		cta: 'Start free trial'
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		per: '',
		desc: 'For organizations at scale.',
		features: ['SAML / SCIM', 'Audit logs', 'Dedicated CSM', 'Custom SLA'],
		featured: false,
		cta: 'Contact sales'
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='border-border border-t bg-muted/30'>
			<div className='mx-auto max-w-6xl px-gutter py-section'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='font-semibold text-3xl tracking-tight sm:text-4xl'>
						Simple, transparent pricing
					</h2>
					<p className='mt-4 text-muted-foreground leading-relaxed'>
						Start free. Upgrade when your team grows.
					</p>
				</div>
				<div className='mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<div
							key={t.name}
							className={`flex flex-col rounded-xl border bg-card p-7 ${
								t.featured
									? 'border-primary shadow-lg ring-1 ring-primary/20'
									: 'border-border'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold text-lg'>{t.name}</h3>
								{t.featured ? (
									<span className='rounded-full bg-primary px-2.5 py-0.5 font-medium text-primary-foreground text-xs'>
										Popular
									</span>
								) : null}
							</div>
							<p className='mt-2 text-muted-foreground text-sm'>{t.desc}</p>
							<div className='mt-5 flex items-baseline gap-1'>
								<span className='font-semibold text-4xl tracking-tight'>
									{t.price}
								</span>
								<span className='text-muted-foreground text-sm'>{t.per}</span>
							</div>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li key={f} className='flex items-center gap-2.5 text-sm'>
										<Check className='h-4 w-4 shrink-0 text-primary' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#cta'
								className={`mt-7 inline-flex items-center justify-center rounded-md px-5 py-2.5 font-medium text-sm transition-colors ${
									t.featured
										? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary-dark'
										: 'border border-border bg-background hover:bg-muted'
								}`}
							>
								{t.cta}
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
