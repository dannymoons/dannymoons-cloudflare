const shelves = [
	{
		label: 'Single malts',
		items: [
			'Lagavulin 16',
			'Ardbeg Uigeadail',
			'Highland Park 18',
			'Octomore 12'
		]
	},
	{
		label: 'Rare rums',
		items: ['Hampden LROK', 'Appleton 21', 'El Dorado 25', 'Velier Caroni']
	},
	{
		label: 'Forgotten gins',
		items: [
			'Tanqueray Malacca',
			'Old Tom No. 209',
			"Perry's Tot",
			'Citadelle Reserve'
		]
	}
]

/** Future Payload mapping: spiritShelf (back bar inventory). */
export function Spirits() {
	return (
		<section
			id='spirits'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--velvet)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ho-reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
					<div>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							Back bar
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
							Bottles worth the password
						</h2>
					</div>
					<p className='max-w-sm text-sm leading-relaxed [color:var(--mute)]'>
						180 labels behind velvet rope. Ask the bartender for tonight&rsquo;s
						pour — neat only after 23:00.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{shelves.map(shelf => (
						<article
							key={shelf.label}
							className='ho-reveal border border-[var(--line)] p-6 sm:p-8'
						>
							<h3 className='font-[family-name:var(--font-display)] text-lg tracking-[0.08em] [color:var(--gold)]'>
								{shelf.label}
							</h3>
							<ul className='mt-5 space-y-2.5 text-sm [color:var(--cream)]/80'>
								{shelf.items.map(item => (
									<li
										key={item}
										className='border-[var(--line)] border-b pb-2.5 last:border-0'
									>
										{item}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
