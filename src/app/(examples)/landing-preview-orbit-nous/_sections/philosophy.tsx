const principles = [
	{
		title: "Measure, don't estimate",
		body: 'Every gram of CO₂ should trace to a URL, a model run, or a hosting region — not a marketing slide.'
	},
	{
		title: 'Publish the methodology',
		body: 'Open weights for our emission factors, peer-reviewable assumptions, and versioned changelogs.'
	},
	{
		title: 'Compute less, learn more',
		body: 'Sustainable AI starts with smaller inference budgets, static delivery, and edge-first architecture.'
	}
]

/** Future Payload mapping: philosophyManifesto. */
export function Philosophy() {
	return (
		<section
			id='philosophy'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_8%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16'>
					<div>
						<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
							Research manifesto
						</span>
						<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em]'>
							Sustainable compute is a scientific obligation
						</h2>
						<p className='on-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							We built Orbit Research for labs that treat carbon accounting with
							the same rigour as model evaluation — transparent, reproducible,
							and designed for publication.
						</p>
					</div>
					<div className='space-y-6'>
						{principles.map((p, i) => (
							<article
								key={p.title}
								className='on-reveal rounded-lg border border-[var(--line)] p-5 [background:var(--parchment)] sm:p-6'
								style={{ animationDelay: `${i * 80}ms` }}
							>
								<span className='font-[family-name:var(--font-display)] text-sm tabular-nums [color:var(--clay)]'>
									{String(i + 1).padStart(2, '0')}
								</span>
								<h3 className='mt-2 font-[family-name:var(--font-display)] font-semibold text-lg'>
									{p.title}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{p.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
