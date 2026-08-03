const gear = [
	{
		item: 'Race bib + chip',
		note: 'Included with entry',
		essential: true
	},
	{
		item: 'Trail shoes',
		note: 'Grip for Relay Trail & Ultra',
		essential: true
	},
	{
		item: 'Hydration vest',
		note: 'Mandatory 80K · Recommended 42K trail',
		essential: true
	},
	{
		item: 'Headlamp',
		note: 'Ultra pre-dawn start',
		essential: false
	},
	{
		item: 'Emergency blanket',
		note: 'Packed at all aid stations',
		essential: false
	},
	{
		item: 'Relay tee',
		note: 'Orange/black — collect at expo',
		essential: false
	}
]

/** Future Payload mapping: gearChecklist. */
export function Gear() {
	return (
		<section id='gear' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
					<div>
						<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
							Gear
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
							Pack list
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Mandatory kit checked at bib pickup. Trail and ultra races enforce
							vest and cup rules — no disposable cups on course.
						</p>
						<div className='mt-8 aspect-[4/3] overflow-hidden rounded-sm'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/relay-gear/700/525'
								alt='Trail running hydration vest and race bib laid out for Relay event'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>

					<ul className='divide-y divide-[var(--line)] border-[var(--line)] border-y'>
						{gear.map(g => (
							<li
								key={g.item}
								className='rl-reveal flex items-start justify-between gap-4 py-5'
							>
								<div>
									<p className='font-medium [color:var(--black)]'>{g.item}</p>
									<p className='mt-1 text-sm [color:var(--mute)]'>{g.note}</p>
								</div>
								{g.essential ? (
									<span className='shrink-0 rounded-sm px-2 py-1 font-medium text-[10px] uppercase tracking-[0.14em] [background:var(--orange)] [color:var(--black)]'>
										Required
									</span>
								) : (
									<span className='shrink-0 text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
										Optional
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
