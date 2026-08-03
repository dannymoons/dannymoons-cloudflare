/** Future Payload mapping: transparencyBlock. */
export function Transparency() {
	return (
		<section
			id='transparency'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--pine)_6%,var(--fog))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center'>
					<div className='ca-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
							Transparency reports
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Client-ready disclosures, not internal spreadsheets.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Generate branded transparency reports per campaign, quarter, or
							account — with methodology footnotes, vendor scorecards, and
							improvement roadmaps your clients can publish.
						</p>
						<ul className='mt-6 space-y-2 text-sm [color:var(--mute)]'>
							<li>• White-label PDF and interactive web formats</li>
							<li>• Scope 3 Category 1 allocation by project</li>
							<li>• Year-over-year comparison with target tracking</li>
							<li>• Stakeholder read-only portals for procurement teams</li>
						</ul>
					</div>

					<div className='ca-reveal rounded-sm border border-[var(--line)] p-6 [background:var(--fog)]'>
						<p className='text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
							Sample report · Q3 2025
						</p>
						<div className='mt-4 space-y-3'>
							{[
								{ label: 'Recycled content average', val: '68%' },
								{ label: 'Renewable energy (production)', val: '74%' },
								{ label: 'Tier 2 vendor coverage', val: '91%' },
								{ label: 'Scope 3 marketing services', val: '842 tCO₂e' }
							].map(row => (
								<div
									key={row.label}
									className='flex justify-between border-[var(--line)] border-b pb-2 text-sm'
								>
									<span className='[color:var(--mute)]'>{row.label}</span>
									<span className='font-medium [color:var(--ink)]'>
										{row.val}
									</span>
								</div>
							))}
						</div>
						<p className='mt-4 text-xs [color:var(--pine)]'>
							✓ Audit-ready · GHG Protocol aligned · Client-approved
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
