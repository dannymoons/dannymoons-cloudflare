/** Future Payload mapping: heroEditorial (magazine cover). */
export function Hero() {
	return (
		<section className='relative overflow-hidden'>
			<div className='border-[var(--line)] border-b px-5 py-3 sm:px-8'>
				<div className='mx-auto flex max-w-6xl items-center justify-between text-[10px] uppercase tracking-[0.28em] [color:var(--mute)]'>
					<span>Briefing №07 — Q2 2026</span>
					<span className='hidden sm:inline'>
						For CMOs navigating the green transition
					</span>
					<span>Est. 2018</span>
				</div>
			</div>

			<div className='px-5 py-14 sm:px-8 sm:py-20'>
				<div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-6'>
					<div className='rl-reveal lg:col-span-8'>
						<p className='mb-6 text-xs uppercase tracking-[0.32em] [color:var(--teal)]'>
							Lead essay · Sustainability leadership
						</p>
						<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.75rem)] leading-[0.98] tracking-[-0.02em] [color:var(--navy)]'>
							The claim is the campaign.{' '}
							<span className='block italic [color:var(--teal)]'>
								Make it defensible.
							</span>
						</h1>
						<p className='mt-8 max-w-xl text-base leading-[1.75] [color:var(--mute)] sm:text-lg'>
							Rootline advises marketing leaders on claim governance, carbon
							accounting, and narrative architecture — so every sustainability
							message survives legal, investor, and consumer scrutiny.
						</p>
						<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4'>
							<a
								href='#contact'
								className='inline-flex min-h-12 items-center justify-center rounded-sm px-8 text-sm transition-opacity [background:var(--navy)] [color:var(--sand)] hover:opacity-90'
							>
								Schedule a briefing
							</a>
							<a
								href='#cmo-index'
								className='inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--line)] px-8 text-sm transition-colors hover:border-[var(--teal)] hover:[color:var(--teal)]'
							>
								Read the index →
							</a>
						</div>
					</div>

					<aside className='rl-reveal flex flex-col justify-between lg:col-span-4'>
						<div className='border-[var(--line)] border-l-2 pl-6 [border-left-color:var(--teal)]'>
							<p className='font-[family-name:var(--font-display)] text-2xl leading-snug [color:var(--navy)] sm:text-3xl'>
								&ldquo;Marketing cannot outsource credibility to the
								sustainability team.&rdquo;
							</p>
							<p className='mt-4 text-xs uppercase tracking-[0.2em] [color:var(--mute)]'>
								— Elena Voss, Founder
							</p>
						</div>
						<dl className='mt-10 grid grid-cols-2 gap-px [background:var(--line)] lg:mt-0'>
							{(
								[
									['Brands advised', '84'],
									['Claims audited', '1,240'],
									['Regulatory reviews', '312'],
									['Greenwash flags', '0']
								] as const
							).map(([label, val]) => (
								<div key={label} className='px-4 py-5 [background:var(--sand)]'>
									<dt className='text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
										{label}
									</dt>
									<dd className='mt-1 font-[family-name:var(--font-display)] text-2xl tabular-nums [color:var(--teal)]'>
										{val}
									</dd>
								</div>
							))}
						</dl>
					</aside>
				</div>
			</div>

			<div
				aria-hidden
				className='pointer-events-none absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full opacity-[0.12] blur-3xl [background:var(--teal)]'
			/>
		</section>
	)
}
