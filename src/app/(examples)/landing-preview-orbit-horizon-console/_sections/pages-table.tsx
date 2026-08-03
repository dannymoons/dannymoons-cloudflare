/** Future Payload mapping: pagesTable (block). */
const PAGES = [
	{
		path: '/blog',
		views: '31.4K',
		weight: '2.1 MB',
		co2: '0.52',
		grade: 'D',
		trend: '+4%'
	},
	{
		path: '/careers',
		views: '8.2K',
		weight: '1.6 MB',
		co2: '0.45',
		grade: 'C',
		trend: '+2%'
	},
	{
		path: '/',
		views: '84.2K',
		weight: '1.2 MB',
		co2: '0.38',
		grade: 'B',
		trend: '−12%'
	},
	{
		path: '/pricing',
		views: '22.1K',
		weight: '980 KB',
		co2: '0.41',
		grade: 'B',
		trend: '0%'
	},
	{
		path: '/docs',
		views: '18.7K',
		weight: '740 KB',
		co2: '0.33',
		grade: 'A',
		trend: '−9%'
	},
	{
		path: '/contact',
		views: '12.3K',
		weight: '520 KB',
		co2: '0.27',
		grade: 'A',
		trend: '−15%'
	}
]

const GRADE_COLOR: Record<string, string> = {
	A: 'var(--positive)',
	B: 'var(--olive)',
	C: 'var(--warn)',
	D: 'var(--danger)'
}

export function PagesTable() {
	return (
		<section className='ohc-reveal overflow-hidden border-2 border-[var(--ink)] shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--ink)] border-b-2 px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Page breakdown
				</h2>
				<span className='font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-wider [color:var(--mute)]'>
					Sorted by g CO₂ impact
				</span>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[560px] text-left text-xs'>
					<thead>
						<tr className='border-[var(--ink)] border-b-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [color:var(--mute)]'>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Path</th>
							<th className='px-3 py-2.5 font-medium'>Views</th>
							<th className='px-3 py-2.5 font-medium'>Weight</th>
							<th className='px-3 py-2.5 font-medium'>g CO₂/visit</th>
							<th className='px-3 py-2.5 font-medium'>Grade</th>
							<th className='px-4 py-2.5 font-medium sm:px-5'>Trend</th>
						</tr>
					</thead>
					<tbody>
						{PAGES.map(row => (
							<tr
								key={row.path}
								className='border-[var(--line)] border-b last:border-0 hover:[background:color-mix(in_oklch,var(--sage)_8%,var(--panel))]'
							>
								<td className='max-w-[160px] truncate px-4 py-3 font-[family-name:var(--font-mono)] font-medium sm:px-5'>
									{row.path}
								</td>
								<td className='px-3 py-3 font-[family-name:var(--font-mono)] tabular-nums [color:var(--mute)]'>
									{row.views}
								</td>
								<td className='px-3 py-3 font-[family-name:var(--font-mono)] tabular-nums [color:var(--mute)]'>
									{row.weight}
								</td>
								<td className='px-3 py-3 font-[family-name:var(--font-mono)] tabular-nums'>
									{row.co2}
								</td>
								<td className='px-3 py-3'>
									<span
										className='inline-flex h-6 w-6 items-center justify-center border-2 border-[var(--ink)] font-[family-name:var(--font-display)] font-bold text-[10px]'
										style={{
											color: GRADE_COLOR[row.grade],
											background: `color-mix(in oklch, ${GRADE_COLOR[row.grade]} 12%, var(--panel))`
										}}
									>
										{row.grade}
									</span>
								</td>
								<td
									className={`px-4 py-3 font-[family-name:var(--font-mono)] tabular-nums sm:px-5 ${row.trend.startsWith('+') ? '[color:var(--danger)]' : row.trend === '0%' ? '[color:var(--mute)]' : '[color:var(--positive)]'}`}
								>
									{row.trend}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
