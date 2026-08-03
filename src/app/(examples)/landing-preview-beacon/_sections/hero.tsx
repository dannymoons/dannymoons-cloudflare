/** Future Payload mapping: heroEditorial. */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full opacity-15 blur-3xl [background:var(--gold)]'
			/>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='be-reveal'>
					<p className='mb-4 text-xs uppercase tracking-[0.32em] [color:var(--gold)]'>
						B Corp certification · Institutional guidance
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4rem)] leading-[1.04] [color:var(--ink)]'>
						Certify your purpose.{' '}
						<span className='italic [color:var(--forest)]'>
							Prove your impact.
						</span>
					</h1>
					<p className='mt-6 max-w-lg text-base leading-relaxed [color:var(--mute)] sm:text-lg'>
						Beacon guides mid-market and enterprise companies through B Corp
						certification — from B Impact Assessment to verified status, with
						strategy that sticks beyond the audit.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#assessment'
							className='inline-flex min-h-12 items-center justify-center rounded-sm px-7 text-sm transition-opacity [background:var(--forest)] [color:var(--cream)] hover:opacity-90'
						>
							Free readiness assessment
						</a>
						<a
							href='#pathway'
							className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-7 text-sm transition-colors hover:border-[var(--forest)] hover:[color:var(--forest)]'
						>
							See the pathway
						</a>
					</div>
					<dl className='mt-12 grid grid-cols-3 gap-4 border-[var(--line)] border-t pt-8'>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Certified clients
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--forest)] sm:text-3xl'>
								214
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								Avg. B Score
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--forest)] sm:text-3xl'>
								92.4
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								First-attempt pass
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--forest)] sm:text-3xl'>
								97%
							</dd>
						</div>
					</dl>
				</div>

				<div className='be-reveal relative'>
					<div className='aspect-[4/5] overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/beacon-hero/700/875'
							alt='Leadership team reviewing B Corp certification materials'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='absolute -right-4 -bottom-4 hidden max-w-[14rem] rounded-sm border border-[var(--line)] p-4 [background:var(--cream)] sm:block'>
						<p className='font-[family-name:var(--font-display)] text-lg [color:var(--forest)]'>
							B Corp Certified
						</p>
						<p className='mt-1 text-xs [color:var(--mute)]'>
							Score 94.2 · Verified 2025
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
