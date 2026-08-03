const entries = [
	{ url: '/home', co2: '0.08g', visits: '142k/mo', trend: '↓12%' },
	{ url: '/about', co2: '0.06g', visits: '38k/mo', trend: '↓18%' },
	{ url: '/work', co2: '0.11g', visits: '64k/mo', trend: '↓9%' },
	{
		url: '/blog/sustainable-hosting',
		co2: '0.09g',
		visits: '22k/mo',
		trend: '↓14%'
	},
	{ url: '/contact', co2: '0.05g', visits: '18k/mo', trend: '↓21%' },
	{ url: '/services/audit', co2: '0.07g', visits: '31k/mo', trend: '↓16%' },
	{
		url: '/case-studies/verdant',
		co2: '0.10g',
		visits: '12k/mo',
		trend: '↓8%'
	},
	{ url: '/pricing', co2: '0.06g', visits: '45k/mo', trend: '↓19%' }
]

/** Future Payload mapping: emissionsLedger. */
export function EmissionsLedger() {
	return (
		<section
			id='emissions'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--forest)_4%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='of-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Emissions ledger
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						CO₂ per page load, tracked
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
						Every URL in your sitemap, measured monthly. Green hosting and lean
						assets keep the ledger honest.
					</p>
				</div>

				<div className='of-reveal mt-10 overflow-hidden rounded-2xl border border-[var(--line)] [background:var(--paper)]'>
					<div className='flex items-center justify-between border-[var(--line)] border-b px-4 py-3 sm:px-5'>
						<span className='font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.2em] [color:var(--forest)]'>
							Offset ledger · Q2 2026
						</span>
						<span className='text-[10px] [color:var(--mute)]'>
							Scroll for full report →
						</span>
					</div>

					<div className='max-h-72 overflow-x-auto overflow-y-auto sm:max-h-80'>
						<table className='w-full min-w-[32rem] text-left text-sm'>
							<thead className='sticky top-0 [background:var(--paper)]'>
								<tr className='border-[var(--line)] border-b text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'>
									<th className='px-4 py-3 font-normal sm:px-5'>URL</th>
									<th className='px-4 py-3 font-normal sm:px-5'>CO₂ / load</th>
									<th className='px-4 py-3 font-normal sm:px-5'>Traffic</th>
									<th className='px-4 py-3 text-right font-normal sm:px-5'>
										Trend
									</th>
								</tr>
							</thead>
							<tbody>
								{entries.map(e => (
									<tr
										key={e.url}
										className='border-[var(--line)] border-b transition-colors last:border-b-0 hover:[background:color-mix(in_oklch,var(--lime)_6%,transparent)]'
									>
										<td className='px-4 py-3 font-[family-name:var(--font-body)] text-xs sm:px-5'>
											{e.url}
										</td>
										<td className='px-4 py-3 font-[family-name:var(--font-display)] tabular-nums sm:px-5'>
											{e.co2}
										</td>
										<td className='px-4 py-3 text-xs [color:var(--mute)] sm:px-5'>
											{e.visits}
										</td>
										<td className='px-4 py-3 text-right text-xs [color:var(--forest)] sm:px-5'>
											{e.trend}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className='flex flex-wrap items-center justify-between gap-3 border-[var(--line)] border-t px-4 py-4 sm:px-5'>
						<p className='text-xs [color:var(--mute)]'>
							Site average:{' '}
							<span className='[color:var(--ink)]'>0.08g CO₂</span> · Industry
							median: 1.76g
						</p>
						<a
							href='#contact'
							className='text-xs uppercase tracking-[0.14em] [color:var(--forest)]'
						>
							Request your ledger →
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
