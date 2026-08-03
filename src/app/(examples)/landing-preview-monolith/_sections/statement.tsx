/** Future Payload mapping: pullQuote. */
export function Statement() {
	return (
		<section
			id='about'
			className='px-5 py-24 text-[var(--bg)] [background:var(--ink)] sm:px-8 sm:py-36'
		>
			<figure className='mx-auto ml-reveal max-w-5xl'>
				<p className='font-[family-name:var(--font-display)] font-medium text-[clamp(1.85rem,5.5vw,4.25rem)] leading-[1.1] tracking-[-0.01em]'>
					“We print on paper because pixels forget. Every issue is a small,
					stubborn{' '}
					<span className='italic [color:var(--accent)]'>monument</span> to the
					idea that design is worth arguing about.”
				</p>
				<figcaption className='mt-8 text-sm uppercase tracking-[0.16em] opacity-60'>
					— The editors
				</figcaption>
			</figure>
		</section>
	)
}
