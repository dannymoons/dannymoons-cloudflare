const seasons = [
	{
		name: 'Shoulder',
		months: 'Apr – May · Oct',
		sea: 'from €240',
		terrace: 'from €380',
		loft: 'from €520'
	},
	{
		name: 'High season',
		months: 'Jun – Sep',
		sea: 'from €320',
		terrace: 'from €480',
		loft: 'from €640'
	},
	{
		name: 'Winter calm',
		months: 'Nov – Mar',
		sea: 'from €190',
		terrace: 'from €290',
		loft: 'from €400'
	}
]

/** Future Payload mapping: rateTable. */
export function Rates() {
	return (
		<section
			id='rates'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--sand)]/40 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='dw-reveal mb-10 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
						Rates
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						Seasonal stays
					</h2>
					<p className='mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Per night, including breakfast and beach access. City tax not
						included.
					</p>
				</div>

				<div className='dw-reveal overflow-x-auto'>
					<table className='w-full min-w-[32rem] border-collapse text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b'>
								<th className='py-4 pr-4 font-medium uppercase tracking-[0.14em] [color:var(--mute)]'>
									Season
								</th>
								<th className='py-4 pr-4 font-[family-name:var(--font-display)] text-base [color:var(--ink)]'>
									Sea Room
								</th>
								<th className='py-4 pr-4 font-[family-name:var(--font-display)] text-base [color:var(--ink)]'>
									Terrace Suite
								</th>
								<th className='py-4 font-[family-name:var(--font-display)] text-base [color:var(--ink)]'>
									Driftwood Loft
								</th>
							</tr>
						</thead>
						<tbody>
							{seasons.map(s => (
								<tr key={s.name} className='border-[var(--line)] border-b'>
									<td className='py-5 pr-4'>
										<span className='font-medium [color:var(--ink)]'>
											{s.name}
										</span>
										<span className='mt-1 block text-xs [color:var(--mute)]'>
											{s.months}
										</span>
									</td>
									<td className='py-5 pr-4 [color:var(--sea)]'>{s.sea}</td>
									<td className='py-5 pr-4 [color:var(--sea)]'>{s.terrace}</td>
									<td className='py-5 [color:var(--sea)]'>{s.loft}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<p className='dw-reveal mt-8 text-center text-xs [color:var(--mute)]'>
					Minimum 2 nights · 7-night stay includes one sunset sail
				</p>
			</div>
		</section>
	)
}
