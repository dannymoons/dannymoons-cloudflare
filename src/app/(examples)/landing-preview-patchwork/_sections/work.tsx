const projects = [
	{
		title: 'Rewild Co.',
		category: 'Brand launch',
		impact: '2.1M reach · 340% signup lift',
		seed: 'patchwork-work-1',
		accent: 'var(--green)'
	},
	{
		title: 'Circular Threads',
		category: 'Campaign',
		impact: '18% return rate increase',
		seed: 'patchwork-work-2',
		accent: 'var(--pink)'
	},
	{
		title: 'Gridshift Energy',
		category: 'Impact report',
		impact: 'Award-winning annual report',
		seed: 'patchwork-work-3',
		accent: 'var(--yellow)'
	}
]

/** Future Payload mapping: workShowcase. */
export function Work() {
	return (
		<section
			id='work'
			className='px-5 py-20 [background:var(--ink)] [color:var(--cream)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
							Selected work
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight'>
							Proof, not promises
						</h2>
					</div>
					<a
						href='#case-studies'
						className='font-medium text-sm uppercase tracking-wide [color:var(--yellow)]'
					>
						All case studies →
					</a>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{projects.map(p => (
						<article key={p.title} className='pw-reveal group'>
							<div className='relative aspect-[4/5] overflow-hidden border-2 border-[var(--cream)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${p.seed}/500/625`}
									alt={p.title}
									className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
								<div
									className='absolute right-0 bottom-0 left-0 p-4'
									style={{
										background: `color-mix(in oklch, ${p.accent} 90%, var(--ink))`
									}}
								>
									<p className='text-xs uppercase tracking-[0.2em] opacity-80'>
										{p.category}
									</p>
									<h3 className='font-[family-name:var(--font-display)] text-xl uppercase'>
										{p.title}
									</h3>
									<p className='mt-1 text-sm'>{p.impact}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
