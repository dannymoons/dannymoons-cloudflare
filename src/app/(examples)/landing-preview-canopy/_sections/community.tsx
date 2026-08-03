const chapters = [
	{ city: 'Portland', region: 'Pacific Northwest', members: '340+' },
	{ city: 'Berlin', region: 'Central Europe', members: '280+' },
	{ city: 'São Paulo', region: 'Atlantic Forest', members: '410+' },
	{ city: 'Nairobi', region: 'East Africa', members: '195+' }
]

const events = [
	{
		date: 'Mar 14',
		title: 'Field day: cover crops & carbon',
		location: 'Portland chapter · Sauvie Island'
	},
	{
		date: 'Apr 22',
		title: 'Circular packaging hackathon',
		location: 'Berlin chapter · Circular Berlin Hub'
	},
	{
		date: 'May 8',
		title: 'Regenerative sourcing forum',
		location: 'São Paulo chapter · Instituto Escolhas'
	}
]

/** Future Payload mapping: communityHub. */
export function Community() {
	return (
		<section id='community' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='cp-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Community
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						Local chapters, global roots
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Canopy chapters host field days, supplier meetups, and circular
						design workshops — connecting practitioners on the ground with
						brands ready to transition.
					</p>
				</div>

				<div className='mt-12 grid gap-10 lg:grid-cols-2'>
					<div>
						<h3 className='cp-reveal text-sm uppercase tracking-[0.2em] [color:var(--earth)]'>
							Active chapters
						</h3>
						<ul className='mt-6 space-y-4'>
							{chapters.map(c => (
								<li
									key={c.city}
									className='cp-reveal flex items-baseline justify-between gap-4 border-[var(--line)] border-b pb-4'
								>
									<div>
										<span className='font-[family-name:var(--font-display)] text-xl'>
											{c.city}
										</span>
										<span className='ml-2 text-sm [color:var(--mute)]'>
											{c.region}
										</span>
									</div>
									<span className='text-sm [color:var(--leaf)]'>
										{c.members}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='cp-reveal text-sm uppercase tracking-[0.2em] [color:var(--earth)]'>
							Upcoming events
						</h3>
						<ul className='mt-6 space-y-4'>
							{events.map(e => (
								<li
									key={e.title}
									className='cp-reveal rounded-xl border border-[var(--line)] p-5 [background:color-mix(in_oklch,var(--sun)_10%,var(--sand))]'
								>
									<span className='text-xs uppercase tracking-[0.16em] [color:var(--earth)]'>
										{e.date}
									</span>
									<p className='mt-2 font-[family-name:var(--font-display)] text-lg'>
										{e.title}
									</p>
									<p className='mt-1 text-sm [color:var(--mute)]'>
										{e.location}
									</p>
								</li>
							))}
						</ul>
						<a
							href='#contact'
							className='cp-reveal mt-6 inline-flex text-sm [color:var(--earth)] hover:underline'
						>
							Start a chapter in your city →
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
