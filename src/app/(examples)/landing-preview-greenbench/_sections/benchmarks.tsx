const benchmarks = [
	{
		metric: 'tCO₂e per £1M revenue',
		sectorAvg: '18.4',
		topQuartile: '9.2',
		yourAgency: '11.8'
	},
	{
		metric: 'gCO₂e per pageview',
		sectorAvg: '0.84',
		topQuartile: '0.41',
		yourAgency: '0.52'
	},
	{
		metric: 'tCO₂e per video minute',
		sectorAvg: '2.1',
		topQuartile: '0.9',
		yourAgency: '1.4'
	},
	{
		metric: 'Renewable hosting %',
		sectorAvg: '34%',
		topQuartile: '89%',
		yourAgency: '72%'
	}
]

/** Future Payload mapping: benchmarkComparison. */
export function Benchmarks() {
	return (
		<section
			id='benchmarks'
			className='px-5 py-20 [background:var(--ink)] [color:var(--white)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--lime)]'>
						Benchmarks
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						How you compare to the sector
					</h2>
				</div>

				<div className='gb-reveal mt-12 overflow-x-auto rounded-xl border border-[color:oklch(1_0_0/0.12)]'>
					<table className='w-full min-w-[36rem] text-left text-sm'>
						<thead>
							<tr className='border-[color:oklch(1_0_0/0.12)] border-b'>
								<th className='px-5 py-4 font-medium opacity-60'>Metric</th>
								<th className='px-5 py-4 font-medium opacity-60'>Sector avg</th>
								<th className='px-5 py-4 font-medium opacity-60'>
									Top quartile
								</th>
								<th className='px-5 py-4 font-medium [color:var(--lime)]'>
									Your agency
								</th>
							</tr>
						</thead>
						<tbody>
							{benchmarks.map(b => (
								<tr
									key={b.metric}
									className='border-[color:oklch(1_0_0/0.12)] border-b'
								>
									<td className='px-5 py-4'>{b.metric}</td>
									<td className='px-5 py-4 tabular-nums opacity-70'>
										{b.sectorAvg}
									</td>
									<td className='px-5 py-4 tabular-nums opacity-70'>
										{b.topQuartile}
									</td>
									<td className='px-5 py-4 font-[family-name:var(--font-display)] font-bold tabular-nums [color:var(--lime)]'>
										{b.yourAgency}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
