/** Future Payload mapping: mediaText. */
export function Studio() {
	return (
		<section
			id='studio'
			className='grid grid-cols-1 gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16'
		>
			<div className='lg:col-span-5'>
				<div className='at-reveal aspect-[3/4] overflow-hidden [background:var(--line)]'>
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/atrium-studio/900/1200'
						alt='Atrium studio interior in Copenhagen'
						className='h-full w-full object-cover grayscale'
					/>
				</div>
			</div>

			<div className='flex flex-col justify-center lg:col-span-7'>
				<span className='at-reveal mb-6 text-xs uppercase tracking-[0.3em] [color:var(--gold)]'>
					The studio
				</span>
				<p className='at-reveal max-w-2xl font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em]'>
					A converted warehouse in Copenhagen&rsquo;s Nordhavn — where models,
					drawings and full-scale mock-ups share one open floor.
				</p>
				<p className='at-reveal mt-8 max-w-md text-sm leading-relaxed [color:var(--concrete)]'>
					Founded by three partners who met at the Royal Danish Academy, Atrium
					takes on twelve projects at a time. We work with local craftspeople
					and engineers who share our patience for getting the quiet details
					right.
				</p>
				<div className='at-reveal mt-10 flex flex-wrap gap-x-12 gap-y-6 border-[var(--line)] border-t pt-8'>
					<div>
						<div className='font-[family-name:var(--font-display)] font-bold text-3xl'>
							18
						</div>
						<div className='mt-1 text-xs uppercase tracking-[0.2em] [color:var(--concrete)]'>
							People
						</div>
					</div>
					<div>
						<div className='font-[family-name:var(--font-display)] font-bold text-3xl'>
							1
						</div>
						<div className='mt-1 text-xs uppercase tracking-[0.2em] [color:var(--concrete)]'>
							Studio
						</div>
					</div>
					<div>
						<div className='font-[family-name:var(--font-display)] font-bold text-3xl'>
							14
						</div>
						<div className='mt-1 text-xs uppercase tracking-[0.2em] [color:var(--concrete)]'>
							Years
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
