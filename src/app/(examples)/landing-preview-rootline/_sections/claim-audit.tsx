const pairs = [
	{
		rejected: '100% planet-positive packaging',
		approved: '68% recycled content; remainder offset via verified credits',
		flag: 'Unsubstantiated superlative'
	},
	{
		rejected: 'Carbon neutral since day one',
		approved:
			'Scope 1 & 2 net-zero since 2023; Scope 3 reduction roadmap published',
		flag: 'Incomplete boundary'
	},
	{
		rejected: 'Sustainably sourced, always',
		approved: '87% of suppliers meet our 2025 sourcing standard (audited)',
		flag: 'Vague qualifier'
	}
]

/** Future Payload mapping: claimAudit (before/after). */
export function ClaimAudit() {
	return (
		<section
			id='claim-audit'
			className='px-5 py-20 [background:var(--navy)] [color:var(--sand)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-14 max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.32em] [color:var(--teal)]'>
						Claim audit
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.06]'>
						We red-line the copy before regulators do.
					</h2>
					<p className='mt-5 text-base leading-relaxed [color:color-mix(in_oklch,var(--sand)_72%,transparent)]'>
						Every engagement starts with a claim inventory. We mark what
						survives scrutiny — and rewrite what doesn&apos;t.
					</p>
				</div>

				<div className='space-y-6'>
					{pairs.map(pair => (
						<article
							key={pair.rejected}
							className='rl-reveal overflow-hidden rounded-sm border border-[color-mix(in_oklch,var(--sand)_12%,transparent)]'
						>
							<div className='grid md:grid-cols-2'>
								<div className='border-[color-mix(in_oklch,var(--sand)_12%,transparent)] border-b p-6 sm:p-8 md:border-r md:border-b-0'>
									<p className='text-[10px] uppercase tracking-[0.22em] [color:color-mix(in_oklch,var(--sand)_50%,transparent)]'>
										Rejected
									</p>
									<p className='mt-3 font-[family-name:var(--font-display)] text-xl line-through decoration-2 decoration-[color-mix(in_oklch,var(--sand)_40%,transparent)] sm:text-2xl'>
										{pair.rejected}
									</p>
									<p className='mt-3 text-xs [color:var(--teal)]'>
										↳ {pair.flag}
									</p>
								</div>
								<div className='p-6 [background:color-mix(in_oklch,var(--teal)_18%,var(--navy))] sm:p-8'>
									<p className='text-[10px] uppercase tracking-[0.22em] [color:var(--teal)]'>
										Approved
									</p>
									<p className='mt-3 font-[family-name:var(--font-display)] text-xl leading-snug sm:text-2xl'>
										{pair.approved}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
