const features = [
	'24 redesigned inpatient rooms with nature-themed murals',
	'Dedicated play therapy studio & sensory quiet room',
	'6 family ensuite rooms for overnight stays',
	'Wheelchair-accessible garden courtyard',
	'Teen lounge with privacy pods and study nooks',
	'Staff wellbeing room & parent support hub'
]

/** Future Payload mapping: richTextSplit. */
export function Ward() {
	return (
		<section id='ward' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='bl-reveal order-2 lg:order-1'>
					<p className='font-semibold text-sm [color:var(--petal)]'>The wing</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08] [color:var(--ink)]'>
						Riverside Bloom Wing
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						A 14,000 sq ft transformation of the third-floor oncology unit —
						designed with children, families, and clinical staff at every stage.
						Construction begins autumn 2026.
					</p>
					<ul className='mt-6 flex flex-col gap-3'>
						{features.map(f => (
							<li
								key={f}
								className='flex items-start gap-3 text-sm [color:var(--ink)]'
							>
								<span
									aria-hidden
									className='mt-1.5 h-2 w-2 shrink-0 rounded-full [background:var(--leaf)]'
								/>
								{f}
							</li>
						))}
					</ul>
					<a
						href='#donate'
						className='mt-8 inline-flex min-h-12 items-center rounded-full px-7 font-semibold text-sm text-white transition-opacity [background:var(--leaf)] hover:opacity-90'
					>
						Fund a room — from £25,000
					</a>
				</div>

				<div className='bl-reveal order-1 lg:order-2'>
					<div className='aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white shadow-lg'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/bloom-ward/800/600'
							alt='Architectural rendering of the Bloom pediatric wing with garden courtyard'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
