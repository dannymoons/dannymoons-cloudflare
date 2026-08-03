const awards = [
	{
		org: 'ArchDaily',
		detail: 'Building of the Year — Shortlist',
		year: '2025'
	},
	{
		org: 'Dezeen Awards',
		detail: 'Architecture — Highly commended',
		year: '2024'
	},
	{ org: 'Mies van der Rohe', detail: 'EU Prize — Nominee', year: '2023' },
	{ org: 'RIBA International', detail: 'Award for Excellence', year: '2022' }
]

/** Future Payload mapping: awardsList. */
export function Awards() {
	return (
		<section
			id='awards'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='at-reveal mb-12 max-w-2xl'>
					<span className='mb-6 block text-xs uppercase tracking-[0.3em] [color:var(--gold)]'>
						Recognition
					</span>
					<p className='font-[family-name:var(--font-display)] font-bold text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] tracking-[-0.01em]'>
						Partner Lars Eriksen received the{' '}
						<span className='[color:var(--gold)]'>Pritzker Prize</span> in 2019
						for a body of work spanning three decades of Nordic architecture.
					</p>
				</div>

				<ul>
					{awards.map(a => (
						<li
							key={a.org}
							className='at-reveal grid grid-cols-12 items-baseline gap-4 border-[var(--line)] border-t py-6 last:border-b'
						>
							<span className='col-span-6 font-[family-name:var(--font-display)] font-bold text-xl tracking-tight sm:col-span-4 sm:text-2xl'>
								{a.org}
							</span>
							<span className='col-span-6 text-sm [color:var(--concrete)] sm:col-span-6'>
								{a.detail}
							</span>
							<span className='col-span-12 text-xs uppercase tracking-[0.15em] [color:var(--concrete)] sm:col-span-2 sm:text-right'>
								{a.year}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
