const steps = [
	{
		t: 'Get weird',
		d: 'We start with the dumbest, boldest idea in the room — then make it make sense.'
	},
	{
		t: 'Make it move',
		d: 'Everything is designed in motion from day one. Static is a special case.'
	},
	{ t: 'Sweat it', d: 'Kerning at 3am energy. Details are the whole point.' },
	{
		t: 'Launch loud',
		d: 'We help you ship it like it matters — because it does.'
	}
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section className='px-5 py-16 sm:px-8 sm:py-24'>
			<h2 className='mb-12 font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.03em]'>
				How the sausage
				<br />
				<span className='font-[family-name:var(--font-serif)] italic'>
					gets made
				</span>
			</h2>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				{steps.map((s, i) => (
					<div
						key={s.t}
						className='flx-reveal rounded-3xl border-2 border-[var(--ink)] p-6 [background:var(--cream)]'
					>
						<span className='font-[family-name:var(--font-mono)] text-sm'>
							0{i + 1} —
						</span>
						<h3 className='mt-3 font-extrabold text-2xl tracking-tight'>
							{s.t}
						</h3>
						<p className='mt-2 leading-relaxed [color:var(--ink)]/70'>{s.d}</p>
					</div>
				))}
			</div>
		</section>
	)
}
