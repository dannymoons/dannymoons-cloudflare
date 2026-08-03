const steps = [
	{
		step: '1',
		title: 'Connect your stack',
		desc: 'Integrate hosting, CDN, ad platforms, and project management tools in under an hour.'
	},
	{
		step: '2',
		title: 'Score every deliverable',
		desc: 'Automated carbon estimates for websites, campaigns, video, and print — tagged by client and project.'
	},
	{
		step: '3',
		title: 'Compare and improve',
		desc: 'See where you rank against peer agencies and get actionable reduction recommendations.'
	}
]

/** Future Payload mapping: processSteps. */
export function HowItWorks() {
	return (
		<section id='how-it-works' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						How it works
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-tight'>
						From integration to insight in three steps
					</h2>
				</div>

				<ol className='mt-12 grid gap-6 md:grid-cols-3'>
					{steps.map(s => (
						<li
							key={s.step}
							className='gb-reveal rounded-xl border border-[var(--line)] p-6'
						>
							<span className='inline-flex h-10 w-10 items-center justify-center rounded-lg font-[family-name:var(--font-display)] font-bold text-lg [background:color-mix(in_oklch,var(--lime)_25%,var(--white))] [color:var(--green)]'>
								{s.step}
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] font-semibold text-xl'>
								{s.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.desc}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
