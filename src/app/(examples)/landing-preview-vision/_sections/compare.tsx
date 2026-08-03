import { Check, Minus } from 'lucide-react'

const models = ['Aura', 'Aura Pro']
const rows = [
	{ feature: 'Active noise cancellation', values: [true, true] },
	{ feature: 'Spatial audio', values: [true, true] },
	{ feature: 'Lossless over USB-C', values: [false, true] },
	{ feature: 'Battery life', values: ['60h', '80h'] },
	{ feature: 'On-device translation', values: [false, true] },
	{ feature: 'Price', values: ['€399', '€549'] }
]

function Cell({ v }: { v: boolean | string }) {
	if (typeof v === 'boolean') {
		return v ? (
			<Check className='mx-auto h-5 w-5 [color:var(--accent)]' />
		) : (
			<Minus className='mx-auto h-5 w-5 [color:var(--mute)]' />
		)
	}
	return <span className='font-medium'>{v}</span>
}

/** Future Payload mapping: compareTable. */
export function Compare() {
	return (
		<section className='mx-auto max-w-4xl px-6 py-24 sm:py-32'>
			<h2 className='apl-reveal font-bold text-[clamp(1.75rem,4vw,3rem)] tracking-[-0.03em]'>
				Which Aura is for you?
			</h2>
			<div className='apl-reveal mt-10 overflow-hidden rounded-2xl border border-[var(--line)]'>
				<table className='w-full text-center text-sm'>
					<thead>
						<tr className='border-[var(--line)] border-b'>
							<th className='p-4 text-left font-medium text-[var(--mute)]'>
								Feature
							</th>
							{models.map(m => (
								<th key={m} className='p-4 font-semibold'>
									{m}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows.map(r => (
							<tr
								key={r.feature}
								className='border-[var(--line)] border-b last:border-0'
							>
								<td className='p-4 text-left text-[var(--mute)]'>
									{r.feature}
								</td>
								{r.values.map((v, i) => (
									<td key={`${r.feature}-${models[i]}`} className='p-4'>
										<Cell v={v} />
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
