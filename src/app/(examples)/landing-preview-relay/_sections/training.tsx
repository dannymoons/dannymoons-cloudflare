const plans = [
	{
		name: 'Base',
		weeks: '8 weeks',
		weekly: '4 runs · 35 km',
		peak: '18 km long run',
		desc: 'Build aerobic base before race-specific work. Ideal 12 weeks out.'
	},
	{
		name: 'Build',
		weeks: '6 weeks',
		weekly: '5 runs · 48 km',
		peak: '32 km with tempo',
		desc: 'Introduce threshold intervals and back-to-back long runs for trail prep.',
		highlight: true
	},
	{
		name: 'Taper',
		weeks: '2 weeks',
		weekly: '3 runs · 22 km',
		peak: '10 km shakeout',
		desc: 'Volume drops 40%. Legs stay sharp. Trust the training.'
	}
]

/** Future Payload mapping: trainingPlans. */
export function Training() {
	return (
		<section
			id='training'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--black)] [color:var(--white)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Training plans
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95]'>
						16 weeks to the start line
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--gray)]'>
						Free PDF plans for every Relay distance. Written by our coaching
						panel — no subscription, no app login.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{plans.map(p => (
						<article
							key={p.name}
							className={`rl-reveal flex flex-col rounded-sm border p-6 ${p.highlight ? 'border-[var(--orange)] [background:color-mix(in_oklch,var(--orange)_12%,var(--black))]' : 'border-[var(--line)] [background:color-mix(in_oklch,var(--white)_5%,var(--black))]'}`}
						>
							<h3 className='font-[family-name:var(--font-display)] text-2xl uppercase [color:var(--orange)]'>
								{p.name}
							</h3>
							<p className='mt-2 text-sm [color:var(--gray)]'>{p.weeks}</p>
							<p className='mt-4 font-medium'>{p.weekly}</p>
							<p className='mt-1 text-sm [color:var(--gray)]'>Peak: {p.peak}</p>
							<p className='mt-4 flex-1 text-sm leading-relaxed [color:var(--gray)]'>
								{p.desc}
							</p>
							<a
								href='#training'
								className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-sm font-medium text-sm uppercase tracking-[0.1em] transition-opacity hover:opacity-90 ${p.highlight ? '[background:var(--orange)] [color:var(--black)]' : 'border border-[var(--line)] [color:var(--white)]'}`}
							>
								Download PDF
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
