import { ArrowRight, Check } from 'lucide-react'

const tiers = [
	{
		name: 'Academic',
		price: '€0',
		note: 'for .edu domains',
		pages: 'Up to 200 pages',
		features: [
			'1 research lab site',
			'Daily measurements',
			'Open methodology access',
			'CSV + BibTeX export'
		],
		featured: false
	},
	{
		name: 'Lab',
		price: '€49',
		note: '/ mo',
		pages: 'Up to 1,000 pages',
		features: [
			'5 sites + inference endpoints',
			'Hourly measurements',
			'Model footprint tracking',
			'API + webhooks',
			'Team roles'
		],
		featured: true
	},
	{
		name: 'Institute',
		price: 'Custom',
		note: 'annual grant',
		pages: 'Unlimited pages',
		features: [
			'Multi-lab deployment',
			'Real-time inference RUM',
			'Custom emission factors',
			'Dedicated research support',
			'Co-publication rights'
		],
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
						Pricing
					</span>
					<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Academic-friendly tiers
					</h2>
					<p className='on-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Free for verified academic domains — subsidised lab plans for
						research groups that need inference tracking at scale.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className={`on-reveal flex h-full flex-col rounded-lg border p-6 sm:p-7 ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--olive)_40%,transparent)] shadow-[0_4px_24px_-8px_color-mix(in_oklch,var(--olive)_25%,transparent)] [background:var(--parchment)]'
									: 'border-[var(--line)] [background:color-mix(in_oklch,var(--sage)_6%,var(--parchment))]'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg'>
									{t.name}
								</h3>
								{t.featured ? (
									<span className='rounded-full border border-[color-mix(in_oklch,var(--olive)_35%,transparent)] px-2.5 py-0.5 text-[10px] uppercase tracking-widest [color:var(--olive)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-[family-name:var(--font-display)] font-semibold text-3xl tracking-tight'>
									{t.price}
								</span>
								<span className='text-xs [color:var(--mute)]'>{t.note}</span>
							</div>
							<p className='mt-2 text-sm [color:var(--sage)]'>{t.pages}</p>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 text-sm [color:var(--mute)]'
									>
										<Check className='h-4 w-4 shrink-0 [color:var(--olive)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className={`group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 font-[family-name:var(--font-display)] text-sm transition-all duration-200 ${
									t.featured
										? '[background:var(--olive)] [color:var(--parchment)] hover:[background:color-mix(in_oklch,var(--olive)_90%,var(--ink))]'
										: 'border border-[var(--line)] hover:[background:color-mix(in_oklch,var(--sage)_12%,transparent)]'
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
