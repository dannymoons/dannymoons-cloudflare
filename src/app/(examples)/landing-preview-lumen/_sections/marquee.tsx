const services = [
	'IMMERSIVE',
	'◆',
	'XR',
	'◆',
	'SPATIAL',
	'◆',
	'NARRATIVE',
	'◆',
	'BRAND WORLDS',
	'◆',
	'INSTALLATIONS',
	'◆'
]
const loop = [...services, ...services].map((w, i) => ({ id: `lu-mq-${i}`, w }))

/** Future Payload mapping: marqueeBand. */
export function Marquee() {
	return (
		<div className='overflow-hidden border-[var(--line)] border-y py-3 [background:var(--panel)]'>
			<div className='lu-marquee flex w-max whitespace-nowrap font-[family-name:var(--font-display)] font-bold text-2xl uppercase tracking-wide sm:text-3xl'>
				{loop.map(item => (
					<span key={item.id} className='mx-5 [color:var(--mute)]'>
						{item.w}
					</span>
				))}
			</div>
		</div>
	)
}
