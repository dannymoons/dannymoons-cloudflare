const comparisons = [
	{
		label: 'Avg g CO₂ / page view',
		agency: 0.34,
		industry: 0.72,
		unit: 'g',
		lowerIsBetter: true
	},
	{
		label: 'Client sites under budget',
		agency: 94,
		industry: 58,
		unit: '%',
		lowerIsBetter: false
	},
	{
		label: 'Reports delivered on time',
		agency: 98,
		industry: 71,
		unit: '%',
		lowerIsBetter: false
	},
	{
		label: 'Widget install rate',
		agency: 67,
		industry: 23,
		unit: '%',
		lowerIsBetter: false
	}
]

function barWidth(value: number, max: number): string {
	return `${Math.min(100, (value / max) * 100)}%`
}

/** Future Payload mapping: agencyBenchmarks. */
export function Benchmarks() {
	return (
		<section
			id='benchmarks'
			className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-12 text-center'>
					<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Benchmarks
					</span>
					<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Agency vs industry
					</h2>
					<p className='oa-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Orbit Aero agencies sit in the top quartile for client carbon
						performance — measured against 2,400+ digital studios in our
						anonymised pool.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-2'>
					{comparisons.map(c => {
						const max = Math.max(c.agency, c.industry) * 1.1
						const agencyBetter = c.lowerIsBetter
							? c.agency < c.industry
							: c.agency > c.industry

						return (
							<article
								key={c.label}
								className='oa-reveal rounded-2xl border border-[var(--line)] bg-white/70 p-5 backdrop-blur-xl sm:p-6'
							>
								<h3 className='font-[family-name:var(--font-display)] font-semibold text-sm [color:var(--mute)]'>
									{c.label}
								</h3>
								<div className='mt-5 space-y-4'>
									<div>
										<div className='mb-1.5 flex justify-between text-xs'>
											<span className='[color:var(--blue)]'>Your agency</span>
											<span className='tabular-nums'>
												{c.agency}
												{c.unit}
											</span>
										</div>
										<div className='h-2 overflow-hidden rounded-full [background:var(--line)]'>
											<div
												className='h-full rounded-full [background:linear-gradient(90deg,var(--blue),var(--cyan))]'
												style={{ width: barWidth(c.agency, max) }}
											/>
										</div>
									</div>
									<div>
										<div className='mb-1.5 flex justify-between text-xs [color:var(--mute)]'>
											<span>Industry avg</span>
											<span className='tabular-nums'>
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
									className={`mt-4 text-xs ${agencyBetter ? '[color:var(--blue)]' : '[color:var(--mute)]'}`}
								>
									{agencyBetter
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
