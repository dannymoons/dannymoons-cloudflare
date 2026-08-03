const pieces = [
	{
		name: 'Komorebi bowl',
		glaze: 'Shino ash',
		price: '€148',
		seed: 'cinder-bowl'
	},
	{
		name: 'Yūgen vase',
		glaze: 'Tenmoku',
		price: '€220',
		seed: 'cinder-vase'
	},
	{
		name: 'Tsuki cup set',
		glaze: 'Hakeme white',
		price: '€96',
		seed: 'cinder-cups'
	},
	{
		name: 'Wabi plate',
		glaze: 'Natural ash',
		price: '€72',
		seed: 'cinder-plate'
	}
]

/** Future Payload mapping: productGrid. */
export function Collection() {
	return (
		<section id='collection' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Current collection
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Vessels from the last firing
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Each piece is unique — glaze flow, kiln position, and the hand of
						the thrower leave their mark. No two rims are identical.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{pieces.map(p => (
						<article
							key={p.name}
							className='ci-reveal group overflow-hidden rounded-sm border border-[var(--line)]'
						>
							<div className='aspect-[4/5] overflow-hidden [background:color-mix(in_oklch,var(--clay)_20%,var(--paper))]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/600/750`}
									alt={p.name}
									className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
							</div>
							<div className='p-4'>
								<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--ash)]'>
									{p.name}
								</h3>
								<p className='mt-1 text-sm [color:var(--mute)]'>{p.glaze}</p>
								<p className='mt-3 font-medium text-sm [color:var(--ember)]'>
									{p.price}
								</p>
							</div>
						</article>
					))}
				</div>

				<div className='ci-reveal mt-10 text-center'>
					<a
						href='#shop'
						className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-6 font-medium text-sm transition-colors [color:var(--ash)] hover:border-[var(--ember)] hover:[color:var(--ember)]'
					>
						Browse the shop
					</a>
				</div>
			</div>
		</section>
	)
}
