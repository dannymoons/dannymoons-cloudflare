/** Future Payload mapping: ctaSplit. */
export function PrivateDining() {
	return (
		<section
			id='private-dining'
			className='px-5 py-20 [background:var(--wood)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ht-reveal aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[360px]'>
					{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
					<img
						src='https://picsum.photos/seed/hearth-private/900/675'
						alt='Private events room with long wooden table for twenty guests'
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='ht-reveal'>
					<span className='font-medium text-sm [color:var(--wheat)]'>
						Private dining
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--cream)]'>
						Events room for 20 guests
					</h2>
					<p className='mt-6 text-base leading-relaxed [color:var(--cream)]/80'>
						Upstairs from the main dining room, our events space has one long
						table, soft light, and a view of the kitchen below. Birthdays, team
						dinners, family reunions — Marco builds a set menu from what&apos;s
						in season, served family-style.
					</p>
					<ul className='mt-6 space-y-3 text-sm [color:var(--cream)]/75'>
						<li className='flex gap-3'>
							<span className='[color:var(--ember)]' aria-hidden>
								●
							</span>
							Up to 20 guests, single seating
						</li>
						<li className='flex gap-3'>
							<span className='[color:var(--ember)]' aria-hidden>
								●
							</span>
							Three-course menu from €55 per person
						</li>
						<li className='flex gap-3'>
							<span className='[color:var(--ember)]' aria-hidden>
								●
							</span>
							Wine pairings and non-alcoholic options available
						</li>
						<li className='flex gap-3'>
							<span className='[color:var(--ember)]' aria-hidden>
								●
							</span>
							Tuesday–Thursday evenings, Sunday lunch
						</li>
					</ul>
					<a
						href='#reservations'
						className='mt-8 inline-flex min-h-12 items-center rounded-sm px-6 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--cream)] hover:opacity-90'
					>
						Enquire about private dining
					</a>
				</div>
			</div>
		</section>
	)
}
