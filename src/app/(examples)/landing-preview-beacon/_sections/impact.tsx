/** Future Payload mapping: impactMetrics. */
export function Impact() {
	const metrics = [
		{ label: 'Median B Score achieved', value: '92.4', unit: 'points' },
		{
			label: 'Employee retention improvement',
			value: '+18%',
			unit: 'post-cert'
		},
		{ label: 'RFP win rate increase', value: '+34%', unit: 'impact-led bids' },
		{
			label: 'Carbon reduction (clients avg.)',
			value: '−26%',
			unit: 'within 2 yrs'
		}
	]

	return (
		<section id='impact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div className='be-reveal overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/beacon-impact/640/480'
							alt='Impact dashboard showing B Corp score improvements over time'
							className='h-full w-full object-cover'
						/>
					</div>

					<div className='be-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
							Measurable impact
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Certification that delivers business results.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Our clients don&apos;t just certify — they transform. Beacon
							tracks outcomes across score improvement, talent retention, and
							commercial performance post-certification.
						</p>

						<div className='mt-8 grid gap-4 sm:grid-cols-2'>
							{metrics.map(m => (
								<div
									key={m.label}
									className='rounded-sm border border-[var(--line)] p-4'
								>
									<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--forest)]'>
										{m.value}
									</p>
									<p className='mt-1 text-xs [color:var(--mute)]'>
										{m.label} · {m.unit}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
