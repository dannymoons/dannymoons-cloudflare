const tiers = [
	{
		label: 'Tier 1',
		count: '847',
		desc: 'Direct production partners with full audit data'
	},
	{
		label: 'Tier 2',
		count: '3,200',
		desc: 'Subcontractors mapped via primary vendor disclosure'
	},
	{
		label: 'Tier 3',
		count: '14,100',
		desc: 'Raw material origins traced through chain-of-custody docs'
	}
]

/** Future Payload mapping: supplyChainOverview. */
export function SupplyChain() {
	return (
		<section
			id='supply-chain'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--steel)_4%,var(--fog))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div className='ca-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
							Supply chain mapping
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Three tiers deep. One source of truth.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Most agencies stop at Tier 1. Cascade pushes visibility through
							subcontractors and raw material origins — the levels where
							greenwashing usually hides.
						</p>
						<div className='mt-8 space-y-4'>
							{tiers.map(t => (
								<div
									key={t.label}
									className='flex items-start gap-4 rounded-sm border border-[var(--line)] p-4 [background:var(--fog)]'
								>
									<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--pine)]'>
										{t.count}
									</span>
									<div>
										<p className='font-medium [color:var(--ink)]'>{t.label}</p>
										<p className='mt-1 text-sm [color:var(--mute)]'>{t.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='ca-reveal overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/cascade-supply/640/520'
							alt='Supply chain tier visualization dashboard'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
