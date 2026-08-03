/** Future Payload mapping: locationMap (coastal address). */
export function Location() {
	return (
		<section id='location' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
					<div className='dw-reveal'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
							Location
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
							Cala Salada, Costa Brava
						</h2>
						<address className='mt-6 space-y-1 text-sm not-italic leading-relaxed [color:var(--mute)] sm:text-base'>
							<p>Camí de Ronda, km 4</p>
							<p>17320 Sant Feliu de Guíxols</p>
							<p>Girona, Spain</p>
						</address>
						<p className='mt-6 text-sm [color:var(--ink)]'>
							<a
								href='tel:+34972123456'
								className='transition-colors hover:[color:var(--sea)]'
							>
								+34 972 123 456
							</a>
						</p>
						<p className='mt-2 text-xs [color:var(--mute)]'>
							90 min from Barcelona · Private transfer on request
						</p>
						<a
							href='#bookings'
							className='mt-8 inline-flex min-h-12 items-center font-medium text-sm uppercase tracking-[0.16em] transition-colors [color:var(--sea)] hover:[color:var(--terra)]'
						>
							Arrange transfer →
						</a>
					</div>

					<figure className='dw-reveal relative aspect-[4/3] overflow-hidden border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/driftwood-map/900/675'
							alt='Aerial view of Mediterranean coastline with coves'
							className='h-full w-full object-cover'
						/>
						<div
							aria-hidden
							className='absolute inset-0 flex items-center justify-center'
							style={{
								background:
									'linear-gradient(135deg, oklch(0.52 0.1 230 / 0.15), oklch(0.58 0.12 45 / 0.1))'
							}}
						>
							<div className='border border-[var(--line)] px-6 py-4 text-center backdrop-blur-sm [background:var(--linen)]/90'>
								<p className='text-[0.65rem] uppercase tracking-[0.24em] [color:var(--sea)]'>
									Coastal map
								</p>
								<p className='mt-1 font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
									41°47&apos;N · 3°02&apos;E
								</p>
							</div>
						</div>
					</figure>
				</div>
			</div>
		</section>
	)
}
