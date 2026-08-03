import { ArrowRight, Check } from 'lucide-react'

const tiers = [
	{
		name: 'Solo',
		price: '€29',
		note: '/ mo',
		seats: '1 seat · 5 client sites',
		features: [
			'Carbon grades A–F',
			'Monthly PDF reports',
			'Widget embed (1 style)',
			'Email support'
		],
		featured: false
	},
	{
		name: 'Studio',
		price: '€89',
		note: '/ mo',
		seats: '5 seats · 25 client sites',
		features: [
			'Multi-site dashboard',
			'Branded client reports',
			'Role-based access',
			'Widget embed (3 styles)',
			'Client viewer portals',
			'Priority support'
		],
		featured: true
	},
	{
		name: 'Agency',
		price: '€199',
		note: '/ mo',
		seats: '15 seats · unlimited sites',
		features: [
			'White-label workspace',
			'API + webhooks',
			'Custom grade thresholds',
			'Scheduled report delivery',
			'Benchmark analytics',
			'Dedicated onboarding'
		],
		featured: false
	}
]

/** Future Payload mapping: agencyPricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12 text-center'>
					<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Pricing
					</span>
					<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Solo, Studio, Agency
					</h2>
					<p className='oa-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Plans that scale from freelance strategists to full-service agencies
						— annual billing saves 20%.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`oa-reveal flex h-full flex-col rounded-2xl border p-6 backdrop-blur-xl sm:p-7 ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--blue)_35%,transparent)] bg-white/80 shadow-[0_20px_60px_-20px_color-mix(in_oklch,var(--blue)_25%,transparent)]'
									: 'border-[var(--line)] bg-white/70'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] font-bold text-lg'>
									{t.name}
								</h3>
								{t.featured ? (
									<span className='rounded-full border border-[color-mix(in_oklch,var(--cyan)_35%,transparent)] bg-white/60 px-2.5 py-0.5 font-medium text-[10px] uppercase tracking-widest [color:var(--blue)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-[family-name:var(--font-display)] font-extrabold text-3xl tabular-nums tracking-tight'>
									{t.price}
								</span>
								<span className='text-xs [color:var(--mute)]'>{t.note}</span>
							</div>
							<p className='mt-2 font-medium text-sm [color:var(--blue)]'>
								{t.seats}
							</p>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 text-sm [color:var(--mute)]'
									>
										<Check className='h-4 w-4 shrink-0 [color:var(--cyan)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#get-started'
								className={`group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 font-medium text-sm transition-colors ${
									t.featured
										? '[background:var(--blue)] [color:var(--cloud)] hover:[background:color-mix(in_oklch,var(--blue)_88%,var(--ink))]'
										: 'border border-[var(--line)] bg-white/60 hover:bg-white/90'
								}`}
							>
								Start trial
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
