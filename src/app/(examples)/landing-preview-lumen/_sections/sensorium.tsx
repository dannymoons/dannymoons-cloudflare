const senses = [
	{
		sense: 'Sight',
		icon: '◉',
		detail: 'Volumetric light fields and iridescent projection mapping'
	},
	{
		sense: 'Sound',
		icon: '◎',
		detail: 'Spatial audio arrays tuned to room geometry'
	},
	{
		sense: 'Touch',
		icon: '◇',
		detail: 'Haptic surfaces and temperature-reactive materials'
	},
	{
		sense: 'Scent',
		icon: '○',
		detail: 'Diffused fragrance choreography synced to narrative beats'
	},
	{
		sense: 'Motion',
		icon: '△',
		detail: 'Kinetic architecture and responsive floor planes'
	}
]

/** Future Payload mapping: sensoriumGrid. */
export function Sensorium() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<span className='lu-reveal mb-4 block font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] [color:var(--cyan)]'>
					Full spectrum
				</span>
				<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
					The sensorium
				</h2>
				<p className='lu-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
					We design for all five senses — because memory lives in the body, not
					the screen.
				</p>

				<div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
					{senses.map((s, i) => (
						<article
							key={s.sense}
							className='lu-reveal group rounded-2xl border border-[var(--line)] p-6 transition-colors duration-300 hover:[background:var(--panel)]'
						>
							<span
								className='font-[family-name:var(--font-display)] text-2xl transition-colors group-hover:[color:var(--cyan)]'
								aria-hidden
							>
								{s.icon}
							</span>
							<p className='mt-4 font-[family-name:var(--font-display)] text-xs uppercase tracking-widest [color:var(--mute)]'>
								0{i + 1}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] font-bold text-xl tracking-tight'>
								{s.sense}
							</h3>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{s.detail}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
