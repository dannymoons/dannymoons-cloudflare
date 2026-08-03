const steps = [
	{ n: '01', t: 'Injury', d: 'Acute assessment and pain management' },
	{ n: '02', t: 'Stabilise', d: 'Protect tissue, restore safe range' },
	{ n: '03', t: 'Strengthen', d: 'Progressive loading and motor control' },
	{ n: '04', t: 'Function', d: 'Sport- or work-specific movement patterns' },
	{ n: '05', t: 'Return', d: 'Full activity with maintenance plan' }
]

/** Future Payload mapping: recoveryJourney. */
export function RecoveryJourney() {
	return (
		<section id='journey' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Recovery pathway
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						Injury to return — mapped
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Five clear milestones with measurable outcomes. You always know
						where you are and what comes next.
					</p>
				</div>

				<div className='rs-reveal mt-12 overflow-x-auto pb-2'>
					<div className='relative min-w-[40rem] px-2'>
						<div
							aria-hidden
							className='absolute top-8 right-8 left-8 h-0.5 [background:linear-gradient(90deg,var(--sky),var(--ocean),var(--coral))]'
						/>
						<ol className='relative flex justify-between gap-2'>
							{steps.map((s, i) => (
								<li
									key={s.n}
									className='flex w-[18%] flex-col items-center text-center'
								>
									<div className='relative z-10 grid h-16 w-16 place-items-center rounded-full border-2 border-[var(--ocean)] [background:var(--white)]'>
										<span className='font-[family-name:var(--font-display)] text-lg [color:var(--coral)]'>
											{s.n}
										</span>
									</div>
									<h3 className='mt-4 font-[family-name:var(--font-display)] text-base sm:text-lg'>
										{s.t}
									</h3>
									<p className='mt-1 text-xs leading-relaxed [color:var(--mute)]'>
										{s.d}
									</p>
									{i < steps.length - 1 && (
										<span
											aria-hidden
											className='mt-3 hidden text-[10px] uppercase tracking-widest [color:var(--ocean)] sm:inline'
										>
											→
										</span>
									)}
								</li>
							))}
						</ol>
					</div>
				</div>

				<p className='rs-reveal mt-8 text-center text-sm [color:var(--mute)] sm:hidden'>
					Scroll horizontally to see the full journey →
				</p>
			</div>
		</section>
	)
}
