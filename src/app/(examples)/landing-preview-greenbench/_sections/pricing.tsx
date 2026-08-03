const plans = [
	{
		name: 'Starter',
		price: '£149',
		period: '/mo',
		desc: 'For boutique studios getting started with carbon tracking.',
		features: [
			'Up to 10 client sites',
			'Monthly score updates',
			'Basic reports',
			'Email support'
		]
	},
	{
		name: 'Pro',
		price: '£399',
		period: '/mo',
		desc: 'For mid-size agencies with diverse client portfolios.',
		features: [
			'Up to 50 client sites',
			'Weekly score updates',
			'White-label reports',
			'Leaderboard access',
			'API access',
			'Priority support'
		],
		highlight: true
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		period: '',
		desc: 'For network agencies and holding companies.',
		features: [
			'Unlimited sites',
			'Multi-office roll-up',
			'Custom integrations',
			'Dedicated CSM',
			'SLA & audit support'
		]
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Pricing
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						Plans that scale with your portfolio
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{plans.map(p => (
						<article
							key={p.name}
							className={`gb-reveal flex flex-col rounded-xl border p-6 ${p.highlight ? 'border-[var(--green)] [background:color-mix(in_oklch,var(--green)_6%,var(--white))]' : 'border-[var(--line)]'}`}
						>
							<h3 className='font-[family-name:var(--font-display)] font-bold text-xl'>
								{p.name}
							</h3>
							<p className='mt-4'>
								<span className='font-[family-name:var(--font-display)] font-bold text-3xl'>
									{p.price}
								</span>
								<span className='text-sm [color:var(--mute)]'>{p.period}</span>
							</p>
							<p className='mt-3 text-sm [color:var(--mute)]'>{p.desc}</p>
							<ul className='mt-6 flex-1 space-y-2 text-sm'>
								{p.features.map(f => (
									<li key={f} className='flex items-center gap-2'>
										<span className='h-1.5 w-1.5 rounded-full [background:var(--green)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-lg font-medium text-sm transition-opacity hover:opacity-90 ${p.highlight ? '[background:var(--green)] [color:var(--white)]' : 'border border-[var(--line)]'}`}
							>
								{p.name === 'Enterprise' ? 'Contact sales' : 'Start trial'}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
