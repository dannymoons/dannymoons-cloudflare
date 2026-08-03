const entries = [
	{
		date: 'Day 14 · Svalbard',
		title: 'Wind at −31°C',
		excerpt:
			'The gyrfalcon nest is 40 meters up a basalt face. We lost two hours to frost on the lens heater. Lars says the bird knows we are there — it has not moved in six hours.',
		author: 'A. Okoye'
	},
	{
		date: 'Day 27 · Congo basin',
		title: 'Elephant corridor',
		excerpt:
			'Mei confirmed three matriarchs using the same path at dusk. Camera trap 7 caught the youngest calf — first sighting this season. Telemetry tag LOX-CG-11 pinged 800m east.',
		author: 'Dr. M. Lin'
	},
	{
		date: 'Day 39 · At sea',
		title: 'Albatross on the wing',
		excerpt:
			'Jonah deployed the hydrophone array at 0600. By noon we had forty minutes of clean sub-surface audio. The albatross pair circled the vessel twice — Jonah says they are curious, not threatened.',
		author: 'J. Reyes'
	}
]

/** Future Payload mapping: fieldNotesJournal. */
export function FieldNotes() {
	return (
		<section
			id='field-notes'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--earth)_12%,var(--night))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
						Field notes
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
						Journal entries from the trail
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Daily logs from the unit — observations, setbacks, and the quiet
						moments between takes.
					</p>
				</div>

				<div className='mt-12 space-y-6'>
					{entries.map(e => (
						<article
							key={e.title}
							className='ks-reveal rounded-sm border border-[var(--line)] p-6 [background:var(--night)] sm:p-8'
						>
							<header className='flex flex-wrap items-baseline justify-between gap-2'>
								<p className='font-mono text-xs uppercase tracking-[0.2em] [color:var(--amber)]'>
									{e.date}
								</p>
								<p className='text-sm [color:var(--mute)]'>{e.author}</p>
							</header>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-2xl [color:var(--cream)]'>
								{e.title}
							</h3>
							<p className='mt-3 leading-relaxed [color:var(--fog)]'>
								{e.excerpt}
							</p>
						</article>
					))}
				</div>

				<a
					href='#contact'
					className='ks-reveal mt-8 inline-flex min-h-12 items-center text-sm [color:var(--amber)] hover:underline'
				>
					Request full expedition archive →
				</a>
			</div>
		</section>
	)
}
