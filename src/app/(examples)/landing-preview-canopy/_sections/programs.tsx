const programs = [
	{
		tag: 'Accelerator',
		title: 'Soil-to-Shelf Lab',
		desc: 'A 12-week intensive pairing regenerative farmers with consumer brands to redesign packaging, sourcing, and distribution loops.',
		detail: 'Cohort · 8 brands · 4 regions'
	},
	{
		tag: 'Fellowship',
		title: 'Circular Supply Chain Fellowship',
		desc: 'Year-long mentorship for supply chain leads — material audits, reverse logistics design, and supplier transition roadmaps.',
		detail: '24 fellows · Mentored by practitioners'
	},
	{
		tag: 'Toolkit',
		title: 'Regenerative Brand Playbook',
		desc: 'Open-source frameworks for measuring soil carbon, biodiversity co-benefits, and circular material recovery rates.',
		detail: 'Free access · Updated quarterly'
	}
]

/** Future Payload mapping: programCards. */
export function Programs() {
	return (
		<section id='programs' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='cp-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Programs
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						Practical paths to circular impact
					</h2>
				</div>
				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{programs.map(p => (
						<article
							key={p.title}
							className='cp-reveal flex flex-col rounded-2xl border border-[var(--line)] p-7 [background:color-mix(in_oklch,var(--sun)_12%,var(--sand))]'
						>
							<span className='text-xs uppercase tracking-[0.2em] [color:var(--earth)]'>
								{p.tag}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-2xl'>
								{p.title}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
								{p.desc}
							</p>
							<p className='mt-6 text-xs uppercase tracking-[0.16em] [color:var(--leaf)]'>
								{p.detail}
							</p>
							<a
								href='#contact'
								className='mt-5 inline-flex text-sm [color:var(--earth)] hover:underline'
							>
								Apply or download →
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
