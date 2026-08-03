const stages = [
	{ temp: '20°C', label: 'Loading chamber', phase: 'idle' },
	{ temp: '200°C', label: 'Water smoking', phase: 'warm' },
	{ temp: '600°C', label: 'Quartz inversion', phase: 'warm' },
	{ temp: '900°C', label: 'Bisque complete', phase: 'hot' },
	{ temp: '1100°C', label: 'Glaze melt begins', phase: 'hot' },
	{ temp: '1280°C', label: 'Peak reduction', phase: 'peak' },
	{ temp: '800°C', label: 'Controlled cool', phase: 'cool' }
]

const phaseColor: Record<string, string> = {
	idle: 'var(--mute)',
	warm: 'var(--clay)',
	hot: 'var(--ember)',
	peak: 'var(--ash)',
	cool: 'var(--mute)'
}

/** Future Payload mapping: kilnTimeline. */
export function Kiln() {
	return (
		<section
			id='kiln'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--clay)_12%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Noborigama firing
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--ash)]'>
						From cold chamber to ash glaze
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Our climbing kiln holds 400 pieces across three chambers.
						Temperature is read by cones, not screens — the fire decides the
						final surface.
					</p>
				</div>

				<div className='ci-reveal mt-12 overflow-x-auto pb-2'>
					<div className='relative min-w-[40rem]'>
						<div
							aria-hidden
							className='absolute top-12 right-4 left-4 h-1 rounded-full [background:linear-gradient(90deg,var(--mute),var(--clay),var(--ember),var(--ash),var(--ember),var(--mute))]'
						/>
						<ol className='relative flex justify-between gap-1'>
							{stages.map(s => (
								<li
									key={s.temp}
									className='flex w-[14%] flex-col items-center text-center'
								>
									<span className='font-mono text-[10px] [color:var(--mute)] sm:text-xs'>
										{s.temp}
									</span>
									<div
										className='my-3 grid h-14 w-14 place-items-center rounded-full border-2 font-medium text-[10px] sm:h-16 sm:w-16 sm:text-xs'
										style={{
											borderColor: phaseColor[s.phase],
											color: phaseColor[s.phase]
										}}
									>
										{s.temp}
									</div>
									<p className='text-[10px] leading-tight [color:var(--ash)] sm:text-xs'>
										{s.label}
									</p>
								</li>
							))}
						</ol>
					</div>
				</div>

				<p className='ci-reveal mt-6 text-center text-sm [color:var(--mute)] sm:hidden'>
					Scroll to see the full firing curve →
				</p>
			</div>
		</section>
	)
}
