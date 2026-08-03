const stats = [
	{ v: '60', u: 'hours', l: 'Playback on a single charge' },
	{ v: '5', u: 'min', l: 'Charge for 8 hours of listening' },
	{ v: '2x', u: '', l: 'Noise cancellation vs. last gen' }
]

/** Future Payload mapping: statTriptych. */
export function FeatureBattery() {
	return (
		<section className='border-[var(--line)] border-y px-6 py-24 sm:py-32'>
			<div className='mx-auto max-w-5xl'>
				<h2 className='apl-reveal max-w-2xl font-bold text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.03em]'>
					All-day battery. And then some.
				</h2>
				<div className='mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3'>
					{stats.map(s => (
						<div key={s.l} className='apl-reveal'>
							<div className='flex items-baseline gap-1'>
								<span className='font-bold text-[clamp(3rem,7vw,5rem)] leading-none tracking-[-0.04em] [color:var(--accent)]'>
									{s.v}
								</span>
								<span className='font-medium text-2xl [color:var(--mute)]'>
									{s.u}
								</span>
							</div>
							<p className='mt-3 max-w-[16rem] text-[var(--mute)] leading-relaxed'>
								{s.l}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
