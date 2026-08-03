const tiers = [
	{
		name: 'Free',
		price: '€0',
		period: 'forever',
		features: [
			'Unlimited E2E messages',
			'Voice & video (1:1)',
			'5 GB sealed storage',
			'Community relay'
		]
	},
	{
		name: 'Plus',
		price: '€4',
		period: '/ month',
		features: [
			'Onion routing',
			'50 GB storage',
			'Custom relay region',
			'Priority support'
		],
		highlight: true
	},
	{
		name: 'Team',
		price: '€12',
		period: '/ user / mo',
		features: [
			'Admin console (metadata-free)',
			'SSO via safety numbers',
			'Audit log export',
			'SLA 99.9%'
		]
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section
			id='pricing'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--panel)_30%,var(--void))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='cf-reveal mb-10 text-center'>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Simple pricing, no data tax
					</h2>
					<p className='mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						We charge for infrastructure — not your attention. Free tier is
						fully functional, not a trial.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`cf-reveal rounded border p-6 [background:var(--panel)] ${
								t.highlight
									? 'border-[color-mix(in_oklch,var(--green)_50%,var(--line))]'
									: 'border-[var(--line)]'
							}`}
						>
							<h3 className='font-[family-name:var(--font-display)] text-sm uppercase tracking-widest [color:var(--green)]'>
								{t.name}
							</h3>
							<p className='mt-4 font-[family-name:var(--font-display)] text-3xl [color:var(--text)]'>
								{t.price}
								<span className='text-sm [color:var(--mute)]'>{t.period}</span>
							</p>
							<ul className='mt-6 space-y-2 text-sm [color:var(--mute)]'>
								{t.features.map(f => (
									<li key={f}>· {f}</li>
								))}
							</ul>
							<a
								href='#download'
								className={`mt-8 flex min-h-12 items-center justify-center font-[family-name:var(--font-display)] text-xs uppercase tracking-widest transition-opacity ${
									t.highlight
										? '[background:var(--green)] [color:var(--void)] hover:opacity-90'
										: 'border border-[var(--line)] [color:var(--text)] hover:border-[color-mix(in_oklch,var(--green)_40%,var(--line))]'
								}`}
							>
								{t.name === 'Free' ? 'Download' : 'Subscribe'}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
