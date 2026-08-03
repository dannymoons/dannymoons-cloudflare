const capabilities = [
	'Strategy & positioning',
	'Art direction',
	'Motion & film',
	'Copywriting',
	'Web & digital products',
	'Print & packaging',
	'Experiential & events',
	'Data visualisation',
	'Photography',
	'Social content',
	'Media planning',
	'Production carbon tracking'
]

/** Future Payload mapping: capabilityList. */
export function Capabilities() {
	return (
		<section id='capabilities' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal grid gap-10 lg:grid-cols-[1fr_1.2fr]'>
					<div>
						<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
							Capabilities
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] uppercase tracking-tight'>
							Full-stack creative, end to end
						</h2>
						<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							In-house strategists, designers, filmmakers, and developers — plus
							a vetted network of sustainable production partners across Europe.
						</p>
					</div>
					<ul className='pw-reveal grid grid-cols-2 gap-3 sm:grid-cols-3'>
						{capabilities.map(c => (
							<li
								key={c}
								className='border-2 border-[var(--ink)] px-3 py-4 text-center font-medium text-xs uppercase tracking-wide transition-colors sm:text-sm hover:[background:var(--yellow)]'
							>
								{c}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
