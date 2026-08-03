/** Future Payload mapping: featureFullDark. */
export function FeatureSound() {
	return (
		<section
			id='sound'
			className='[background:oklch(0.14_0.01_270)] [color:var(--ink-on-dark)]'
		>
			<div className='px-6 pt-24 text-center sm:pt-32'>
				<p className='apl-reveal font-medium text-[var(--accent)] text-sm tracking-wide'>
					Adaptive Audio
				</p>
				<h2 className='apl-reveal mx-auto mt-3 max-w-3xl font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1] tracking-[-0.03em]'>
					Sound you can feel.
				</h2>
				<p className='apl-reveal mx-auto mt-5 max-w-xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed [color:oklch(0.72_0.01_270)]'>
					Dual 40mm drivers and real-time spatial rendering put you at the
					center of every track, film and call.
				</p>
			</div>
			<div className='apl-zoom mx-auto mt-14 max-w-5xl px-6 pb-24 sm:pb-32'>
				<div className='aspect-[16/9] overflow-hidden rounded-[2rem]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/aura-sound/1600/900'
						alt='Spatial audio visualization'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
