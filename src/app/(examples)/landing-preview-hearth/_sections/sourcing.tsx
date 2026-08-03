const farms = [
	{
		name: 'De Lente Tuin',
		distance: '8 km',
		produce: 'Leafy greens, herbs, edible flowers',
		seed: 'hearth-farm1'
	},
	{
		name: 'Westbroek Biologisch',
		distance: '14 km',
		produce: 'Root vegetables, brassicas',
		seed: 'hearth-farm2'
	},
	{
		name: 'Kaasboerderij Het Weiland',
		distance: '22 km',
		produce: 'Aged gouda, goat cheese, butter',
		seed: 'hearth-farm3'
	},
	{
		name: 'Waterland Vissers',
		distance: '18 km',
		produce: 'Line-caught North Sea fish',
		seed: 'hearth-farm4'
	},
	{
		name: 'Amstel Varkens',
		distance: '11 km',
		produce: 'Pasture-raised pork, bacon',
		seed: 'hearth-farm5'
	},
	{
		name: 'Brouwerij De Koren',
		distance: '6 km',
		produce: 'Heritage grains, flour, beer',
		seed: 'hearth-farm6'
	}
]

/** Future Payload mapping: partnerList. */
export function Sourcing() {
	return (
		<section
			id='sourcing'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal mb-10 max-w-xl'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Local sourcing
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						From farms within a morning&apos;s drive
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						We pick up most produce ourselves. The map is approximate — farms
						don&apos;t always have street addresses, but they know where to find
						us.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					<div className='ht-reveal relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line)] [background:var(--wheat)]/40'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/hearth-map/900/675'
							alt='Stylized map of local farm partners around Amsterdam'
							className='h-full w-full object-cover opacity-90'
						/>
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='rounded-full border-2 border-[var(--ember)] bg-[var(--cream)]/95 px-5 py-3 text-center shadow-sm'>
								<p className='font-[family-name:var(--font-display)] text-lg [color:var(--wood)]'>
									Hearth
								</p>
								<p className='text-xs [color:var(--mute)]'>
									Kinkerstraat, Amsterdam
								</p>
							</div>
						</div>
					</div>

					<ul className='divide-y divide-[var(--line)]'>
						{farms.map(f => (
							<li
								key={f.name}
								className='ht-reveal flex gap-4 py-5 first:pt-0 last:pb-0'
							>
								<div className='h-14 w-14 shrink-0 overflow-hidden rounded-sm'>
									{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
									<img
										src={`https://picsum.photos/seed/${f.seed}/112/112`}
										alt=''
										className='h-full w-full object-cover'
									/>
								</div>
								<div className='min-w-0 flex-1'>
									<div className='flex flex-wrap items-baseline justify-between gap-2'>
										<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--wood)]'>
											{f.name}
										</h3>
										<span className='text-sm [color:var(--ember)]'>
											{f.distance}
										</span>
									</div>
									<p className='mt-1 text-sm [color:var(--mute)]'>
										{f.produce}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
