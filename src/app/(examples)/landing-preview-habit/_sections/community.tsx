/** Future Payload mapping: communityBlock. */
export function Community() {
	return (
		<section
			id='community'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
					<div className='ha-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
							Community
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							You&apos;re not doing this alone.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Join local challenges, swap tips in topic forums, and celebrate
							milestones with people who get it — without the performative
							Instagram energy.
						</p>
						<ul className='mt-6 space-y-3 text-sm [color:var(--mute)]'>
							<li>🌍 Monthly global challenges with collective impact goals</li>
							<li>🏘️ City-based groups for local swap meets and repair cafés</li>
							<li>🎓 Mentor programme for members past the 90-day mark</li>
							<li>💬 Moderated forums — supportive, never preachy</li>
						</ul>
					</div>

					<div className='ha-reveal grid grid-cols-2 gap-4'>
						<div className='rounded-2xl border border-[var(--line)] p-5 [background:var(--mint)]'>
							<p className='font-[family-name:var(--font-display)] text-3xl [color:var(--leaf)]'>
								12k
							</p>
							<p className='mt-1 text-sm [color:var(--mute)]'>
								Active challenges
							</p>
						</div>
						<div className='rounded-2xl border border-[var(--line)] p-5 [background:var(--mint)]'>
							<p className='font-[family-name:var(--font-display)] text-3xl [color:var(--leaf)]'>
								48
							</p>
							<p className='mt-1 text-sm [color:var(--mute)]'>
								Countries represented
							</p>
						</div>
						<div className='col-span-2 overflow-hidden rounded-2xl border border-[var(--line)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/habit-community/640/320'
								alt='Habit community members at a local sustainability meetup'
								className='h-48 w-full object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
