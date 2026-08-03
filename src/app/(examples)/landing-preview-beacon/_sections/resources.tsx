const resources = [
	{
		type: 'Guide',
		title: 'B Corp Readiness Checklist',
		desc: 'Self-assessment tool covering all five impact pillars with scoring guidance.',
		cta: 'Download PDF'
	},
	{
		type: 'Webinar',
		title: 'Certification Timeline Masterclass',
		desc: '60-minute session on realistic timelines, budgets, and common pitfalls.',
		cta: 'Watch recording'
	},
	{
		type: 'Report',
		title: '2025 B Corp Benchmark Report',
		desc: 'Score distributions and improvement trends across 500+ mid-market companies.',
		cta: 'Read report'
	},
	{
		type: 'Template',
		title: 'Stakeholder Governance Amendment Kit',
		desc: 'Legal templates for US, UK, and EU entity structures.',
		cta: 'Access templates'
	}
]

/** Future Payload mapping: resourceGrid. */
export function Resources() {
	return (
		<section id='resources' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Resources
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Start learning before you commit.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Free guides, webinars, and templates from our certification team —
						the same materials we use with paying clients during discovery.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{resources.map(r => (
						<article
							key={r.title}
							className='be-reveal group rounded-sm border border-[var(--line)] p-6 transition-colors hover:border-[color-mix(in_oklch,var(--forest)_30%,transparent)]'
						>
							<p className='text-xs uppercase tracking-[0.18em] [color:var(--gold)]'>
								{r.type}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{r.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{r.desc}
							</p>
							<p className='mt-4 font-medium text-sm [color:var(--forest)] group-hover:underline'>
								{r.cta} →
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
