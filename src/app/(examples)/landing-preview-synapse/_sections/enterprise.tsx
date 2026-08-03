import { Building2, Clock, ShieldCheck } from 'lucide-react'

const items = [
	{
		icon: ShieldCheck,
		t: 'SOC 2 Type II',
		d: 'Annual audits, continuous monitoring and encrypted data residency controls.'
	},
	{
		icon: Clock,
		t: '99.99% SLA',
		d: 'Financially backed uptime with sub-minute failover across neural clusters.'
	},
	{
		icon: Building2,
		t: 'Dedicated clusters',
		d: 'Private synaptic hardware — isolated weights, custom fine-tunes, VPC peering.'
	}
]

/** Future Payload mapping: enterpriseTrust. */
export function Enterprise() {
	return (
		<section
			id='enterprise'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_40%,transparent)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Enterprise
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Production cognition at scale
				</h2>
				<p className='sy-reveal mt-4 max-w-xl text-sm leading-relaxed [color:var(--mute)]'>
					From regulated finance to clinical workflows — compliance baked into
					every synaptic layer.
				</p>

				<div className='mt-12 grid gap-4 sm:grid-cols-3'>
					{items.map(item => {
						const Icon = item.icon
						return (
							<article
								key={item.t}
								className='sy-reveal rounded-2xl border border-[color-mix(in_oklch,var(--neon)_15%,var(--line))] p-6 [background:color-mix(in_oklch,var(--void)_70%,transparent)]'
							>
								<span className='grid h-10 w-10 place-items-center rounded-lg border border-[color-mix(in_oklch,var(--neon)_30%,transparent)] [color:var(--neon)]'>
									<Icon className='h-5 w-5' />
								</span>
								<h3 className='mt-4 font-[family-name:var(--font-display)] font-semibold text-lg'>
									{item.t}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{item.d}
								</p>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
