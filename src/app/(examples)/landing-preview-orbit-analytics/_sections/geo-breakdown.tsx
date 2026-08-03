/** Future Payload mapping: geoBreakdown (block). */
const REGIONS = [
	{ code: 'NL', label: 'Netherlands', share: 34, co2: 48.6 },
	{ code: 'DE', label: 'Germany', share: 22, co2: 31.4 },
	{ code: 'US', label: 'United States', share: 18, co2: 28.2 },
	{ code: 'GB', label: 'United Kingdom', share: 12, co2: 14.8 },
	{ code: 'Other', label: 'Other', share: 14, co2: 19.8 }
]

export function GeoBreakdown() {
	return (
		<section className='rounded-xl border border-[var(--line)] p-4 [background:var(--panel)]'>
			<h2 className='mb-3 font-[family-name:var(--font-display)] font-semibold text-sm'>
				Geography
			</h2>
			<ul className='space-y-2.5'>
				{REGIONS.map(r => (
					<li key={r.code}>
						<div className='mb-1 flex justify-between text-xs'>
							<span>{r.label}</span>
							<span className='[color:var(--mute)]'>{r.co2} kg</span>
						</div>
						<div className='h-1.5 overflow-hidden rounded-full [background:var(--surface)]'>
							<div
								className='h-full rounded-full [background:var(--orbit)]'
								style={{ width: `${r.share}%` }}
							/>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
