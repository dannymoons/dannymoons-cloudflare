/** Future Payload mapping: breathingInterlude (full-bleed calm). */
export function BreathingSpace() {
	return (
		<section
			id='breathing-space'
			className='relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8'
		>
			<div
				aria-hidden
				className='th-ring pointer-events-none absolute h-64 w-64 rounded-full border border-[var(--forest)] opacity-20'
			/>
			<div
				aria-hidden
				className='th-ring pointer-events-none absolute h-96 w-96 rounded-full border border-[var(--forest)] opacity-15'
				style={{ animationDelay: '-2s' }}
			/>
			<div
				aria-hidden
				className='th-ring pointer-events-none absolute h-[28rem] w-[28rem] rounded-full border border-[var(--wheat)] opacity-25'
				style={{ animationDelay: '-4s' }}
			/>

			<div className='th-reveal relative z-10 max-w-2xl text-center'>
				<p className='text-xs uppercase tracking-[0.32em] [color:var(--forest)]'>
					The pause
				</p>
				<h2 className='mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.75rem)] leading-[1.12] [color:var(--ink)]'>
					You cannot lead a transition you haven&apos;t metabolised yourself.
				</h2>
				<p className='mt-6 text-base leading-[1.85] [color:var(--mute)] sm:text-lg'>
					Before strategy, before stakeholder maps — we create room to breathe.
					Executives arrive carrying urgency. They leave carrying clarity.
				</p>
				<a
					href='#coaching-paths'
					className='mt-10 inline-flex min-h-12 items-center rounded-full border border-[var(--forest)] px-8 text-sm transition-colors hover:[background:var(--forest)] hover:[color:var(--sage)]'
				>
					Explore coaching paths
				</a>
			</div>
		</section>
	)
}
