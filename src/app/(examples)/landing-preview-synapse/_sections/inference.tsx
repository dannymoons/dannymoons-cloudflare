/** Future Payload mapping: inferenceArchitecture. */
export function Inference() {
	const nodes = [
		{ id: 'input', label: 'Multimodal input', x: '8%', y: '50%' },
		{ id: 'encoder', label: 'Sensory encoder', x: '28%', y: '28%' },
		{ id: 'graph', label: 'Synaptic graph', x: '50%', y: '50%' },
		{ id: 'reason', label: 'Reasoning core', x: '72%', y: '28%' },
		{ id: 'edge', label: 'Edge shard', x: '72%', y: '72%' },
		{ id: 'output', label: 'Structured output', x: '92%', y: '50%' }
	]

	return (
		<section id='inference' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mb-10 max-w-2xl'>
				<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
					Edge inference
				</span>
				<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
					Neural paths from sensor to decision
				</h2>
				<p className='sy-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
					Distributed synaptic shards run co-located with your data. No round
					trip to a distant cloud — cognition at the edge.
				</p>
			</div>

			<div className='sy-reveal relative min-h-[420px] overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--neon)_20%,var(--line))] [background:color-mix(in_oklch,var(--panel)_70%,transparent)] sm:min-h-[360px]'>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative diagram, aria-hidden */}
				<svg
					aria-hidden
					className='absolute inset-0 h-full w-full'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'
				>
					<defs>
						<linearGradient id='sy-wire' x1='0%' y1='0%' x2='100%' y2='0%'>
							<stop offset='0%' stopColor='var(--pulse)' stopOpacity='0.2' />
							<stop offset='50%' stopColor='var(--neon)' stopOpacity='0.8' />
							<stop offset='100%' stopColor='var(--pulse)' stopOpacity='0.2' />
						</linearGradient>
					</defs>
					<path
						d='M 8 50 L 28 28 L 50 50 L 72 28 L 92 50'
						fill='none'
						stroke='url(#sy-wire)'
						strokeWidth='0.3'
						strokeDasharray='1 1'
					/>
					<path
						d='M 50 50 L 72 72 L 92 50'
						fill='none'
						stroke='url(#sy-wire)'
						strokeWidth='0.3'
						opacity='0.6'
					/>
					<path
						d='M 28 28 L 50 50 L 72 72'
						fill='none'
						stroke='var(--neon)'
						strokeWidth='0.15'
						opacity='0.35'
					/>
				</svg>

				<div
					aria-hidden
					className='pointer-events-none absolute inset-0 opacity-20'
					style={{
						backgroundImage:
							'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
						backgroundSize: '24px 24px'
					}}
				/>

				{nodes.map(n => (
					<div
						key={n.id}
						className='absolute -translate-x-1/2 -translate-y-1/2'
						style={{ left: n.x, top: n.y }}
					>
						<div className='rounded-lg border border-[color-mix(in_oklch,var(--neon)_35%,var(--line))] px-3 py-2 text-[10px] uppercase tracking-widest shadow-[0_0_20px_-8px_var(--neon)] backdrop-blur-sm [background:color-mix(in_oklch,var(--void)_85%,transparent)] sm:px-4 sm:text-[11px]'>
							{n.label}
						</div>
					</div>
				))}

				<div className='absolute right-4 bottom-4 left-4 flex flex-wrap gap-4 border-[var(--line)] border-t pt-4 sm:left-auto sm:max-w-xs'>
					<div>
						<p className='text-[10px] uppercase tracking-widest [color:var(--mute)]'>
							Edge nodes
						</p>
						<p className='mt-1 font-[family-name:var(--font-display)] text-lg [color:var(--neon)]'>
							2,400+
						</p>
					</div>
					<div>
						<p className='text-[10px] uppercase tracking-widest [color:var(--mute)]'>
							Sync latency
						</p>
						<p className='mt-1 font-[family-name:var(--font-display)] text-lg'>
							&lt;4ms
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
