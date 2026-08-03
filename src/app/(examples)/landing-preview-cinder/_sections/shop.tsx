const items = [
	{
		name: 'Chawan — natural ash',
		price: '€185',
		stock: '3 left',
		seed: 'cinder-shop1'
	},
	{
		name: 'Yunomi pair',
		price: '€64',
		stock: 'In stock',
		seed: 'cinder-shop2'
	},
	{
		name: 'Tokkuri & guinomi set',
		price: '€128',
		stock: '2 left',
		seed: 'cinder-shop3'
	},
	{
		name: 'Serving platter',
		price: '€98',
		stock: 'In stock',
		seed: 'cinder-shop4'
	},
	{
		name: 'Incense holder',
		price: '€42',
		stock: 'In stock',
		seed: 'cinder-shop5'
	},
	{
		name: 'Vase — tenmoku',
		price: '€210',
		stock: '1 left',
		seed: 'cinder-shop6'
	}
]

/** Future Payload mapping: shopCatalog. */
export function Shop() {
	return (
		<section id='shop' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div className='max-w-xl'>
						<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
							Shop
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
							Take a piece home
						</h2>
					</div>
					<p className='text-sm [color:var(--mute)]'>
						Ships within 5 days · Hand-wrapped in washi
					</p>
				</div>

				<ul className='divide-y divide-[var(--line)] border-[var(--line)] border-y'>
					{items.map(item => (
						<li
							key={item.name}
							className='ci-reveal grid grid-cols-1 items-center gap-4 py-5 sm:grid-cols-[4rem_1fr_auto_auto] sm:gap-6'
						>
							<div className='h-16 w-16 overflow-hidden rounded-sm [background:color-mix(in_oklch,var(--clay)_20%,var(--paper))]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${item.seed}/128/128`}
									alt=''
									className='h-full w-full object-cover'
								/>
							</div>
							<div>
								<p className='font-[family-name:var(--font-display)] text-lg [color:var(--ash)]'>
									{item.name}
								</p>
								<p className='text-xs [color:var(--mute)]'>{item.stock}</p>
							</div>
							<span className='font-medium [color:var(--ember)]'>
								{item.price}
							</span>
							<button
								type='button'
								className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-4 font-medium text-sm transition-colors [color:var(--ash)] hover:border-[var(--ember)] hover:[color:var(--ember)]'
							>
								Add
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
