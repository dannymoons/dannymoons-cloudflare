const stats = [
	{ value: '16', label: 'Years' },
	{ value: '48', label: 'Projects' },
	{ value: '9', label: 'Awards' }
]

/** Future Payload mapping: heroStatement. */
export function Hero() {
	return (
		<section className='px-6 pt-24 pb-16 sm:px-10 sm:pt-36 sm:pb-24'>
			<p className='mrd-rise mb-10 max-w-md text-[var(--ink-soft)] text-sm leading-relaxed [animation-delay:0.05s]'>
				An architecture & interior studio working between Northern Europe and
				the Mediterranean since 2009.
			</p>
			<h1 className='mrd-rise max-w-5xl font-[family-name:var(--font-display)] font-light text-[clamp(2.75rem,7vw,7rem)] leading-[0.98] tracking-[-0.02em] [animation-delay:0.12s]'>
				We design quiet spaces
				<br />
				for <span className='text-[var(--clay)] italic'>loud</span> lives.
			</h1>
			<div className='mrd-rise mt-14 flex flex-col gap-8 border-[var(--line)] border-t pt-8 [animation-delay:0.2s] sm:flex-row sm:items-end sm:justify-between'>
				<p className='max-w-sm text-[var(--ink-soft)] leading-relaxed'>
					Light, proportion and material — composed with restraint. Every
					project begins with silence and a single line.
				</p>
				<div className='flex gap-12 font-[family-name:var(--font-display)]'>
					{stats.map(stat => (
						<div key={stat.label}>
							<div className='text-3xl'>{stat.value}</div>
							<div className='mt-1 text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
