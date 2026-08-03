const kit = [
	{
		item: 'RED V-Raptor XL',
		category: 'Camera',
		note: '8K · −40°C rated housing'
	},
	{
		item: 'DJI Mavic 3 Thermal',
		category: 'Aerial',
		note: 'Night survey · 45 min endurance'
	},
	{
		item: 'Hydrophone array H4',
		category: 'Audio',
		note: 'Sub-surface · 200m tether'
	},
	{
		item: 'Satellite uplink Mk III',
		category: 'Comms',
		note: 'Live telemetry · 4 biomes'
	},
	{
		item: 'Field lab shelter',
		category: 'Base',
		note: 'Inflatable · 72h autonomous'
	},
	{
		item: 'Camera trap grid',
		category: 'Tracking',
		note: '24 units · AI species ID'
	}
]

/** Future Payload mapping: gearInventory. */
export function Gear() {
	return (
		<section
			id='gear'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal grid gap-12 lg:grid-cols-2'>
					<div>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
							Field kit
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
							Gear built for extremes
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--mute)]'>
							Every piece of equipment is tested against Arctic cold, equatorial
							humidity, and open-ocean salt before it ships with the unit.
						</p>
						<div className='mt-8 aspect-[4/3] overflow-hidden rounded-sm'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/kestrel-gear/720/540'
								alt='Expedition camera rig in field case'
								className='h-full w-full object-cover'
							/>
						</div>
					</div>

					<ul className='space-y-0'>
						{kit.map(k => (
							<li
								key={k.item}
								className='ks-reveal flex flex-col gap-1 border-[var(--line)] border-b py-5 sm:flex-row sm:items-baseline sm:justify-between'
							>
								<div>
									<span className='text-xs uppercase tracking-[0.16em] [color:var(--amber)]'>
										{k.category}
									</span>
									<p className='mt-1 font-[family-name:var(--font-display)] text-lg [color:var(--cream)]'>
										{k.item}
									</p>
								</div>
								<p className='text-sm [color:var(--mute)] sm:max-w-[200px] sm:text-right'>
									{k.note}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
