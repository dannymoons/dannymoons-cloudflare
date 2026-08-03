/** Future Payload mapping: topPages (block). */
const TOP = [
	{ path: '/checkout', co2: '0.82', pct: 92 },
	{ path: '/products', co2: '0.68', pct: 76 },
	{ path: '/', co2: '0.42', pct: 47 },
	{ path: '/docs/api', co2: '0.38', pct: 42 }
]

export function TopPages() {
	return (
		<section className='border border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Highest emitters
			</h2>
			<ul className='space-y-3'>
				{TOP.map(page => (
					<li key={page.path}>
						<div className='mb-1 flex items-center justify-between text-xs'>
							<span className='truncate font-medium'>{page.path}</span>
							<span className='shrink-0 [color:var(--mute)]'>{page.co2}g</span>
						</div>
						<div className='h-1.5 overflow-hidden rounded-full [background:var(--surface)]'>
							<div
								className='h-full rounded-full [background:var(--olive)]'
								style={{
									width: `${page.pct}%`,
									opacity: page.pct > 80 ? 1 : 0.7
								}}
							/>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
