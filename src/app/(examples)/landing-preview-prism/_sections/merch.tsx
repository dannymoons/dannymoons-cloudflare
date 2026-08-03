const items = [
	{ name: 'PRISM logo tee', price: '€28', seed: 'prism-merch-1' },
	{ name: 'Static Bloom tour poster', price: '€15', seed: 'prism-merch-2' },
	{ name: 'Label tote · black', price: '€18', seed: 'prism-merch-3' },
	{ name: 'Glass Cathedral slipmat', price: '€12', seed: 'prism-merch-4' }
]

/** Future Payload mapping: merchGrid. */
export function Merch() {
	return (
		<section
			id='merch'
			className='border-[var(--ink)] border-t-2 px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pr-reveal'>
					<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
						Merch
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-none'>
						Wear the label
					</h2>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{items.map(m => (
						<article
							key={m.seed}
							className='border-2 border-[var(--ink)] pr-reveal'
						>
							<div className='aspect-square overflow-hidden border-[var(--ink)] border-b-2'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${m.seed}/400/400`}
									alt={m.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='flex items-center justify-between p-4'>
								<p className='font-bold text-sm uppercase'>{m.name}</p>
								<span className='font-[family-name:var(--font-display)] text-xl [color:var(--magenta)]'>
									{m.price}
								</span>
							</div>
						</article>
					))}
				</div>

				<div className='mt-8 pr-reveal text-center'>
					<a
						href='#contact'
						className='inline-flex min-h-12 items-center border-2 border-[var(--ink)] px-8 font-bold uppercase [background:var(--lime)]'
					>
						Full shop
					</a>
				</div>
			</div>
		</section>
	)
}
