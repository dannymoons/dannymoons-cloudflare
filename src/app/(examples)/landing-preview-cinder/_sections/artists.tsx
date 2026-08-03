const artists = [
	{
		name: 'Hana Mori',
		role: 'Lead thrower',
		bio: 'Trained in Shigaraki. Throws chawan with one continuous pull — no trimming.',
		seed: 'cinder-hana'
	},
	{
		name: 'Ren Okada',
		role: 'Glaze chemist',
		bio: 'Develops ash and shino recipes from local rice straw and cedar bark.',
		seed: 'cinder-ren'
	},
	{
		name: 'Yuki Tanabe',
		role: 'Kiln master',
		bio: 'Fourth-generation stoker. Reads flame colour and cone bend by instinct alone.',
		seed: 'cinder-yuki'
	}
]

/** Future Payload mapping: teamGrid. */
export function Artists() {
	return (
		<section id='artists' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						The studio
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Hands behind the clay
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
					{artists.map(a => (
						<article key={a.name} className='ci-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-sm [background:color-mix(in_oklch,var(--clay)_15%,var(--paper))]'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${a.seed}/500/660`}
									alt={a.name}
									className='h-full w-full object-cover grayscale-[20%]'
								/>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ash)]'>
								{a.name}
							</h3>
							<p className='mt-1 text-sm tracking-wide [color:var(--ember)]'>
								{a.role}
							</p>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{a.bio}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
