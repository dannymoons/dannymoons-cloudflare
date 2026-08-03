const roles = [
	{
		title: 'Ward companion',
		time: '2 hrs/week',
		desc: 'Read, play, and keep company with children during treatment days.'
	},
	{
		title: 'Event steward',
		time: 'Flexible',
		desc: 'Help at fundraising walks, galas, and community bake sales.'
	},
	{
		title: 'Creative workshop lead',
		time: 'Monthly',
		desc: 'Run art, craft, or music sessions for patients and siblings.'
	}
]

/** Future Payload mapping: volunteerCards. */
export function Volunteers() {
	return (
		<section
			id='volunteers'
			className='px-5 py-20 [background:var(--leaf)] [color:white] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='bl-reveal max-w-2xl'>
					<p className='font-semibold text-sm opacity-80'>Volunteer</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08]'>
						Give your time, share your warmth
					</h2>
					<p className='mt-4 text-base leading-relaxed opacity-85'>
						Over 400 volunteers already support Bloom programmes. Full training
						and DBS checks provided — no clinical experience required.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-3'>
					{roles.map(r => (
						<article
							key={r.title}
							className='bl-reveal rounded-2xl border border-white/20 p-6'
						>
							<h3 className='font-[family-name:var(--font-display)] font-bold text-lg'>
								{r.title}
							</h3>
							<p className='mt-1 font-semibold text-sm opacity-75'>{r.time}</p>
							<p className='mt-3 text-sm leading-relaxed opacity-85'>
								{r.desc}
							</p>
						</article>
					))}
				</div>

				<a
					href='#newsletter'
					className='bl-reveal mt-10 inline-flex min-h-12 items-center rounded-full border-2 border-white px-7 font-semibold text-sm transition-opacity hover:opacity-85'
				>
					Register your interest
				</a>
			</div>
		</section>
	)
}
