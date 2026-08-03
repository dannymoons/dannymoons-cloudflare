const rows = [
	{ rank: 1, agency: 'Studio Verdant', score: 94, change: '+2' },
	{ rank: 2, agency: 'Carbon & Co.', score: 91, change: '—' },
	{ rank: 3, agency: 'Lowprint Digital', score: 89, change: '+4' },
	{ rank: 4, agency: 'Meridian Creative', score: 87, change: '−1' },
	{ rank: 5, agency: 'Northshore Agency', score: 85, change: '+3' },
	{ rank: 6, agency: 'Your agency', score: 82, change: '+5', highlight: true },
	{ rank: 7, agency: 'Brightpath Media', score: 80, change: '—' },
	{ rank: 8, agency: 'Echo Works', score: 78, change: '−2' }
]

/** Future Payload mapping: leaderboardTable. */
export function Leaderboard() {
	return (
		<section id='leaderboard' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
							Leaderboard
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
							Top agencies by composite score
						</h2>
					</div>
					<p className='text-sm [color:var(--mute)]'>
						Updated weekly · Q2 2026
					</p>
				</div>

				<div className='gb-reveal mt-10 overflow-x-auto rounded-xl border border-[var(--line)]'>
					<table className='w-full min-w-[28rem] text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b [background:color-mix(in_oklch,var(--green)_6%,var(--white))]'>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>#</th>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>
									Agency
								</th>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>
									Score
								</th>
								<th className='px-5 py-4 font-medium [color:var(--mute)]'>Δ</th>
							</tr>
						</thead>
						<tbody>
							{rows.map(r => (
								<tr
									key={r.rank}
									className={`border-[var(--line)] border-b ${r.highlight ? '[background:color-mix(in_oklch,var(--lime)_15%,var(--white))]' : ''}`}
								>
									<td className='px-5 py-4 tabular-nums [color:var(--mute)]'>
										{r.rank}
									</td>
									<td className='px-5 py-4 font-medium'>
										{r.agency}
										{r.highlight ? (
											<span className='ml-2 text-xs [color:var(--green)]'>
												(you)
											</span>
										) : null}
									</td>
									<td className='px-5 py-4 font-[family-name:var(--font-display)] font-bold tabular-nums [color:var(--green)]'>
										{r.score}
									</td>
									<td className='px-5 py-4 tabular-nums [color:var(--mute)]'>
										{r.change}
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
