const waypoints = [
	{
		lat: '68°12′N',
		place: 'Svalbard ice shelf',
		status: 'Complete',
		day: '01–14'
	},
	{
		lat: '3°04′S',
		place: 'Congo basin canopy',
		status: 'Active',
		day: '15–38'
	},
	{ lat: '44°31′S', place: 'Drake Passage', status: 'Planned', day: '39–52' },
	{ lat: '27°59′N', place: 'Atlas ridgeline', status: 'Planned', day: '53–68' }
]

/** Future Payload mapping: expeditionRoute. */
export function Expedition() {
	return (
		<section
			id='expedition'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
						Expedition map
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
						Route IV — 68 days, four biomes
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						A single continuous arc from polar shelf to equatorial canopy. Each
						waypoint is a film chapter and a telemetry anchor for partner
						research teams.
					</p>
				</div>

				<div className='ks-reveal mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]'>
					<ol className='relative space-y-0 border-[var(--line)] border-l pl-8'>
						{waypoints.map((w, i) => (
							<li key={w.place} className='relative pb-10 last:pb-0'>
								<span
									aria-hidden
									className='absolute top-1 -left-[9px] h-4 w-4 rounded-full border-2 [background:var(--night)] [border-color:var(--amber)]'
								/>
								<p className='font-mono text-xs uppercase tracking-widest [color:var(--amber)]'>
									Day {w.day} · {w.lat}
								</p>
								<p className='mt-1 font-[family-name:var(--font-display)] text-xl [color:var(--cream)]'>
									{w.place}
								</p>
								<span
									className={`mt-2 inline-block text-xs uppercase tracking-[0.16em] ${w.status === 'Active' ? '[color:var(--amber)]' : '[color:var(--mute)]'}`}
								>
									{w.status}
								</span>
								{i < waypoints.length - 1 && (
									<span
										aria-hidden
										className='absolute top-6 -left-px h-[calc(100%-12px)] w-px [background:var(--line)]'
									/>
								)}
							</li>
						))}
					</ol>

					<div className='relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/kestrel-map/960/600'
							alt='Expedition route map overlay'
							className='h-full w-full object-cover opacity-80'
						/>
						<div
							aria-hidden
							className='absolute inset-0 [background:color-mix(in_oklch,var(--earth)_35%,transparent)]'
						/>
						<p className='absolute right-4 bottom-4 font-mono text-[10px] uppercase tracking-[0.2em] [color:var(--fog)]'>
							Live telemetry · Updated hourly
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
