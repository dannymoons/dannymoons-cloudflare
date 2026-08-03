const insurers = [
	'Aetna',
	'Blue Cross Blue Shield',
	'Cigna',
	'UnitedHealthcare',
	'Humana',
	'Medicare',
	'Medicaid',
	"Workers' Compensation",
	'Auto / PIP',
	'Self-pay & HSA/FSA'
]

/** Future Payload mapping: insurerList. */
export function Insurance() {
	return (
		<section id='insurance' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Coverage
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Insurance we accept
					</h2>
					<p className='mt-4 [color:var(--mute)]'>
						We are in-network with most major providers. Our billing team
						verifies coverage before your first visit — no surprises.
					</p>
				</div>

				<ul className='rs-reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
					{insurers.map(name => (
						<li
							key={name}
							className='flex min-h-14 items-center justify-center rounded-xl border border-[var(--line)] px-4 py-3 text-center text-sm [color:var(--slate)]'
						>
							{name}
						</li>
					))}
				</ul>

				<p className='rs-reveal mt-8 text-center text-sm [color:var(--mute)]'>
					Don&rsquo;t see your plan?{' '}
					<a
						href='#contact'
						className='underline underline-offset-2 [color:var(--ocean)]'
					>
						Contact us
					</a>{' '}
					— we&rsquo;ll check eligibility for you.
				</p>
			</div>
		</section>
	)
}
