const models = [
	{
		name: 'Llama 3 8B',
		inference: 0.0042,
		tokens: '1K tokens',
		color: 'var(--olive)'
	},
	{
		name: 'GPT-4o mini',
		inference: 0.0089,
		tokens: '1K tokens',
		color: 'var(--sage)'
	},
	{
		name: 'Claude 3 Haiku',
		inference: 0.0061,
		tokens: '1K tokens',
		color: 'var(--clay)'
	},
	{
		name: 'Mistral 7B',
		inference: 0.0038,
		tokens: '1K tokens',
		color: 'var(--olive)'
	},
	{
		name: 'Gemini 1.5 Flash',
		inference: 0.0055,
		tokens: '1K tokens',
		color: 'var(--sage)'
	}
]

const maxInference = Math.max(...models.map(m => m.inference))

/** Future Payload mapping: inferenceFootprintChart. */
export function InferenceFootprint() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<span className='on-reveal mb-3 block text-[11px] uppercase tracking-[0.22em] [color:var(--olive)]'>
					Inference footprint
				</span>
				<h2 className='on-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
					g CO₂ per model inference
				</h2>
				<p className='on-reveal mt-3 max-w-lg text-sm [color:var(--mute)]'>
					Compare carbon cost per 1K-token inference across open and proprietary
					models — measured on identical hardware profiles.
				</p>

				<div className='on-reveal mt-10 space-y-4'>
					{models.map(m => (
						<article
							key={m.name}
							className='rounded-lg border border-[var(--line)] p-4 [background:var(--parchment)] sm:p-5'
						>
							<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
								<div>
									<h3 className='font-[family-name:var(--font-display)] font-medium'>
										{m.name}
									</h3>
									<p className='text-xs [color:var(--mute)]'>{m.tokens}</p>
								</div>
								<span className='font-[family-name:var(--font-display)] font-semibold text-lg tabular-nums'>
									{m.inference.toFixed(4)}g
								</span>
							</div>
							<div
								className='mt-3 h-2 overflow-hidden rounded-full [background:color-mix(in_oklch,var(--sage)_20%,transparent)]'
								role='img'
								aria-label={`${m.name}: ${m.inference.toFixed(4)} grams CO2 per 1K tokens`}
							>
								<div
									className='h-full rounded-full transition-all duration-500'
									style={{
										width: `${(m.inference / maxInference) * 100}%`,
										background: m.color
									}}
								/>
							</div>
						</article>
					))}
				</div>

				<p className='on-reveal mt-6 text-xs italic [color:var(--mute)]'>
					Measurements use Orbit Research v2.4 methodology — grid intensity
					weighted by region, hardware TDP, and measured wall-clock time.
				</p>
			</div>
		</section>
	)
}
