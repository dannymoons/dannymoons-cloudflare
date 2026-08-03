const stats = [
	{ v: '11', l: 'Years weird', color: 'var(--magenta)', r: '-2deg' },
	{ v: '240+', l: 'Projects shipped', color: 'var(--cobalt)', r: '1.5deg' },
	{ v: '19', l: 'Awwwards', color: 'var(--tangerine)', r: '-1deg' },
	{ v: '∞', l: 'Bad puns', color: 'var(--lime)', r: '2deg' }
]

/** Future Payload mapping: statScatter. */
export function Stats() {
	return (
		<section className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
				{stats.map(s => (
					<div
						key={s.l}
						className='flx-reveal rounded-3xl border-2 border-[var(--ink)] p-6 text-center'
						style={{ background: s.color, transform: `rotate(${s.r})` }}
					>
						<div className='font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-none [color:var(--ink)]'>
							{s.v}
						</div>
						<div className='mt-2 font-[family-name:var(--font-mono)] text-xs uppercase [color:var(--ink)]'>
							{s.l}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
