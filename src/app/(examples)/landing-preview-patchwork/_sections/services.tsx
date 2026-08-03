const services = [
	{
		title: 'Campaign & Activations',
		desc: 'Launch campaigns that drive behaviour change — from product switches to policy advocacy.',
		color: 'var(--green)'
	},
	{
		title: 'Brand & Identity',
		desc: 'Visual systems that signal substance, not spin. Naming, guidelines, and rollout.',
		color: 'var(--yellow)'
	},
	{
		title: 'Impact Reporting',
		desc: 'Annual and interim reports people actually read. Data viz, narrative, and digital.',
		color: 'var(--pink)'
	},
	{
		title: 'Content & Social',
		desc: 'Editorial calendars, short-form video, and community building for purpose-led brands.',
		color: 'var(--green)'
	}
]

/** Future Payload mapping: serviceGrid. */
export function Services() {
	return (
		<section id='services' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Services
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight'>
						What we make
					</h2>
				</div>

				<div className='mt-12 grid gap-4 sm:grid-cols-2'>
					{services.map(s => (
						<article
							key={s.title}
							className='pw-reveal border-2 border-[var(--ink)] p-6 transition-transform hover:-translate-y-1'
							style={{
								background: `color-mix(in oklch, ${s.color} 25%, var(--cream))`
							}}
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl uppercase'>
								{s.title}
							</h3>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
