const ticker = [
	'NO SLEEP',
	'★',
	'200MG CAFFEINE',
	'★',
	'ZERO SUGAR',
	'★',
	'FUEL THE CHAOS',
	'★',
	'DRINK LOUD',
	'★'
]
const tickerItems = [...ticker, ...ticker].map((label, i) => ({
	id: `tick-${i}`,
	label
}))

/** Future Payload mapping: marqueeTicker. */
export function TickerTop() {
	return (
		<div className='overflow-hidden border-[var(--acid)] border-y-2 [background:var(--acid)] [color:var(--void)]'>
			<div className='vc-marquee flex w-max whitespace-nowrap py-2 font-[family-name:var(--font-mono)] font-medium text-sm uppercase'>
				{tickerItems.map(item => (
					<span key={item.id} className='mx-4'>
						{item.label}
					</span>
				))}
			</div>
		</div>
	)
}
