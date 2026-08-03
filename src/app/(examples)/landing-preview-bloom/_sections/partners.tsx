const sponsors = [
	{ name: 'Riverside NHS Trust', tier: 'Hospital partner' },
	{ name: 'Greenfield Construction', tier: 'Build partner' },
	{ name: 'Sunrise Bank', tier: 'Lead corporate sponsor' },
	{ name: 'Little Stars Toys', tier: 'Programme sponsor' },
	{ name: 'Meadow Foundation', tier: 'Grant funder' },
	{ name: 'Northbridge Media', tier: 'Pro bono communications' }
]

/** Future Payload mapping: logoStrip. */
export function Partners() {
	return (
		<section
			id='partners'
			className='border-[var(--line)] border-t px-5 py-16 [background:var(--sky)]/30 sm:px-8 sm:py-20'
		>
			<div className='mx-auto max-w-6xl text-center'>
				<p className='bl-reveal font-semibold text-sm [color:var(--mute)]'>
					Partners &amp; sponsors
				</p>
				<h2 className='bl-reveal mt-2 font-[family-name:var(--font-display)] font-bold text-2xl [color:var(--ink)]'>
					Built together
				</h2>

				<div className='bl-reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{sponsors.map(s => (
						<div
							key={s.name}
							className='rounded-2xl border border-[var(--line)] p-5 [background:var(--blush)]'
						>
							<p className='font-[family-name:var(--font-display)] font-bold text-lg [color:var(--ink)]'>
								{s.name}
							</p>
							<p className='mt-1 font-semibold text-xs uppercase tracking-wide [color:var(--petal)]'>
								{s.tier}
							</p>
						</div>
					))}
				</div>

				<a
					href='#donate'
					className='bl-reveal mt-10 inline-flex font-semibold text-sm transition-opacity [color:var(--leaf)] hover:opacity-80'
				>
					Become a corporate partner →
				</a>
			</div>
		</section>
	)
}
