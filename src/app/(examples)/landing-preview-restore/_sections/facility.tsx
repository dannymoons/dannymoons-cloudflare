/** Future Payload mapping: splitFeature. */
export function Facility() {
	return (
		<section
			id='facility'
			className='px-5 py-20 [background:var(--sky)]/20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='rs-reveal order-2 lg:order-1'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Our clinic
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.08]'>
						A space designed for recovery
					</h2>
					<p className='mt-6 leading-relaxed [color:var(--mute)]'>
						2,400 sq ft of purpose-built treatment rooms, a fully equipped
						gymnasium, hydrotherapy pool, and private assessment suites — all
						designed to support progressive rehabilitation.
					</p>
					<ul className='mt-8 space-y-4 text-sm [color:var(--mute)]'>
						<li className='flex gap-4 border-[var(--line)] border-b pb-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--coral)]'>
								01
							</span>
							<span>Force plates &amp; 3D gait analysis lab</span>
						</li>
						<li className='flex gap-4 border-[var(--line)] border-b pb-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--coral)]'>
								02
							</span>
							<span>Anti-gravity treadmill and isokinetic testing</span>
						</li>
						<li className='flex gap-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--coral)]'>
								03
							</span>
							<span>Private treatment rooms with natural light</span>
						</li>
					</ul>
				</div>

				<div className='rs-reveal order-1 grid grid-cols-2 gap-3 lg:order-2'>
					<div className='aspect-[4/5] overflow-hidden rounded-2xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/restore-facility-a/500/625'
							alt='Rehabilitation gym with modern equipment'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='mt-6 aspect-[4/5] overflow-hidden rounded-2xl'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/restore-facility-b/500/625'
							alt='Bright treatment room in the clinic'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
