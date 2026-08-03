const tracks = [
	{
		name: 'Gyrfalcon',
		code: 'FAL-RU-04',
		habitat: 'Arctic tundra',
		status: 'Stable',
		lastPing: '2h ago',
		seed: 'kestrel-falcon'
	},
	{
		name: 'Forest elephant',
		code: 'LOX-CG-11',
		habitat: 'Congo basin',
		status: 'Critical',
		lastPing: '14m ago',
		seed: 'kestrel-elephant'
	},
	{
		name: 'Wandering albatross',
		code: 'DIO-EX-07',
		habitat: 'Southern ocean',
		status: 'Declining',
		lastPing: '6h ago',
		seed: 'kestrel-albatross'
	},
	{
		name: 'Barbary leopard',
		code: 'PAN-AT-02',
		habitat: 'Atlas mountains',
		status: 'Rare',
		lastPing: 'Pending',
		seed: 'kestrel-leopard'
	}
]

/** Future Payload mapping: speciesTrackingGrid. */
export function Species() {
	return (
		<section
			id='species'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--earth)_18%,var(--night))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
						Species tracking
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
						Subjects on the roll call
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Each card links satellite telemetry, camera trap IDs, and field
						observations — the backbone of every KESTREL film chapter.
					</p>
				</div>

				<div className='mt-12 grid gap-6 sm:grid-cols-2'>
					{tracks.map(s => (
						<article
							key={s.code}
							className='ks-reveal overflow-hidden rounded-sm border border-[var(--line)] [background:var(--night)]'
						>
							<div className='aspect-[16/9] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/640/360`}
									alt={s.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='p-5'>
								<div className='flex items-start justify-between gap-4'>
									<div>
										<p className='font-mono text-[10px] uppercase tracking-[0.2em] [color:var(--amber)]'>
											{s.code}
										</p>
										<h3 className='mt-1 font-[family-name:var(--font-display)] text-xl [color:var(--cream)]'>
											{s.name}
										</h3>
									</div>
									<span className='rounded-sm border border-[var(--line)] px-2 py-1 text-xs [color:var(--fog)]'>
										{s.status}
									</span>
								</div>
								<dl className='mt-4 grid grid-cols-2 gap-3 text-sm'>
									<div>
										<dt className='text-xs uppercase tracking-wider [color:var(--mute)]'>
											Habitat
										</dt>
										<dd className='mt-0.5 [color:var(--fog)]'>{s.habitat}</dd>
									</div>
									<div>
										<dt className='text-xs uppercase tracking-wider [color:var(--mute)]'>
											Last ping
										</dt>
										<dd className='mt-0.5 [color:var(--fog)]'>{s.lastPing}</dd>
									</div>
								</dl>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
