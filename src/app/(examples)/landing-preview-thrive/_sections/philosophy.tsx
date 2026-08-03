/** Future Payload mapping: philosophyBlock. */
export function Philosophy() {
	return (
		<section
			id='philosophy'
			className='px-5 py-20 [background:var(--wheat)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-3xl text-center'>
				<div className='th-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Philosophy
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Sustainability leadership is a human challenge first
					</h2>
					<p className='mt-6 text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Most executives arrive at ESG responsibility without training,
						without a peer group, and without space to process the weight of it.
						Thrive creates that space — combining climate literacy with
						leadership psychology so you can act with conviction, not anxiety.
					</p>
				</div>
				<div className='th-reveal mt-10 grid gap-6 text-left sm:grid-cols-3'>
					{(
						[
							['Clarity', 'Cut through jargon and conflicting priorities'],
							['Courage', 'Make decisions your future self will stand behind'],
							['Capacity', 'Build resilience for a marathon, not a sprint']
						] as const
					).map(([title, desc]) => (
						<div key={title}>
							<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--forest)]'>
								{title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
