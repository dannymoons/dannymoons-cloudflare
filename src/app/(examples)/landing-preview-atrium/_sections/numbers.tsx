const stats = [
	{ value: '62', label: 'Completed projects' },
	{ value: '14', label: 'Years in practice' },
	{ value: '9', label: 'International awards' },
	{ value: '12', label: 'Active commissions' }
]

/** Future Payload mapping: statsBand. */
export function Numbers() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 [background:color-mix(in_oklch,var(--line)_40%,var(--white))] sm:px-8 sm:py-20'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-2 gap-10 text-center lg:grid-cols-4 lg:gap-8'>
					{stats.map(s => (
						<div key={s.label} className='at-reveal'>
							<div className='font-[family-name:var(--font-display)] font-bold text-[clamp(2.25rem,5vw,3.75rem)] leading-none tracking-[-0.02em] [color:var(--gold)]'>
								{s.value}
							</div>
							<div className='mt-3 text-xs uppercase tracking-[0.2em] [color:var(--concrete)]'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
