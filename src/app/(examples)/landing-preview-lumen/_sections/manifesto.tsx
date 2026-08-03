/** Future Payload mapping: bigStatement. */
export function Manifesto() {
	return (
		<section className='px-5 py-28 sm:px-8 sm:py-44'>
			<div className='mx-auto max-w-5xl text-center'>
				<span className='lu-reveal mb-8 block text-xs uppercase tracking-[0.3em] [color:var(--cyan)]'>
					Our manifesto
				</span>
				<p className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,5vw,4rem)] leading-[1.15] tracking-[-0.02em]'>
					Every brand holds a universe.{' '}
					<span
						className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
						style={{
							backgroundImage:
								'linear-gradient(120deg, var(--violet), var(--cyan), var(--violet))'
						}}
					>
						We design the gravity, choreograph the light and write the story
					</span>{' '}
					— until a logo becomes a place people choose to enter.
				</p>
			</div>
		</section>
	)
}
