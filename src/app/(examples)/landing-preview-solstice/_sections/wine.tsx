const highlights = [
	{ label: 'Bottles in cellar', value: '2,400+' },
	{ label: 'Producers', value: '180' },
	{ label: 'Oldest vintage', value: '1947' }
]

/** Future Payload mapping: wineCellar. */
export function Wine() {
	return (
		<section
			id='wine'
			className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='so-reveal'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Sommelier &amp; cellar
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Curated by Marcus Lind
					</h2>
					<p className='mt-6 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Our head sommelier maintains a living cellar across all three
						locations — biodynamic Burgundy beside natural Slovenian orange,
						Champagne beside Georgian qvevri. Each pairing is composed in
						conversation with the kitchen, never from a list.
					</p>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Private cellar tours available by appointment. Tasting flights from
						€95.
					</p>
					<dl className='mt-10 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						{highlights.map(h => (
							<div key={h.label}>
								<dt className='text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
									{h.label}
								</dt>
								<dd className='mt-2 font-[family-name:var(--font-display)] text-2xl [color:var(--gold)]'>
									{h.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className='so-reveal aspect-[4/5] overflow-hidden'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/sol-wine/800/1000'
						alt='Underground wine cellar with candlelight'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
