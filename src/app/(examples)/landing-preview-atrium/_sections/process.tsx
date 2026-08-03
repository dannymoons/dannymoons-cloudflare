const steps = [
	{
		t: 'Discover',
		d: 'Site, context and ambition — mapped before a single line is drawn.'
	},
	{
		t: 'Define',
		d: 'Programme, proportion and budget distilled into a clear spatial brief.'
	},
	{
		t: 'Design',
		d: 'Models, drawings and material studies refined through iteration.'
	},
	{
		t: 'Deliver',
		d: 'Construction oversight until the last threshold is set in place.'
	}
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section id='process' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='at-reveal mb-12 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] uppercase tracking-[-0.01em]'>
					Process
				</h2>

				<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] [background:var(--line)] sm:grid-cols-2 lg:grid-cols-4'>
					{steps.map((s, i) => (
						<div
							key={s.t}
							className='at-reveal flex min-h-[220px] flex-col justify-between p-6 [background:var(--white)] sm:p-7'
						>
							<span className='text-xs uppercase tracking-[0.25em] [color:var(--gold)]'>
								0{i + 1}
							</span>
							<div>
								<h3 className='font-[family-name:var(--font-display)] font-bold text-2xl uppercase tracking-tight'>
									{s.t}
								</h3>
								<p className='mt-3 text-sm leading-relaxed [color:var(--concrete)]'>
									{s.d}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
