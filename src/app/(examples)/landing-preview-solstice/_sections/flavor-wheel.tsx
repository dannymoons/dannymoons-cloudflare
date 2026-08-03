const segments = [
	{ label: 'Berry', angle: 0 },
	{ label: 'Floral', angle: 45 },
	{ label: 'Citrus', angle: 90 },
	{ label: 'Mineral', angle: 135 },
	{ label: 'Earth', angle: 180 },
	{ label: 'Spice', angle: 225 },
	{ label: 'Oak', angle: 270 },
	{ label: 'Smoke', angle: 315 }
]

const cx = 160
const cy = 160
const r = 120

function segmentPath(startDeg: number, sweep = 45) {
	const toRad = (d: number) => (d * Math.PI) / 180
	const x1 = cx + r * Math.cos(toRad(startDeg - 90))
	const y1 = cy + r * Math.sin(toRad(startDeg - 90))
	const x2 = cx + r * Math.cos(toRad(startDeg + sweep - 90))
	const y2 = cy + r * Math.sin(toRad(startDeg + sweep - 90))
	return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`
}

function labelPos(angle: number, dist = 88) {
	const toRad = (d: number) => (d * Math.PI) / 180
	return {
		x: cx + dist * Math.cos(toRad(angle - 90)),
		y: cy + dist * Math.sin(toRad(angle - 90))
	}
}

/** Future Payload mapping: flavorWheelDiagram. */
export function FlavorWheel() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
					<div>
						<p className='so-reveal text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
							Sommelier notes
						</p>
						<h2 className='so-reveal mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] italic leading-[1.08]'>
							The flavour wheel
						</h2>
						<p className='so-reveal mt-6 max-w-md text-sm leading-relaxed [color:var(--mute)]'>
							Each vintage mapped across eight sensory axes — guiding pairings
							from amuse-bouche to final pour.
						</p>
						<p className='so-reveal mt-6 font-[family-name:var(--font-display)] text-lg italic [color:var(--gold)]'>
							2019 Volnay Premier Cru · Solstice Cellar
						</p>
					</div>

					<div className='so-reveal mx-auto w-full max-w-sm'>
						<svg
							viewBox='0 0 320 320'
							role='img'
							aria-label='Wine flavor wheel with eight segments: Berry, Floral, Citrus, Mineral, Earth, Spice, Oak, Smoke'
							className='w-full'
						>
							{segments.map((s, i) => (
								<path
									key={s.label}
									d={segmentPath(s.angle)}
									fill={
										i % 2 === 0
											? 'color-mix(in oklch, var(--burgundy) 70%, transparent)'
											: 'color-mix(in oklch, var(--burgundy) 45%, transparent)'
									}
									stroke='var(--line)'
									strokeWidth='1'
								/>
							))}
							<circle
								cx={cx}
								cy={cy}
								r='36'
								fill='var(--noir)'
								stroke='var(--gold)'
								strokeWidth='1.5'
							/>
							<text
								x={cx}
								y={cy + 4}
								textAnchor='middle'
								fill='var(--gold)'
								fontSize='11'
								fontStyle='italic'
							>
								2019
							</text>
							{segments.map(s => {
								const { x, y } = labelPos(s.angle + 22.5)
								return (
									<text
										key={s.label}
										x={x}
										y={y}
										textAnchor='middle'
										dominantBaseline='middle'
										fill='var(--cream)'
										fontSize='10'
										className='uppercase tracking-wider'
									>
										{s.label}
									</text>
								)
							})}
						</svg>
					</div>
				</div>
			</div>
		</section>
	)
}
