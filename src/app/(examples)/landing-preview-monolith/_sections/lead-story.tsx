/** Future Payload mapping: featuredArticle (secondary). */
export function LeadStory() {
	return (
		<section id='stories' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-8 flex items-baseline justify-between border-[var(--line)] border-b pb-4'>
					<h2 className='font-[family-name:var(--font-display)] text-2xl sm:text-3xl'>
						From the issue
					</h2>
					<span className='text-xs uppercase tracking-[0.16em] [color:var(--ink-soft)]'>
						Interview
					</span>
				</div>

				<article className='ml-reveal grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10'>
					<figure className='lg:col-span-7'>
						<div className='aspect-[16/10] overflow-hidden'>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
							<img
								src='https://picsum.photos/seed/mono-feature-8/1200/750'
								alt='A conversation with a reluctant minimalist'
								className='h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0'
							/>
						</div>
					</figure>
					<div className='lg:col-span-5 lg:self-center'>
						<span className='font-semibold text-[var(--accent-ink)] text-sm uppercase tracking-[0.12em]'>
							Pp. 44–61
						</span>
						<h3 className='mt-4 font-[family-name:var(--font-display)] font-medium text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05]'>
							A conversation with a reluctant minimalist.
						</h3>
						<p className='mt-5 text-[var(--ink-soft)] leading-relaxed'>
							She spent twenty years removing things from the page. Now she is
							quietly putting some of them back. On restraint, regret and the
							courage to add an exclamation mark.
						</p>
						<a
							href='#stories'
							className='mt-6 inline-block font-medium text-[var(--accent-ink)] underline-offset-4 hover:underline'
						>
							Read the interview →
						</a>
					</div>
				</article>
			</div>
		</section>
	)
}
