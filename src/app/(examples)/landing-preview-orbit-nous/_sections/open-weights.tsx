import { Download, GitBranch, LockOpen } from 'lucide-react'

const artifacts = [
	{
		icon: GitBranch,
		title: 'Emission factor weights',
		desc: 'Grid intensity tables, hardware TDP curves, and CDN hop models — versioned on GitHub.',
		tag: 'MIT License'
	},
	{
		icon: Download,
		title: 'Benchmark datasets',
		desc: 'Anonymised page-load traces and inference logs for reproducible comparison studies.',
		tag: 'CC BY 4.0'
	},
	{
		icon: LockOpen,
		title: 'Audit scripts',
		desc: 'Python tooling to verify your own measurements against Orbit methodology v2.4.',
		tag: 'Apache 2.0'
	}
]

/** Future Payload mapping: openWeightsSection. */
export function OpenWeights() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center'>
					<div>
						<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
							Open methodology
						</span>
						<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.02em]'>
							Open weights for carbon science
						</h2>
						<p className='on-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							We publish the same models and datasets we use internally — so
							your lab can audit, extend, and cite our work without a sales
							call.
						</p>
						<a
							href='https://github.com/moonsio'
							className='on-reveal mt-6 inline-flex min-h-12 items-center rounded-md border border-[color-mix(in_oklch,var(--olive)_35%,transparent)] px-5 text-sm transition-colors hover:[background:color-mix(in_oklch,var(--olive)_8%,transparent)]'
						>
							View on GitHub
						</a>
					</div>
					<div className='space-y-4'>
						{artifacts.map(a => (
							<article
								key={a.title}
								className='on-reveal flex gap-4 rounded-lg border border-[var(--line)] p-5 [background:var(--parchment)]'
							>
								<span className='grid h-10 w-10 shrink-0 place-items-center rounded-md [background:color-mix(in_oklch,var(--sage)_20%,transparent)] [color:var(--olive)]'>
									<a.icon className='h-5 w-5' />
								</span>
								<div>
									<div className='flex flex-wrap items-center gap-2'>
										<h3 className='font-[family-name:var(--font-display)] font-medium'>
											{a.title}
										</h3>
										<span className='rounded-full border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] [color:var(--mute)]'>
											{a.tag}
										</span>
									</div>
									<p className='mt-1 text-sm [color:var(--mute)]'>{a.desc}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
