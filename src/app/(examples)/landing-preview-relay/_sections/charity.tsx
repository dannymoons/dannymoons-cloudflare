/** Future Payload mapping: charityPartner. */
export function Charity() {
	return (
		<section
			id='charity'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--black)] [color:var(--white)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='rl-reveal'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Charity
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95]'>
						€1 per kilometre
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--gray)]'>
						Every finisher triggers a donation to{' '}
						<strong className='font-medium [color:var(--white)]'>
							Mind Your Step
						</strong>
						— youth mental health through sport. Last season we raised €186,000
						across 4,200 finishers.
					</p>
					<dl className='mt-8 grid grid-cols-2 gap-6'>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--gray)]'>
								2025 raised
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-3xl [color:var(--orange)]'>
								€186K
							</dd>
						</div>
						<div>
							<dt className='text-xs uppercase tracking-[0.2em] [color:var(--gray)]'>
								Goal 2026
							</dt>
							<dd className='mt-1 font-[family-name:var(--font-display)] text-3xl'>
								€250K
							</dd>
						</div>
					</dl>
					<a
						href='#register'
						className='mt-8 inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--orange)] [color:var(--black)] hover:opacity-90'
					>
						Run for charity
					</a>
				</div>

				<div className='rl-reveal relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[20rem]'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/relay-charity/800/600'
						alt='Young runners at a community relay charity event'
						className='h-full w-full object-cover'
					/>
					<div
						aria-hidden
						className='absolute inset-0 [background:color-mix(in_oklch,var(--black)_30%,transparent)]'
					/>
				</div>
			</div>
		</section>
	)
}
