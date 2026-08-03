import { ArrowUpRight } from 'lucide-react'

const projects = [
	{
		name: 'Hyperjuice',
		cat: 'Brand identity',
		seed: 'flux1',
		color: 'var(--magenta)',
		span: 'sm:col-span-7'
	},
	{
		name: 'Nimbus OS',
		cat: 'Product + motion',
		seed: 'flux2',
		color: 'var(--cobalt)',
		span: 'sm:col-span-5'
	},
	{
		name: 'Bloom Festival',
		cat: 'Campaign',
		seed: 'flux3',
		color: 'var(--tangerine)',
		span: 'sm:col-span-5'
	},
	{
		name: 'Önd Studio',
		cat: 'Website + 3D',
		seed: 'flux4',
		color: 'var(--lime)',
		span: 'sm:col-span-7'
	}
]

/** Future Payload mapping: workShowcase. */
export function Work() {
	return (
		<section id='work' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mb-10 flex items-end justify-between'>
				<h2 className='font-extrabold text-[clamp(2rem,6vw,4rem)] leading-none tracking-[-0.03em]'>
					Selected
					<br />
					<span className='font-[family-name:var(--font-serif)] italic'>
						mischief
					</span>
				</h2>
				<span className='font-[family-name:var(--font-mono)] text-sm uppercase'>
					(2022—25)
				</span>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-12'>
				{projects.map(p => (
					<a
						key={p.name}
						href='#work'
						className={`flx-reveal group relative block overflow-hidden rounded-3xl border-2 border-[var(--ink)] ${p.span}`}
					>
						<div className='aspect-[16/11] overflow-hidden'>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
							<img
								src={`https://picsum.photos/seed/${p.seed}/1200/825`}
								alt={p.name}
								className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
							/>
						</div>
						<div
							className='flex items-center justify-between px-6 py-4'
							style={{ background: p.color }}
						>
							<div>
								<div className='font-extrabold text-2xl tracking-tight [color:var(--ink)]'>
									{p.name}
								</div>
								<div className='font-[family-name:var(--font-mono)] text-xs uppercase [color:var(--ink)]/70'>
									{p.cat}
								</div>
							</div>
							<ArrowUpRight className='h-7 w-7 transition-transform duration-300 [color:var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1' />
						</div>
					</a>
				))}
			</div>
		</section>
	)
}
