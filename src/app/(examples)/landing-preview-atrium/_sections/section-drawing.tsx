/** Future Payload mapping: architecturalDiagram. */
export function SectionDrawing() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid items-end gap-10 lg:grid-cols-2 lg:gap-16'>
					<div>
						<p className='at-reveal text-xs uppercase tracking-[0.28em] [color:var(--concrete)]'>
							Section study
						</p>
						<h2 className='at-reveal mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,4vw,3rem)] uppercase leading-[1.02] tracking-[-0.02em]'>
							Light as structure
						</h2>
						<p className='at-reveal mt-6 max-w-md text-sm leading-relaxed [color:var(--concrete)]'>
							Every commission begins with a section drawing — how daylight
							penetrates, how mass meets void, how a building breathes through
							the seasons.
						</p>
					</div>
					<p className='at-reveal text-xs uppercase tracking-[0.2em] [color:var(--concrete)] lg:text-right'>
						Harbour House · Section A–A′
					</p>
				</div>

				<div className='at-reveal mt-12 overflow-hidden rounded-sm border border-[var(--line)] [background:var(--white)]'>
					<svg
						viewBox='0 0 800 360'
						role='img'
						aria-label='Architectural cross-section showing foundation, floors, roof and light wells'
						className='w-full'
					>
						<rect x='0' y='0' width='800' height='360' fill='var(--white)' />
						{/* ground line */}
						<line
							x1='40'
							y1='300'
							x2='760'
							y2='300'
							stroke='var(--ink)'
							strokeWidth='1.5'
						/>
						{/* foundation */}
						<rect
							x='120'
							y='300'
							width='520'
							height='40'
							fill='none'
							stroke='var(--ink)'
							strokeWidth='1'
						/>
						{/* building mass */}
						<rect
							x='160'
							y='120'
							width='440'
							height='180'
							fill='none'
							stroke='var(--ink)'
							strokeWidth='2'
						/>
						{/* roof */}
						<polygon
							points='140,120 380,60 620,120'
							fill='none'
							stroke='var(--ink)'
							strokeWidth='2'
						/>
						{/* light wells */}
						<rect
							x='280'
							y='140'
							width='60'
							height='160'
							fill='color-mix(in oklch, var(--gold) 25%, transparent)'
							stroke='var(--gold)'
							strokeWidth='1'
						/>
						<rect
							x='420'
							y='160'
							width='40'
							height='140'
							fill='color-mix(in oklch, var(--gold) 18%, transparent)'
							stroke='var(--gold)'
							strokeWidth='1'
						/>
						{/* floor lines */}
						{[180, 220, 260].map(y => (
							<line
								key={y}
								x1='160'
								y1={y}
								x2='600'
								y2={y}
								stroke='var(--line)'
								strokeWidth='1'
								strokeDasharray='4 6'
							/>
						))}
						{/* dimension markers */}
						<line
							x1='680'
							y1='120'
							x2='680'
							y2='300'
							stroke='var(--concrete)'
							strokeWidth='1'
						/>
						<text
							x='692'
							y='215'
							fill='var(--concrete)'
							fontSize='11'
							transform='rotate(90 692 215)'
						>
							12.4 m
						</text>
						<text x='48' y='318' fill='var(--concrete)' fontSize='10'>
							±0.00
						</text>
						<text x='48' y='108' fill='var(--concrete)' fontSize='10'>
							Ridge
						</text>
					</svg>
				</div>
			</div>
		</section>
	)
}
