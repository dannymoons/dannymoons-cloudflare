/** Future Payload mapping: assetWeight (block). */
const ASSETS = [
	{ type: 'Images', weight: '842 KB', share: 48, co2: 68.5 },
	{ type: 'JavaScript', weight: '412 KB', share: 24, co2: 34.2 },
	{ type: 'Fonts', weight: '186 KB', share: 11, co2: 12.8 },
	{ type: 'CSS', weight: '94 KB', share: 5, co2: 8.1 },
	{ type: 'Video', weight: '218 KB', share: 12, co2: 19.2 }
]

export function AssetWeight() {
	return (
		<section className='border-2 border-[var(--stroke)] shadow-[4px_4px_0_var(--shadow)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Asset weight
			</h2>
			<p className='mb-3 text-[11px] [color:var(--mute)]'>
				Avg transfer size per page view · 1.75 MB total
			</p>
			<ul className='space-y-2'>
				{ASSETS.map(a => (
					<li
						key={a.type}
						className='flex items-center gap-3 rounded-lg border border-[var(--line)] p-2 [background:var(--surface)]'
					>
						<div className='min-w-0 flex-1'>
							<div className='flex justify-between text-xs'>
								<span className='font-medium'>{a.type}</span>
								<span className='[color:var(--mute)]'>{a.weight}</span>
							</div>
							<div className='mt-1 h-1 overflow-hidden rounded-full [background:var(--panel)]'>
								<div
									className='h-full [background:var(--olive)]'
									style={{ width: `${a.share}%` }}
								/>
							</div>
						</div>
						<span className='shrink-0 text-[10px] [color:var(--mute)]'>
							{a.co2} kg
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
