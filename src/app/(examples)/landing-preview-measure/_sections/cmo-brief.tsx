/** Future Payload mapping: editorialBrief. */
export function CmoBrief() {
	return (
		<section
			id='cmo-brief'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
					<div className='me-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
							The CMO brief
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Your brand story now includes a carbon ledger.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Regulators, investors, and procurement teams are asking marketing
							for emissions data — not anecdotes. Measure gives CMOs a
							defensible methodology aligned with GHG Protocol and CSRD
							disclosure requirements.
						</p>
						<ul className='mt-6 space-y-3 text-sm [color:var(--mute)]'>
							<li className='flex gap-3'>
								<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--blue)]' />
								Unify agency, media, and production emissions in one workspace
							</li>
							<li className='flex gap-3'>
								<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--blue)]' />
								Export board packs with methodology footnotes auditors expect
							</li>
							<li className='flex gap-3'>
								<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full [background:var(--blue)]' />
								Track reduction targets against science-based pathways
							</li>
						</ul>
					</div>

					<blockquote className='me-reveal rounded-sm border border-[var(--line)] p-8 [background:color-mix(in_oklch,var(--blue)_4%,var(--ice))]'>
						<p className='font-[family-name:var(--font-display)] text-xl leading-relaxed [color:var(--ink)] sm:text-2xl'>
							&ldquo;We went from spreadsheet chaos to a single source of truth
							in six weeks. Our Q3 sustainability report cited Measure data
							without a single auditor query.&rdquo;
						</p>
						<footer className='mt-6 flex items-center gap-4'>
							<div className='h-12 w-12 overflow-hidden rounded-full border border-[var(--line)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src='https://picsum.photos/seed/measure-cmo/96/96'
									alt='Sarah Chen, CMO'
									className='h-full w-full object-cover'
								/>
							</div>
							<div>
								<cite className='font-medium not-italic [color:var(--ink)]'>
									Sarah Chen
								</cite>
								<p className='text-sm [color:var(--mute)]'>
									CMO, Northwind Consumer Group
								</p>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>
	)
}
