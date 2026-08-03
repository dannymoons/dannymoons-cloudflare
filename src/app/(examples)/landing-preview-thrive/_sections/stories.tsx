const stories = [
	{
		name: 'Helena Roth',
		role: 'Chief Sustainability Officer, industrial group',
		quote:
			'I went from dreading board meetings to leading them. Thrive helped me find my voice on transition strategy.',
		seed: 'thrive-story-1'
	},
	{
		name: 'David Park',
		role: 'CEO, mid-market retailer',
		quote:
			'The coaching was the first time someone asked how I was handling the pressure — not just what our targets were.',
		seed: 'thrive-story-2'
	}
]

/** Future Payload mapping: clientStories. */
export function Stories() {
	return (
		<section id='stories' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Leader stories
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						From overwhelmed to grounded
					</h2>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-2'>
					{stories.map(s => (
						<article key={s.name} className='th-reveal flex gap-6'>
							<div className='h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/160/160`}
									alt={s.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<div>
								<p className='font-[family-name:var(--font-display)] text-lg italic leading-relaxed [color:var(--ink)]'>
									&ldquo;{s.quote}&rdquo;
								</p>
								<p className='mt-4 font-medium text-sm'>{s.name}</p>
								<p className='text-xs [color:var(--mute)]'>{s.role}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
