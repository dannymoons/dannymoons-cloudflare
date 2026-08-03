/** Future Payload mapping: mastheadHero (cover story). */
export function Hero() {
	return (
		<section className='px-5 pt-10 pb-12 sm:px-8 sm:pt-16 sm:pb-20'>
			<div className='mx-auto max-w-6xl'>
				<div className='flex items-center justify-between border-[var(--line)] border-b pb-4 text-xs uppercase tracking-[0.16em] [color:var(--ink-soft)]'>
					<span>Issue №14 — Spring 2026</span>
					<span className='hidden sm:inline'>
						The independent design quarterly
					</span>
				</div>

				<div className='grid grid-cols-1 gap-10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14'>
					<div className='lg:col-span-7'>
						<span className='font-semibold text-[var(--accent-ink)] text-sm uppercase tracking-[0.12em]'>
							Lead essay
						</span>
						<h1 className='mt-5 font-[family-name:var(--font-display)] font-medium text-[clamp(2.75rem,9vw,6rem)] leading-[0.96] tracking-[-0.01em]'>
							The hard edge is back, and it is honest.
						</h1>
						<p className='mt-7 max-w-xl text-[var(--ink-soft)] text-lg leading-relaxed'>
							After a decade of soft gradients and friendly blobs, a new
							generation is reaching for concrete, monospace and the
							unapologetic grid. We ask why structure suddenly feels like
							sincerity.
						</p>
						<div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm [color:var(--ink-soft)]'>
							<span>
								Words by{' '}
								<span className='[color:var(--ink)]'>Inez Vermeer</span>
							</span>
							<span aria-hidden>·</span>
							<span>18 min read</span>
							<a
								href='#stories'
								className='font-medium text-[var(--accent-ink)] underline-offset-4 hover:underline'
							>
								Read the issue →
							</a>
						</div>
					</div>

					<figure className='lg:col-span-5'>
						<div className='aspect-[4/5] overflow-hidden'>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
							<img
								src='https://picsum.photos/seed/mono-cover-3/900/1125'
								alt='Cover story'
								className='h-full w-full object-cover grayscale'
							/>
						</div>
						<figcaption className='mt-3 text-xs [color:var(--ink-soft)]'>
							Photograph — Studio Concrete, Rotterdam
						</figcaption>
					</figure>
				</div>
			</div>
		</section>
	)
}
