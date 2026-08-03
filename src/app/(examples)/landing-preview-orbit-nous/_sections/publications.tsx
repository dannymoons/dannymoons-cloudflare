import { ExternalLink } from 'lucide-react'

const papers = [
	{
		id: '2403.18242',
		title: 'Orbit: Page-Level Carbon Accounting for AI-Heavy Web Applications',
		authors: 'Chen, M., van der Berg, L., Okonkwo, A.',
		venue: 'arXiv preprint',
		year: '2024',
		citations: 47
	},
	{
		id: '2401.08921',
		title: 'Inference Footprint Benchmarks for Open-Weight Language Models',
		authors: 'Patel, R., Müller, S.',
		venue: 'NeurIPS Workshop on Sustainable AI',
		year: '2024',
		citations: 23
	},
	{
		id: '2311.04512',
		title: 'Static-First Architecture Patterns for Sub-Gram Page Delivery',
		authors: 'Nakamura, Y., Santos, P.',
		venue: 'arXiv preprint',
		year: '2023',
		citations: 89
	}
]

/** Future Payload mapping: publicationsList. */
export function Publications() {
	return (
		<section id='publications' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
					Publications
				</span>
				<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
					Peer-reviewed methodology
				</h2>
				<p className='on-reveal mt-3 max-w-lg text-sm [color:var(--mute)]'>
					Our emission models and benchmarks are published for scrutiny — cite
					them in your own sustainability reports.
				</p>

				<div className='on-reveal mt-10 space-y-4'>
					{papers.map(p => (
						<article
							key={p.id}
							className='rounded-lg border border-[var(--line)] p-5 transition-colors sm:p-6 hover:[background:color-mix(in_oklch,var(--sage)_8%,transparent)]'
						>
							<div className='flex flex-wrap items-start justify-between gap-3'>
								<span className='font-mono text-xs [color:var(--clay)]'>
									arXiv:{p.id}
								</span>
								<span className='text-xs [color:var(--mute)]'>
									{p.citations} citations
								</span>
							</div>
							<h3 className='mt-3 font-[family-name:var(--font-display)] font-medium text-lg leading-snug'>
								{p.title}
							</h3>
							<p className='mt-2 text-sm [color:var(--mute)]'>
								{p.authors} — {p.venue}, {p.year}
							</p>
							<a
								href={`https://arxiv.org/abs/${p.id}`}
								className='mt-4 inline-flex min-h-12 items-center gap-1.5 text-xs transition-colors [color:var(--olive)] hover:[color:var(--ink)]'
							>
								Read on arXiv
								<ExternalLink className='h-3.5 w-3.5' />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
