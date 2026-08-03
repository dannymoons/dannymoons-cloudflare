/** Future Payload mapping: profileSplit. */
export function Chef() {
	return (
		<section
			id='chef'
			className='px-5 py-20 [background:var(--burgundy)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='so-reveal aspect-[4/5] overflow-hidden'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/sol-chef/800/1000'
						alt='Executive Chef Elena Voss'
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='so-reveal'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Executive chef
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] [color:var(--cream)]'>
						Elena Voss
					</h2>
					<p className='mt-6 text-sm leading-relaxed [color:var(--cream)]/80 sm:text-base'>
						Trained under Redzepi and Aduriz, Elena founded Solstice on the
						belief that Nordic restraint and Mediterranean warmth could coexist
						on a single plate. Her kitchens in Amsterdam, London, and Copenhagen
						share one seasonal brief — interpreted through local terroir.
					</p>
					<p className='mt-4 text-sm leading-relaxed [color:var(--cream)]/60 sm:text-base'>
						Two Michelin stars · World&rsquo;s 50 Best #38 · Author of{' '}
						<em className='italic [color:var(--gold)]'>The Turning Table</em>
					</p>
					<a
						href='#events'
						className='mt-8 inline-flex min-h-12 items-center border border-[var(--line)] px-6 text-xs uppercase tracking-[0.18em] transition-colors hover:border-[var(--gold)] hover:[color:var(--gold)]'
					>
						Masterclasses with Elena
					</a>
				</div>
			</div>
		</section>
	)
}
