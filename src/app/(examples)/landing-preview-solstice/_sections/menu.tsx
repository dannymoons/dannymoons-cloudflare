const courses = [
	{
		course: 'Amuse',
		dish: 'Oyster, smoked bone marrow, pickled elderflower',
		price: '—'
	},
	{
		course: 'First',
		dish: 'Hand-dived scallop, fermented cucumber, verbena',
		price: '€28'
	},
	{
		course: 'Second',
		dish: 'Wild duck, beetroot ash, juniper jus',
		price: '€42'
	},
	{
		course: 'Third',
		dish: 'Aged ribeye, truffle soil, charred leek',
		price: '€58'
	},
	{
		course: 'Dessert',
		dish: 'Dark chocolate, burnt honey, gold leaf',
		price: '€24'
	}
]

/** Future Payload mapping: menuList. */
export function Menu() {
	return (
		<section id='menu' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<div className='so-reveal mb-12 text-center'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Tasting menu
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Five courses, one journey
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Seasonal menu · €185 per guest · Wine pairing available
					</p>
				</div>

				<ol className='divide-y divide-[var(--line)]'>
					{courses.map((item, i) => (
						<li
							key={item.course}
							className='so-reveal flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8'
						>
							<div className='flex items-baseline gap-4'>
								<span className='font-[family-name:var(--font-display)] text-lg [color:var(--gold)]'>
									{String(i + 1).padStart(2, '0')}
								</span>
								<div>
									<span className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
										{item.course}
									</span>
									<p className='mt-1 font-[family-name:var(--font-display)] text-lg italic [color:var(--cream)] sm:text-xl'>
										{item.dish}
									</p>
								</div>
							</div>
							<span className='pl-10 font-[family-name:var(--font-display)] text-lg [color:var(--gold)] sm:pl-0'>
								{item.price}
							</span>
						</li>
					))}
				</ol>

				<p className='so-reveal mt-10 text-center text-xs [color:var(--mute)]'>
					Dietary requirements accommodated with 48 hours notice
				</p>
			</div>
		</section>
	)
}
