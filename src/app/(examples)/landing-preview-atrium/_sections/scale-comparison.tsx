const floors = ['Ground', 'Gallery', 'Office', 'Penthouse', 'Crown']

/** Future Payload mapping: scaleComparison. */
export function ScaleComparison() {
	return (
		<section className='px-5 py-20 [background:color-mix(in_oklch,var(--ink)_4%,var(--white))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='at-reveal text-xs uppercase tracking-[0.28em] [color:var(--concrete)]'>
					Human scale
				</p>
				<h2 className='at-reveal mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4vw,3rem)] uppercase leading-[1.02]'>
					Proportion, felt
				</h2>

				<div className='at-reveal mt-14 flex flex-col items-center gap-10 sm:flex-row sm:items-end sm:justify-center sm:gap-16'>
					{/* human figure */}
					<div className='flex flex-col items-center'>
						<svg
							viewBox='0 0 48 120'
							role='img'
							aria-label='Human figure silhouette, 1.75 metres'
							className='h-28 w-12 sm:h-36 sm:w-14'
						>
							<circle cx='24' cy='14' r='10' fill='var(--ink)' />
							<line
								x1='24'
								y1='24'
								x2='24'
								y2='72'
								stroke='var(--ink)'
								strokeWidth='4'
								strokeLinecap='round'
							/>
							<line
								x1='24'
								y1='36'
								x2='8'
								y2='58'
								stroke='var(--ink)'
								strokeWidth='3'
								strokeLinecap='round'
							/>
							<line
								x1='24'
								y1='36'
								x2='40'
								y2='58'
								stroke='var(--ink)'
								strokeWidth='3'
								strokeLinecap='round'
							/>
							<line
								x1='24'
								y1='72'
								x2='12'
								y2='110'
								stroke='var(--ink)'
								strokeWidth='3'
								strokeLinecap='round'
							/>
							<line
								x1='24'
								y1='72'
								x2='36'
								y2='110'
								stroke='var(--ink)'
								strokeWidth='3'
								strokeLinecap='round'
							/>
						</svg>
						<span className='mt-3 text-xs uppercase tracking-widest [color:var(--concrete)]'>
							1.75 m
						</span>
					</div>

					{/* building */}
					<div className='flex flex-col items-center'>
						<div className='relative flex h-48 w-24 items-end sm:h-64 sm:w-28'>
							<div className='flex h-full w-full flex-col border-2 border-[var(--ink)] [background:var(--white)]'>
								{floors.map(f => (
									<div
										key={f}
										className='flex-1 border-[var(--line)] border-t first:border-t-0'
									>
										<span className='sr-only'>{f}</span>
									</div>
								))}
							</div>
							<div className='absolute -top-1 left-1/2 h-3 w-8 -translate-x-1/2 border-2 border-[var(--ink)] border-b-0 [background:var(--gold)]' />
						</div>
						<span className='mt-3 text-xs uppercase tracking-widest [color:var(--concrete)]'>
							48 m · 14 storeys
						</span>
					</div>
				</div>

				<p className='at-reveal mx-auto mt-12 max-w-lg text-center text-sm leading-relaxed [color:var(--concrete)]'>
					We design at the scale of the body first — then let the building rise
					around the gesture of a single person standing in morning light.
				</p>
			</div>
		</section>
	)
}
