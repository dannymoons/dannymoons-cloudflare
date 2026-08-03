const steps = [
	{
		n: '01',
		t: 'CRACK IT',
		d: 'Ice cold. The hiss is part of the experience.'
	},
	{ n: '02', t: 'CHUG IT', d: 'No sipping. This is not a herbal tea.' },
	{ n: '03', t: 'GO LOUD', d: 'Ship the feature. Run the mile. Win the raid.' }
]

/** Future Payload mapping: stepsBand. */
export function Ritual() {
	return (
		<section className='border-[var(--cyan)] border-y-4 px-5 py-16 [background:var(--cyan)] [color:var(--void)] sm:px-8'>
			<h2 className='mb-10 font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-[0.9]'>
				THE RITUAL
			</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				{steps.map(s => (
					<div key={s.n} className='vc-pop border-4 border-[var(--void)] p-7'>
						<div className='font-[family-name:var(--font-display)] text-7xl leading-none'>
							{s.n}
						</div>
						<h3 className='mt-4 font-[family-name:var(--font-display)] text-3xl'>
							{s.t}
						</h3>
						<p className='mt-2 font-semibold'>{s.d}</p>
					</div>
				))}
			</div>
		</section>
	)
}
