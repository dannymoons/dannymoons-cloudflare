const steps = [
	{
		n: '01',
		t: 'Download & sign up',
		d: 'Open an account in under 3 minutes — no paperwork, no branch.'
	},
	{
		n: '02',
		t: 'Add your money',
		d: 'Top up by card or bank transfer, or get paid straight into Vault.'
	},
	{
		n: '03',
		t: 'Spend smarter',
		d: 'Tap to pay anywhere and watch your savings grow automatically.'
	}
]

/** Future Payload mapping: stepsTimeline. */
export function HowItWorks() {
	return (
		<section
			id='how'
			className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<h2 className='va-reveal mb-12 max-w-lg font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Up and running in minutes.
				</h2>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{steps.map(s => (
						<div key={s.n} className='va-reveal'>
							<div className='font-[family-name:var(--font-display)] font-bold text-5xl [color:var(--mint)]'>
								{s.n}
							</div>
							<h3 className='mt-4 font-semibold text-xl'>{s.t}</h3>
							<p className='mt-2 text-[var(--mute)] leading-relaxed'>{s.d}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
