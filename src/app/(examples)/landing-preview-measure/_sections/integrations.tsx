const integrations = [
	'Google Analytics 4',
	'Salesforce Marketing Cloud',
	'Workday Financials',
	'SAP S/4HANA',
	'Adobe Experience Cloud',
	'The Trade Desk',
	'Slack',
	'Microsoft Teams',
	'Power BI',
	'Tableau',
	'Snowflake',
	'BigQuery'
]

/** Future Payload mapping: integrationLogos. */
export function Integrations() {
	return (
		<section
			id='integrations'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='mx-auto me-reveal max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Integrations
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Fits your existing martech and finance stack.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Native connectors, webhook events, and a REST API for custom
						workflows — deploy in days, not quarters.
					</p>
				</div>

				<div className='me-reveal mt-12 flex flex-wrap justify-center gap-3'>
					{integrations.map(name => (
						<span
							key={name}
							className='rounded-sm border border-[var(--line)] px-4 py-2.5 text-sm transition-colors [color:var(--ink)] hover:border-[color-mix(in_oklch,var(--blue)_35%,transparent)]'
						>
							{name}
						</span>
					))}
				</div>

				<p className='me-reveal mt-8 text-center text-sm [color:var(--mute)]'>
					Need a custom connector?{' '}
					<a href='#contact' className='underline [color:var(--blue)]'>
						Talk to our solutions team
					</a>
				</p>
			</div>
		</section>
	)
}
