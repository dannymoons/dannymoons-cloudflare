const drinkLoop = Array.from({ length: 6 }, (_, i) => `drink-${i}`)

/** Future Payload mapping: marqueeBand. */
export function MarqueeBand() {
	return (
		<div className='overflow-hidden py-8'>
			<div className='vc-marquee vc-marquee--rev flex w-max whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,8rem)] leading-none [-webkit-text-stroke:2px_var(--magenta)] [color:transparent]'>
				{drinkLoop.map(id => (
					<span key={id} className='mx-6'>
						DRINK LOUD —
					</span>
				))}
			</div>
		</div>
	)
}
