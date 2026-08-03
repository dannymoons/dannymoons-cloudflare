const hours = [
	{ time: '6am', temp: '—', label: 'Oven cold', phase: 'idle' },
	{ time: '10am', temp: '180°C', label: 'Bread proofing', phase: 'warm' },
	{ time: '2pm', temp: '320°C', label: 'Pizza lunch', phase: 'hot' },
	{ time: '4pm', temp: '380°C', label: 'Fire lit for service', phase: 'peak' },
	{ time: '7pm', temp: '340°C', label: 'Roasts & grills', phase: 'hot' },
	{ time: '10pm', temp: '120°C', label: 'Embers cooling', phase: 'cool' }
]

const phaseColor: Record<string, string> = {
	idle: 'var(--mute)',
	warm: 'var(--wheat)',
	hot: 'var(--ember)',
	peak: 'var(--rust)',
	cool: 'var(--mute)'
}

/** Future Payload mapping: fireTimeline. */
export function FireTimeline() {
	return (
		<section
			id='fire'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--wheat)]/25 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal max-w-2xl'>
					<p className='font-medium text-sm [color:var(--ember)]'>
						Wood oven rhythm
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--wood)]'>
						6am to 10pm — temperature timeline
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						The oven dictates the menu. Marco stokes at four; by seven the room
						smells like rosemary and char.
					</p>
				</div>

				<div className='ht-reveal mt-12 overflow-x-auto pb-2'>
					<div className='relative min-w-[36rem]'>
						<div
							aria-hidden
							className='absolute top-12 right-4 left-4 h-1 rounded-full [background:linear-gradient(90deg,var(--mute),var(--wheat),var(--ember),var(--rust),var(--ember),var(--mute))]'
						/>
						<ol className='relative flex justify-between gap-1'>
							{hours.map(h => (
								<li
									key={h.time}
									className='flex w-[16%] flex-col items-center text-center'
								>
									<span className='text-xs [color:var(--mute)]'>{h.time}</span>
									<div
										className='my-3 grid h-14 w-14 place-items-center rounded-full border-2 font-medium text-xs sm:h-16 sm:w-16'
										style={{
											borderColor: phaseColor[h.phase],
											color: phaseColor[h.phase]
										}}
									>
										{h.temp}
									</div>
									<p className='text-[10px] leading-tight [color:var(--wood)] sm:text-xs'>
										{h.label}
									</p>
								</li>
							))}
						</ol>
					</div>
				</div>

				<p className='ht-reveal mt-6 text-center text-sm [color:var(--mute)] sm:hidden'>
					Scroll to see the full day →
				</p>
			</div>
		</section>
	)
}
