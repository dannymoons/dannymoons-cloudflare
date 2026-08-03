const stats = [
	{ value: '12,400', unit: 'tCO₂e', label: 'Avoided via client campaigns' },
	{ value: '£840M', unit: '', label: 'Revenue influenced for B Corp clients' },
	{ value: '94%', unit: '', label: 'Projects with verified impact data' },
	{ value: '0', unit: '', label: 'Greenwashing complaints across portfolio' }
]

/** Future Payload mapping: impactStats. */
export function Impact() {
	return (
		<section id='impact' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Impact
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight'>
						Numbers we stand behind
					</h2>
				</div>

				<div className='pw-reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{stats.map(s => (
						<div
							key={s.label}
							className='border-2 border-[var(--ink)] p-6 [background:var(--green)] [color:var(--cream)]'
						>
							<p className='font-[family-name:var(--font-display)] text-4xl uppercase'>
								{s.value}
								{s.unit ? (
									<span className='text-lg [color:var(--yellow)]'>
										{s.unit}
									</span>
								) : null}
							</p>
							<p className='mt-2 text-sm opacity-85'>{s.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
