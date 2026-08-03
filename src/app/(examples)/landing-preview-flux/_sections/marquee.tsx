const words = [
	'BRANDING',
	'✺',
	'MOTION',
	'✺',
	'WEBSITES',
	'✺',
	'CAMPAIGNS',
	'✺',
	'3D & CGI',
	'✺'
]
const loop = [...words, ...words].map((w, i) => ({ id: `flx-mq-${i}`, w }))

/** Future Payload mapping: marqueeBand. */
export function Marquee() {
	return (
		<div className='overflow-hidden border-[var(--ink)] border-y-2 py-3 [background:var(--cobalt)] [color:var(--cream)]'>
			<div className='flx-marquee flex w-max whitespace-nowrap font-[family-name:var(--font-display)] font-bold text-2xl uppercase sm:text-3xl'>
				{loop.map(item => (
					<span key={item.id} className='mx-5'>
						{item.w}
					</span>
				))}
			</div>
		</div>
	)
}
