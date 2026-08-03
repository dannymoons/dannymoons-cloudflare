const tools = [
	{
		name: 'Website Carbon',
		url: 'https://www.websitecarbon.com',
		d: 'Estimates grams of CO₂ per page view based on data transfer and hosting.'
	},
	{
		name: 'Ecograder',
		url: 'https://ecograder.com',
		d: 'Scores sustainability, performance and findability in a single report.'
	},
	{
		name: 'Green Web Foundation',
		url: 'https://www.thegreenwebfoundation.org',
		d: 'Directory of verified green hosting providers and API for automated checks.'
	},
	{
		name: 'PageSpeed Insights',
		url: 'https://pagespeed.web.dev',
		d: 'Core Web Vitals and Lighthouse scores — our baseline quality gate.'
	},
	{
		name: 'Bundlephobia',
		url: 'https://bundlephobia.com',
		d: 'Size and performance cost of npm packages before they enter the build.'
	},
	{
		name: 'CO₂.js',
		url: 'https://developers.thegreenwebfoundation.org/co2js/overview',
		d: 'Open-source library for calculating digital carbon emissions in code.'
	}
]

/** Future Payload mapping: resourceLinks. */
export function Tools() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='of-reveal text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
					Toolkit
				</p>
				<h2 className='of-reveal mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					Tools we trust
				</h2>
				<ul className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{tools.map(t => (
						<li key={t.name} className='of-reveal'>
							<a
								href={t.url}
								target='_blank'
								rel='noopener noreferrer'
								className='block rounded-2xl border border-[var(--line)] p-5 transition-colors hover:[background:color-mix(in_oklch,var(--paper)_96%,var(--lime))]'
							>
								<h3 className='font-[family-name:var(--font-display)] text-lg'>
									{t.name}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{t.d}
								</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
