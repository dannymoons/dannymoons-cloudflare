const stats = [
	{ v: '340', l: 'Clients advised', u: 'since 2012' },
	{ v: '12Mt', l: 'CO₂e avoided', u: 'verified impact' },
	{ v: '89%', l: 'Target achievement', u: 'within 3 years' },
	{ v: '28', l: 'Countries', u: 'active programmes' }
]

/** Future Payload mapping: statBand. */
export function Impact() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 text-white [background:var(--moss)] sm:px-8 sm:py-20'>
			<div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'>
				{stats.map(s => (
					<div key={s.l} className='vd-reveal'>
						<div className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none'>
							{s.v}
						</div>
						<div className='mt-2 font-medium'>{s.l}</div>
						<div className='text-sm opacity-70'>{s.u}</div>
					</div>
				))}
			</div>
		</section>
	)
}
