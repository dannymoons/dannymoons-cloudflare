const pillars = [
	{
		name: 'Governance',
		weight: '20%',
		desc: 'Mission, ethics, transparency, and stakeholder engagement in decision-making.',
		examples: ['Purpose clause', 'Board diversity', 'Impact reporting']
	},
	{
		name: 'Workers',
		weight: '20%',
		desc: 'Compensation, benefits, training, ownership, and workplace culture.',
		examples: ['Living wage', 'Health benefits', 'Career development']
	},
	{
		name: 'Community',
		weight: '20%',
		desc: 'Diversity, civic engagement, supply chain practices, and local impact.',
		examples: ['Supplier screening', 'Pro bono', 'Local hiring']
	},
	{
		name: 'Environment',
		weight: '20%',
		desc: 'Energy, water, waste, emissions, and environmental management systems.',
		examples: ['Carbon tracking', 'Renewable energy', 'Waste reduction']
	},
	{
		name: 'Customers',
		weight: '20%',
		desc: 'Product impact, ethical marketing, data privacy, and customer feedback.',
		examples: ['Product stewardship', 'Transparent pricing', 'Feedback loops']
	}
]

/** Future Payload mapping: standardsGrid. */
export function Standards() {
	return (
		<section id='standards' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						B Impact standards
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Five pillars. 80 points minimum. Zero shortcuts.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						The B Impact Assessment evaluates your entire business — not just a
						single product or department. Beacon helps you score across all five
						impact areas.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{pillars.map(p => (
						<article
							key={p.name}
							className='be-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
									{p.name}
								</h3>
								<span className='text-xs [color:var(--gold)]'>{p.weight}</span>
							</div>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{p.desc}
							</p>
							<ul className='mt-4 flex flex-wrap gap-2'>
								{p.examples.map(e => (
									<li
										key={e}
										className='rounded-sm px-2 py-0.5 text-xs [background:color-mix(in_oklch,var(--forest)_8%,var(--cream))] [color:var(--forest)]'
									>
										{e}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
