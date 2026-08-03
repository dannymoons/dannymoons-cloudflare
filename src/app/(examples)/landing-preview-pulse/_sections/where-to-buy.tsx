import { MapPin } from 'lucide-react'

const stores = [
	'ALBERT HEIJN',
	'JUMBO',
	'GORILLAS',
	'COOP',
	'SPAR',
	'GAMESHOPS',
	'GYM BARS',
	'AMAZON'
]

/** Future Payload mapping: stockistGrid. */
export function WhereToBuy() {
	return (
		<section id='buy' className='px-5 py-16 sm:px-8'>
			<div className='mb-8 flex items-center gap-3'>
				<MapPin className='h-6 w-6 [color:var(--acid)]' />
				<h2 className='font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-none'>
					FIND IT NEAR YOU
				</h2>
			</div>
			<div className='grid grid-cols-2 gap-px overflow-hidden border-2 border-[var(--paper)]/20 bg-[var(--paper)]/20 sm:grid-cols-4'>
				{stores.map(s => (
					<div
						key={s}
						className='flex min-h-[90px] items-center justify-center p-4 text-center font-[family-name:var(--font-display)] text-xl transition-colors duration-200 [background:var(--void)] hover:[background:var(--acid)] hover:[color:var(--void)]'
					>
						{s}
					</div>
				))}
			</div>
		</section>
	)
}
