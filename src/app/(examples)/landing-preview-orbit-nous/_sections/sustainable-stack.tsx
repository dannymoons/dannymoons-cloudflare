import { Cloud, Globe, Leaf, Zap } from 'lucide-react'

const stack = [
	{
		icon: Leaf,
		title: 'Green hosting',
		body: '100% renewable energy providers with verified RECs and hourly-matched carbon accounting.',
		stat: '100% renewable'
	},
	{
		icon: Zap,
		title: 'Edge delivery',
		body: 'Static assets at the edge cut round-trip latency and data-centre hops per page view.',
		stat: '−34% avg hops'
	},
	{
		icon: Globe,
		title: 'Static generation',
		body: 'Pre-rendered pages eliminate server-side compute on every visit — the lowest-carbon default.',
		stat: '0 SSR on read'
	},
	{
		icon: Cloud,
		title: 'Carbon-aware routing',
		body: 'Route inference to regions with lower grid intensity when latency budgets allow.',
		stat: '−18% grid CO₂'
	}
]

/** Future Payload mapping: sustainableStack. */
export function SustainableStack() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
						Sustainable stack
					</span>
					<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Build on what scales cleanly
					</h2>
					<p className='on-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Orbit Research recommends and tracks the infrastructure patterns
						that keep AI workloads and web delivery within carbon budgets.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-2'>
					{stack.map(s => (
						<article
							key={s.title}
							className='on-reveal rounded-lg border border-[var(--line)] p-5 [background:var(--parchment)] sm:p-6'
						>
							<div className='flex items-start gap-4'>
								<span className='grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--line)] [background:color-mix(in_oklch,var(--sage)_15%,transparent)] [color:var(--olive)]'>
									<s.icon className='h-5 w-5' />
								</span>
								<div>
									<h3 className='font-[family-name:var(--font-display)] font-semibold'>
										{s.title}
									</h3>
									<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
										{s.body}
									</p>
									<p className='mt-3 font-medium text-xs [color:var(--olive)]'>
										{s.stat}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
