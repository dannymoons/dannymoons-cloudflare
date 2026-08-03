const events = [
	{
		title: 'Bloom Walk',
		date: 'Saturday 14 June · 10:00',
		venue: 'Riverside Park, 5 km family route',
		desc: 'Our biggest annual fundraiser. Strollers welcome, dogs on leads, face painting at the finish line.',
		cta: 'Register — £15 per family'
	},
	{
		title: 'Gala under the stars',
		date: 'Friday 3 October · 19:00',
		venue: 'Grand Hall, Riverside Hospital',
		desc: 'An evening of music, silent auction, and a first look at the wing architectural model.',
		cta: 'Tables from £500'
	},
	{
		title: 'Little artists morning',
		date: 'Monthly · First Saturday',
		venue: 'Community studio, Ward 3',
		desc: 'Open craft sessions for patients, siblings, and visiting families. Drop in, no booking needed.',
		cta: 'Free — donations welcome'
	}
]

/** Future Payload mapping: eventCards. */
export function Events() {
	return (
		<section id='events' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='bl-reveal max-w-2xl'>
					<p className='font-semibold text-sm [color:var(--leaf)]'>Events</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08] [color:var(--ink)]'>
						Come together for Bloom
					</h2>
				</div>

				<div className='mt-12 flex flex-col gap-5'>
					{events.map(e => (
						<article
							key={e.title}
							className='bl-reveal flex flex-col gap-4 rounded-2xl border border-[var(--line)] p-6 [background:var(--blush)] sm:flex-row sm:items-center sm:justify-between'
						>
							<div>
								<p className='font-semibold text-sm [color:var(--petal)]'>
									{e.date}
								</p>
								<h3 className='mt-1 font-[family-name:var(--font-display)] font-bold text-xl [color:var(--ink)]'>
									{e.title}
								</h3>
								<p className='mt-1 text-sm [color:var(--mute)]'>{e.venue}</p>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{e.desc}
								</p>
							</div>
							<a
								href='#donate'
								className='inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-6 font-semibold text-sm text-white transition-opacity [background:var(--leaf)] hover:opacity-90'
							>
								{e.cta}
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
