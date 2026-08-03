const stats = [
	{ v: '2,400', l: 'Children supported', u: 'since 2019' },
	{ v: '£8.4M', l: 'Raised to date', u: '70% of goal' },
	{ v: '412', l: 'Active volunteers', u: 'across 3 hospitals' },
	{ v: '18', l: 'Rooms transformed', u: 'in phase one' }
]

/** Future Payload mapping: statBand. */
export function Impact() {
	return (
		<section
			id='impact'
			className='border-[var(--line)] border-y px-5 py-16 sm:px-8 sm:py-20'
		>
			<div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'>
				{stats.map(s => (
					<div key={s.l} className='bl-reveal text-center sm:text-left'>
						<div className='font-[family-name:var(--font-display)] font-bold text-[clamp(2.25rem,6vw,3.5rem)] leading-none [color:var(--petal)]'>
							{s.v}
						</div>
						<div className='mt-2 font-semibold [color:var(--ink)]'>{s.l}</div>
						<div className='text-sm [color:var(--mute)]'>{s.u}</div>
					</div>
				))}
			</div>
		</section>
	)
}
