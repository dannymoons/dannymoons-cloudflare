const stats = [
	{ v: '200MG', l: 'Caffeine hit' },
	{ v: '0G', l: 'Sugar. None.' },
	{ v: '8HRS', l: 'Stay wired' },
	{ v: '1.2M', l: 'Cans crushed' }
]

/** Future Payload mapping: statBand. */
export function FuelStats() {
	return (
		<section
			id='fuel'
			className='mt-4 border-[var(--acid)] border-y-4 [background:var(--acid)] [color:var(--void)]'
		>
			<div className='grid grid-cols-2 md:grid-cols-4'>
				{stats.map(s => (
					<div
						key={s.l}
						className='vc-pop border-[var(--void)] border-r-4 border-b-4 p-6 last:border-r-0'
					>
						<div className='font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl'>
							{s.v}
						</div>
						<div className='mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest'>
							{s.l}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
