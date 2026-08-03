const cases = [
	{
		client: 'Northwind Foods',
		sector: 'FMCG',
		headline: 'Rebuilt packaging claims after ASA inquiry',
		result: 'Zero regulatory flags in 18 months',
		seed: 'rootline-case-1'
	},
	{
		client: 'Meridian Bank',
		sector: 'Financial services',
		headline: 'Aligned retail marketing with TCFD disclosures',
		result: 'Board-approved ESG narrative in 10 weeks',
		seed: 'rootline-case-2'
	},
	{
		client: 'Volt Mobility',
		sector: 'Automotive',
		headline: 'Carbon-labeled launch campaign across 12 markets',
		result: '34% lift in consideration among eco-conscious buyers',
		seed: 'rootline-case-3'
	}
]

/** Future Payload mapping: caseStudyGrid. */
export function CaseStudies() {
	return (
		<section id='case-studies' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Case studies
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						Brands that chose rigor over rhetoric
					</h2>
				</div>

				<div className='mt-12 grid gap-8 lg:grid-cols-3'>
					{cases.map(c => (
						<article key={c.client} className='rl-reveal group'>
							<div className='aspect-[16/10] overflow-hidden rounded-sm border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${c.seed}/600/375`}
									alt={`${c.client} sustainability campaign`}
									className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
							</div>
							<p className='mt-4 text-xs uppercase tracking-[0.2em] [color:var(--teal)]'>
								{c.sector}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl [color:var(--navy)]'>
								{c.client}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{c.headline}
							</p>
							<p className='mt-3 font-medium text-sm [color:var(--ink)]'>
								{c.result}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
