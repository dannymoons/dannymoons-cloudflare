const lunch = [
	{
		name: 'Market soup & sourdough',
		desc: 'Whatever the growers sent — always vegetarian',
		price: '€9'
	},
	{
		name: 'Wood-oven tart',
		desc: 'Roasted roots, goat cheese, herb oil',
		price: '€14'
	},
	{
		name: 'Bistro burger',
		desc: 'Grass-fed beef, aged cheddar, house pickles',
		price: '€16'
	},
	{
		name: 'Garden bowl',
		desc: 'Quinoa, seasonal veg, soft egg, miso dressing',
		price: '€15'
	}
]

const dinner = [
	{
		name: 'Fire-roasted chicken',
		desc: 'Half bird, pan jus, butter potatoes',
		price: '€24'
	},
	{
		name: 'Dutch catch',
		desc: 'Line-caught fish, fennel, brown butter',
		price: '€26'
	},
	{
		name: 'Braised short rib',
		desc: '72-hour, celery root purée, gremolata',
		price: '€28'
	},
	{
		name: 'Field mushroom risotto',
		desc: 'Foraged mix, parmesan, truffle oil',
		price: '€22'
	}
]

/** Future Payload mapping: menuGrouped. */
export function Menu() {
	return (
		<section id='menu' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-4xl'>
				<div className='ht-reveal mb-12 text-center'>
					<span className='font-medium text-sm [color:var(--ember)]'>Menu</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						Lunch &amp; dinner, written fresh
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Chalkboard changes daily · Ask about allergens at the bar
					</p>
				</div>

				<div className='grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2'>
					<div className='ht-reveal'>
						<h3 className='border-[var(--line)] border-b pb-3 font-[family-name:var(--font-display)] text-xl [color:var(--rust)]'>
							Lunch
							<span className='ml-2 font-normal text-sm [color:var(--mute)]'>
								11:30 – 15:00
							</span>
						</h3>
						<ul className='mt-4 divide-y divide-[var(--line)]'>
							{lunch.map(item => (
								<li
									key={item.name}
									className='flex flex-col gap-1 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6'
								>
									<div>
										<p className='font-[family-name:var(--font-display)] text-lg [color:var(--wood)]'>
											{item.name}
										</p>
										<p className='mt-1 text-sm [color:var(--mute)]'>
											{item.desc}
										</p>
									</div>
									<span className='shrink-0 font-medium [color:var(--ember)]'>
										{item.price}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className='ht-reveal'>
						<h3 className='border-[var(--line)] border-b pb-3 font-[family-name:var(--font-display)] text-xl [color:var(--rust)]'>
							Dinner
							<span className='ml-2 font-normal text-sm [color:var(--mute)]'>
								17:30 – 22:00
							</span>
						</h3>
						<ul className='mt-4 divide-y divide-[var(--line)]'>
							{dinner.map(item => (
								<li
									key={item.name}
									className='flex flex-col gap-1 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6'
								>
									<div>
										<p className='font-[family-name:var(--font-display)] text-lg [color:var(--wood)]'>
											{item.name}
										</p>
										<p className='mt-1 text-sm [color:var(--mute)]'>
											{item.desc}
										</p>
									</div>
									<span className='shrink-0 font-medium [color:var(--ember)]'>
										{item.price}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
