const shots = [
	{
		seed: 'pw-c1',
		rotate: '-rotate-6',
		x: 'left-0 top-0',
		bg: 'var(--yellow)'
	},
	{ seed: 'pw-c2', rotate: 'rotate-3', x: 'left-1/4 top-8', bg: 'var(--pink)' },
	{
		seed: 'pw-c3',
		rotate: '-rotate-2',
		x: 'right-1/4 top-4',
		bg: 'var(--green)'
	},
	{
		seed: 'pw-c4',
		rotate: 'rotate-6',
		x: 'right-0 top-16',
		bg: 'var(--cream)'
	},
	{
		seed: 'pw-c5',
		rotate: 'rotate-1',
		x: 'left-1/3 bottom-0',
		bg: 'var(--yellow)'
	}
]

/** Future Payload mapping: campaignCollage (polaroid mosaic). */
export function CampaignCollage() {
	return (
		<section
			id='campaign-collage'
			className='border-[var(--ink)] border-t-2 px-5 py-20 [background:var(--cream)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='pw-reveal mb-12 max-w-xl'>
					<p className='font-medium text-xs uppercase tracking-[0.32em] [color:var(--green)]'>
						Campaign archive
					</p>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] uppercase leading-[0.95]'>
						Work that refuses to whisper
					</h2>
				</div>

				<div className='pw-reveal relative mx-auto aspect-[16/10] max-w-4xl'>
					{shots.map(shot => (
						<figure
							key={shot.seed}
							className={`absolute w-[38%] max-w-[14rem] border-2 border-[var(--ink)] p-2 shadow-[8px_8px_0_0_var(--ink)] transition-transform hover:z-10 hover:scale-105 sm:max-w-[16rem] sm:p-3 ${shot.rotate} ${shot.x}`}
							style={{ background: shot.bg }}
						>
							<div className='aspect-[4/5] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${shot.seed}/400/500`}
									alt=''
									className='h-full w-full object-cover'
								/>
							</div>
						</figure>
					))}
				</div>

				<p className='pw-reveal mt-16 text-center text-sm [color:var(--mute)]'>
					Selected campaigns for Terraforms, Rewild Co., Gridshift, and 38 B
					Corp clients.
				</p>
			</div>
		</section>
	)
}
