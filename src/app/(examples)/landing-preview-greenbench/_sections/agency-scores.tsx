const scores = [
	{ category: 'Web hosting & CDN', score: 82, weight: '32%' },
	{ category: 'Media buying', score: 64, weight: '28%' },
	{ category: 'Video production', score: 71, weight: '18%' },
	{ category: 'Office & travel', score: 88, weight: '12%' },
	{ category: 'Print & physical', score: 55, weight: '10%' }
]

/** Future Payload mapping: scoreBreakdown. */
export function AgencyScores() {
	return (
		<section
			id='agency-scores'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--green)_4%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Agency scores
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						Composite score across five emission categories
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Each category is weighted by typical agency spend mix. Scores update
						monthly as new project data flows in.
					</p>
				</div>

				<div className='gb-reveal mt-12 space-y-4'>
					{scores.map(s => (
						<div
							key={s.category}
							className='rounded-xl border border-[var(--line)] p-5 [background:var(--white)]'
						>
							<div className='flex items-center justify-between gap-4'>
								<div>
									<p className='font-medium text-sm'>{s.category}</p>
									<p className='text-xs [color:var(--mute)]'>
										Weight: {s.weight}
									</p>
								</div>
								<span className='font-[family-name:var(--font-display)] font-bold text-2xl tabular-nums [color:var(--green)]'>
									{s.score}
								</span>
							</div>
							<div className='mt-3 h-2 overflow-hidden rounded-full [background:color-mix(in_oklch,var(--green)_10%,var(--white))]'>
								<div
									className='h-full rounded-full [background:var(--green)]'
									style={{ width: `${s.score}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
