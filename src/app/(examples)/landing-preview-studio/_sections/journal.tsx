import { ArrowUpRight } from 'lucide-react'

import { SectionHeading } from './section-heading'

const entries = [
	{
		cat: 'Essay',
		title: 'On the weight of light',
		date: 'May 2025',
		seed: 'journal1'
	},
	{
		cat: 'Material',
		title: 'Lime plaster, slowly',
		date: 'Mar 2025',
		seed: 'journal2'
	},
	{
		cat: 'Field notes',
		title: 'A week in Kyoto',
		date: 'Jan 2025',
		seed: 'journal3'
	}
]

/** Future Payload mapping: journalGrid. */
export function Journal() {
	return (
		<section id='journal' className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<SectionHeading
				eyebrow='Journal'
				title='Notes from the studio.'
				meta='View all'
			/>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
				{entries.map(e => (
					<a
						key={e.title}
						href='#journal'
						className='mrd-reveal group flex flex-col'
					>
						<div className='aspect-[4/3] overflow-hidden bg-[var(--line)]'>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
							<img
								src={`https://picsum.photos/seed/${e.seed}/800/600`}
								alt={e.title}
								className='h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0'
							/>
						</div>
						<div className='mt-4 flex items-center justify-between text-[var(--ink-soft)] text-xs uppercase tracking-widest'>
							<span>{e.cat}</span>
							<span>{e.date}</span>
						</div>
						<h3 className='mt-2 flex items-center gap-1.5 font-[family-name:var(--font-display)] text-2xl tracking-tight transition-colors group-hover:text-[var(--clay)]'>
							{e.title}
							<ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
						</h3>
					</a>
				))}
			</div>
		</section>
	)
}
