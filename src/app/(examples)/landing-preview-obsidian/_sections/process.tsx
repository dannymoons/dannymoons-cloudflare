const steps = [
	{
		t: 'Immersion',
		d: 'We drown in your world — brand, audience, ambition — until we feel it.'
	},
	{
		t: 'Direction',
		d: 'Moodboards become storyboards. We set the tone, light and motion language.'
	},
	{
		t: 'Production',
		d: 'CGI, 3D and live action come together frame by frame.'
	},
	{ t: 'Release', d: 'We launch loud, optimize, and hand you a world you own.' }
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<h2 className='ob-reveal mb-12 font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.02em]'>
				How a world gets made
			</h2>
			<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] [background:var(--line)] md:grid-cols-2 lg:grid-cols-4'>
				{steps.map((s, i) => (
					<div
						key={s.t}
						className='ob-reveal flex min-h-[220px] flex-col justify-between p-7 [background:var(--ink)]'
					>
						<span className='font-[family-name:var(--font-mono)] text-[var(--amber)] text-sm'>
							0{i + 1}
						</span>
						<div>
							<h3 className='font-bold text-2xl tracking-tight'>{s.t}</h3>
							<p className='mt-3 text-[var(--mute)] text-sm leading-relaxed'>
								{s.d}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
