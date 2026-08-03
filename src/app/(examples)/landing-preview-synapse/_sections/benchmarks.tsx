const benchmarks = [
	{
		metric: 'MMLU',
		synapse: 89.2,
		gpt4: 86.4,
		claude: 88.1
	},
	{
		metric: 'HumanEval',
		synapse: 82.7,
		gpt4: 67.0,
		claude: 71.2
	},
	{
		metric: 'GSM8K',
		synapse: 94.1,
		gpt4: 92.0,
		claude: 93.5
	},
	{
		metric: 'AgentBench',
		synapse: 78.4,
		gpt4: 62.3,
		claude: 68.9
	}
]

/** Future Payload mapping: benchmarkComparison. */
export function Benchmarks() {
	return (
		<section
			id='benchmarks'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_35%,transparent)] sm:px-8 sm:py-28'
		>
			<div className='mb-12 text-center'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Benchmarks
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Synapse-70B vs frontier models
				</h2>
				<p className='sy-reveal mx-auto mt-4 max-w-lg text-sm [color:var(--mute)]'>
					Evaluated on standard suites — reasoning-first architecture shows
					strongest gains on agent and code tasks.
				</p>
			</div>

			<div className='mx-auto grid max-w-4xl gap-6 sm:grid-cols-2'>
				{benchmarks.map(b => (
					<article
						key={b.metric}
						className='sy-reveal rounded-2xl border border-[color-mix(in_oklch,var(--neon)_15%,var(--line))] p-5 [background:color-mix(in_oklch,var(--void)_75%,transparent)] sm:p-6'
					>
						<h3 className='font-[family-name:var(--font-display)] font-medium text-sm uppercase tracking-widest [color:var(--mute)]'>
							{b.metric}
						</h3>
						<div className='mt-5 space-y-4'>
							<div>
								<div className='mb-1.5 flex justify-between text-xs'>
									<span className='[color:var(--neon)]'>Synapse-70B</span>
									<span>{b.synapse}%</span>
								</div>
								<div className='h-1.5 overflow-hidden rounded-full [background:var(--line)]'>
									<div
										className='h-full rounded-full [background:linear-gradient(90deg,var(--neon),var(--pulse))]'
										style={{ width: `${b.synapse}%` }}
									/>
								</div>
							</div>
							<div>
								<div className='mb-1.5 flex justify-between text-xs [color:var(--mute)]'>
									<span>GPT-4</span>
									<span>{b.gpt4}%</span>
								</div>
								<div className='h-1.5 overflow-hidden rounded-full [background:var(--line)]'>
									<div
										className='h-full rounded-full [background:var(--mute)]'
										style={{ width: `${b.gpt4}%`, opacity: 0.5 }}
									/>
								</div>
							</div>
							<div>
								<div className='mb-1.5 flex justify-between text-xs [color:var(--mute)]'>
									<span>Claude 3.5</span>
									<span>{b.claude}%</span>
								</div>
								<div className='h-1.5 overflow-hidden rounded-full [background:var(--line)]'>
									<div
										className='h-full rounded-full [background:var(--mute)]'
										style={{ width: `${b.claude}%`, opacity: 0.5 }}
									/>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
