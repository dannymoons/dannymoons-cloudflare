/** Future Payload mapping: researchLab. */
export function Lab() {
	return (
		<section id='lab' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='lu-reveal mb-4 block font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] [color:var(--cyan)]'>
					R&D
				</span>
				<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
					The LUMEN Lab
				</h2>

				<div className='lu-reveal mt-12 rounded-2xl p-px [background:linear-gradient(135deg,var(--violet),var(--cyan),var(--violet))]'>
					<div className='rounded-2xl p-8 [background:var(--panel)] sm:p-12'>
						<p className='max-w-2xl text-lg leading-relaxed [color:var(--mute)]'>
							Our internal research arm prototypes the next wave of experiential
							tech — volumetric capture, haptic feedback loops, AI-driven
							narrative engines and iridescent material shaders.
						</p>
						<ul className='mt-8 grid gap-4 sm:grid-cols-3'>
							{[
								'Volumetric stages',
								'Haptic prototyping',
								'Generative worlds'
							].map(item => (
								<li
									key={item}
									className='rounded-xl border border-[var(--line)] px-4 py-3 text-sm [color:var(--text)]'
								>
									{item}
								</li>
							))}
						</ul>
						<a
							href='#contact'
							className='mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest transition-colors hover:[color:var(--cyan)]'
						>
							Partner with the lab →
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
