/** Future Payload mapping: richTextSplit. */
export function Story() {
	return (
		<section
			id='story'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--wheat)]/35 sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ht-reveal aspect-[4/3] overflow-hidden rounded-sm'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/hearth-story/900/675'
						alt='Hearth dining room with exposed brick and wooden beams'
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='ht-reveal'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Our story
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--wood)]'>
						A corner bistro since 2014
					</h2>
					<p className='mt-6 text-base leading-relaxed [color:var(--mute)]'>
						Hearth started when Marco and Linde converted an old bakery on
						Kinkerstraat into a place where neighbors could eat what grew within
						twenty kilometers. The wood oven from the bakery stayed — it still
						bakes our bread and roasts our Sunday chickens.
					</p>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Ten years on, we&apos;re still a one-room bistro with a chalkboard
						menu, a patio that fills up by six, and regulars who argue over the
						last slice of tart. Fine dining was never the plan. Good food, close
						to home, was.
					</p>
					<dl className='mt-8 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						<div>
							<dt className='text-xs [color:var(--mute)]'>Founded</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--rust)]'>
								2014
							</dd>
						</div>
						<div>
							<dt className='text-xs [color:var(--mute)]'>Farm partners</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--rust)]'>
								12
							</dd>
						</div>
						<div>
							<dt className='text-xs [color:var(--mute)]'>Seats</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--rust)]'>
								48
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	)
}
