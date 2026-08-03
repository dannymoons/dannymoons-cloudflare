const stats = [
	{ v: '4', l: 'Type families' },
	{ v: '30', l: 'Styles in catalogue' },
	{ v: '48', l: 'Countries licensed' },
	{ v: '2011', l: 'Founded in Zürich' }
]

/** Future Payload mapping: foundryStory (about band). */
export function Foundry() {
	return (
		<section id='foundry' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16'>
					<div className='ty-reveal lg:col-span-6'>
						<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
							The foundry
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] leading-tight'>
							Swiss precision, independent spirit
						</h2>
						<p className='mt-6 text-[var(--mute)] leading-relaxed'>
							Typelab started as a side project in a shared studio on
							Rämistrasse. Fourteen years later we still draw every letter
							in-house — no acquisitions, no revivals of forgotten metal type.
						</p>
						<p className='mt-4 text-[var(--mute)] leading-relaxed'>
							Our specimen sheets ship printed on Munken Lynx. Our fonts ship
							tested on real pages, in real browsers, at real sizes.
						</p>
					</div>

					<div className='ty-reveal lg:col-span-6'>
						<figure className='aspect-[4/3] overflow-hidden'>
							{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
							<img
								src='https://picsum.photos/seed/typelab-foundry/900/675'
								alt='Typelab studio with type specimens on the wall'
								className='h-full w-full object-cover'
							/>
						</figure>
					</div>
				</div>

				<div className='ty-reveal mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-[var(--line)] border-t pt-10 lg:grid-cols-4'>
					{stats.map(s => (
						<div key={s.l}>
							<div className='font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] leading-none'>
								{s.v}
							</div>
							<div className='mt-2 text-[var(--mute)] text-sm'>{s.l}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
