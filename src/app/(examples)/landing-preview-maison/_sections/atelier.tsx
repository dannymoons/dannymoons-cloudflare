/** Future Payload mapping: featureBlock. */
export function Atelier() {
	return (
		<section
			id='atelier'
			className='px-5 py-20 [background:oklch(0.10_0.005_80)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end'>
				<div className='ml-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Paris · 8<sup>e</sup> arrondissement
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]'>
						The atelier on Rue du Faubourg
					</h2>
					<p className='mt-6 max-w-md leading-relaxed [color:var(--mute)]'>
						Behind unmarked oak doors, our Paris atelier has operated since
						1924. Natural light floods the workrooms where seamstresses
						embroider, pleat, and finish each commission in absolute silence.
					</p>
					<p className='mt-4 max-w-md leading-relaxed [color:var(--mute)]'>
						Visits are by private appointment only. We welcome clients who wish
						to witness the craft firsthand — from fabric selection to the final
						fitting.
					</p>
				</div>
				<div className='ml-reveal grid grid-cols-2 gap-4'>
					<div className='aspect-[3/4] overflow-hidden'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/maison-atelier-a/600/800'
							alt='Atelier workroom'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='mt-8 aspect-[3/4] overflow-hidden'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/maison-atelier-b/600/800'
							alt='Embroidery detail'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
