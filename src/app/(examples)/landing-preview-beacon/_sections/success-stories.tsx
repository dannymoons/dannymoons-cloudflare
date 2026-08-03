const stories = [
	{
		company: 'Verdant Foods Co.',
		industry: 'Food & beverage',
		score: '96.2',
		quote:
			'Beacon turned a daunting 300-question assessment into a structured improvement programme. We certified 4 months ahead of schedule.',
		seed: 'beacon-verdant'
	},
	{
		company: 'Lumen Financial',
		industry: 'Financial services',
		score: '91.8',
		quote:
			'The legal amendment support alone was worth the investment. Our board understood exactly what stakeholder governance meant in practice.',
		seed: 'beacon-lumen'
	},
	{
		company: 'Atlas Manufacturing',
		industry: 'Industrial',
		score: '88.4',
		quote:
			'We went from 62 projected to 88 verified. Beacon identified environmental quick wins we had completely overlooked.',
		seed: 'beacon-atlas'
	}
]

/** Future Payload mapping: successStoryGrid. */
export function SuccessStories() {
	return (
		<section
			id='success-stories'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--forest)_4%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Success stories
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						214 certifications. 97% first-attempt pass rate.
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{stories.map(s => (
						<article
							key={s.company}
							className='be-reveal flex flex-col rounded-sm border border-[var(--line)] p-6 [background:var(--cream)]'
						>
							<div className='flex items-center gap-3'>
								<div className='h-10 w-10 overflow-hidden rounded-sm'>
									{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
									<img
										src={`https://picsum.photos/seed/${s.seed}/80/80`}
										alt={s.company}
										className='h-full w-full object-cover'
									/>
								</div>
								<div>
									<p className='font-medium [color:var(--ink)]'>{s.company}</p>
									<p className='text-xs [color:var(--mute)]'>{s.industry}</p>
								</div>
								<span className='ml-auto font-[family-name:var(--font-display)] text-lg [color:var(--forest)]'>
									{s.score}
								</span>
							</div>
							<blockquote className='mt-4 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								&ldquo;{s.quote}&rdquo;
							</blockquote>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
