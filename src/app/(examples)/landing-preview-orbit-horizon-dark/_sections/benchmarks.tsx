const comparisons = [
	{
		label: 'Avg g CO₂ / page view',
		you: 0.35,
		industry: 0.62,
		unit: 'g',
		lowerIsBetter: true
	},
	{
		label: 'Page weight (median)',
		you: 890,
		industry: 2100,
		unit: 'KB',
		lowerIsBetter: true
	},
	{
		label: 'Renewable hosting',
		you: 100,
		industry: 34,
		unit: '%',
		lowerIsBetter: false
	},
	{
		label: 'Pages under budget',
		you: 94,
		industry: 61,
		unit: '%',
		lowerIsBetter: false
	}
]

function barWidth(value: number, max: number): string {
	return `${Math.min(100, (value / max) * 100)}%`
}

/** Future Payload mapping: industryBenchmarks. */
export function Benchmarks() {
	return (
		<section id='benchmarks' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--ink)]'>
						Benchmarks
					</span>
					<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
						Compare vs industry average
					</h2>
					<p className='ohd-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Orbit customers sit in the top quartile for web sustainability —
						measured against 12,000+ sites in our anonymised benchmark pool.
					</p>
				</div>

				<div className='grid gap-6 sm:grid-cols-2'>
					{comparisons.map(c => {
						const max = Math.max(c.you, c.industry) * 1.1
						const youBetter = c.lowerIsBetter
							? c.you < c.industry
							: c.you > c.industry

						return (
							<article
								key={c.label}
								className='ohd-reveal border-2 border-[var(--stroke)] p-5 [background:var(--panel)] sm:p-6'
							>
								<h3 className='font-[family-name:var(--font-display)] text-sm [color:var(--mute)]'>
									{c.label}
								</h3>
								<div className='mt-5 space-y-4'>
									<div>
										<div className='mb-1.5 flex justify-between font-[family-name:var(--font-mono)] text-xs tabular-nums'>
											<span className='[color:var(--olive)]'>Your sites</span>
											<span className='[color:var(--ink)]'>
												{c.you}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden [background:var(--line)]'>
											<div
												className='h-full [background:var(--olive)]'
												style={{ width: barWidth(c.you, max) }}
											/>
										</div>
									</div>
									<div>
										<div className='mb-1.5 flex justify-between font-[family-name:var(--font-mono)] text-xs tabular-nums [color:var(--mute)]'>
											<span>Industry avg</span>
											<span>
												{c.industry}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden [background:var(--line)]'>
											<div
												className='h-full [background:color-mix(in_oklch,var(--mute)_40%,var(--parchment))]'
												style={{ width: barWidth(c.industry, max) }}
											/>
										</div>
									</div>
								</div>
								<p
									className={`mt-4 text-xs ${youBetter ? '[color:var(--positive)]' : '[color:var(--warn)]'}`}
								>
									{youBetter
										? '✓ Ahead of industry benchmark'
										: 'Room to improve vs peers'}
								</p>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
