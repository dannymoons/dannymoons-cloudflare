const caps = [
	{
		t: 'Immersive',
		d: 'Multi-sensory environments that pull audiences through the fourth wall.'
	},
	{
		t: 'XR',
		d: 'AR, VR and mixed reality layers that extend brand presence beyond the screen.'
	},
	{
		t: 'Spatial',
		d: 'Architecture, light and sound choreographed into navigable physical spaces.'
	},
	{
		t: 'Narrative',
		d: 'Story systems that unfold across touchpoints — every detail earns its place.'
	}
]

/** Future Payload mapping: capabilityGrid. */
export function Capabilities() {
	return (
		<section id='capabilities' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
				<h2 className='lu-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]'>
					What we craft
				</h2>
				<p className='lu-reveal max-w-md text-sm leading-relaxed [color:var(--mute)]'>
					From concept to launch — four disciplines, one iridescent vision.
				</p>
			</div>
			<div className='grid gap-4 sm:grid-cols-2'>
				{caps.map((c, i) => (
					<article
						key={c.t}
						className='lu-reveal group rounded-2xl border border-[var(--line)] p-7 transition-colors duration-300 hover:[background:var(--panel)]'
					>
						<span className='font-[family-name:var(--font-display)] text-sm [color:var(--cyan)]'>
							0{i + 1}
						</span>
						<h3 className='mt-4 font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight transition-all group-hover:bg-clip-text group-hover:text-transparent group-hover:[-webkit-text-fill-color:transparent] group-hover:[background-image:linear-gradient(120deg,var(--violet),var(--cyan),var(--violet))]'>
							{c.t}
						</h3>
						<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
							{c.d}
						</p>
					</article>
				))}
			</div>
		</section>
	)
}
