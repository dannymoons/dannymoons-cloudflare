const comparisons = [
	{
		label: 'Avg g CO₂ / page view',
		you: 0.31,
		industry: 0.68,
		unit: 'g',
		lowerIsBetter: true
	},
	{
		label: 'Inference g CO₂ / 1K tokens',
		you: 0.0042,
		industry: 0.0095,
		unit: 'g',
		lowerIsBetter: true
	},
	{
		label: 'Renewable hosting',
		you: 100,
		industry: 28,
		unit: '%',
		lowerIsBetter: false
	},
	{
		label: 'Pages under budget',
		you: 91,
		industry: 54,
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
		<section
			id='benchmarks'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_6%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
						Benchmarks
					</span>
					<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						vs industry average
					</h2>
					<p className='on-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Research cohort sites sit in the top decile for AI/web
						sustainability — measured against 8,400+ properties in our
						anonymised pool.
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
								className='on-reveal rounded-lg border border-[var(--line)] p-5 [background:var(--parchment)] sm:p-6'
							>
								<h3 className='font-[family-name:var(--font-display)] text-sm [color:var(--mute)]'>
									{c.label}
								</h3>
								<div className='mt-5 space-y-4'>
									<div>
										<div className='mb-1.5 flex justify-between text-xs'>
											<span className='[color:var(--olive)]'>Your lab</span>
											<span>
												{c.you}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden rounded-full [background:var(--line)]'>
											<div
												className='h-full rounded-full [background:linear-gradient(90deg,var(--olive),var(--sage))]'
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
									className={`mt-4 text-xs ${youBetter ? '[color:var(--olive)]' : '[color:var(--clay)]'}`}
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
