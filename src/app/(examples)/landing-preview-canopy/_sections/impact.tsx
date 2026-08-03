const stats = [
	{ v: '2.4M', l: 'Tonnes CO₂ sequestered', u: 'via regenerative agriculture' },
	{ v: '186', l: 'Brand partners', u: 'across 34 countries' },
	{ v: '94%', l: 'Material recovery rate', u: 'in closed-loop programmes' },
	{ v: '47', l: 'Local chapters', u: 'hosting monthly field days' }
]

/** Future Payload mapping: statBand. */
export function Impact() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 [background:var(--earth)] [color:var(--sand)] sm:px-8 sm:py-20'>
			<div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4'>
				{stats.map(s => (
					<div key={s.l} className='cp-reveal'>
						<div className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none [color:var(--sun)]'>
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
