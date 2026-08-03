const initiatives = [
	{
		title: 'Telemetry open data',
		stat: '12 species',
		desc: 'All satellite tracks from Route IV published for research partners within 90 days of capture.'
	},
	{
		title: 'Local ranger grants',
		stat: '€240K',
		desc: 'Direct funding to field rangers in Congo, Svalbard, and Atlas regions — no overhead.'
	},
	{
		title: 'Youth field fellowships',
		stat: '8 seats',
		desc: 'Early-career biologists embed with the unit for one expedition chapter per season.'
	}
]

/** Future Payload mapping: conservationImpact. */
export function Conservation() {
	return (
		<section id='conservation' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ks-reveal grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--amber)]'>
							Conservation
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] [color:var(--cream)]'>
							Film is the hook. Data is the legacy.
						</h2>
						<p className='mt-4 leading-relaxed [color:var(--mute)]'>
							Every KESTREL expedition feeds partner NGOs with footage,
							telemetry, and field observations — turning cinema audiences into
							conservation stakeholders.
						</p>
						<a
							href='#contact'
							className='mt-8 inline-flex min-h-12 items-center rounded-sm px-7 [background:var(--amber)] [color:var(--night)]'
						>
							Partner with us
						</a>
					</div>
					<div className='aspect-[4/3] overflow-hidden rounded-sm'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/kestrel-conservation/720/540'
							alt='Field biologist releasing telemetry tag'
							className='h-full w-full object-cover'
						/>
					</div>
				</div>

				<div className='mt-16 grid gap-6 sm:grid-cols-3'>
					{initiatives.map(i => (
						<div
							key={i.title}
							className='ks-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<p className='font-[family-name:var(--font-display)] text-3xl [color:var(--amber)]'>
								{i.stat}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-lg [color:var(--cream)]'>
								{i.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{i.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
