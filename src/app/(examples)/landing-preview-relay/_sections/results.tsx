const leaderboard = [
	{
		pos: 1,
		name: 'S. van Dijk',
		time: '2:48:12',
		split: '+0:00',
		category: 'M40'
	},
	{
		pos: 2,
		name: 'M. Okonkwo',
		time: '2:49:03',
		split: '+0:51',
		category: 'M Open'
	},
	{
		pos: 3,
		name: 'L. Bergström',
		time: '2:51:44',
		split: '+3:32',
		category: 'F Open'
	},
	{
		pos: 4,
		name: 'T. Nakamura',
		time: '2:52:18',
		split: '+4:06',
		category: 'M Open'
	},
	{
		pos: 5,
		name: 'E. de Vries',
		time: '2:53:01',
		split: '+4:49',
		category: 'F35'
	},
	{
		pos: 6,
		name: 'J. Müller',
		time: '2:54:33',
		split: '+6:21',
		category: 'M Open'
	}
]

/** Future Payload mapping: resultsTable. */
export function Results() {
	return (
		<section id='results' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div className='max-w-xl'>
						<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
							Results
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
							2025 City leaderboard
						</h2>
					</div>
					<p className='text-sm [color:var(--mute)]'>
						Live splits at every 5 km checkpoint
					</p>
				</div>

				<div className='rl-reveal overflow-x-auto'>
					<table className='w-full min-w-[32rem] border-collapse text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b uppercase tracking-[0.14em] [color:var(--mute)]'>
								<th className='py-3 pr-4 font-medium' scope='col'>
									Pos
								</th>
								<th className='py-3 pr-4 font-medium' scope='col'>
									Runner
								</th>
								<th className='py-3 pr-4 font-medium' scope='col'>
									Category
								</th>
								<th className='py-3 pr-4 font-medium' scope='col'>
									Finish
								</th>
								<th className='py-3 font-medium' scope='col'>
									Split
								</th>
							</tr>
						</thead>
						<tbody>
							{leaderboard.map(row => (
								<tr
									key={row.pos}
									className={`border-[var(--line)] border-b ${row.pos <= 3 ? '[background:color-mix(in_oklch,var(--orange)_6%,transparent)]' : ''}`}
								>
									<td className='py-4 pr-4'>
										<span
											className={`font-[family-name:var(--font-display)] text-lg ${row.pos === 1 ? '[color:var(--orange)]' : '[color:var(--black)]'}`}
										>
											{row.pos}
										</span>
									</td>
									<td className='py-4 pr-4 font-medium [color:var(--black)]'>
										{row.name}
									</td>
									<td className='py-4 pr-4 [color:var(--mute)]'>
										{row.category}
									</td>
									<td className='py-4 pr-4 font-mono [color:var(--black)]'>
										{row.time}
									</td>
									<td className='py-4 font-mono [color:var(--orange)]'>
										{row.split}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className='rl-reveal mt-8 text-center'>
					<a
						href='#results'
						className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-6 font-medium text-sm uppercase tracking-[0.1em] transition-colors [color:var(--black)] hover:border-[var(--orange)] hover:[color:var(--orange)]'
					>
						Full results archive
					</a>
				</div>
			</div>
		</section>
	)
}
