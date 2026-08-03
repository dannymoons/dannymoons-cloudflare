import { ArrowRight, Check } from 'lucide-react'

const tiers = [
	{
		name: 'Starter',
		price: '$0',
		note: '10k tokens / day',
		features: ['Synapse-7B access', 'Community support', 'Playground only'],
		featured: false
	},
	{
		name: 'Pro',
		price: '$49',
		note: '/ seat / mo',
		features: [
			'Synapse-70B + agents',
			'128k context memory',
			'API & SDK access',
			'Priority inference'
		],
		featured: true
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		note: 'dedicated clusters',
		features: [
			'Synapse-Ultra + fine-tunes',
			'VPC & SSO',
			'SLA & dedicated SRE',
			'Zero-retention guarantee'
		],
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mb-12'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Pricing
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Scale cognition with your team
				</h2>
			</div>

			<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
				{tiers.map(t => (
					<article
						key={t.name}
						className={`sy-reveal flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm sm:p-7 ${
							t.featured
								? 'border-[color-mix(in_oklch,var(--neon)_50%,transparent)] shadow-[0_0_50px_-16px_var(--neon)] [background:color-mix(in_oklch,var(--panel)_90%,transparent)]'
								: 'border-[color-mix(in_oklch,var(--neon)_12%,var(--line))] [background:color-mix(in_oklch,var(--panel)_50%,transparent)]'
						}`}
					>
						<div className='flex items-center justify-between'>
							<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg'>
								{t.name}
							</h3>
							{t.featured ? (
								<span className='rounded-full border border-[color-mix(in_oklch,var(--neon)_45%,transparent)] px-2.5 py-0.5 text-[10px] uppercase tracking-widest [color:var(--neon)]'>
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
						<ul className='mt-6 flex flex-1 flex-col gap-3'>
							{t.features.map(f => (
								<li
									key={f}
									className='flex items-center gap-2.5 text-sm [color:var(--mute)]'
								>
									<Check className='h-4 w-4 shrink-0 [color:var(--neon)]' />
									{f}
								</li>
							))}
						</ul>
						<a
							href='#demo'
							className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-[family-name:var(--font-display)] text-sm transition-all duration-200 ${
								t.featured
									? 'shadow-[0_0_30px_-10px_var(--neon)] [background:linear-gradient(120deg,var(--neon),var(--pulse))] [color:var(--void)] hover:shadow-[0_0_40px_-8px_var(--neon)]'
									: 'border border-[color-mix(in_oklch,var(--neon)_25%,var(--line))] hover:border-[color-mix(in_oklch,var(--neon)_45%,transparent)]'
							}`}
						>
							Get started
							<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
						</a>
					</article>
				))}
			</div>
		</section>
	)
}
