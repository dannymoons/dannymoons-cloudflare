const layers = [
	{
		label: 'Surface',
		z: 'z-30',
		offset: 'translate-y-0',
		opacity: 'opacity-100',
		desc: 'Brand identity & first contact'
	},
	{
		label: 'Interface',
		z: 'z-20',
		offset: 'translate-y-6 sm:translate-y-8',
		opacity: 'opacity-90',
		desc: 'Touchpoints, screens & signage'
	},
	{
		label: 'Space',
		z: 'z-10',
		offset: 'translate-y-12 sm:translate-y-16',
		opacity: 'opacity-75',
		desc: 'Architecture, light & acoustics'
	},
	{
		label: 'World',
		z: 'z-0',
		offset: 'translate-y-[4.5rem] sm:translate-y-24',
		opacity: 'opacity-55',
		desc: 'XR layers & narrative systems'
	}
]

/** Future Payload mapping: immersionLayers. */
export function DepthLayers() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<p className='lu-reveal text-xs uppercase tracking-[0.3em] [color:var(--cyan)]'>
					Depth model
				</p>
				<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
					Four layers of immersion
				</h2>
				<p className='lu-reveal mt-4 max-w-md text-sm leading-relaxed [color:var(--mute)]'>
					Every LUMEN experience stacks — each layer deeper than the last, each
					designed to pull audiences further in.
				</p>

				<div className='lu-reveal relative mx-auto mt-16 h-[340px] max-w-lg sm:h-[380px]'>
					{layers.map((layer, i) => (
						<div
							key={layer.label}
							className={`absolute inset-x-4 ${layer.z} ${layer.offset} ${layer.opacity} rounded-2xl border border-[var(--line)] p-6 transition-transform duration-500 [background:var(--panel)] hover:translate-y-0 hover:opacity-100 sm:inset-x-8 sm:p-8`}
							style={{
								boxShadow: `0 ${(layers.length - i) * 8}px ${(layers.length - i) * 20}px -12px color-mix(in oklch, var(--violet) 35%, transparent)`
							}}
						>
							<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-widest [color:var(--cyan)]'>
								Layer 0{layers.length - i}
							</span>
							<h3 className='mt-2 font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
								{layer.label}
							</h3>
							<p className='mt-2 text-sm [color:var(--mute)]'>{layer.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
