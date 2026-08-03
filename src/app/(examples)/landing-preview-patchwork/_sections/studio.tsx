/** Future Payload mapping: studioShowcase. */
export function Studio() {
	return (
		<section id='studio' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal grid gap-8 lg:grid-cols-2 lg:items-center'>
					<div className='grid grid-cols-2 gap-3'>
						<div className='aspect-square overflow-hidden border-2 border-[var(--ink)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/patchwork-studio-1/400/400'
								alt='Patchwork studio workspace'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='aspect-square overflow-hidden border-2 border-[var(--ink)] [background:var(--green)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/patchwork-studio-2/400/400'
								alt='Creative team at work'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='col-span-2 aspect-[2/1] overflow-hidden border-2 border-[var(--ink)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/patchwork-studio-3/800/400'
								alt='Patchwork studio meeting room'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>
					<div>
						<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
							The studio
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] uppercase tracking-tight'>
							Amsterdam · 28 people · B Corp certified
						</h2>
						<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Our canal-side studio runs on renewable energy, serves only
							plant-based catering, and tracks the carbon footprint of every
							project in real time. Clients visit for workshops; we travel for
							shoots.
						</p>
						<dl className='mt-8 grid grid-cols-2 gap-4 text-sm'>
							<div className='border-2 border-[var(--ink)] p-4 [background:var(--pink)]'>
								<dt className='text-xs uppercase tracking-wide'>Founded</dt>
								<dd className='mt-1 font-[family-name:var(--font-display)] text-xl uppercase'>
									2016
								</dd>
							</div>
							<div className='border-2 border-[var(--ink)] p-4 [background:var(--yellow)]'>
								<dt className='text-xs uppercase tracking-wide'>
									B Corp score
								</dt>
								<dd className='mt-1 font-[family-name:var(--font-display)] text-xl uppercase'>
									94.2
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}
