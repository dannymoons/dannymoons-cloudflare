import { Check } from 'lucide-react'

const tiers = [
	{
		name: 'Team',
		price: '$2,400',
		note: '/ mo',
		desc: 'For mid-market marketing orgs getting started with ESG reporting.',
		features: [
			'Up to 10 users',
			'3 data source connectors',
			'Standard KPI dashboard',
			'Quarterly PDF reports',
			'Email support'
		],
		featured: false
	},
	{
		name: 'Enterprise',
		price: '$8,500',
		note: '/ mo',
		desc: 'For global brands with multi-agency complexity and audit requirements.',
		features: [
			'Unlimited users',
			'All native connectors',
			'CSRD / ESRS export packs',
			'Agency vendor portals',
			'SSO & role-based access',
			'Dedicated CSM'
		],
		featured: true
	},
	{
		name: 'Platform',
		price: 'Custom',
		note: '',
		desc: 'For holding companies and platforms white-labeling ESG for portfolio brands.',
		features: [
			'Multi-entity hierarchy',
			'API & webhook access',
			'Custom emission factors',
			'White-label reporting',
			'On-premise deployment option',
			'24/7 priority support'
		],
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section
			id='pricing'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--slate)_3%,var(--ice))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='mx-auto me-reveal max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Pricing
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Plans that scale with your disclosure ambitions.
					</h2>
					<p className='mt-4 text-base [color:var(--mute)]'>
						Annual contracts save 15%. All plans include GHG Protocol
						methodology and onboarding support.
					</p>
				</div>

				<div className='mt-12 grid gap-5 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`me-reveal flex flex-col rounded-sm border p-6 sm:p-7 ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--blue)_40%,transparent)] shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--blue)_20%,transparent)] [background:var(--ice)]'
									: 'border-[var(--line)] [background:var(--ice)]'
							}`}
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{t.name}
							</h3>
							<p className='mt-2 text-sm [color:var(--mute)]'>{t.desc}</p>
							<p className='mt-6 font-[family-name:var(--font-display)] text-3xl [color:var(--ink)]'>
								{t.price}
								{t.note ? (
									<span className='text-base [color:var(--mute)]'>
										{t.note}
									</span>
								) : null}
							</p>
							<ul className='mt-6 flex-1 space-y-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex gap-2 text-sm [color:var(--mute)]'
									>
										<Check
											className='mt-0.5 h-4 w-4 shrink-0 [color:var(--blue)]'
											strokeWidth={2}
										/>
										{f}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-sm text-sm transition-opacity ${
									t.featured
										? 'text-[var(--ice)] [background:var(--blue)] hover:opacity-90'
										: 'border border-[var(--line)] hover:border-[var(--blue)] hover:[color:var(--blue)]'
								}`}
							>
								{t.price === 'Custom' ? 'Contact sales' : 'Start trial'}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
