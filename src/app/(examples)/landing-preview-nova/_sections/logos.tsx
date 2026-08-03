import { Reveal } from './motion'

const brands = ['NEURA', 'Quantio', 'Vectara', 'Hyperloop', 'Drift AI']

/** Future Payload mapping: logoStrip. */
export function Logos() {
	return (
		<Reveal className='px-5 sm:px-8'>
			<div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-[var(--line)] border-y py-6 font-[family-name:var(--font-mono)] text-sm [color:var(--ink-soft)]'>
				<span className='text-xs uppercase tracking-widest'>
					Trusted by builders at
				</span>
				{brands.map(b => (
					<span key={b} className='font-semibold [color:var(--ink)]'>
						{b}
					</span>
				))}
			</div>
		</Reveal>
	)
}
