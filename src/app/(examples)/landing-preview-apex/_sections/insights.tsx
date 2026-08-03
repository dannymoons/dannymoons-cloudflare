const articles = [
	{
		title: 'Arbitration seat selection after BREXIT',
		category: 'International',
		date: 'March 2026',
		read: '8 min',
		seed: 'ax-ins1'
	},
	{
		title: 'Director duties in distressed subsidiaries',
		category: 'Insolvency',
		date: 'February 2026',
		read: '6 min',
		seed: 'ax-ins2'
	},
	{
		title: 'FCA enforcement trends: H2 outlook',
		category: 'Regulatory',
		date: 'January 2026',
		read: '5 min',
		seed: 'ax-ins3'
	}
]

/** Future Payload mapping: articleFeed. */
export function Insights() {
	return (
		<section
			id='insights'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
							Insights
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--stone)]'>
							Briefings from the bar
						</h2>
					</div>
					<a
						href='#contact'
						className='text-sm transition-colors [color:var(--copper)] hover:opacity-80'
					>
						Subscribe to updates →
					</a>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{articles.map(a => (
						<article
							key={a.seed}
							className='ax-reveal group overflow-hidden rounded-sm border border-[var(--line)]'
						>
							<div className='aspect-[16/10] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${a.seed}/640/400`}
									alt=''
									className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
								/>
							</div>
							<div className='p-5'>
								<div className='flex items-center gap-3 text-xs [color:var(--mute)]'>
									<span className='uppercase tracking-[0.16em] [color:var(--copper)]'>
										{a.category}
									</span>
									<span>{a.date}</span>
									<span>{a.read}</span>
								</div>
								<h3 className='mt-3 font-[family-name:var(--font-display)] text-lg leading-snug [color:var(--stone)]'>
									{a.title}
								</h3>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
