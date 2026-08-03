const cases = [
	{
		client: 'Field Notes Co.',
		result: '−78% page weight, 0.09g CO₂ per visit',
		seed: 'offset-c1'
	},
	{
		client: 'Harbor Mutual',
		result: 'Migrated 240 pages to static in six weeks',
		seed: 'offset-c2'
	},
	{
		client: 'Northwind Journal',
		result: '98 Lighthouse across mobile and desktop',
		seed: 'offset-c3'
	}
]

/** Future Payload mapping: caseStudyCards. */
export function CaseStudies() {
	return (
		<section id='work' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					Selected work
				</h2>
				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{cases.map(c => (
						<article
							key={c.seed}
							className='of-reveal group overflow-hidden rounded-2xl border border-[var(--line)]'
						>
							<div className='aspect-[16/11] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview */}
								<img
									src={`https://picsum.photos/seed/${c.seed}/700/480`}
									alt={c.client}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='p-6'>
								<p className='text-xs uppercase tracking-widest [color:var(--forest)]'>
									{c.client}
								</p>
								<p className='mt-2 font-[family-name:var(--font-display)] text-xl'>
									{c.result}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
