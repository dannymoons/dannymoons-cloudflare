const stack = [
	{
		t: 'Static sites',
		d: 'Pre-rendered HTML served from the edge — no server round-trips, no database queries.'
	},
	{
		t: 'Edge CDN',
		d: 'Green-powered points of presence that put content close to users and cut transfer distance.'
	},
	{
		t: 'System fonts',
		d: 'Zero webfont downloads when brand guidelines allow — instant text, zero kilobytes.'
	},
	{
		t: 'AVIF images',
		d: 'Next-gen compression with responsive srcset — sharp visuals at a fraction of the weight.'
	}
]

/** Future Payload mapping: techStack. */
export function Stack() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					The lean stack
				</h2>
				<p className='of-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
					Proven tools chosen for performance-per-watt, not hype cycles.
				</p>
				<ul className='mt-12 grid gap-4 sm:grid-cols-2'>
					{stack.map((item, i) => (
						<li
							key={item.t}
							className='of-reveal rounded-2xl border border-[var(--line)] p-6'
						>
							<span className='font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.18em] [color:var(--forest)]'>
								0{i + 1}
							</span>
							<h3 className='mt-3 font-[family-name:var(--font-display)] text-xl'>
								{item.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{item.d}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
