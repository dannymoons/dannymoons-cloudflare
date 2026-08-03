const items = [
	'EU Green Claims Directive — enforcement Q3 2026',
	'CSRD double materiality — marketing disclosures',
	'FTC Green Guides — revised substantiation rules',
	'ASA CAP Code — environmental claims tightening',
	'SEC climate rule — Scope 3 supplier mapping',
	'CMA Green Claims Code — 6-point checklist',
	'ISO 14021 — self-declared environmental claims',
	'GHG Protocol — marketing attribution guidance'
]

/** Future Payload mapping: regulationTicker (marquee band). */
export function RegulationTicker() {
	const loop = items.flatMap(label => [
		{ id: `${label}-a`, label },
		{ id: `${label}-b`, label }
	])

	return (
		<section
			id='regulation-ticker'
			className='overflow-hidden border-[var(--line)] border-y py-5 [background:color-mix(in_oklch,var(--teal)_8%,var(--sand))]'
		>
			<div className='rl-reveal mb-4 px-5 text-center text-[10px] uppercase tracking-[0.32em] [color:var(--mute)] sm:px-8'>
				On the regulatory horizon
			</div>
			<div className='rl-ticker flex w-max whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,2.5rem)] [color:var(--navy)]'>
				{loop.map(entry => (
					<span key={entry.id} className='mx-8 flex items-center gap-8'>
						{entry.label}
						<span className='text-[var(--teal)]'>◆</span>
					</span>
				))}
			</div>
		</section>
	)
}
