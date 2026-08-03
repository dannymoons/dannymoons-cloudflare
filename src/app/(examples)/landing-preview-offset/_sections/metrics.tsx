const stats = [
	{ v: '0.12g', l: 'CO₂ per page', u: 'average client site' },
	{ v: '98', l: 'Lighthouse score', u: 'performance median' },
	{ v: '12kb', l: 'JavaScript', u: 'first-party bundle' },
	{ v: '100%', l: 'Green hosting', u: 'renewable-powered CDN' }
]

/** Future Payload mapping: statBand. */
export function Metrics() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 text-white [background:var(--forest)] sm:px-8 sm:py-20'>
			<div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'>
				{stats.map(s => (
					<div key={s.l} className='of-reveal'>
						<div className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none'>
							{s.v}
						</div>
						<div className='mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em]'>
							{s.l}
						</div>
						<div className='mt-1 text-xs opacity-70'>{s.u}</div>
					</div>
				))}
			</div>
		</section>
	)
}
