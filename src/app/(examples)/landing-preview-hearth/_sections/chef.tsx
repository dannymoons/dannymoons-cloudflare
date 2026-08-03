/** Future Payload mapping: profileSplit. */
export function Chef() {
	return (
		<section
			id='chef'
			className='px-5 py-20 [background:var(--wood)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ht-reveal order-2 lg:order-1'>
					<span className='font-medium text-sm [color:var(--wheat)]'>
						Head chef
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--cream)]'>
						Marco van Dijk
					</h2>
					<p className='mt-6 text-base leading-relaxed [color:var(--cream)]/80'>
						Marco trained in pub kitchens and farm kitchens — never in a
						Michelin brigade, and he&apos;ll tell you that&apos;s the point. He
						built Hearth&apos;s menu around what Dutch growers actually harvest
						each week, not what a supplier catalogue promises year-round.
					</p>
					<p className='mt-4 text-base leading-relaxed [color:var(--cream)]/65'>
						You'll find him at the oven most nights, flour on his apron, arguing
						with Linde about whether the carrots need more char. His rule: if it
						traveled more than thirty minutes to get here, it doesn't belong on
						the plate.
					</p>
					<p className='mt-6 text-sm [color:var(--wheat)]'>
						Author of <em className='italic'>The Hearth Table</em> · Guest on
						AVROTROS Buren van de Brand
					</p>
				</div>
				<div className='ht-reveal order-1 aspect-[4/5] overflow-hidden rounded-sm lg:order-2'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/hearth-chef/800/1000'
						alt='Head chef Marco van Dijk at the wood-fired oven'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
