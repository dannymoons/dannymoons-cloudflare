const models = [
	{
		name: 'Synapse-7B',
		params: '7B',
		context: '32k',
		latency: '8ms',
		use: 'Edge devices, copilots, real-time chat'
	},
	{
		name: 'Synapse-70B',
		params: '70B',
		context: '128k',
		latency: '24ms',
		use: 'Enterprise agents, code, analysis',
		featured: true
	},
	{
		name: 'Synapse-Ultra',
		params: '405B MoE',
		context: '1M',
		latency: '89ms',
		use: 'Research, multi-agent orchestration'
	}
]

/** Future Payload mapping: modelCatalog. */
export function Models() {
	return (
		<section
			id='models'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_35%,transparent)] sm:px-8 sm:py-28'
		>
			<div className='mb-10'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Model family
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					One architecture, three scales
				</h2>
			</div>

			<div className='sy-reveal overflow-x-auto rounded-2xl border border-[color-mix(in_oklch,var(--neon)_15%,var(--line))] [background:color-mix(in_oklch,var(--void)_80%,transparent)]'>
				<table className='w-full min-w-[640px] border-collapse text-left text-sm'>
					<thead>
						<tr className='border-[var(--line)] border-b text-[11px] uppercase tracking-[0.18em] [color:var(--mute)]'>
							<th className='px-4 py-4 font-normal sm:px-6'>Model</th>
							<th className='px-4 py-4 font-normal sm:px-6'>Params</th>
							<th className='px-4 py-4 font-normal sm:px-6'>Context</th>
							<th className='px-4 py-4 font-normal sm:px-6'>p50 latency</th>
							<th className='px-4 py-4 font-normal sm:px-6'>Best for</th>
						</tr>
					</thead>
					<tbody>
						{models.map(m => (
							<tr
								key={m.name}
								className={`border-[var(--line)] border-b transition-colors last:border-b-0 hover:[background:color-mix(in_oklch,var(--neon)_4%,transparent)] ${
									m.featured
										? '[background:color-mix(in_oklch,var(--neon)_6%,transparent)]'
										: ''
								}`}
							>
								<td className='px-4 py-4 sm:px-6'>
									<span className='font-[family-name:var(--font-display)] font-medium'>
										{m.name}
									</span>
									{m.featured ? (
										<span className='ml-2 rounded-full border border-[color-mix(in_oklch,var(--neon)_40%,transparent)] px-2 py-0.5 text-[10px] uppercase tracking-widest [color:var(--neon)]'>
											Flagship
										</span>
									) : null}
								</td>
								<td className='px-4 py-4 [color:var(--mute)] sm:px-6'>
									{m.params}
								</td>
								<td className='px-4 py-4 [color:var(--neon)] sm:px-6'>
									{m.context}
								</td>
								<td className='px-4 py-4 sm:px-6'>{m.latency}</td>
								<td className='px-4 py-4 [color:var(--mute)] sm:px-6'>
									{m.use}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}
