const stats = [
	{ v: '12', l: 'Years crafting worlds' },
	{ v: '180+', l: 'Experiences launched' },
	{ v: '28', l: 'Industry awards' },
	{ v: '6', l: 'Global studios' }
]

/** Future Payload mapping: statBand. */
export function Stats() {
	return (
		<section className='border-[var(--line)] border-y [background:var(--panel)]'>
			<div className='grid grid-cols-2 lg:grid-cols-4'>
				{stats.map(s => (
					<div
						key={s.l}
						className='lu-reveal border-[var(--line)] border-r border-b p-8 last:border-r-0 sm:p-10 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0 lg:[&:nth-child(n+3)]:border-b-0'
					>
						<div
							className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text font-[family-name:var(--font-display)] font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-transparent text-transparent leading-none tracking-[-0.03em] [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
							style={{
								backgroundImage:
									'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
							}}
						>
							{s.v}
						</div>
						<div className='mt-3 text-xs uppercase tracking-widest [color:var(--mute)]'>
							{s.l}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
