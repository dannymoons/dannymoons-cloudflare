/** Future Payload mapping: scienceBlock. */
export function Science() {
	return (
		<section id='science' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div className='ha-reveal overflow-hidden rounded-2xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/habit-science/640/480'
							alt='Behavioural scientist reviewing Habit app methodology'
							className='h-full w-full object-cover'
						/>
					</div>

					<div className='ha-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
							Backed by science
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Behaviour change, not behaviour lecture.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Habit&apos;s methodology is developed with behavioural scientists
							from Stanford and UCL. We use implementation intentions, streak
							psychology, and social proof — proven levers for lasting habit
							formation.
						</p>
						<div className='mt-8 grid gap-4 sm:grid-cols-2'>
							<div className='rounded-2xl border border-[var(--line)] p-4 [background:var(--mint)]'>
								<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--leaf)]'>
									73%
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>
									of members maintain 3+ habits after 6 months
								</p>
							</div>
							<div className='rounded-2xl border border-[var(--line)] p-4 [background:var(--mint)]'>
								<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--leaf)]'>
									2.1×
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>
									more likely to sustain vs. generic eco tips
								</p>
							</div>
						</div>
						<p className='mt-6 text-sm [color:var(--mute)]'>
							Published in{' '}
							<em className='[color:var(--ink)]'>
								Journal of Environmental Psychology
							</em>{' '}
							(2024) · Peer-reviewed impact methodology
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
