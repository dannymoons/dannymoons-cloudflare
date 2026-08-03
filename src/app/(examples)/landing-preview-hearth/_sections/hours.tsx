const schedule = [
	{ day: 'Monday', lunch: 'Closed', dinner: 'Closed' },
	{ day: 'Tuesday', lunch: '11:30 – 15:00', dinner: '17:30 – 22:00' },
	{ day: 'Wednesday', lunch: '11:30 – 15:00', dinner: '17:30 – 22:00' },
	{ day: 'Thursday', lunch: '11:30 – 15:00', dinner: '17:30 – 22:00' },
	{ day: 'Friday', lunch: '11:30 – 15:00', dinner: '17:30 – 23:00' },
	{ day: 'Saturday', lunch: '10:00 – 16:00', dinner: '17:30 – 23:00' },
	{ day: 'Sunday', lunch: '10:00 – 16:00', dinner: '17:00 – 21:00' }
]

/** Future Payload mapping: hoursTable. */
export function Hours() {
	return (
		<section
			id='hours'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--wheat)]/35 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-2xl'>
				<div className='ht-reveal mb-8 text-center'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Opening hours
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						When we&apos;re firing the oven
					</h2>
					<p className='mt-3 text-sm [color:var(--mute)]'>
						Kinkerstraat 142, Amsterdam · Tram 7, 17
					</p>
				</div>

				<div className='ht-reveal overflow-x-auto rounded-sm border border-[var(--line)] [background:var(--cream)]'>
					<table className='w-full min-w-[320px] text-left text-sm'>
						<thead>
							<tr className='border-[var(--line)] border-b [background:var(--wheat)]/50'>
								<th
									scope='col'
									className='px-4 py-3 font-medium [color:var(--wood)] sm:px-6'
								>
									Day
								</th>
								<th
									scope='col'
									className='px-4 py-3 font-medium [color:var(--wood)] sm:px-6'
								>
									Lunch
								</th>
								<th
									scope='col'
									className='px-4 py-3 font-medium [color:var(--wood)] sm:px-6'
								>
									Dinner
								</th>
							</tr>
						</thead>
						<tbody>
							{schedule.map(row => (
								<tr
									key={row.day}
									className='border-[var(--line)] border-b last:border-0'
								>
									<th
										scope='row'
										className='px-4 py-3.5 font-[family-name:var(--font-display)] font-normal [color:var(--wood)] sm:px-6'
									>
										{row.day}
									</th>
									<td className='px-4 py-3.5 [color:var(--mute)] sm:px-6'>
										{row.lunch}
									</td>
									<td className='px-4 py-3.5 [color:var(--mute)] sm:px-6'>
										{row.dinner}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<p className='ht-reveal mt-6 text-center text-sm [color:var(--mute)]'>
					Sunday roast seatings from 12:00 — book via reservations
				</p>
			</div>
		</section>
	)
}
