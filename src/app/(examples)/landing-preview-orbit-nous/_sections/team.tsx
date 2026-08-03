const researchers = [
	{
		name: 'Dr. Mei Chen',
		role: 'Lead Research Scientist',
		focus: 'Page-level emission modelling',
		initials: 'MC'
	},
	{
		name: 'Lars van der Berg',
		role: 'Infrastructure Researcher',
		focus: 'Grid-aware routing & edge delivery',
		initials: 'LB'
	},
	{
		name: 'Amara Okonkwo',
		role: 'ML Sustainability Engineer',
		focus: 'Inference footprint benchmarks',
		initials: 'AO'
	},
	{
		name: 'Dr. Raj Patel',
		role: 'Open Science Lead',
		focus: 'Reproducible methodology & datasets',
		initials: 'RP'
	}
]

/** Future Payload mapping: teamMembers. */
export function Team() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
						Research team
					</span>
					<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Researchers behind Orbit
					</h2>
					<p className='on-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Scientists and engineers who publish, peer-review, and ship — carbon
						accounting treated as a first-class research output.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{researchers.map(r => (
						<article
							key={r.name}
							className='on-reveal rounded-lg border border-[var(--line)] p-5 text-center [background:var(--parchment)]'
						>
							<span className='mx-auto grid h-14 w-14 place-items-center rounded-full border border-[color-mix(in_oklch,var(--sage)_40%,transparent)] font-[family-name:var(--font-display)] text-lg [background:color-mix(in_oklch,var(--sage)_15%,transparent)] [color:var(--olive)]'>
								{r.initials}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] font-medium'>
								{r.name}
							</h3>
							<p className='mt-1 text-xs [color:var(--olive)]'>{r.role}</p>
							<p className='mt-2 text-xs leading-relaxed [color:var(--mute)]'>
								{r.focus}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
