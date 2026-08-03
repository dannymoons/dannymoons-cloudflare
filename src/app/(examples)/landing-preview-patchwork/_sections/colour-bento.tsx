const tiles = [
	{
		id: 'strategy',
		title: 'Strategy',
		desc: 'Positioning that survives activist scrutiny',
		bg: 'var(--yellow)',
		span: 'sm:col-span-2',
		rotate: '-rotate-1'
	},
	{
		id: 'identity',
		title: 'Identity',
		desc: 'Systems, not one-off logos',
		bg: 'var(--green)',
		span: '',
		rotate: 'rotate-2',
		light: true
	},
	{
		id: 'campaign',
		title: 'Campaign',
		desc: 'Culture-first launches',
		bg: 'var(--pink)',
		span: '',
		rotate: '-rotate-2'
	},
	{
		id: 'reporting',
		title: 'Impact reporting',
		desc: 'Annual reports people actually read',
		bg: 'var(--cream)',
		span: 'sm:col-span-2',
		rotate: 'rotate-1'
	},
	{
		id: 'motion',
		title: 'Motion',
		desc: 'Scroll-stopping, lightweight',
		bg: 'var(--ink)',
		span: 'sm:col-span-2',
		rotate: '',
		light: true
	}
]

/** Future Payload mapping: colourBento (brutalist grid). */
export function ColourBento() {
	return (
		<section id='colour-bento' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<h2 className='max-w-lg font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-[0.92]'>
						What we <span className='[color:var(--green)]'>patch</span> together
					</h2>
					<p className='max-w-xs text-sm [color:var(--mute)]'>
						Five disciplines. One studio. Zero beige decks.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-4'>
					{tiles.map(tile => (
						<article
							key={tile.id}
							className={`pw-reveal group border-2 border-[var(--ink)] p-6 transition-transform hover:scale-[1.02] sm:p-8 ${tile.span} ${tile.rotate}`}
							style={{
								background: tile.bg,
								color: tile.light ? 'var(--cream)' : 'var(--ink)'
							}}
						>
							<h3 className='font-[family-name:var(--font-display)] text-2xl uppercase sm:text-3xl'>
								{tile.title}
							</h3>
							<p
								className={`mt-3 text-sm leading-relaxed ${tile.light ? 'opacity-80' : '[color:var(--mute)]'}`}
							>
								{tile.desc}
							</p>
							<span className='mt-6 inline-block font-medium text-xs uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100'>
								Explore →
							</span>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
