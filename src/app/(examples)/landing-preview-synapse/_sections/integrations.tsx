const integrations = [
	{ name: 'REST API', desc: 'OpenAI-compatible endpoints' },
	{ name: 'Python SDK', desc: 'pip install synapse-ai' },
	{ name: 'TypeScript SDK', desc: 'npm @synapse/client' },
	{ name: 'LangChain', desc: 'Official partner integration' },
	{ name: 'LlamaIndex', desc: 'RAG & retrieval plugins' },
	{ name: 'Weights & Biases', desc: 'Experiment tracking' }
]

/** Future Payload mapping: integrationStrip. */
export function Integrations() {
	return (
		<section id='integrations' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl text-center'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Integrations
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Drop into your stack
				</h2>
				<p className='sy-reveal mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
					API-first design with SDKs and framework adapters — ship in an
					afternoon.
				</p>

				<div className='sy-reveal mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
					{integrations.map(item => (
						<div
							key={item.name}
							className='flex min-w-[140px] flex-col items-center rounded-xl border border-[color-mix(in_oklch,var(--neon)_12%,var(--line))] px-5 py-4 transition-all duration-300 [background:color-mix(in_oklch,var(--panel)_50%,transparent)] hover:border-[color-mix(in_oklch,var(--neon)_40%,transparent)] hover:shadow-[0_0_30px_-12px_var(--neon)]'
						>
							<span className='font-[family-name:var(--font-display)] font-medium text-sm'>
								{item.name}
							</span>
							<span className='mt-1 text-[10px] [color:var(--mute)]'>
								{item.desc}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
