import { ArrowDown, ArrowUp, Minus } from 'lucide-react'

type Trend = 'up' | 'down' | 'flat'

const pages = [
	{
		path: '/inference',
		co2: 0.48,
		trend: 'down' as Trend,
		change: '−14%',
		spark: [58, 54, 50, 48, 46, 48]
	},
	{
		path: '/models/llama',
		co2: 0.62,
		trend: 'up' as Trend,
		change: '+3%',
		spark: [55, 57, 58, 60, 61, 62]
	},
	{
		path: '/docs/api',
		co2: 0.22,
		trend: 'down' as Trend,
		change: '−18%',
		spark: [32, 28, 26, 24, 23, 22]
	},
	{
		path: '/blog/research',
		co2: 0.35,
		trend: 'flat' as Trend,
		change: '0%',
		spark: [35, 34, 35, 36, 35, 35]
	},
	{
		path: '/playground',
		co2: 0.71,
		trend: 'up' as Trend,
		change: '+8%',
		spark: [62, 64, 66, 68, 70, 71]
	},
	{
		path: '/weights',
		co2: 0.29,
		trend: 'down' as Trend,
		change: '−11%',
		spark: [36, 34, 32, 31, 30, 29]
	}
]

function TrendIcon({ trend }: { trend: Trend }) {
	if (trend === 'up')
		return <ArrowUp className='h-3.5 w-3.5 [color:var(--clay)]' />
	if (trend === 'down')
		return <ArrowDown className='h-3.5 w-3.5 [color:var(--olive)]' />
	return <Minus className='h-3.5 w-3.5 [color:var(--mute)]' />
}

/** Future Payload mapping: carbonPerPageTable. */
export function CarbonPerPage() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_6%,var(--parchment))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
					Page breakdown
				</span>
				<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
					Carbon per URL
				</h2>
				<p className='on-reveal mt-3 max-w-lg text-sm [color:var(--mute)]'>
					Granular grams CO₂ per visit with trend direction and six-week
					sparklines — isolate heavy inference routes before they scale.
				</p>

				<div className='on-reveal mt-10 overflow-x-auto rounded-xl border border-[var(--line)] [background:var(--parchment)]'>
					<table className='w-full min-w-[640px] text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'>
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
									<td className='px-4 py-4 font-[family-name:var(--font-display)] sm:px-6'>
										{p.path}
									</td>
									<td className='px-4 py-4 sm:px-6'>
										<span className='font-[family-name:var(--font-display)] font-semibold'>
											{p.co2.toFixed(2)}
										</span>
										<span className='ml-1 text-xs [color:var(--mute)]'>g</span>
									</td>
									<td className='px-4 py-4 sm:px-6'>
										<span className='inline-flex items-center gap-1.5 text-xs'>
											<TrendIcon trend={p.trend} />
											<span
												className={
													p.trend === 'up'
														? '[color:var(--clay)]'
														: p.trend === 'down'
															? '[color:var(--olive)]'
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
														height: `${(h / 75) * 100}%`,
														opacity: 0.35 + (h / 75) * 0.5
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
