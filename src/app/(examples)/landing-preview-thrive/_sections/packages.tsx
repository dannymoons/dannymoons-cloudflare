const packages = [
	{
		name: 'Foundation',
		price: '£2,400',
		period: '/ month',
		desc: 'Fortnightly 90-minute sessions with email support between calls.',
		includes: [
			'Discovery assessment',
			'Personal leadership plan',
			'Session prep materials',
			'Email check-ins'
		]
	},
	{
		name: 'Executive',
		price: '£4,200',
		period: '/ month',
		desc: 'Weekly sessions plus board-prep intensives before high-stakes moments.',
		includes: [
			'Everything in Foundation',
			'Weekly 90-min sessions',
			'Board prep intensives',
			'Stakeholder role-play',
			'Priority scheduling'
		],
		highlight: true
	},
	{
		name: 'Advisory',
		price: 'Custom',
		period: '',
		desc: 'Retained advisory for C-suite with on-call support and team workshops.',
		includes: [
			'Flexible session cadence',
			'Leadership team workshops',
			'On-call advisory',
			'Annual strategy retreat'
		]
	}
]

/** Future Payload mapping: packageTiers. */
export function Packages() {
	return (
		<section id='packages' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Packages
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Invest in the leader, not just the strategy
					</h2>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{packages.map(p => (
						<article
							key={p.name}
							className={`th-reveal flex flex-col rounded-2xl border p-6 ${p.highlight ? 'border-[var(--forest)] [background:color-mix(in_oklch,var(--forest)_6%,var(--sage))]' : 'border-[var(--line)]'}`}
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{p.name}
							</h3>
							<p className='mt-4'>
								<span className='font-[family-name:var(--font-display)] text-3xl [color:var(--forest)]'>
									{p.price}
								</span>
								<span className='text-sm [color:var(--mute)]'>{p.period}</span>
							</p>
							<p className='mt-3 text-sm [color:var(--mute)]'>{p.desc}</p>
							<ul className='mt-6 flex-1 space-y-2 text-sm'>
								{p.includes.map(i => (
									<li key={i} className='flex items-center gap-2'>
										<span className='h-1.5 w-1.5 rounded-full [background:var(--forest)]' />
										{i}
									</li>
								))}
							</ul>
							<a
								href='#booking'
								className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-full text-sm transition-opacity hover:opacity-90 ${p.highlight ? '[background:var(--forest)] [color:var(--sage)]' : 'border border-[var(--line)]'}`}
							>
								{p.name === 'Advisory' ? 'Enquire' : 'Book discovery call'}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
