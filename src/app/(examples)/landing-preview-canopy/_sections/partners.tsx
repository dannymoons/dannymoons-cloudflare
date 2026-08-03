const ngos = [
	'Ellen MacArthur Foundation',
	'Regeneration International',
	'Soil Health Institute'
]
const corporates = [
	'Patagonia',
	'Ørsted',
	'Interface',
	'Unilever',
	'Danone',
	'B Corp Global'
]

/** Future Payload mapping: logoStrip. */
export function Partners() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-16 [background:color-mix(in_oklch,var(--leaf)_5%,var(--sand))] sm:px-8 sm:py-20'>
			<div className='mx-auto max-w-6xl'>
				<p className='cp-reveal text-center text-xs uppercase tracking-[0.24em] [color:var(--mute)]'>
					Allies in the transition
				</p>

				<div className='cp-reveal mt-10'>
					<p className='mb-5 text-center text-xs uppercase tracking-[0.18em] [color:var(--leaf)]'>
						NGO &amp; research partners
					</p>
					<div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-3'>
						{ngos.map(n => (
							<span
								key={n}
								className='font-[family-name:var(--font-display)] text-lg [color:var(--earth)]'
							>
								{n}
							</span>
						))}
					</div>
				</div>

				<div className='cp-reveal mt-12'>
					<p className='mb-5 text-center text-xs uppercase tracking-[0.18em] [color:var(--leaf)]'>
						Corporate &amp; brand partners
					</p>
					<div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
						{corporates.map(c => (
							<span
								key={c}
								className='font-[family-name:var(--font-display)] text-xl opacity-70 [color:var(--mute)]'
							>
								{c}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
