const features = [
	{
		title: 'Portfolio dashboard',
		desc: 'Real-time view of all client emissions with filters by sector, project type, and time period.'
	},
	{
		title: 'API & webhooks',
		desc: 'Push scores into your PM tool, Slack, or client portal with REST API and event webhooks.'
	},
	{
		title: 'Reduction planner',
		desc: 'Scenario modelling for hosting migrations, media mix shifts, and remote production.'
	},
	{
		title: 'Compliance exports',
		desc: 'CSRD and SEC-aligned data exports formatted for client sustainability teams.'
	},
	{
		title: 'Team permissions',
		desc: 'Role-based access for account leads, producers, and leadership with audit logs.'
	},
	{
		title: 'Benchmark alerts',
		desc: 'Notifications when your score changes or a competitor overtakes you on the leaderboard.'
	}
]

/** Future Payload mapping: featureGrid. */
export function Features() {
	return (
		<section
			id='features'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--lime)_8%,var(--white))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Features
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						Built for agency workflows
					</h2>
				</div>

				<div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(f => (
						<article
							key={f.title}
							className='gb-reveal rounded-xl border border-[var(--line)] p-6 [background:var(--white)]'
						>
							<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg'>
								{f.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{f.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
