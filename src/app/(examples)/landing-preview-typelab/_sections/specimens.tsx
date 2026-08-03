const specimens = [
	{
		name: 'Lab Grotesk',
		sample: 'Architecture is frozen music.',
		weight: 'Regular 400'
	},
	{
		name: 'Lab Grotesk',
		sample: 'Architecture is frozen music.',
		weight: 'Medium 500'
	},
	{
		name: 'Lab Grotesk',
		sample: 'Architecture is frozen music.',
		weight: 'Bold 700'
	}
]

/** Future Payload mapping: typeSpecimens (large samples). */
export function Specimens() {
	return (
		<section
			id='specimens'
			className='border-[var(--line)] border-t px-5 py-16 sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
							Specimen sheets
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
							Lab Grotesk
						</h2>
					</div>
					<p className='max-w-xs text-[var(--mute)] text-sm'>
						12 styles · Latin, Cyrillic, Greek · Variable &amp; static cuts
					</p>
				</div>

				<div className='divide-y divide-[var(--line)]'>
					{specimens.map(s => (
						<figure key={s.weight} className='ty-reveal py-10 first:pt-0'>
							<figcaption className='mb-4 flex items-baseline justify-between gap-4 text-xs uppercase tracking-[0.16em] [color:var(--mute)]'>
								<span>{s.name}</span>
								<span>{s.weight}</span>
							</figcaption>
							<p
								className='text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.08] tracking-[-0.02em]'
								style={{
									fontWeight:
										s.weight === 'Regular 400'
											? 400
											: s.weight === 'Medium 500'
												? 500
												: 700
								}}
							>
								{s.sample}
							</p>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
