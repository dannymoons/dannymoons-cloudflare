import { Check } from 'lucide-react'

const plans = [
	{
		name: 'Free',
		price: '$0',
		note: 'forever',
		features: [
			'3 active habits',
			'Basic impact tracking',
			'Community access',
			'Weekly digest email'
		],
		cta: 'Download free',
		featured: false
	},
	{
		name: 'Plus',
		price: '$6.99',
		note: '/ mo',
		features: [
			'Unlimited habits',
			'AI coach & smart nudges',
			'Household mode (up to 5)',
			'Advanced analytics',
			'Priority community features',
			'Ad-free experience'
		],
		cta: 'Start 7-day trial',
		featured: true
	},
	{
		name: 'Family',
		price: '$11.99',
		note: '/ mo',
		features: [
			'Everything in Plus',
			'Up to 8 household members',
			'Kids mode with age-appropriate habits',
			'Shared family challenges',
			'Export impact certificates'
		],
		cta: 'Start 7-day trial',
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section
			id='pricing'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--leaf)_5%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Pricing
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Start free. Upgrade when you&apos;re ready.
					</h2>
					<p className='mt-4 text-base [color:var(--mute)]'>
						Annual plans save 20%. Cancel anytime — your streak data stays
						yours.
					</p>
				</div>

				<div className='mt-12 grid gap-5 lg:grid-cols-3'>
					{plans.map(p => (
						<article
							key={p.name}
							className={`ha-reveal flex flex-col rounded-2xl border p-6 sm:p-7 ${
								p.featured
									? 'border-[color-mix(in_oklch,var(--leaf)_40%,transparent)] shadow-lg [background:var(--cream)]'
									: 'border-[var(--line)] [background:var(--cream)]'
							}`}
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{p.name}
							</h3>
							<p className='mt-4 font-[family-name:var(--font-display)] text-3xl [color:var(--ink)]'>
								{p.price}
								<span className='text-base [color:var(--mute)]'>{p.note}</span>
							</p>
							<ul className='mt-6 flex-1 space-y-3'>
								{p.features.map(f => (
									<li
										key={f}
										className='flex gap-2 text-sm [color:var(--mute)]'
									>
										<Check
											className='mt-0.5 h-4 w-4 shrink-0 [color:var(--leaf)]'
											strokeWidth={2}
										/>
										{f}
									</li>
								))}
							</ul>
							<a
								href='#download'
								className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full text-sm transition-opacity ${
									p.featured
										? '[background:var(--leaf)] [color:var(--cream)] hover:opacity-90'
										: 'border border-[var(--line)] hover:border-[var(--leaf)] hover:[color:var(--leaf)]'
								}`}
							>
								{p.cta}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
