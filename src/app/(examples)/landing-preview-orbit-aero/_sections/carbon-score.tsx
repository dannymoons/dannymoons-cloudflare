const grades = [
	{
		site: 'northwind.studio',
		client: 'Northwind Studio',
		grade: 'A',
		co2: 0.28,
		score: 92,
		color: 'var(--cyan)'
	},
	{
		site: 'verdefoods.com',
		client: 'Verde Foods',
		grade: 'A',
		co2: 0.24,
		score: 95,
		color: 'var(--cyan)'
	},
	{
		site: 'atlaslegal.nl',
		client: 'Atlas Legal',
		grade: 'B+',
		co2: 0.33,
		score: 84,
		color: 'var(--blue)'
	},
	{
		site: 'harborand.co',
		client: 'Harbor & Co.',
		grade: 'B',
		co2: 0.41,
		score: 76,
		color: 'var(--blue)'
	},
	{
		site: 'shop.lumen.io',
		client: 'Lumen Retail',
		grade: 'C',
		co2: 0.52,
		score: 61,
		color: 'oklch(0.68 0.12 85)'
	},
	{
		site: 'pulsemedia.tv',
		client: 'Pulse Media',
		grade: 'D',
		co2: 0.67,
		score: 42,
		color: 'oklch(0.62 0.14 35)'
	}
]

const scale = [
	{ letter: 'A', range: '< 0.30g', color: 'var(--cyan)' },
	{ letter: 'B', range: '0.30 – 0.45g', color: 'var(--blue)' },
	{ letter: 'C', range: '0.45 – 0.60g', color: 'oklch(0.68 0.12 85)' },
	{ letter: 'D', range: '0.60 – 0.75g', color: 'oklch(0.62 0.14 35)' },
	{ letter: 'F', range: '> 0.75g', color: 'oklch(0.55 0.16 25)' }
]

/** Future Payload mapping: carbonScoreGrades. */
export function CarbonScore() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start'>
					<div>
						<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Carbon score
						</span>
						<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							A–F letter grades per site
						</h2>
						<p className='oa-reveal mt-3 text-sm leading-relaxed [color:var(--mute)]'>
							Instant carbon literacy for clients — letter grades derived from
							grams CO₂ per visit, benchmarked against agency and industry
							thresholds.
						</p>

						<div className='oa-reveal mt-8 rounded-2xl border border-[var(--line)] bg-white/70 p-5 backdrop-blur-xl'>
							<p className='font-medium text-xs uppercase tracking-[0.16em] [color:var(--mute)]'>
								Grading scale
							</p>
							<ul className='mt-4 space-y-2'>
								{scale.map(s => (
									<li
										key={s.letter}
										className='flex items-center justify-between text-sm'
									>
										<span className='flex items-center gap-2'>
											<span
												className='grid h-7 w-7 place-items-center rounded-lg font-[family-name:var(--font-display)] font-bold text-sm'
												style={{
													color: s.color,
													background: `color-mix(in oklch, ${s.color} 12%, transparent)`
												}}
											>
												{s.letter}
											</span>
											<span className='[color:var(--mute)]'>{s.range}</span>
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='oa-reveal overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur-xl'>
						<div className='border-[var(--line)] border-b px-5 py-3.5'>
							<p className='font-medium text-xs [color:var(--mute)]'>
								Portfolio grades
							</p>
						</div>
						<ul className='divide-y divide-[var(--line)]'>
							{grades.map(g => (
								<li
									key={g.site}
									className='flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/80'
								>
									<span
										className='grid h-12 w-12 shrink-0 place-items-center rounded-xl font-[family-name:var(--font-display)] font-extrabold text-xl'
										style={{
											color: g.color,
											background: `color-mix(in oklch, ${g.color} 14%, white)`
										}}
									>
										{g.grade}
									</span>
									<div className='min-w-0 flex-1'>
										<p className='truncate font-[family-name:var(--font-display)] font-semibold'>
											{g.client}
										</p>
										<p className='truncate text-xs [color:var(--mute)]'>
											{g.site}
										</p>
									</div>
									<div className='hidden text-right sm:block'>
										<p className='font-[family-name:var(--font-display)] font-bold tabular-nums'>
											{g.co2.toFixed(2)}g
										</p>
										<p className='text-[10px] [color:var(--mute)]'>per visit</p>
									</div>
									<div
										className='hidden h-1.5 w-16 overflow-hidden rounded-full [background:var(--line)] sm:block'
										role='img'
										aria-label={`${g.client} carbon score: ${g.score} out of 100`}
									>
										<div
											className='h-full rounded-full'
											style={{
												width: `${g.score}%`,
												background: g.color
											}}
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
