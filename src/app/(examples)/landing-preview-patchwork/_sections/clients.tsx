const clients = [
	'Rewild Co.',
	'Circular Threads',
	'Gridshift',
	'Ocean State',
	'Urban Harvest',
	'Greenloop',
	'Terraform',
	'Brightfield'
]

/** Future Payload mapping: clientLogos. */
export function Clients() {
	return (
		<section
			id='clients'
			className='overflow-hidden border-[var(--ink)] border-y-2 py-8'
		>
			<p className='pw-reveal mb-6 text-center font-medium text-xs uppercase tracking-[0.32em] [color:var(--mute)]'>
				Clients & partners
			</p>
			<div className='pw-marquee flex w-max gap-12 whitespace-nowrap'>
				{clients
					.flatMap(c => [
						{ id: `${c}-a`, label: c },
						{ id: `${c}-b`, label: c }
					])
					.map(entry => (
						<span
							key={entry.id}
							className='font-[family-name:var(--font-display)] text-xl uppercase opacity-50'
						>
							{entry.label}
						</span>
					))}
			</div>
		</section>
	)
}
