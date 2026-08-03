/** Future Payload mapping: featureSplit. */
export function FeatureDesign() {
	return (
		<section className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 sm:py-36 lg:grid-cols-2'>
			<div className='apl-reveal order-2 lg:order-1'>
				<p className='font-medium text-[var(--accent)] text-sm tracking-wide'>
					Design
				</p>
				<h2 className='mt-3 font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.03em]'>
					Machined from a single block of aluminium.
				</h2>
				<p className='mt-5 max-w-md text-[var(--mute)] text-lg leading-relaxed'>
					Memory-foam cushions wrapped in vegan leather. 38 grams lighter than
					the thing you wear now — and built to last a decade.
				</p>
				<div className='mt-8 flex gap-10'>
					<div>
						<div className='font-semibold text-3xl tracking-tight'>38g</div>
						<div className='mt-1 text-[var(--mute)] text-sm'>Lighter</div>
					</div>
					<div>
						<div className='font-semibold text-3xl tracking-tight'>IP54</div>
						<div className='mt-1 text-[var(--mute)] text-sm'>
							Sweat resistant
						</div>
					</div>
				</div>
			</div>
			<div className='apl-zoom order-1 lg:order-2'>
				<div className='aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--line)]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
					<img
						src='https://picsum.photos/seed/aura-design/1000/1250'
						alt='Aura industrial design detail'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
