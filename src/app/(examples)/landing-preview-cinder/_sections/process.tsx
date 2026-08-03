const steps = [
	{
		n: '01',
		title: 'Wedging',
		desc: 'Air is pressed from the clay body — homogenous, centered, ready to rise on the wheel.'
	},
	{
		n: '02',
		title: 'Centering',
		desc: 'Palms find the axis. The mound wobbles, then stills. Everything else follows from here.'
	},
	{
		n: '03',
		title: 'Pulling',
		desc: 'Walls lifted in three passes. Thin at the lip, weighted at the foot — breath and pressure.'
	},
	{
		n: '04',
		title: 'Trimming',
		desc: 'Leather-hard forms turned upside down. Foot rings carved, surfaces refined with a rib.'
	},
	{
		n: '05',
		title: 'Glazing',
		desc: 'Dipped, poured, or brushed. Shino, tenmoku, hakeme — each chemistry reacts differently in flame.'
	}
]

/** Future Payload mapping: processSteps. */
export function Process() {
	return (
		<section
			id='process'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Hand-thrown
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Five gestures from lump to vessel
					</h2>
				</div>

				<ol className='mt-12 space-y-0'>
					{steps.map(s => (
						<li
							key={s.n}
							className='ci-reveal grid grid-cols-1 gap-4 border-[var(--line)] border-t py-8 sm:grid-cols-12 sm:gap-8 sm:py-10'
						>
							<span className='font-[family-name:var(--font-display)] text-2xl [color:var(--clay)] sm:col-span-2 sm:text-3xl'>
								{s.n}
							</span>
							<div className='sm:col-span-4'>
								<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--ash)] sm:text-2xl'>
									{s.title}
								</h3>
							</div>
							<p className='text-sm leading-relaxed [color:var(--mute)] sm:col-span-6 sm:text-base'>
								{s.desc}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
