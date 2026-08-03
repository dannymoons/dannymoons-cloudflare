import { ArrowRight, BookOpen } from 'lucide-react'

const labStats = [
	{ label: 'Models tracked', value: '24', note: 'open + proprietary' },
	{ label: 'Avg g CO₂ / page', value: '0.31', note: '−22% this quarter' },
	{ label: 'Inference runs', value: '1.2M', note: 'measured last 30d' }
]

/** Future Payload mapping: heroResearch. */
export function Hero() {
	return (
		<section className='relative px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-64  opacity-40'
				style={{
					background:
						'radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in oklch, var(--sage) 40%, transparent), transparent)'
				}}
			/>

			<span className='on-reveal inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] [color:var(--mute)]'>
				<BookOpen className='h-3.5 w-3.5 [color:var(--olive)]' />
				Open research · sustainable compute
			</span>

			<h1 className='on-reveal mx-auto mt-8 max-w-4xl text-balance text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.02em] [color:var(--ink)]'>
				Measure the{' '}
				<span
					className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
					style={{ backgroundImage: 'var(--grad-text)' }}
				>
					carbon cost of intelligence
				</span>
			</h1>

			<p className='on-reveal mx-auto mt-6 max-w-xl text-balance text-center text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
				Orbit Research brings academic rigour to AI and web carbon tracking —
				page-level emissions, inference footprints, and reproducible methodology
				for labs that publish their work.
			</p>

			<div className='on-reveal mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-[var(--line)] [background:color-mix(in_oklch,var(--parchment)_95%,var(--sage))]'>
				<div className='flex items-center justify-between border-[var(--line)] border-b px-4 py-3 sm:px-5'>
					<span className='font-[family-name:var(--font-display)] text-sm italic [color:var(--olive)]'>
						lab.orbit.research — live panel
					</span>
					<span className='rounded-full border border-[color-mix(in_oklch,var(--sage)_50%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest [color:var(--olive)]'>
						Recording
					</span>
				</div>
				<div className='grid gap-px [background:var(--line)] sm:grid-cols-3'>
					{labStats.map(s => (
						<div
							key={s.label}
							className='px-4 py-4 [background:var(--parchment)] sm:px-5 sm:py-5'
						>
							<p className='text-[10px] uppercase tracking-[0.16em] [color:var(--mute)]'>
								{s.label}
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] font-semibold text-2xl tracking-tight'>
								{s.value}
							</p>
							<p className='mt-1 text-[11px] [color:var(--sage)]'>{s.note}</p>
						</div>
					))}
				</div>
			</div>

			<div className='on-reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
				<a
					href='#trial'
					className='group inline-flex min-h-12 items-center gap-2 rounded-md border border-[color-mix(in_oklch,var(--olive)_40%,transparent)] px-6 font-[family-name:var(--font-display)] text-sm transition-colors [background:var(--olive)] [color:var(--parchment)] hover:[background:color-mix(in_oklch,var(--olive)_90%,var(--ink))]'
				>
					Join the research cohort
					<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
				</a>
				<a
					href='#dashboard'
					className='inline-flex min-h-12 items-center gap-2 rounded-md border border-[var(--line)] px-6 font-[family-name:var(--font-display)] text-sm transition-colors hover:[background:color-mix(in_oklch,var(--sage)_15%,transparent)]'
				>
					Explore dashboard
				</a>
			</div>
		</section>
	)
}
