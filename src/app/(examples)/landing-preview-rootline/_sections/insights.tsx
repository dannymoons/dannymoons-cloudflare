const articles = [
	{
		title: 'The CMO guide to CSRD marketing disclosures',
		category: 'Regulation',
		date: 'Mar 2026',
		read: '8 min'
	},
	{
		title: 'Why your agency needs a carbon brief addendum',
		category: 'Operations',
		date: 'Feb 2026',
		read: '5 min'
	},
	{
		title: 'Greenwashing risk: a claim-by-claim audit framework',
		category: 'Governance',
		date: 'Jan 2026',
		read: '12 min'
	}
]

/** Future Payload mapping: insightsFeed. */
export function Insights() {
	return (
		<section
			id='insights'
			className='px-5 py-20 [background:var(--navy)] [color:var(--sand)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
							Insights
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
							Thinking for marketing leaders
						</h2>
					</div>
					<a
						href='#contact'
						className='text-sm transition-opacity [color:var(--teal)] hover:opacity-80'
					>
						Subscribe to briefings →
					</a>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{articles.map(a => (
						<article
							key={a.title}
							className='rl-reveal rounded-sm border border-[color:oklch(1_0_0/0.12)] p-6 transition-colors hover:border-[var(--teal)]'
						>
							<div className='flex items-center gap-3 text-xs opacity-70'>
								<span>{a.category}</span>
								<span>·</span>
								<span>{a.date}</span>
								<span>·</span>
								<span>{a.read}</span>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg leading-snug'>
								{a.title}
							</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
