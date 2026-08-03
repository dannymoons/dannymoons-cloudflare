const stats = [
	{ v: '10', l: 'Years in the dark' },
	{ v: '120+', l: 'Worlds built' },
	{ v: '32', l: 'Awards won' },
	{ v: '4', l: 'Continents' }
]

/** Future Payload mapping: statBand. */
export function Stats() {
	return (
		<section className='border-[var(--line)] border-y [background:var(--ink-2)]'>
			<div className='grid grid-cols-2 lg:grid-cols-4'>
				{stats.map(s => (
					<div
						key={s.l}
						className='ob-reveal border-[var(--line)] border-r border-b p-8 last:border-r-0 sm:p-10'
					>
						<div className='font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-0.03em] [color:var(--amber)]'>
							{s.v}
						</div>
						<div className='mt-3 font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs uppercase tracking-widest'>
							{s.l}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
