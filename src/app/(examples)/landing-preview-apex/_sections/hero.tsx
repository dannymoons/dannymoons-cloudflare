/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl [background:var(--copper)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-15 blur-3xl [background:var(--slate)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
				<div className='ax-reveal'>
					<p className='mb-4 text-xs uppercase tracking-[0.32em] [color:var(--copper)]'>
						Boutique litigation · London
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02] [color:var(--stone)]'>
						When the stakes are{' '}
						<span className='italic [color:var(--copper)]'>irreversible</span>,
						counsel must be exacting.
					</h1>
					<p className='mt-6 max-w-lg text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Apex Chambers represents corporations, founders, and institutions in
						high-stakes commercial disputes — from cross-border arbitration to
						regulatory enforcement.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#contact'
							className='inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-[var(--parchment)] text-sm transition-opacity [background:var(--stone)] hover:opacity-90'
						>
							Request a consultation
						</a>
						<a
							href='#cases'
							className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-7 text-sm transition-colors hover:border-[var(--copper)] hover:[color:var(--copper)]'
						>
							Notable outcomes
						</a>
					</div>
					<dl className='mt-12 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Recovered
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--copper)] sm:text-3xl'>
								£2.4B
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Win rate
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--copper)] sm:text-3xl'>
								94%
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Jurisdictions
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--copper)] sm:text-3xl'>
								38
							</dd>
						</div>
					</dl>
				</div>

				<div className='ax-reveal relative'>
					<div className='aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/apex-hero/700/875'
							alt='Apex Chambers boardroom overlooking the City of London'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='absolute -bottom-4 -left-4 hidden max-w-[14rem] rounded-sm border border-[var(--line)] p-4 [background:var(--parchment)] sm:block'>
						<p className='font-[family-name:var(--font-display)] text-lg leading-snug [color:var(--stone)]'>
							&ldquo;Precision under pressure.&rdquo;
						</p>
						<p className='mt-2 text-xs [color:var(--mute)]'>
							— Chambers UK, Band 1 Litigation
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
