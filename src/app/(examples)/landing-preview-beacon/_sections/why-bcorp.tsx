/** Future Payload mapping: editorialBrief. */
export function WhyBcorp() {
	return (
		<section
			id='why-bcorp'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div className='be-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
							Why B Corp
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							The gold standard for verified social and environmental
							performance.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							B Corp certification isn&apos;t a badge — it&apos;s a rigorous,
							legally binding commitment to balance profit with purpose. Over
							8,000 companies worldwide have made the pledge.
						</p>
						<div className='mt-8 space-y-4'>
							{[
								{
									title: 'Legal accountability',
									desc: 'Amend governing documents to consider all stakeholders — not just shareholders.'
								},
								{
									title: 'Verified impact',
									desc: 'Third-party assessment across governance, workers, community, environment, and customers.'
								},
								{
									title: 'Competitive advantage',
									desc: 'Attract talent, win RFPs, and access impact-focused capital with credible proof.'
								}
							].map(item => (
								<div
									key={item.title}
									className='border-[var(--line)] border-l-2 pl-4 [border-color:var(--gold)]'
								>
									<p className='font-medium [color:var(--ink)]'>{item.title}</p>
									<p className='mt-1 text-sm [color:var(--mute)]'>
										{item.desc}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className='be-reveal overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/beacon-why/640/480'
							alt='B Corp community gathering of certified companies'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
