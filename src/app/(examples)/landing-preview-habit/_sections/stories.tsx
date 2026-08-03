const stories = [
	{
		name: 'Maya R.',
		role: 'Teacher, Portland',
		quote:
			'I stopped feeling guilty about not doing everything. Three habits, six months, and I’ve cut my footprint by a third.',
		impact: '−412 kg CO₂e',
		seed: 'habit-maya'
	},
	{
		name: 'James & Priya K.',
		role: 'Young family, Manchester',
		quote:
			'Household mode got our kids involved without the nagging. They compete for streaks now.',
		impact: '−890 kg CO₂e',
		seed: 'habit-family'
	},
	{
		name: 'Elena V.',
		role: 'Freelance designer, Barcelona',
		quote:
			'The savings tracker surprised me — I’ve saved €340 this year just from the consumption habits.',
		impact: '−156 kg CO₂e',
		seed: 'habit-elena'
	}
]

/** Future Payload mapping: storyCards. */
export function Stories() {
	return (
		<section
			id='stories'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--mint)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Member stories
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Real people. Real progress.
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{stories.map(s => (
						<article
							key={s.name}
							className='ha-reveal flex flex-col rounded-2xl border border-[var(--line)] p-6 [background:var(--cream)]'
						>
							<div className='flex items-center gap-3'>
								<div className='h-12 w-12 overflow-hidden rounded-full'>
									{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
									<img
										src={`https://picsum.photos/seed/${s.seed}/96/96`}
										alt={s.name}
										className='h-full w-full object-cover'
									/>
								</div>
								<div>
									<p className='font-medium [color:var(--ink)]'>{s.name}</p>
									<p className='text-xs [color:var(--mute)]'>{s.role}</p>
								</div>
							</div>
							<blockquote className='mt-4 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								&ldquo;{s.quote}&rdquo;
							</blockquote>
							<p className='mt-4 font-medium text-sm [color:var(--leaf)]'>
								{s.impact} total saved
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
