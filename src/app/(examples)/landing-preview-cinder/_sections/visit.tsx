const hours = [
	{ day: 'Tue – Fri', time: '10:00 – 17:00' },
	{ day: 'Saturday', time: '10:00 – 15:00' },
	{ day: 'Sunday & Mon', time: 'Closed (kiln days)' }
]

/** Future Payload mapping: visitInfo. */
export function Visit() {
	return (
		<section
			id='visit'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ci-reveal'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Visit the studio
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Walk the wheel room
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Our atelier sits at the foot of the kiln yard in Uji, Kyoto. Watch
						throwing demonstrations, browse the showroom, and step inside the
						firing chamber between loads — by appointment on kiln weekends.
					</p>
					<address className='mt-8 text-sm not-italic leading-relaxed [color:var(--mute)]'>
						2-14 Gokashō Ishibashichō
						<br />
						Uji, Kyoto 611-0021
						<br />
						<span className='mt-2 block'>
							15 min walk from Uji Station · Limited parking
						</span>
					</address>
					<a
						href='#contact'
						className='mt-8 inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--paper)] hover:opacity-90'
					>
						Book a studio tour
					</a>
				</div>

				<div className='ci-reveal space-y-6'>
					<div className='aspect-[4/3] overflow-hidden rounded-sm [background:color-mix(in_oklch,var(--clay)_15%,var(--paper))]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/cinder-visit/800/600'
							alt='Cinder studio courtyard with noborigama kiln'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='rounded-sm border border-[var(--line)] p-6'>
						<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--ash)]'>
							Opening hours
						</h3>
						<dl className='mt-4 space-y-3'>
							{hours.map(h => (
								<div key={h.day} className='flex justify-between gap-4 text-sm'>
									<dt className='[color:var(--mute)]'>{h.day}</dt>
									<dd className='font-medium [color:var(--ash)]'>{h.time}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}
