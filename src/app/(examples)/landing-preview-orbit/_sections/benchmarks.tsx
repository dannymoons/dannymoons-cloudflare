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
					<span className='ob-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--orbit)]'>
						Benchmarks
					</span>
					<h2 className='ob-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Compare vs industry average
					</h2>
					<p className='ob-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
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
								className='ob-reveal rounded-2xl border border-[color-mix(in_oklch,var(--orbit)_12%,var(--line))] p-5 [background:color-mix(in_oklch,var(--panel)_50%,transparent)] sm:p-6'
							>
								<h3 className='font-[family-name:var(--font-display)] text-sm [color:var(--mute)]'>
									{c.label}
								</h3>
								<div className='mt-5 space-y-4'>
									<div>
										<div className='mb-1.5 flex justify-between text-xs'>
											<span className='[color:var(--orbit)]'>Your sites</span>
											<span>
												{c.you}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden rounded-full [background:var(--line)]'>
											<div
												className='h-full rounded-full [background:linear-gradient(90deg,var(--orbit),var(--mint))]'
												style={{ width: barWidth(c.you, max) }}
											/>
										</div>
									</div>
									<div>
										<div className='mb-1.5 flex justify-between text-xs [color:var(--mute)]'>
											<span>Industry avg</span>
											<span>
												{c.industry}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden rounded-full [background:var(--line)]'>
											<div
												className='h-full rounded-full [background:var(--mute)]'
												style={{
													width: barWidth(c.industry, max),
													opacity: 0.45
												}}
											/>
										</div>
									</div>
								</div>
								<p
									className={`mt-4 text-xs ${youBetter ? '[color:var(--mint)]' : '[color:var(--warn)]'}`}
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
