const sponsors = [
	{ name: 'On Running', tier: 'Title' },
	{ name: 'Garmin', tier: 'Timing' },
	{ name: 'Maurten', tier: 'Nutrition' },
	{ name: 'Salomon', tier: 'Trail' },
	{ name: 'ASICS', tier: 'City' },
	{ name: 'Decathlon', tier: 'Partner' }
]

/** Future Payload mapping: sponsorLogos. */
export function Sponsors() {
	return (
		<section
			id='sponsors'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--black)_3%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 text-center'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Sponsors
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Powered by partners
					</h2>
				</div>

				<ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
					{sponsors.map(s => (
						<li
							key={s.name}
							className='rl-reveal flex flex-col items-center justify-center rounded-sm border border-[var(--line)] px-4 py-8 text-center [background:var(--white)]'
						>
							<span className='font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.06em] [color:var(--black)]'>
								{s.name}
							</span>
							<span className='mt-2 text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
								{s.tier}
							</span>
						</li>
					))}
				</ul>

				<p className='rl-reveal mt-8 text-center text-sm [color:var(--mute)]'>
					Interested in partnering?{' '}
					<a
						href='mailto:partners@relay.run'
						className='font-medium transition-colors [color:var(--orange)] hover:underline'
					>
						partners@relay.run
					</a>
				</p>
			</div>
		</section>
	)
}
