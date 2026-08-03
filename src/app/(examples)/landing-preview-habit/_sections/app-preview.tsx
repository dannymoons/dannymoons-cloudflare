/** Future Payload mapping: appPreview. */
export function AppPreview() {
	const screens = [
		{ seed: 'habit-home', label: 'Daily dashboard' },
		{ seed: 'habit-track', label: 'Habit tracker' },
		{ seed: 'habit-impact', label: 'Impact summary' }
	]

	return (
		<section
			id='app-preview'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--mint)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						App preview
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Designed for calm, not climate doom.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Soft colours, clear progress, and bite-sized actions you can
						actually complete between meetings.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-3'>
					{screens.map(s => (
						<figure key={s.seed} className='ha-reveal'>
							<div className='aspect-[9/16] overflow-hidden rounded-2xl border border-[var(--line)] [background:var(--cream)]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/360/640`}
									alt={`Habit app — ${s.label}`}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-3 text-center text-sm [color:var(--mute)]'>
								{s.label}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
