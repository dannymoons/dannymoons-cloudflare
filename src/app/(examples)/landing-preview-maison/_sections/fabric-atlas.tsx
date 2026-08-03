const fabrics = [
	{
		name: 'Soie',
		weave: 'Charmeuse',
		origin: 'Lyon',
		tone: 'oklch(0.88 0.04 85)'
	},
	{
		name: 'Cachemire',
		weave: 'Herringbone',
		origin: 'Inner Mongolia',
		tone: 'oklch(0.72 0.03 55)'
	},
	{
		name: 'Lin',
		weave: 'Damask',
		origin: 'Normandy',
		tone: 'oklch(0.82 0.02 95)'
	},
	{
		name: 'Velours',
		weave: 'Panne',
		origin: 'Venice',
		tone: 'oklch(0.35 0.04 30)'
	},
	{
		name: 'Mohair',
		weave: 'Basket',
		origin: 'Cape',
		tone: 'oklch(0.78 0.05 70)'
	},
	{
		name: 'Organza',
		weave: 'Plain',
		origin: 'Como',
		tone: 'oklch(0.94 0.01 280)'
	}
]

/** Future Payload mapping: fabricSwatchGrid. */
export function FabricAtlas() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<p className='ml-reveal text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Matières premières
				</p>
				<h2 className='mt-3 ml-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.08]'>
					The fabric atlas
				</h2>
				<p className='mt-4 ml-reveal max-w-md text-sm leading-relaxed [color:var(--mute)]'>
					Six signature weaves — each traced to a mill we have commissioned for
					decades.
				</p>

				<div className='mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6'>
					{fabrics.map(f => (
						<article
							key={f.name}
							className='group ml-reveal overflow-hidden rounded-xl border border-[var(--line)]'
						>
							<div
								className='aspect-square transition-transform duration-500 group-hover:scale-[1.03]'
								style={{
									background: `repeating-linear-gradient(45deg, ${f.tone}, ${f.tone} 3px, color-mix(in oklch, ${f.tone} 85%, black) 3px, color-mix(in oklch, ${f.tone} 85%, black) 6px)`
								}}
								aria-hidden
							/>
							<div className='p-4 sm:p-5'>
								<h3 className='font-[family-name:var(--font-display)] text-lg italic'>
									{f.name}
								</h3>
								<p className='mt-1 text-xs uppercase tracking-[0.16em] [color:var(--gold)]'>
									{f.weave}
								</p>
								<p className='mt-2 text-xs [color:var(--mute)]'>{f.origin}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
