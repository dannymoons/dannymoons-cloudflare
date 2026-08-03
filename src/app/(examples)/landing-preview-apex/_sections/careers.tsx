const roles = [
	{
		title: 'Senior associate — commercial litigation',
		location: 'London · Full-time',
		desc: '5+ PQE. Trial experience essential. Lead smaller matters under partner supervision.'
	},
	{
		title: 'Knowledge lawyer — regulatory',
		location: 'London · Full-time',
		desc: 'Track and synthesise FCA, PRA, and SFO developments for the litigation practice.'
	},
	{
		title: 'Legal technologist',
		location: 'Hybrid · Full-time',
		desc: 'Build document review workflows and matter dashboards used across active cases.'
	}
]

/** Future Payload mapping: jobListings. */
export function Careers() {
	return (
		<section
			id='careers'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Careers
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--stone)]'>
						Join a chambers built on judgment
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						We hire slowly and promote on merit. Associates work directly with
						partners from day one — no pyramid, no lockstep.
					</p>
				</div>

				<ul className='mt-12 flex flex-col gap-4'>
					{roles.map(r => (
						<li
							key={r.title}
							className='ax-reveal flex flex-col gap-4 rounded-sm border border-[var(--line)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6'
						>
							<div>
								<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--stone)]'>
									{r.title}
								</h3>
								<p className='mt-1 text-xs uppercase tracking-[0.16em] [color:var(--copper)]'>
									{r.location}
								</p>
								<p className='mt-2 text-sm [color:var(--mute)]'>{r.desc}</p>
							</div>
							<a
								href='#contact'
								className='inline-flex min-h-10 shrink-0 items-center justify-center rounded-sm border border-[var(--copper)] px-5 text-sm transition-colors [color:var(--copper)] hover:text-[var(--parchment)] hover:[background:var(--copper)]'
							>
								Apply
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
