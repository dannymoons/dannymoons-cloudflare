const tiers = [
	{ amount: '£25', label: 'Art supplies for one session' },
	{ amount: '£100', label: 'Soft furnishings for a bedside nook' },
	{ amount: '£500', label: 'A week of play therapy' },
	{ amount: '£25,000', label: 'Sponsor a full room redesign' }
]

/** Future Payload mapping: donationTiers. Mobile-first, labelled. */
export function Donate() {
	return (
		<section
			id='donate'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--petal)_10%,var(--blush))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='bl-reveal mx-auto max-w-2xl text-center'>
					<p className='font-semibold text-sm [color:var(--petal)]'>Donate</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08] [color:var(--ink)]'>
						Every gift grows the wing
					</h2>
					<p className='mt-4 text-base [color:var(--mute)]'>
						100% of public donations fund construction and programmes. Bloom
						overhead is covered by corporate partners.
					</p>
				</div>

				<div className='bl-reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4'>
					{tiers.map(t => (
						<button
							key={t.amount}
							type='button'
							className='flex flex-col items-center rounded-2xl border-2 border-[var(--line)] p-4 text-center transition-colors [background:var(--blush)] hover:border-[var(--petal)]'
						>
							<span className='font-[family-name:var(--font-display)] font-bold text-xl [color:var(--petal)]'>
								{t.amount}
							</span>
							<span className='mt-1 text-xs [color:var(--mute)]'>
								{t.label}
							</span>
						</button>
					))}
				</div>

				<form className='bl-reveal mx-auto mt-10 flex max-w-md flex-col gap-4'>
					<label className='flex flex-col gap-1.5 font-medium text-sm'>
						<span className='[color:var(--ink)]'>Custom amount (£)</span>
						<input
							type='number'
							min={1}
							placeholder='Enter amount'
							className='min-h-12 rounded-xl border border-[var(--line)] px-4 [background:var(--blush)] [color:var(--ink)]'
						/>
					</label>
					<label className='flex flex-col gap-1.5 font-medium text-sm'>
						<span className='[color:var(--ink)]'>Email receipt</span>
						<input
							type='email'
							placeholder='you@example.com'
							className='min-h-12 rounded-xl border border-[var(--line)] px-4 [background:var(--blush)] [color:var(--ink)]'
						/>
					</label>
					<button
						type='button'
						className='inline-flex min-h-12 items-center justify-center rounded-full font-semibold text-sm text-white transition-opacity [background:var(--petal)] hover:opacity-90'
					>
						Donate securely
					</button>
					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview — no payment processed
					</p>
				</form>
			</div>
		</section>
	)
}
