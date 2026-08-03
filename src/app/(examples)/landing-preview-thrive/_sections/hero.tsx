/** Future Payload mapping: heroEditorial (organic portrait). */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24'>
			<div
				aria-hidden
				className='th-blob pointer-events-none absolute -top-20 -left-20 h-96 w-96 opacity-40 [background:var(--wheat)]'
			/>
			<div
				aria-hidden
				className='th-blob pointer-events-none absolute right-0 bottom-0 h-80 w-80 opacity-30 [background:var(--forest)]'
				style={{ animationDelay: '-4s' }}
			/>

			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16'>
				<div className='th-reveal relative order-2 lg:order-1'>
					<div className='relative mx-auto max-w-md lg:mx-0'>
						<div className='th-portrait-mask aspect-[3/4] overflow-hidden'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/thrive-hero/640/853'
								alt='Executive coach in a warm, natural-lit coaching session'
								className='h-full w-full object-cover'
							/>
						</div>
						<div className='absolute -right-6 -bottom-6 max-w-[11rem] rounded-3xl border border-[var(--line)] p-5 shadow-lg [background:var(--wheat)]'>
							<p className='font-[family-name:var(--font-display)] text-lg leading-snug [color:var(--ink)]'>
								&ldquo;Space to think clearly again.&rdquo;
							</p>
							<p className='mt-2 text-xs [color:var(--mute)]'>
								— CEO, renewable energy
							</p>
						</div>
					</div>
				</div>

				<div className='th-reveal order-1 lg:order-2'>
					<p className='mb-4 text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Executive sustainability coaching
					</p>
					<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.25rem)] leading-[1.06] [color:var(--ink)]'>
						Lead the transition{' '}
						<span className='relative inline-block italic [color:var(--forest)]'>
							without burning out
							<span
								aria-hidden
								className='absolute -bottom-1 left-0 h-2 w-full opacity-30 [background:var(--wheat)]'
							/>
						</span>
					</h1>
					<p className='mt-6 max-w-lg text-base leading-[1.8] [color:var(--mute)]'>
						Thrive coaches C-suite and board members through ESG complexity —
						stakeholder pressure, personal resilience, and the loneliness of
						leading change.
					</p>
					<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
						<a
							href='#booking'
							className='inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm transition-opacity [background:var(--forest)] [color:var(--sage)] hover:opacity-90'
						>
							Book discovery call
						</a>
						<a
							href='#breathing-space'
							className='inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-8 text-sm transition-colors hover:border-[var(--forest)]'
						>
							Enter the pause →
						</a>
					</div>
					<dl className='mt-12 flex flex-wrap gap-x-10 gap-y-4 border-[var(--line)] border-t pt-8'>
						{(
							[
								['Leaders coached', '120+'],
								['Avg engagement', '9 months'],
								['Would recommend', '96%']
							] as const
						).map(([label, val]) => (
							<div key={label}>
								<dt className='text-xs [color:var(--mute)]'>{label}</dt>
								<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl [color:var(--forest)]'>
									{val}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}
