const routes = [
	{
		name: 'City flat',
		race: 'Relay City',
		distance: '42.2 km',
		elevation: '+85 m',
		profile: [12, 14, 13, 15, 14, 16, 15, 14, 13, 12]
	},
	{
		name: 'Heath climb',
		race: 'Relay Trail',
		distance: '42 km',
		elevation: '+1,200 m',
		profile: [8, 22, 35, 48, 62, 55, 40, 28, 18, 10]
	},
	{
		name: 'Veluwe ridges',
		race: 'Relay Ultra',
		distance: '80 km',
		elevation: '+2,400 m',
		profile: [5, 18, 42, 68, 85, 72, 58, 45, 30, 12]
	}
]

function ElevationChart({ points }: { points: number[] }) {
	const max = Math.max(...points)
	const w = 100
	const h = 40
	const step = w / (points.length - 1)
	const d = points
		.map((p, i) => {
			const x = i * step
			const y = h - (p / max) * h
			return `${i === 0 ? 'M' : 'L'}${x},${y}`
		})
		.join(' ')

	return (
		<svg
			viewBox={`0 0 ${w} ${h}`}
			className='h-16 w-full'
			aria-hidden
			preserveAspectRatio='none'
		>
			<title>Elevation profile</title>
			<path
				d={`${d} L${w},${h} L0,${h} Z`}
				className='fill-[var(--orange)] opacity-20'
			/>
			<path
				d={d}
				fill='none'
				stroke='var(--orange)'
				strokeWidth='2'
				vectorEffect='non-scaling-stroke'
			/>
		</svg>
	)
}

/** Future Payload mapping: routeProfiles. */
export function Routes() {
	return (
		<section
			id='routes'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--black)_3%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Routes
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Elevation profiles
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Know the climb before the gun. GPX files available after
						registration.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
					{routes.map(r => (
						<article
							key={r.name}
							className='rl-reveal rounded-sm border border-[var(--line)] p-5 [background:var(--white)]'
						>
							<p className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								{r.race}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl uppercase [color:var(--black)]'>
								{r.name}
							</h3>
							<div className='mt-4 flex gap-4 text-sm'>
								<span className='font-medium [color:var(--black)]'>
									{r.distance}
								</span>
								<span className='[color:var(--orange)]'>{r.elevation}</span>
							</div>
							<div className='mt-6'>
								<ElevationChart points={r.profile} />
							</div>
							<p className='mt-2 text-center text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
								Start → Finish
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
