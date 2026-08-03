const rituals = [
	{
		name: 'Salt scrub',
		duration: '45 min',
		note: 'Local sea salt, citrus, cold plunge'
	},
	{
		name: 'Olive stone massage',
		duration: '60 min',
		note: 'Warm volcanic stones, arbequina oil'
	},
	{
		name: 'Sunset soak',
		duration: '90 min',
		note: 'Private tub, herbal infusion, coastal silence'
	}
]

/** Future Payload mapping: spaTreatments. */
export function Spa() {
	return (
		<section
			id='spa'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--sea)_8%,var(--linen))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='dw-reveal mb-12 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--sea)]'>
						Spa
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						Rituals drawn from the shore
					</h2>
					<p className='mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
						Three treatment rooms with linen screens and the sound of waves
						through open shutters.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{rituals.map(r => (
						<article
							key={r.name}
							className='dw-reveal border border-[var(--line)] p-6 [background:var(--linen)]'
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{r.name}
							</h3>
							<p className='mt-2 text-xs uppercase tracking-[0.16em] [color:var(--terra)]'>
								{r.duration}
							</p>
							<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
								{r.note}
							</p>
						</article>
					))}
				</div>

				<p className='dw-reveal mt-10 text-center text-xs [color:var(--mute)]'>
					Open daily 09:00 – 20:00 · Book through reception or your room tablet
				</p>
			</div>
		</section>
	)
}
