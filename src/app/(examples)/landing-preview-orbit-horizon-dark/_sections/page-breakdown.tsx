import { ArrowDown, ArrowUp, Minus } from 'lucide-react'

type Trend = 'up' | 'down' | 'flat'

const pages = [
	{
		path: '/',
		co2: 0.38,
		trend: 'down' as Trend,
		change: '−12%',
		spark: [48, 44, 40, 38, 36, 34]
	},
	{
		path: '/about',
		co2: 0.29,
		trend: 'down' as Trend,
		change: '−6%',
		spark: [32, 31, 30, 29, 28, 29]
	},
	{
		path: '/blog',
		co2: 0.52,
		trend: 'up' as Trend,
		change: '+4%',
		spark: [44, 46, 48, 50, 51, 52]
	},
	{
		path: '/pricing',
		co2: 0.41,
		trend: 'flat' as Trend,
		change: '0%',
		spark: [41, 42, 41, 40, 41, 41]
	},
	{
		path: '/docs',
		co2: 0.33,
		trend: 'down' as Trend,
		change: '−9%',
		spark: [38, 36, 35, 34, 33, 33]
	},
	{
		path: '/contact',
		co2: 0.27,
		trend: 'down' as Trend,
		change: '−15%',
		spark: [34, 32, 30, 29, 28, 27]
	},
	{
		path: '/careers',
		co2: 0.45,
		trend: 'up' as Trend,
		change: '+2%',
		spark: [42, 43, 44, 44, 45, 45]
	},
	{
		path: '/changelog',
		co2: 0.31,
		trend: 'down' as Trend,
		change: '−11%',
		spark: [36, 35, 34, 33, 32, 31]
	}
]

function TrendIcon({ trend }: { trend: Trend }) {
	if (trend === 'up')
		return <ArrowUp className='h-3.5 w-3.5 [color:var(--danger)]' />
	if (trend === 'down')
		return <ArrowDown className='h-3.5 w-3.5 [color:var(--positive)]' />
	return <Minus className='h-3.5 w-3.5 [color:var(--mute)]' />
}

/** Future Payload mapping: pageBreakdownTable. */
export function PageBreakdown() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
					Page breakdown
				</span>
				<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
					Every URL,{' '}
					<span className='italic [color:var(--olive)]'>measured</span>
				</h2>
				<p className='ohd-reveal mt-3 max-w-lg text-sm [color:var(--mute)]'>
					Granular grams CO₂ per visit with trend direction and six-week
					sparklines — spot heavy pages before they hit your budget.
				</p>

				<div className='ohd-reveal mt-10 overflow-x-auto border-2 border-[var(--stroke)] [background:var(--panel)]'>
					<table className='w-full min-w-[640px] text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
								<th className='px-4 py-3 font-normal sm:px-6'>Page</th>
								<th className='px-4 py-3 font-normal sm:px-6'>g CO₂ / visit</th>
								<th className='px-4 py-3 font-normal sm:px-6'>Trend</th>
								<th className='px-4 py-3 font-normal sm:px-6'>6 wk</th>
							</tr>
						</thead>
						<tbody>
							{pages.map(p => (
								<tr
									key={p.path}
									className='border-[var(--line)] border-b transition-colors last:border-0 hover:[background:color-mix(in_oklch,var(--sage)_10%,transparent)]'
								>
									<td className='px-4 py-4 font-[family-name:var(--font-mono)] [color:var(--ink)] sm:px-6'>
										{p.path}
									</td>
									<td className='px-4 py-4 sm:px-6'>
										<span className='font-[family-name:var(--font-mono)] font-semibold tabular-nums [color:var(--ink)]'>
											{p.co2.toFixed(2)}
										</span>
										<span className='ml-1 text-xs [color:var(--mute)]'>g</span>
									</td>
									<td className='px-4 py-4 sm:px-6'>
										<span className='inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs tabular-nums'>
											<TrendIcon trend={p.trend} />
											<span
												className={
													p.trend === 'up'
														? '[color:var(--danger)]'
														: p.trend === 'down'
															? '[color:var(--positive)]'
															: '[color:var(--mute)]'
												}
											>
												{p.change}
											</span>
										</span>
									</td>
									<td className='px-4 py-4 sm:px-6'>
										<div className='flex h-8 w-24 items-end gap-0.5'>
											{p.spark.map(h => (
												<div
													key={`${p.path}-spark-${h}`}
													className='flex-1 rounded-sm [background:var(--olive)]'
													style={{
														height: `${(h / 55) * 100}%`,
														opacity: 0.35 + (h / 55) * 0.5
													}}
												/>
											))}
										</div>
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
