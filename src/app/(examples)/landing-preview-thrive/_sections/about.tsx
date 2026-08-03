/** Future Payload mapping: aboutCoach. */
export function About() {
	return (
		<section
			id='about'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--wheat)_40%,var(--sage))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2'>
				<div className='th-reveal aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--line)]'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/thrive-coach/600/750'
						alt='Rachel Morrison, founder of Thrive coaching'
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='th-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						About Rachel
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Former CSO. Certified executive coach. Still learning.
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Rachel Morrison spent eight years as Chief Sustainability Officer at
						a FTSE 250 before training as an executive coach. She founded Thrive
						because she saw too many talented leaders struggle alone with
						responsibility they never asked for.
					</p>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						She holds an MSc in Environmental Policy, ICF PCC certification, and
						has coached leaders across energy, retail, finance, and
						manufacturing.
					</p>
					<dl className='mt-8 grid grid-cols-2 gap-4 text-sm'>
						<div>
							<dt className='[color:var(--mute)]'>Based in</dt>
							<dd className='mt-1 font-medium'>London & remote</dd>
						</div>
						<div>
							<dt className='[color:var(--mute)]'>Languages</dt>
							<dd className='mt-1 font-medium'>English, French</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	)
}
