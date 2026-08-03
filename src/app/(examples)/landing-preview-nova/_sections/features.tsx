import { Cpu, Gauge, GitBranch, Lock } from 'lucide-react'

import { Reveal } from './motion'

const features = [
	{
		icon: Cpu,
		title: 'Bare-metal GPUs',
		body: 'H100 & B200 clusters with NVLink, provisioned in seconds — no queue, no quota.',
		span: 'lg:col-span-2'
	},
	{
		icon: Gauge,
		title: 'Sub-ms routing',
		body: 'Edge inference routed to the nearest warm node.',
		span: ''
	},
	{
		icon: Lock,
		title: 'Private by default',
		body: 'Your weights never leave your tenancy. SOC2 + zero retention.',
		span: ''
	},
	{
		icon: GitBranch,
		title: 'Deploy from git',
		body: 'Push to main, ship a model. Rollbacks are one click and instant.',
		span: 'lg:col-span-2'
	}
]

/** Future Payload mapping: featureBento. */
export function Features() {
	return (
		<section id='features' className='px-5 py-24 sm:px-8'>
			<Reveal>
				<h2 className='max-w-2xl text-balance font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em]'>
					Everything you need to ship models, nothing you don&rsquo;t.
				</h2>
			</Reveal>
			<div className='mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3'>
				{features.map((f, i) => {
					const Icon = f.icon
					return (
						<Reveal key={f.title} delay={i * 0.06} className={f.span}>
							<div className='group h-full rounded-2xl border border-[var(--line)] p-7 backdrop-blur-sm transition-colors duration-300 [background:color-mix(in_oklch,var(--space-2)_60%,transparent)] hover:border-[color-mix(in_oklch,var(--cyan)_50%,transparent)]'>
								<span className='grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 [background:color-mix(in_oklch,var(--cyan)_18%,transparent)] [color:var(--cyan)] group-hover:scale-110'>
									<Icon className='h-5 w-5' />
								</span>
								<h3 className='mt-5 font-semibold text-xl tracking-tight'>
									{f.title}
								</h3>
								<p className='mt-2 leading-relaxed [color:var(--ink-soft)]'>
									{f.body}
								</p>
							</div>
						</Reveal>
					)
				})}
			</div>
		</section>
	)
}
