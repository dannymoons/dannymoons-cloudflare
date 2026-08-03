import { Counter, Reveal } from './motion'

const metrics = [
	{ to: 38, suffix: 'ms', l: 'Median cold start' },
	{ to: 99.99, decimals: 2, suffix: '%', l: 'Uptime SLA' },
	{ to: 14, suffix: '', l: 'Global regions' },
	{ to: 2.4, decimals: 1, suffix: 'M', l: 'Requests / sec' }
]

/** Future Payload mapping: metricCounters. */
export function Metrics() {
	return (
		<section
			id='metrics'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--space-2)_40%,transparent)] sm:px-8'
		>
			<div className='grid grid-cols-2 gap-8 text-center lg:grid-cols-4'>
				{metrics.map((m, i) => (
					<Reveal key={m.l} delay={i * 0.08}>
						<div className='bg-clip-text font-bold text-[clamp(2.25rem,5vw,3.75rem)] leading-none tracking-[-0.02em] [background:linear-gradient(120deg,var(--cyan),var(--violet))] [color:transparent]'>
							<Counter to={m.to} decimals={m.decimals ?? 0} suffix={m.suffix} />
						</div>
						<div className='mt-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest [color:var(--ink-soft)]'>
							{m.l}
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}
