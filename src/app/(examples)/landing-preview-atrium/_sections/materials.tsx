const materials = [
	{
		name: 'Concrete',
		desc: 'Cast-in-place and board-formed — structure and surface in one material.'
	},
	{
		name: 'Timber',
		desc: 'Glulam and solid oak — warmth, span and the memory of the forest.'
	},
	{
		name: 'Glass',
		desc: 'Low-iron panels and frameless corners — light as a building material.'
	},
	{
		name: 'Steel',
		desc: 'Blackened and brushed profiles — the thinnest possible line.'
	}
]

/** Future Payload mapping: materialsList. */
export function Materials() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<span className='at-reveal mb-10 block text-xs uppercase tracking-[0.3em] [color:var(--gold)]'>
					Materials
				</span>

				<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] [background:var(--line)] sm:grid-cols-2'>
					{materials.map(m => (
						<div
							key={m.name}
							className='at-reveal p-6 [background:var(--white)] sm:p-8'
						>
							<h3 className='font-[family-name:var(--font-display)] font-bold text-2xl uppercase tracking-tight'>
								{m.name}
							</h3>
							<p className='mt-3 max-w-sm text-sm leading-relaxed [color:var(--concrete)]'>
								{m.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
