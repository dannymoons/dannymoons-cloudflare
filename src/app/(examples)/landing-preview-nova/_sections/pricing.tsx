import { ArrowRight, Check } from 'lucide-react'

import { Reveal } from './motion'

const tiers = [
	{
		name: 'Hobby',
		price: '$0',
		note: '50 GPU-hours / mo',
		features: ['Shared GPUs', 'Community support', '1 deployment'],
		featured: false
	},
	{
		name: 'Pro',
		price: '$0.0004',
		note: 'per GPU-second',
		features: [
			'Dedicated H100/B200',
			'Sub-ms routing',
			'Unlimited deployments',
			'Priority support'
		],
		featured: true
	},
	{
		name: 'Enterprise',
		price: "Let's talk",
		note: 'volume + VPC',
		features: ['Private clusters', 'SSO + audit logs', 'SLA & dedicated SRE'],
		featured: false
	}
]

/** Future Payload mapping: pricingTiers. */
export function Pricing() {
	return (
		<section id='pricing' className='px-5 py-24 sm:px-8'>
			<Reveal>
				<h2 className='max-w-2xl text-balance font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em]'>
					Pay for the milliseconds you use.
				</h2>
			</Reveal>
			<div className='mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3'>
				{tiers.map((t, i) => (
					<Reveal key={t.name} delay={i * 0.08}>
						<div
							className={`flex h-full flex-col rounded-2xl border p-7 backdrop-blur-sm ${
								t.featured
									? 'border-[color-mix(in_oklch,var(--cyan)_55%,transparent)] shadow-[0_0_50px_-16px_var(--cyan)] [background:color-mix(in_oklch,var(--space-2)_85%,transparent)]'
									: 'border-[var(--line)] [background:color-mix(in_oklch,var(--space-2)_50%,transparent)]'
							}`}
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold text-lg'>{t.name}</h3>
								{t.featured ? (
									<span className='rounded-full px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest [background:linear-gradient(120deg,var(--cyan),var(--violet))] [color:var(--space)]'>
										Popular
									</span>
								) : null}
							</div>
							<div className='mt-5 flex items-baseline gap-2'>
								<span className='font-bold text-3xl tracking-tight'>
									{t.price}
								</span>
								<span className='font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)]'>
									{t.note}
								</span>
							</div>
							<ul className='mt-6 flex flex-1 flex-col gap-3'>
								{t.features.map(f => (
									<li
										key={f}
										className='flex items-center gap-2.5 text-sm [color:var(--ink-soft)]'
									>
										<Check className='h-4 w-4 shrink-0 [color:var(--cyan)]' />
										{f}
									</li>
								))}
							</ul>
							<a
								href='#cta'
								className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm transition-all duration-200 ${
									t.featured
										? '[background:linear-gradient(120deg,var(--cyan),var(--violet))] [color:var(--space)] hover:shadow-[0_0_40px_-8px_var(--cyan)]'
										: 'border border-[var(--line)] hover:[background:var(--space-2)]'
								}`}
							>
								Get started
								<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
							</a>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}
