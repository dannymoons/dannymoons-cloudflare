const zones = [
	{
		area: 'Shoulder',
		treatments: 'Rotator cuff · Frozen shoulder',
		href: '#treatments'
	},
	{ area: 'Knee', treatments: 'ACL rehab · Meniscus', href: '#treatments' },
	{ area: 'Spine', treatments: 'Lower back · Post-op', href: '#treatments' },
	{ area: 'Hip', treatments: 'Replacement · Labral', href: '#treatments' },
	{ area: 'Ankle', treatments: 'Sprain · Achilles', href: '#treatments' },
	{ area: 'Neck', treatments: 'Whiplash · Posture', href: '#treatments' }
]

/** Future Payload mapping: motionScreen. */
export function MotionScreen() {
	return (
		<section
			id='motion-screen'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--sky)]/20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Body zone map
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						Where it hurts, we treat
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Select your area to explore specialised protocols. Every zone links
						to evidence-based treatment pathways.
					</p>
				</div>

				<div className='rs-reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{zones.map(z => (
						<a
							key={z.area}
							href={z.href}
							className='group rounded-2xl border border-[var(--line)] p-6 transition-all [background:var(--white)] hover:border-[var(--ocean)] hover:shadow-[0_8px_30px_-12px_var(--ocean)]'
						>
							<div className='flex items-center justify-between'>
								<h3 className='font-[family-name:var(--font-display)] text-xl [color:var(--slate)]'>
									{z.area}
								</h3>
								<span className='grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-sm transition-colors group-hover:border-[var(--ocean)] group-hover:[color:var(--ocean)]'>
									→
								</span>
							</div>
							<p className='mt-3 text-sm [color:var(--mute)]'>{z.treatments}</p>
						</a>
					))}
				</div>

				<div className='rs-reveal mt-8 flex justify-center'>
					<a
						href='#schedule'
						className='inline-flex min-h-11 items-center rounded-full px-6 text-sm text-white [background:var(--ocean)]'
					>
						Book assessment for your zone
					</a>
				</div>
			</div>
		</section>
	)
}
