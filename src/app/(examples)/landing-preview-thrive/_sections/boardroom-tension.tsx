const columns = [
	{
		label: 'Before Thrive',
		tone: 'mute' as const,
		items: [
			'Board asks for ESG progress — you have slides, not conviction',
			'Activist letter lands Friday; legal wants a holding statement',
			'Sustainability lead and CMO speak different languages',
			'Personal bandwidth: zero. Sleep: compromised.'
		]
	},
	{
		label: 'After 9 months',
		tone: 'forest' as const,
		items: [
			'Narrative aligned across investor, consumer, and internal comms',
			'Crisis playbook tested — last scrutiny resolved in 48 hours',
			'Cross-functional ESG council you actually chair with confidence',
			'Boundaries restored. Decisions feel deliberate again.'
		]
	}
]

/** Future Payload mapping: boardroomTension (split narrative). */
export function BoardroomTension() {
	return (
		<section
			id='boardroom-tension'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--wheat)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal mb-14 max-w-xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Boardroom reality
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]'>
						The tension isn&apos;t the science. It&apos;s the seat you&apos;re
						sitting in.
					</h2>
				</div>

				<div className='grid gap-6 md:grid-cols-2 md:gap-0'>
					{columns.map((col, i) => (
						<div
							key={col.label}
							className={`th-reveal p-8 sm:p-10 ${i === 1 ? 'md:border-[var(--line)] md:border-l md:[background:var(--sage)]' : 'md:[background:color-mix(in_oklch,var(--sage)_40%,var(--wheat))]'}`}
						>
							<p
								className={`text-xs uppercase tracking-[0.24em] ${col.tone === 'forest' ? '[color:var(--forest)]' : '[color:var(--mute)]'}`}
							>
								{col.label}
							</p>
							<ul className='mt-8 space-y-5'>
								{col.items.map(item => (
									<li
										key={item}
										className='flex gap-4 text-sm leading-relaxed sm:text-base'
									>
										<span
											className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${col.tone === 'forest' ? '[background:var(--forest)]' : '[background:var(--mute)]'}`}
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
