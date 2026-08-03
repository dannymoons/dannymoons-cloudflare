const caps = [
	{
		n: '01',
		t: 'Brand identity',
		d: 'Naming, logo systems, type, the whole personality.',
		color: 'var(--magenta)'
	},
	{
		n: '02',
		t: 'Motion design',
		d: 'Title sequences, product reveals, social that moves.',
		color: 'var(--cobalt)'
	},
	{
		n: '03',
		t: 'Websites',
		d: 'Design + build. Fast, weird, unforgettable.',
		color: 'var(--tangerine)'
	},
	{
		n: '04',
		t: '3D & CGI',
		d: 'Product renders and worlds that don\u2019t exist yet.',
		color: 'var(--lime)'
	}
]

/** Future Payload mapping: capabilityList. */
export function Capabilities() {
	return (
		<section
			id='capabilities'
			className='border-[var(--ink)] border-y-2 [background:var(--ink)] [color:var(--cream)]'
		>
			<div className='px-5 py-16 sm:px-8 sm:py-24'>
				<h2 className='mb-12 max-w-2xl font-[family-name:var(--font-serif)] text-[clamp(1.75rem,4vw,3rem)] italic leading-tight'>
					Things we&rsquo;re dangerously good at.
				</h2>
				<ul>
					{caps.map(c => (
						<li
							key={c.n}
							className='flx-reveal group grid grid-cols-12 items-center gap-4 border-[var(--cream)]/15 border-t py-7 last:border-b'
						>
							<span className='col-span-2 font-[family-name:var(--font-mono)] text-sm sm:col-span-1'>
								{c.n}
							</span>
							<span
								className='col-span-10 font-extrabold text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-tight transition-all duration-300 group-hover:translate-x-3 sm:col-span-6'
								style={{ color: c.color }}
							>
								{c.t}
							</span>
							<span className='col-span-12 text-[var(--cream)]/70 sm:col-span-5 sm:text-right'>
								{c.d}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
