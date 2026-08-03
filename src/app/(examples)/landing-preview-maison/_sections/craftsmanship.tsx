/** Future Payload mapping: splitFeature. */
export function Craftsmanship() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16'>
				<div className='order-2 ml-reveal lg:order-1'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Savoir-faire
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-[1.08]'>
						Three hundred hours in every garment
					</h2>
					<p className='mt-6 leading-relaxed [color:var(--mute)]'>
						From the first muslin drape to the final hand-stitched hem, each
						piece passes through the hands of twelve artisans. We work only with
						natural fibres sourced from mills we have known for generations.
					</p>
					<ul className='mt-8 space-y-4 text-sm [color:var(--mute)]'>
						<li className='flex gap-4 border-[var(--line)] border-b pb-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--gold)]'>
								01
							</span>
							<span>Hand-cut toile and bespoke pattern drafting</span>
						</li>
						<li className='flex gap-4 border-[var(--line)] border-b pb-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--gold)]'>
								02
							</span>
							<span>Embroidery atelier with gold-thread specialists</span>
						</li>
						<li className='flex gap-4'>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-lg [color:var(--gold)]'>
								03
							</span>
							<span>Final fitting under natural north light</span>
						</li>
					</ul>
				</div>
				<div className='order-1 ml-reveal aspect-[4/5] overflow-hidden lg:order-2'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/maison-atelier/800/1000'
						alt='Artisan at work in the atelier'
						className='h-full w-full object-cover'
					/>
				</div>
			</div>
		</section>
	)
}
