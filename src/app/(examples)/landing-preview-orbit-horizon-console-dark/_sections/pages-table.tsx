/** Future Payload mapping: pagesTable (block). */
const PAGES = [
	{
		path: '/',
		views: '84.2K',
		weight: '1.2 MB',
		co2: '0.42',
		grade: 'B',
		trend: '-6%'
	},
	{
		path: '/products',
		views: '52.1K',
		weight: '2.8 MB',
		co2: '0.68',
		grade: 'C',
		trend: '-2%'
	},
	{
		path: '/blog/sustainability',
		views: '31.4K',
		weight: '890 KB',
		co2: '0.28',
		grade: 'A',
		trend: '-14%'
	},
	{
		path: '/checkout',
		views: '18.7K',
		weight: '3.1 MB',
		co2: '0.82',
		grade: 'D',
		trend: '+3%'
	},
	{
		path: '/about',
		views: '12.3K',
		weight: '640 KB',
		co2: '0.22',
		grade: 'A',
		trend: '-8%'
	},
	{
		path: '/docs/api',
		views: '9.8K',
		weight: '1.4 MB',
		co2: '0.38',
		grade: 'B',
		trend: '-11%'
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
		<section className='overflow-hidden border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] [background:var(--panel)]'>
			<div className='flex flex-wrap items-center justify-between gap-2 border-[var(--line)] border-b px-4 py-3 sm:px-5'>
				<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
					Top pages
				</h2>
				<span className='text-[11px] [color:var(--mute)]'>
					Sorted by emissions impact
				</span>
			</div>
			<div className='overflow-x-auto'>
				<table className='w-full min-w-[540px] text-left text-xs'>
					<thead>
						<tr className='border-[var(--line)] border-b [color:var(--mute)]'>
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
								className='border-[var(--line)] border-b last:border-0 hover:[background:var(--surface)]'
							>
								<td className='max-w-[140px] truncate px-4 py-3 font-medium sm:px-5'>
									{row.path}
								</td>
								<td className='px-3 py-3 [color:var(--mute)]'>{row.views}</td>
								<td className='px-3 py-3 [color:var(--mute)]'>{row.weight}</td>
								<td className='px-3 py-3'>{row.co2}</td>
								<td className='px-3 py-3'>
									<span
										className='inline-flex h-6 w-6 items-center justify-center rounded-md font-[family-name:var(--font-display)] font-bold text-[10px]'
										style={{
											color: GRADE_COLOR[row.grade],
											background: `color-mix(in oklch, ${GRADE_COLOR[row.grade]} 15%, transparent)`
										}}
									>
										{row.grade}
									</span>
								</td>
								<td
									className={`px-4 py-3 sm:px-5 ${row.trend.startsWith('+') ? '[color:var(--danger)]' : '[color:var(--positive)]'}`}
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
