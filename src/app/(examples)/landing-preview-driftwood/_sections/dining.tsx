/** Future Payload mapping: diningFeature (terrace restaurant). */
export function Dining() {
	return (
		<section id='dining' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
					<figure className='dw-reveal relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/driftwood-dining/800/1000'
							alt='Terrace table with Mediterranean dishes and sea view'
							className='h-full w-full object-cover'
						/>
						<div
							aria-hidden
							className='absolute inset-0'
							style={{
								background:
									'linear-gradient(to top, oklch(0.28 0.04 250 / 0.35), transparent 50%)'
							}}
						/>
					</figure>

					<div className='dw-reveal'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
							Casa Mar
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
							Fire, olive oil, and the tide
						</h2>
						<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Our terrace kitchen works with fishermen who moor before dawn.
							Grilled octopus, wood-fired bread, and wines from hillside
							vineyards poured as the sun drops behind the headland.
						</p>
						<dl className='mt-8 space-y-4 border-[var(--line)] border-t pt-8 text-sm'>
							<div className='flex justify-between gap-4'>
								<dt className='[color:var(--mute)]'>Breakfast</dt>
								<dd className='font-medium [color:var(--ink)]'>
									07:30 – 11:00
								</dd>
							</div>
							<div className='flex justify-between gap-4'>
								<dt className='[color:var(--mute)]'>Lunch</dt>
								<dd className='font-medium [color:var(--ink)]'>
									12:30 – 15:30
								</dd>
							</div>
							<div className='flex justify-between gap-4'>
								<dt className='[color:var(--mute)]'>Dinner</dt>
								<dd className='font-medium [color:var(--ink)]'>
									19:00 – 23:00
								</dd>
							</div>
						</dl>
						<a
							href='#bookings'
							className='mt-8 inline-flex min-h-12 items-center justify-center px-8 font-medium text-sm uppercase tracking-[0.16em] transition-opacity [background:var(--sea)] [color:var(--linen)] hover:opacity-90'
						>
							Reserve a table
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
