const words = ['louder', 'weirder', 'sharper', 'braver', 'realer']

/** Future Payload mapping: bigStatement. */
export function Manifesto() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-32'>
			<p className='mx-auto max-w-5xl text-center font-[family-name:var(--font-serif)] text-[clamp(1.75rem,5vw,4rem)] leading-[1.1]'>
				We don&rsquo;t do <span className='line-through opacity-40'>safe</span>.
				We make the kind of work that makes the boardroom nervous and the
				internet <span className='italic [color:var(--magenta)]'>obsessed</span>
				.
			</p>
			<div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
				{words.map((w, i) => (
					<span
						key={w}
						className='rounded-full px-4 py-1.5 font-[family-name:var(--font-mono)] text-sm uppercase'
						style={{
							background: [
								'var(--magenta)',
								'var(--cobalt)',
								'var(--tangerine)',
								'var(--lime)',
								'var(--magenta)'
							][i],
							color: 'var(--ink)'
						}}
					>
						{w}
					</span>
				))}
			</div>
		</section>
	)
}
