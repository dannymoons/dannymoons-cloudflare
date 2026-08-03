const names = [
	'NETFLIX',
	'✺',
	'SPOTIFY',
	'✺',
	'NIKE',
	'✺',
	'AESOP',
	'✺',
	'MONZO',
	'✺',
	'A24',
	'✺'
]
const loop = [...names, ...names].map((w, i) => ({ id: `flx-cl-${i}`, w }))

/** Future Payload mapping: clientMarquee. */
export function Clients() {
	return (
		<div className='overflow-hidden py-8'>
			<div className='flx-marquee flx-marquee--rev flex w-max whitespace-nowrap font-[family-name:var(--font-display)] font-bold text-[clamp(2.5rem,8vw,6rem)] leading-none [-webkit-text-stroke:1.5px_var(--ink)] [color:transparent]'>
				{loop.map(item => (
					<span key={item.id} className='mx-6'>
						{item.w}
					</span>
				))}
			</div>
		</div>
	)
}
