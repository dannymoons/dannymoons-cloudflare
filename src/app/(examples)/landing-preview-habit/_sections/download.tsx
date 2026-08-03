/** Future Payload mapping: downloadCta. */
export function Download() {
	return (
		<section id='download' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal overflow-hidden rounded-3xl border border-[var(--line)] px-6 py-12 text-center [background:var(--leaf)] sm:px-12 sm:py-16'>
					<h2 className='font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--cream)]'>
						Your greener life starts today.
					</h2>
					<p className='mx-auto mt-4 max-w-md text-base opacity-85 [color:var(--cream)]'>
						Download Habit free on iOS and Android. Set up in under two minutes
						with our guided onboarding.
					</p>
					<div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
						<a
							href='#top'
							className='inline-flex min-h-12 min-w-[180px] items-center justify-center rounded-full font-medium text-sm transition-opacity [background:var(--cream)] [color:var(--ink)] hover:opacity-90'
						>
							App Store
						</a>
						<a
							href='#top'
							className='inline-flex min-h-12 min-w-[180px] items-center justify-center rounded-full border border-[color-mix(in_oklch,var(--cream)_40%,transparent)] font-medium text-sm transition-opacity [color:var(--cream)] hover:opacity-90'
						>
							Google Play
						</a>
					</div>
					<p className='mt-6 text-xs opacity-60 [color:var(--cream)]'>
						Free tier available · No credit card required · 280k+ members
					</p>
				</div>
			</div>
		</section>
	)
}
