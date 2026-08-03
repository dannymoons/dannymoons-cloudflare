const stats = [
	{ v: '94%', l: 'Patient satisfaction', u: 'annual survey 2025' },
	{ v: '12k', l: 'Sessions delivered', u: 'last 12 months' },
	{ v: '4.9', l: 'Average rating', u: 'Google reviews' },
	{ v: '87%', l: 'Return to activity', u: 'within target timeline' }
]

/** Future Payload mapping: statBand. */
export function Outcomes() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 text-white [background:var(--ocean)] sm:px-8 sm:py-20'>
			<div className='mx-auto max-w-6xl'>
				<p className='rs-reveal mb-10 text-center text-xs uppercase tracking-[0.28em] opacity-80'>
					Measured outcomes
				</p>
				<div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
					{stats.map(s => (
						<div key={s.l} className='rs-reveal text-center lg:text-left'>
							<div className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,3.75rem)] leading-none'>
								{s.v}
							</div>
							<div className='mt-2 font-medium'>{s.l}</div>
							<div className='text-sm opacity-70'>{s.u}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
