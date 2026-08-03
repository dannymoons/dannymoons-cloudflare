const experiences = [
	{
		title: 'Sunset sail',
		time: 'Departs 17:30',
		seed: 'dw-sail',
		desc: 'A wooden llaüt along the cove — cava, local cheese, and the sky turning copper.'
	},
	{
		title: 'Hidden cove swim',
		time: 'Morning · Guided',
		seed: 'dw-cove',
		desc: 'Kayak to a limestone inlet only reachable at low tide. Towels and espresso on return.'
	},
	{
		title: 'Coastal walk & wine',
		time: 'Half day',
		seed: 'dw-wine',
		desc: 'Clifftop path to a family vineyard. Tasting of garnacha and olive oil pressed on site.'
	}
]

/** Future Payload mapping: experienceCards (boat, sunset, coast). */
export function Experiences() {
	return (
		<section id='experiences' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='dw-reveal mb-12 max-w-xl'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
						Experiences
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						The coast, on your terms
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{experiences.map(e => (
						<article key={e.title} className='dw-reveal group'>
							<div className='aspect-[16/10] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${e.seed}/700/440`}
									alt={e.title}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
							</div>
							<div className='mt-5'>
								<div className='flex items-baseline justify-between gap-3'>
									<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
										{e.title}
									</h3>
									<span className='text-[0.65rem] uppercase tracking-[0.14em] [color:var(--sea)]'>
										{e.time}
									</span>
								</div>
								<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
									{e.desc}
								</p>
							</div>
						</article>
					))}
				</div>

				<p className='dw-reveal mt-10 text-center text-sm [color:var(--mute)]'>
					All experiences include hotel guests · Private charters on request
				</p>
			</div>
		</section>
	)
}
