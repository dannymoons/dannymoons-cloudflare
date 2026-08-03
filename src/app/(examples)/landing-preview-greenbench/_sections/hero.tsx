/** Future Payload mapping: heroSaaS (data terminal). */
export function Hero() {
	return (
		<section className='relative overflow-hidden px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24'>
			<div
				aria-hidden
				className='gb-scanlines pointer-events-none absolute inset-0 opacity-[0.04]'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl [background:var(--lime)]'
			/>

			<div className='relative mx-auto max-w-6xl'>
				<div className='gb-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] [background:color-mix(in_oklch,var(--green)_6%,var(--white))] [color:var(--mute)]'>
					<span className='inline-block h-1.5 w-1.5 animate-pulse rounded-full [background:var(--green)]' />
					412 agencies indexed · live
				</div>

				<div className='grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end'>
					<div>
						<h1 className='gb-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98] tracking-[-0.03em] [color:var(--ink)]'>
							Your agency&apos;s carbon score,{' '}
							<span className='[color:var(--green)]'>ranked</span> against
							everyone.
						</h1>
						<p className='gb-reveal mt-6 max-w-lg text-base leading-relaxed [color:var(--mute)]'>
							Greenbench scores every client site, campaign asset, and
							deliverable — then publishes your studio on a live leaderboard
							agencies actually compete on.
						</p>
						<div className='gb-reveal mt-8 flex flex-col gap-3 sm:flex-row'>
							<a
								href='#trial'
								className='inline-flex min-h-12 items-center justify-center rounded-lg px-7 font-medium text-sm transition-opacity [background:var(--green)] [color:var(--white)] hover:opacity-90'
							>
								Start 14-day trial
							</a>
							<a
								href='#live-terminal'
								className='inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--line)] px-7 font-mono text-sm transition-colors hover:border-[var(--green)]'
							>
								Watch live feed →
							</a>
						</div>
					</div>

					<div className='gb-reveal relative'>
						<div className='absolute -top-4 -left-4 z-10 rounded-lg border border-[var(--line)] px-3 py-2 font-mono text-[10px] shadow-lg [background:var(--white)]'>
							<span className='[color:var(--mute)]'>rank </span>
							<span className='font-bold text-lg [color:var(--green)]'>
								#12
							</span>
						</div>
						<div className='absolute -right-3 -bottom-3 z-10 rotate-3 rounded-lg border-2 border-[var(--green)] px-4 py-3 font-bold text-sm uppercase tracking-wide [background:var(--lime)] [color:var(--ink)]'>
							Grade A−
						</div>
						<div className='overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_32px_80px_-32px_color-mix(in_oklch,var(--green)_35%,transparent)] [background:var(--ink)] [color:var(--white)]'>
							<div className='flex items-center gap-2 border-[color-mix(in_oklch,var(--white)_10%,transparent)] border-b px-4 py-3 font-mono text-[10px] [color:color-mix(in_oklch,var(--white)_55%,transparent)]'>
								<span className='h-2 w-2 rounded-full [background:var(--lime)]' />
								greenbench — portfolio scan
							</div>
							<div className='space-y-1 p-4 font-mono text-[11px] leading-relaxed sm:p-5 sm:text-xs'>
								<p>
									<span className='[color:var(--lime)]'>▸</span> scanning 47
									client domains…
								</p>
								<p>
									<span className='[color:var(--lime)]'>▸</span> avg page weight{' '}
									<span className='tabular-nums [color:var(--white)]'>
										1.24 MB
									</span>{' '}
									(−18% vs sector)
								</p>
								<p>
									<span className='[color:var(--lime)]'>▸</span> monthly tCO₂e{' '}
									<span className='tabular-nums [color:var(--white)]'>124</span>
								</p>
								<p>
									<span className='[color:var(--lime)]'>▸</span> leaderboard
									position{' '}
									<span className='tabular-nums [color:var(--lime)]'>
										#12 / 412
									</span>
								</p>
								<p className='animate-pulse [color:var(--lime)]'>█</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
