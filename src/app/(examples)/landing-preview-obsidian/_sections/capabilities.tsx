const caps = [
	{
		n: '01',
		t: 'Brand films',
		d: 'Concept, direction and post for launches that feel like cinema.'
	},
	{
		n: '02',
		t: 'Real-time 3D',
		d: 'Configurators and worlds running at 60fps in the browser.'
	},
	{
		n: '03',
		t: 'CGI & product',
		d: 'Photoreal renders for things that don\u2019t exist yet.'
	},
	{
		n: '04',
		t: 'Immersive web',
		d: 'WebGL experiences that win the awards and the users.'
	}
]

/** Future Payload mapping: capabilityList. */
export function Capabilities() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<ul>
				{caps.map(c => (
					<li
						key={c.n}
						className='ob-reveal group grid grid-cols-12 items-center gap-4 border-[var(--line)] border-t py-8 last:border-b'
					>
						<span className='col-span-2 font-[family-name:var(--font-mono)] text-[var(--amber)] text-sm sm:col-span-1'>
							{c.n}
						</span>
						<span className='col-span-10 font-bold text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-tight transition-transform duration-300 group-hover:translate-x-3 sm:col-span-6'>
							{c.t}
						</span>
						<span className='col-span-12 text-[var(--mute)] sm:col-span-5 sm:text-right'>
							{c.d}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
