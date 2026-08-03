const amenities = [
	{ label: 'Saltwater pool', detail: 'Heated infinity edge, sea level' },
	{ label: 'Beach cabanas', detail: 'Linen shades, chilled rosé service' },
	{ label: 'Yoga deck', detail: 'Sunrise sessions overlooking the cove' },
	{ label: 'Library nook', detail: 'Local poetry, maps, and slow coffee' },
	{ label: 'Electric bikes', detail: 'Coastal path to hidden coves' },
	{
		label: 'Concierge',
		detail: 'Boat charters, vineyard visits, late checkout'
	}
]

/** Future Payload mapping: amenityList. */
export function Amenities() {
	return (
		<section
			id='amenities'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--sand)]/50 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20'>
					<div className='dw-reveal'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--sea)]'>
							Amenities
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
							Unhurried comforts, coast-side
						</h2>
						<p className='mt-4 max-w-md text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							No marble lobbies or velvet ropes — just the essentials done
							beautifully: light, salt air, and space to breathe.
						</p>
					</div>

					<ul className='dw-reveal grid grid-cols-1 gap-px [background:var(--line)] sm:grid-cols-2'>
						{amenities.map(a => (
							<li
								key={a.label}
								className='border-[var(--line)] border-b p-5 [background:var(--linen)] last:border-b-0 sm:[&:nth-child(odd)]:border-r'
							>
								<h3 className='font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
									{a.label}
								</h3>
								<p className='mt-1 text-sm [color:var(--mute)]'>{a.detail}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
