const chapters = [
	{
		num: '01',
		title: 'Claim governance',
		desc: 'Pre-flight review for every sustainability message',
		href: '#claim-audit'
	},
	{
		num: '02',
		title: 'Carbon narrative',
		desc: 'Campaign-level accounting your CFO can reconcile',
		href: '#framework'
	},
	{
		num: '03',
		title: 'Regulatory horizon',
		desc: 'EU Green Claims, CSRD, and what lands next',
		href: '#regulation-ticker'
	},
	{
		num: '04',
		title: 'Stakeholder mapping',
		desc: 'Investors, activists, and the boardroom gap',
		href: '#programs'
	},
	{
		num: '05',
		title: 'Crisis playbooks',
		desc: 'When a claim gets challenged in public',
		href: '#approach'
	},
	{
		num: '06',
		title: 'Measurement stack',
		desc: 'Tools, vendors, and audit-ready data flows',
		href: '#toolkit'
	},
	{
		num: '07',
		title: 'Case files',
		desc: 'How 84 brands rebuilt trust after scrutiny',
		href: '#case-studies'
	},
	{
		num: '08',
		title: 'Briefing room',
		desc: 'Start with a 90-minute executive session',
		href: '#contact'
	}
]

/** Future Payload mapping: editorialIndex (chapter list). */
export function CmoIndex() {
	return (
		<section
			id='cmo-index'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-14 grid gap-6 border-[var(--line)] border-b pb-10 lg:grid-cols-[1fr_2fr]'>
					<p className='text-xs uppercase tracking-[0.32em] [color:var(--teal)]'>
						Index
					</p>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--navy)]'>
						Everything a CMO needs before the next sustainability campaign
						ships.
					</h2>
				</div>

				<ol className='divide-y divide-[var(--line)]'>
					{chapters.map(ch => (
						<li key={ch.num} className='rl-reveal group'>
							<a
								href={ch.href}
								className='grid gap-4 py-7 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 sm:py-8'
							>
								<span className='font-[family-name:var(--font-display)] text-sm tabular-nums [color:var(--teal)]'>
									{ch.num}
								</span>
								<div>
									<p className='font-[family-name:var(--font-display)] text-xl transition-colors sm:text-2xl group-hover:[color:var(--teal)]'>
										{ch.title}
									</p>
									<p className='mt-1 text-sm [color:var(--mute)]'>{ch.desc}</p>
								</div>
								<span className='hidden text-2xl transition-transform [color:var(--mute)] group-hover:translate-x-1 sm:inline'>
									→
								</span>
							</a>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
