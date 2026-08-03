const marqueeItems = [
	'Sustainability campaigns',
	'Brand repositioning',
	'Impact reporting',
	'Zero greenwash',
	'Creative that converts',
	'ESG storytelling'
]

/** Future Payload mapping: heroBold. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal'>
					<p className='mb-4 font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Creative sustainability agency · Amsterdam
					</p>
					<h1 className='max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.5rem)] uppercase leading-[0.95] tracking-tight [color:var(--ink)]'>
						We make <span className='[color:var(--green)]'>green</span>{' '}
						impossible to ignore
					</h1>
					<p className='mt-6 max-w-xl text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Patchwork builds campaigns, identities, and experiences that turn
						sustainability from compliance checkbox into cultural movement.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
						<a
							href='#contact'
							className='inline-flex min-h-12 items-center justify-center border-2 border-[var(--ink)] px-8 font-medium text-sm uppercase tracking-wide transition-colors [background:var(--pink)] hover:[background:var(--green)] hover:[color:var(--cream)]'
						>
							Start a project
						</a>
						<a
							href='#work'
							className='inline-flex min-h-12 items-center justify-center border-2 border-[var(--ink)] px-8 font-medium text-sm uppercase tracking-wide transition-colors hover:[background:var(--yellow)]'
						>
							See our work
						</a>
					</div>
				</div>

				<div className='pw-reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{(
						[
							['Campaigns launched', '240+'],
							['Avg engagement lift', '+68%'],
							['B Corp clients', '38'],
							['Awards', '52']
						] as const
					).map(([label, val]) => (
						<div
							key={label}
							className='border-2 border-[var(--ink)] p-4 [background:var(--yellow)]'
						>
							<p className='text-[10px] uppercase tracking-[0.14em] [color:var(--mute)]'>
								{label}
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] text-2xl uppercase'>
								{val}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className='mt-12 overflow-hidden border-[var(--ink)] border-y-2 py-4 [background:var(--green)] [color:var(--cream)]'>
				<div className='pw-marquee flex w-max gap-8 whitespace-nowrap font-[family-name:var(--font-display)] text-lg uppercase tracking-wide'>
					{marqueeItems
						.flatMap(item => [
							{ id: `${item}-a`, label: item },
							{ id: `${item}-b`, label: item }
						])
						.map(entry => (
							<span key={entry.id} className='flex items-center gap-8'>
								{entry.label}
								<span className='[color:var(--yellow)]'>★</span>
							</span>
						))}
				</div>
			</div>
		</section>
	)
}
