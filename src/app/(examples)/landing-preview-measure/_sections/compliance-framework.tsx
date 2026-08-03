const frameworks = [
	{ name: 'CSRD', status: 'Mapped', coverage: '100%' },
	{ name: 'GHG Protocol', status: 'Aligned', coverage: 'Scope 1–3' },
	{ name: 'ISO 14064', status: 'Certified', coverage: 'FY25' },
	{ name: 'SBTi', status: 'Submitted', coverage: 'Near-term' },
	{ name: 'TCFD', status: 'Disclosed', coverage: 'Annual' },
	{ name: 'SEC Climate', status: 'Ready', coverage: 'Draft' }
]

/** Future Payload mapping: complianceFramework (Swiss grid). */
export function ComplianceFramework() {
	return (
		<section
			id='compliance-framework'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--slate)_4%,var(--ice))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal mb-12 flex flex-col gap-4 border-[var(--line)] border-b pb-10 sm:flex-row sm:items-end sm:justify-between'>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Built for the frameworks that matter
					</h2>
					<p className='max-w-sm text-sm [color:var(--mute)]'>
						Hairline precision. No decorative compliance badges — just mapped
						status your legal team can verify.
					</p>
				</div>

				<div className='me-reveal grid border-[var(--line)] border-t border-l sm:grid-cols-2 lg:grid-cols-3'>
					{frameworks.map(fw => (
						<div
							key={fw.name}
							className='border-[var(--line)] border-r border-b p-6 sm:p-8'
						>
							<div className='flex items-baseline justify-between gap-4'>
								<h3 className='font-[family-name:var(--font-display)] text-2xl tracking-tight'>
									{fw.name}
								</h3>
								<span className='font-mono text-[10px] uppercase tracking-[0.14em] [color:var(--blue)]'>
									{fw.status}
								</span>
							</div>
							<p className='mt-4 font-mono text-xs [color:var(--mute)]'>
								{fw.coverage}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
