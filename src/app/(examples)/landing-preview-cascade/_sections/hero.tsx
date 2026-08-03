/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-[0.04]'
				style={{
					backgroundImage:
						'repeating-linear-gradient(-45deg, var(--pine) 0, var(--pine) 1px, transparent 0, transparent 50%)',
					backgroundSize: '12px 12px'
				}}
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ca-reveal'>
					<p className='mb-4 text-xs uppercase tracking-[0.32em] [color:var(--pine)]'>
						Agency supply chain · Industrial transparency
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4rem)] leading-[1.04] [color:var(--ink)]'>
						Every vendor. Every material.{' '}
						<span className='[color:var(--pine)]'>Accounted for.</span>
					</h1>
					<p className='mt-6 max-w-lg text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Cascade gives creative agencies end-to-end visibility into
						production supply chains — from print substrates to event builds —
						so client ESG commitments survive the pitch room.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#contact'
							className='inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-sm transition-opacity [background:var(--pine)] [color:var(--fog)] hover:opacity-90'
						>
							Book a demo
						</a>
						<a
							href='#methodology'
							className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-7 text-sm transition-colors hover:border-[var(--pine)] hover:[color:var(--pine)]'
						>
							See methodology
						</a>
					</div>
					<dl className='mt-12 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Agencies
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--pine)] sm:text-3xl'>
								340+
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Vendors mapped
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--pine)] sm:text-3xl'>
								18k
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Tier-1 brands
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--pine)] sm:text-3xl'>
								92
							</dd>
						</div>
					</dl>
				</div>

				<div className='ca-reveal relative'>
					<div className='aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/cascade-hero/800/600'
							alt='Agency production floor with sustainable material inventory'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='absolute -right-4 -bottom-4 hidden max-w-[14rem] rounded-sm border border-[var(--line)] p-4 [background:var(--fog)] sm:block'>
						<p className='text-xs uppercase tracking-[0.18em] [color:var(--pine)]'>
							Live trace
						</p>
						<p className='mt-1 font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
							Batch #CX-2847 · FSC certified
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
