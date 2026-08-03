const words = [
	'BRAND FILMS',
	'—',
	'REAL-TIME 3D',
	'—',
	'ART DIRECTION',
	'—',
	'CGI',
	'—',
	'IMMERSIVE WEB',
	'—'
]
const loop = [...words, ...words].map((w, i) => ({ id: `ob-mq-${i}`, w }))

/** Future Payload mapping: marqueeBand. */
export function Marquee() {
	return (
		<div className='overflow-hidden border-[var(--line)] border-y py-6'>
			<div className='ob-marquee flex w-max whitespace-nowrap font-bold text-[clamp(2rem,6vw,5rem)] uppercase leading-none [-webkit-text-stroke:1px_var(--paper)] [color:transparent]'>
				{loop.map(item => (
					<span key={item.id} className='mx-6'>
						{item.w}
					</span>
				))}
			</div>
		</div>
	)
}
