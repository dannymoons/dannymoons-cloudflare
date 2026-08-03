const projects = [
	{
		client: 'Rewild Co.',
		title: 'Reforest the feed',
		result: '+142% engagement on sustainability content',
		seed: 'pw-s1',
		accent: 'var(--green)'
	},
	{
		client: 'Gridshift',
		title: 'Power move rebrand',
		result: 'Category leader perception in 6 months',
		seed: 'pw-s2',
		accent: 'var(--yellow)'
	},
	{
		client: 'Circular Threads',
		title: 'Wear the loop',
		result: '32% lift in repeat purchase rate',
		seed: 'pw-s3',
		accent: 'var(--pink)'
	}
]

/** Future Payload mapping: stickyShowcase (scroll stack). */
export function StickyShowcase() {
	return (
		<section id='sticky-showcase' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-[0.4fr_0.6fr]'>
					<div className='pw-reveal lg:sticky lg:top-28 lg:self-start'>
						<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
							Case stack
						</p>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95]'>
							Scroll the proof
						</h2>
						<p className='mt-5 text-sm leading-relaxed [color:var(--mute)]'>
							Three recent launches. Each pinned as you scroll — so the result
							stays in frame while the story unfolds.
						</p>
					</div>

					<div className='space-y-8'>
						{projects.map((p, i) => (
							<article
								key={p.client}
								className='pw-reveal sticky top-24 overflow-hidden border-2 border-[var(--ink)] [background:var(--cream)]'
								style={{ zIndex: i + 1 }}
							>
								<div className='grid sm:grid-cols-2'>
									<div className='aspect-square sm:aspect-auto'>
										{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
										<img
											src={`https://picsum.photos/seed/${p.seed}/600/600`}
											alt=''
											className='h-full w-full object-cover'
										/>
									</div>
									<div
										className='flex flex-col justify-center p-6 sm:p-8'
										style={{ borderTop: `4px solid ${p.accent}` }}
									>
										<p className='text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
											{p.client}
										</p>
										<h3 className='mt-2 font-[family-name:var(--font-display)] text-2xl uppercase sm:text-3xl'>
											{p.title}
										</h3>
										<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
											{p.result}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
