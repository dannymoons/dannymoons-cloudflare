const groups = [
	{
		title: 'Audio',
		rows: [
			['Drivers', 'Dual 40mm dynamic'],
			['Frequency', '20Hz – 40kHz'],
			['Codecs', 'AAC, LDAC, aptX Lossless'],
			['Spatial', 'Head-tracked rendering']
		]
	},
	{
		title: 'Battery & charging',
		rows: [
			['Playback', 'Up to 60 hours'],
			['Fast charge', '5 min = 8 hours'],
			['Port', 'USB-C'],
			['Wireless', 'Qi2']
		]
	},
	{
		title: 'Connectivity',
		rows: [
			['Bluetooth', '5.4 multipoint'],
			['Range', 'Up to 100m'],
			['Mics', '6 (beamforming)'],
			['Water rating', 'IP54']
		]
	}
]

/** Future Payload mapping: specTable. */
export function Specs() {
	return (
		<section id='specs' className='mx-auto max-w-5xl px-6 py-24 sm:py-32'>
			<h2 className='apl-reveal font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.03em]'>
				Tech specs.
			</h2>
			<div className='mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-3'>
				{groups.map(g => (
					<div key={g.title} className='apl-reveal'>
						<h3 className='border-[var(--line)] border-b pb-3 font-semibold text-sm uppercase tracking-wide [color:var(--mute)]'>
							{g.title}
						</h3>
						<dl>
							{g.rows.map(([k, v]) => (
								<div
									key={k}
									className='flex items-baseline justify-between gap-4 border-[var(--line)] border-b py-3 text-sm'
								>
									<dt className='[color:var(--mute)]'>{k}</dt>
									<dd className='text-right font-medium'>{v}</dd>
								</div>
							))}
						</dl>
					</div>
				))}
			</div>
		</section>
	)
}
