const designers = [
	{
		name: 'Elena Vogt',
		role: 'Founding partner',
		bio: 'Draws Lab Grotesk and Lab Display. Previously at Lineto and Optimo.'
	},
	{
		name: 'Marcus Chen',
		role: 'Type designer',
		bio: 'Lead on Lab Serif and Cyrillic extensions. MA TypeMedia, KABK.'
	},
	{
		name: 'Sofia Lindström',
		role: 'Engineering',
		bio: 'Builds variable fonts, hinting, and webfont delivery infrastructure.'
	}
]

/** Future Payload mapping: teamProfiles. */
export function Designers() {
	return (
		<section id='designers' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						Designers
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Drawn by a small team
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{designers.map(d => (
						<article key={d.name} className='ty-reveal'>
							<figure className='aspect-square overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/typelab-${d.name.replace(/\s/g, '')}/400/400`}
									alt={d.name}
									className='h-full w-full object-cover grayscale'
								/>
							</figure>
							<h3 className='mt-5 font-[family-name:var(--font-display)] text-xl'>
								{d.name}
							</h3>
							<p className='mt-1 text-[var(--red)] text-xs uppercase tracking-[0.14em]'>
								{d.role}
							</p>
							<p className='mt-3 text-[var(--mute)] text-sm leading-relaxed'>
								{d.bio}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
