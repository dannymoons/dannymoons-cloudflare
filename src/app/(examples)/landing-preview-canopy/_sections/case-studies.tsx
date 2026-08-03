const stories = [
	{
		brand: 'Terra Threads',
		result: 'Closed-loop textile programme — 100% post-consumer fibre recovery',
		seed: 'canopy-c1'
	},
	{
		brand: 'Harvest & Co.',
		result:
			'Regenerative grain supply across 12,000 hectares of restored prairie',
		seed: 'canopy-c2'
	},
	{
		brand: 'Loopware',
		result: 'Refill-first packaging model adopted by 3 major retailers',
		seed: 'canopy-c3'
	}
]

/** Future Payload mapping: caseStudyCards. */
export function CaseStudies() {
	return (
		<section id='stories' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='cp-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Regenerative stories
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						Brands healing what they harvest
					</h2>
				</div>
				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{stories.map(s => (
						<article
							key={s.seed}
							className='cp-reveal group overflow-hidden rounded-2xl border border-[var(--line)]'
						>
							<div className='aspect-[16/11] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/700/480`}
									alt={s.brand}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='p-6'>
								<p className='text-xs uppercase tracking-widest [color:var(--earth)]'>
									{s.brand}
								</p>
								<p className='mt-2 font-[family-name:var(--font-display)] text-xl'>
									{s.result}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
