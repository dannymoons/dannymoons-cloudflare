/** Future Payload mapping: privateHireCta. */
export function PrivateHire() {
	return (
		<section
			id='private-hire'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--velvet)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16'>
					<figure className='ho-reveal aspect-[4/3] overflow-hidden border border-[var(--line)] lg:col-span-5'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/hollow-private/900/675'
							alt='Private booth setup for an intimate gathering'
							className='h-full w-full object-cover'
						/>
					</figure>

					<div className='ho-reveal lg:col-span-7'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							Private hire
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
							Buy out the room
						</h2>
						<p className='mt-5 max-w-lg text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Exclusive use of Hollow for up to 40 guests. Custom cocktail menu,
							dedicated bartenders, and a phrase of your choosing for the door.
						</p>
						<ul className='mt-8 space-y-2 text-sm [color:var(--cream)]/80'>
							<li>Minimum spend from €3,500</li>
							<li>Wed–Sat · 20:00–01:00</li>
							<li>48-hour cancellation policy</li>
						</ul>
						<a
							href='#contact'
							className='mt-8 inline-flex min-h-12 items-center border border-[var(--gold)] px-8 text-sm uppercase tracking-[0.16em] transition-colors [color:var(--gold)] hover:[background:var(--gold)] hover:[color:var(--velvet)]'
						>
							Enquire privately
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
