const milestones = [
	{
		year: '2011',
		event: 'PRISM founded in a Rotterdam squat. First 7" pressed by hand.'
	},
	{ year: '2014', event: 'PRISM Room studio opens. Tape-only policy adopted.' },
	{
		year: '2018',
		event: 'Velvet Rust\'s "Slow Collapse" breaks 10K vinyl sales.'
	},
	{
		year: '2022',
		event: 'Artist ownership model — 85/15 split, masters stay with bands.'
	},
	{ year: '2026', event: '14 artists, 47 releases, zero major-label buyouts.' }
]

/** Future Payload mapping: labelStoryTimeline. */
export function LabelStory() {
	return (
		<section
			id='story'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--magenta)_8%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 pr-reveal lg:grid-cols-2'>
					<div>
						<p className='font-bold text-sm uppercase tracking-[0.2em] [color:var(--magenta)]'>
							Label story
						</p>
						<h2 className='mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-none'>
							Built on wax &amp; stubbornness
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--mute)]'>
							PRISM started because three friends got tired of watching great
							bands sign away their masters. We built a label the way we wanted
							labels to work — loud, fair, and permanently independent.
						</p>
						<div className='mt-8 aspect-[16/10] overflow-hidden border-4 border-[var(--ink)]'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/prism-story/720/450'
								alt='Early PRISM label founders at pressing plant'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>

					<ol className='relative border-[var(--ink)] border-l-4 pl-8'>
						{milestones.map(m => (
							<li key={m.year} className='relative pr-reveal pb-10 last:pb-0'>
								<span
									aria-hidden
									className='absolute top-1 -left-[13px] h-5 w-5 [background:var(--lime)]'
								/>
								<p className='font-[family-name:var(--font-display)] text-3xl uppercase [color:var(--magenta)]'>
									{m.year}
								</p>
								<p className='mt-2 leading-relaxed [color:var(--mute)]'>
									{m.event}
								</p>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	)
}
