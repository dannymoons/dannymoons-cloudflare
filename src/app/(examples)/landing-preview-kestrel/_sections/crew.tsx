const crew = [
	{
		name: 'Amara Okoye',
		role: 'Director · Cinematography',
		seed: 'kestrel-crew-1'
	},
	{
		name: 'Lars Henriksson',
		role: 'Expedition lead · Pilot',
		seed: 'kestrel-crew-2'
	},
	{ name: 'Dr. Mei Lin', role: 'Field biologist', seed: 'kestrel-crew-3' },
	{ name: 'Jonah Reyes', role: 'Sound · Underwater', seed: 'kestrel-crew-4' }
]

/** Future Payload mapping: crewGrid. */
export function Crew() {
	return (
		<section id='crew' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
						The unit
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
						Crew on the ground and in the air
					</h2>
				</div>

				<div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{crew.map(c => (
						<figure key={c.seed} className='ks-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-sm'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${c.seed}/480/640`}
									alt={c.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-4'>
								<p className='font-[family-name:var(--font-display)] text-lg [color:var(--cream)]'>
									{c.name}
								</p>
								<p className='text-sm [color:var(--mute)]'>{c.role}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
