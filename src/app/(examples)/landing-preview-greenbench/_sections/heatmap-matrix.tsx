const agencies = ['You', 'Studio A', 'Studio B', 'Studio C', 'Studio D']
const metrics = ['Page g', 'Hosting', 'Assets', 'CDN', 'Reports']
const scores = [
	[92, 88, 84, 91, 95],
	[78, 72, 80, 68, 74],
	[65, 58, 70, 62, 55],
	[82, 76, 79, 85, 71],
	[54, 48, 52, 45, 60]
]

function cellColor(score: number): string {
	if (score >= 85) return 'var(--green)'
	if (score >= 70) return 'color-mix(in oklch, var(--green) 55%, var(--lime))'
	if (score >= 55) return 'var(--lime)'
	return 'color-mix(in oklch, var(--mute) 30%, var(--white))'
}

/** Future Payload mapping: heatmapMatrix (dense data grid). */
export function HeatmapMatrix() {
	return (
		<section
			id='heatmap-matrix'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--lime)_6%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal mb-10 max-w-2xl'>
					<p className='font-mono text-[10px] uppercase tracking-[0.28em] [color:var(--green)]'>
						Competitive matrix
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Dense enough for your ops lead. Clear enough for your pitch deck.
					</h2>
				</div>

				<div className='gb-reveal overflow-x-auto rounded-xl border border-[var(--line)] [background:var(--white)]'>
					<table className='w-full min-w-[32rem] border-collapse font-mono text-[11px] sm:text-xs'>
						<thead>
							<tr className='border-[var(--line)] border-b'>
								<th className='p-3 text-left font-medium [color:var(--mute)] sm:p-4'>
									Agency
								</th>
								{metrics.map(m => (
									<th
										key={m}
										className='p-3 text-center font-medium [color:var(--mute)] sm:p-4'
									>
										{m}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{agencies.map((agency, row) => (
								<tr
									key={agency}
									className={`border-[var(--line)] border-b last:border-0 ${row === 0 ? 'font-bold' : ''}`}
								>
									<td className='p-3 sm:p-4'>{agency}</td>
									{scores[row].map((score, col) => (
										<td
											key={`${agency}-${metrics[col]}`}
											className='p-1.5 sm:p-2'
										>
											<div
												className='flex h-10 items-center justify-center rounded-md tabular-nums transition-transform hover:scale-105 sm:h-11'
												style={{
													background: cellColor(score),
													color: score >= 70 ? 'var(--white)' : 'var(--ink)'
												}}
											>
												{score}
											</div>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
}
