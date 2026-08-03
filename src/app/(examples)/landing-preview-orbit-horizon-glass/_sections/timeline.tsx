const views = [
	{
		id: 'daily',
		label: 'Daily',
		desc: 'Spot spikes from deploys, ad campaigns, or third-party scripts within 24 hours.',
		sample: '847 page views · 0.44g avg · 3 alerts'
	},
	{
		id: 'weekly',
		label: 'Weekly',
		desc: 'Roll up trends for sprint reviews and stakeholder reports without manual exports.',
		sample: '5.2k views · 0.41g avg · −6% vs prior week'
	},
	{
		id: 'monthly',
		label: 'Monthly',
		labelAccent: true,
		desc: 'Track progress against carbon budgets and compare month-over-month across all sites.',
		sample: '22k views · 0.35g avg · on target'
	}
]

/** Future Payload mapping: timelineViews. */
export function Timeline() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_12%,transparent)] backdrop-blur-sm sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='ohg-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
					Historical tracking
				</span>
				<h2 className='ohg-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
					Daily, weekly, monthly —{' '}
					<span className='italic [color:var(--olive)]'>one timeline</span>
				</h2>
				<p className='ohg-reveal mt-3 max-w-xl text-sm [color:var(--mute)]'>
					Orbit stores every measurement with full history. Switch granularity
					without losing context — the same pages, the same methodology, at
					every scale.
				</p>

				<div className='ohg-reveal mt-12 grid gap-4 sm:grid-cols-3'>
					{views.map(v => (
						<article
							key={v.id}
							className={`flex flex-col ohg-glass rounded-2xl p-5 sm:p-6 ${
								v.labelAccent
									? ''
									: ''
							}`}
						>
							<h3 className='font-[family-name:var(--font-display)] font-semibold text-lg [color:var(--ink)]'>
								{v.label}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{v.desc}
							</p>
							<p className='mt-4 rounded-lg border border-[var(--line)] px-3 py-2 font-[family-name:var(--font-mono)] text-[11px] tabular-nums [background:var(--parchment)] [color:var(--olive)]'>
								{v.sample}
							</p>
						</article>
					))}
				</div>

				<div className='ohg-reveal mt-10 flex items-center gap-3 overflow-x-auto pb-2'>
					{(
						[
							'Jan',
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sep',
							'Oct',
							'Nov',
							'Dec'
						] as const
					).map((month, i) => (
						<div
							key={month}
							className='flex shrink-0 flex-col items-center gap-2'
						>
							<div
								className='w-1 rounded-full [background:var(--olive)]'
								style={{
									height: `${24 + ((i * 7) % 40)}px`,
									opacity: 0.3 + i * 0.05
								}}
							/>
							<span className='font-[family-name:var(--font-mono)] text-[9px] [color:var(--mute)]'>
								{month}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
