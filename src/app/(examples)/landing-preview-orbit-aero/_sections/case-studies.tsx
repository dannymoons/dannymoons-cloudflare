import { ArrowUpRight } from 'lucide-react'

const studies = [
	{
		agency: 'Studio Meridian',
		client: 'Verde Foods',
		headline: 'Cut client emissions 38% in one redesign sprint',
		metric: '0.39g → 0.24g',
		detail:
			'Meridian used Orbit Aero page diagnostics to prioritise image formats and font loading — delivering an A grade and a client-facing report in the same sprint.',
		seed: 'oa-cs1'
	},
	{
		agency: 'Northwind Digital',
		client: 'Harbor & Co.',
		headline: 'Embedded badges won 3 retainer renewals',
		metric: '67% widget adoption',
		detail:
			'Northwind rolled out carbon badges across six client footers — turning sustainability into a visible differentiator that helped close three renewals in Q4.',
		seed: 'oa-cs2'
	}
]

/** Future Payload mapping: agencyCaseStudies. */
export function CaseStudies() {
	return (
		<section id='case-studies' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='oa-reveal mb-12 max-w-2xl'>
					<span className='mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Case studies
					</span>
					<h2 className='font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Agencies shipping carbon clarity
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
						Two studios using Orbit Aero to win clients, retain accounts, and
						prove impact with measurable grades.
					</p>
				</div>

				<div className='grid gap-6 lg:grid-cols-2'>
					{studies.map(s => (
						<article
							key={s.seed}
							className='oa-reveal group overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur-xl'
						>
							<div className='relative aspect-[16/10] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/800/500`}
									alt={`${s.agency} case study`}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklch,var(--ink)_55%,transparent)] to-transparent' />
								<div className='absolute right-4 bottom-4 left-4'>
									<p className='text-[10px] text-white/80 uppercase tracking-widest'>
										{s.agency} × {s.client}
									</p>
									<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-lg text-white sm:text-xl'>
										{s.headline}
									</p>
								</div>
							</div>
							<div className='p-6'>
								<div className='flex items-center justify-between gap-4'>
									<span className='rounded-xl border border-[color-mix(in_oklch,var(--cyan)_30%,transparent)] bg-white/60 px-3 py-1.5 font-[family-name:var(--font-display)] font-bold text-sm tabular-nums [color:var(--blue)]'>
										{s.metric}
									</span>
									<a
										href='#case-studies'
										className='inline-flex min-h-10 items-center gap-1 font-medium text-xs transition-colors [color:var(--blue)] hover:[color:var(--cyan)]'
									>
										Read story
										<ArrowUpRight className='h-3.5 w-3.5' />
									</a>
								</div>
								<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
									{s.detail}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
