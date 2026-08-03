const slides = [
	{
		num: '01',
		title: 'Executive summary',
		bullets: [
			'Marketing tCO₂e down 34% YoY',
			'Scope 3 coverage: 94% of spend',
			'Zero material misstatements flagged'
		]
	},
	{
		num: '02',
		title: 'Board-ready metrics',
		bullets: [
			'Intensity ratio: 0.42 tCO₂e / €M revenue',
			'Top 5 emission sources mapped',
			'Scenario model: −12% by FY27'
		]
	},
	{
		num: '03',
		title: 'Audit posture',
		bullets: [
			'Deloitte readonly session: 47 min',
			'12 data sources chain-verified',
			'CSRD annex auto-generated'
		]
	}
]

/** Future Payload mapping: boardroomBriefing (slide deck). */
export function BoardroomBriefing() {
	return (
		<section id='boardroom-briefing' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal mb-14 max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Boardroom briefing
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						The deck your CFO forwards. The data your auditor requests.
					</h2>
				</div>

				<div className='grid gap-6 md:grid-cols-3'>
					{slides.map(slide => (
						<article
							key={slide.num}
							className='group relative me-reveal aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)] p-6 transition-shadow [background:var(--ice)] hover:shadow-[0_24px_48px_-20px_color-mix(in_oklch,var(--blue)_25%,transparent)] sm:p-8'
						>
							<div className='flex items-start justify-between'>
								<span className='font-mono text-[10px] [color:var(--mute)]'>
									Slide {slide.num}
								</span>
								<span className='h-2 w-2 rounded-full [background:var(--blue)]' />
							</div>
							<h3 className='mt-8 font-[family-name:var(--font-display)] text-2xl leading-snug [color:var(--ink)]'>
								{slide.title}
							</h3>
							<ul className='mt-6 space-y-3 border-[var(--line)] border-t pt-6 text-sm [color:var(--mute)]'>
								{slide.bullets.map(b => (
									<li key={b} className='flex gap-3'>
										<span className='mt-2 h-1 w-1 shrink-0 rounded-full [background:var(--blue)]' />
										{b}
									</li>
								))}
							</ul>
							<div
								aria-hidden
								className='absolute right-0 bottom-0 h-24 w-24 translate-x-8 translate-y-8 rounded-full opacity-0 transition-opacity [background:var(--blue)] group-hover:opacity-10'
							/>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
