import { Check, X } from 'lucide-react'

const yes = [
	'200mg natural caffeine',
	'B-vitamin complex',
	'Electrolytes',
	'L-theanine for focus'
]
const no = ['Refined sugar', 'Artificial colors', 'Taurine', 'The 3pm crash']

/** Future Payload mapping: comparisonList. */
export function Ingredients() {
	return (
		<section className='px-5 py-16 sm:px-8'>
			<h2 className='mb-10 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5rem)] leading-[0.9]'>
				WHAT&rsquo;S IN.{' '}
				<span className='[-webkit-text-stroke:1.5px_var(--acid)] [color:transparent]'>
					WHAT&rsquo;S OUT.
				</span>
			</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				<div className='border-4 border-[var(--acid)] p-7'>
					<h3 className='mb-5 font-[family-name:var(--font-display)] text-3xl [color:var(--acid)]'>
						LOADED WITH
					</h3>
					<ul className='flex flex-col gap-3'>
						{yes.map(item => (
							<li
								key={item}
								className='flex items-center gap-3 font-semibold text-lg'
							>
								<Check className='h-5 w-5 shrink-0 [color:var(--acid)]' />
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='border-4 border-[var(--paper)]/20 p-7'>
					<h3 className='mb-5 font-[family-name:var(--font-display)] text-3xl [color:var(--magenta)]'>
						NEVER
					</h3>
					<ul className='flex flex-col gap-3'>
						{no.map(item => (
							<li
								key={item}
								className='flex items-center gap-3 font-semibold text-[var(--paper)]/50 text-lg line-through'
							>
								<X className='h-5 w-5 shrink-0 [color:var(--magenta)]' />
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
