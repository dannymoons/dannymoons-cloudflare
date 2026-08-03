import { ArrowRight } from 'lucide-react'

/** Future Payload mapping: heroNeural. */
export function Hero() {
	return (
		<section className='relative px-5 pt-16 pb-20 text-center sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl opacity-40'
				style={{
					background:
						'radial-gradient(ellipse 80% 60% at 50% 0%, var(--pulse), transparent)'
				}}
			/>

			<span className='sy-reveal inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--neon)_30%,var(--line))] px-3 py-1 text-[11px] uppercase tracking-[0.22em] [color:var(--mute)]'>
				<span className='h-1.5 w-1.5 animate-pulse rounded-full [background:var(--neon)]' />
				Neural inference v3.2 live
			</span>

			<h1 className='sy-reveal mx-auto mt-8 max-w-4xl text-balance font-[family-name:var(--font-display)] font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.03em]'>
				<span
					className='bg-clip-text text-transparent [-webkit-text-fill-color:transparent]'
					style={{
						backgroundImage:
							'linear-gradient(120deg, var(--text), var(--neon), var(--pulse))'
					}}
				>
					Intelligence at the speed of thought
				</span>
			</h1>

			<div className='sy-reveal mx-auto mt-8 max-w-xl overflow-hidden rounded-xl border border-[color-mix(in_oklch,var(--neon)_20%,var(--line))] text-left shadow-[0_0_60px_-20px_var(--pulse)] backdrop-blur-md [background:color-mix(in_oklch,var(--panel)_85%,transparent)]'>
				<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-2.5'>
					<span className='h-2.5 w-2.5 rounded-full [background:var(--pulse)]' />
					<span className='h-2.5 w-2.5 rounded-full [background:var(--neon)]' />
					<span className='h-2.5 w-2.5 rounded-full [background:var(--mute)]' />
					<span className='ml-2 text-[11px] uppercase tracking-widest [color:var(--mute)]'>
						synapse — init cortex
					</span>
				</div>
				<pre className='overflow-x-auto p-4 text-xs leading-relaxed [color:var(--mute)] sm:p-5 sm:text-sm'>
					{`> loading synaptic weights... `}
					<span className='[color:var(--neon)]'>done</span>
					{`
> binding multimodal channels [vision, audio, text]
> memory graph: `}
					<span className='[color:var(--pulse)]'>128k context</span>
					{` · agents: `}
					<span className='[color:var(--neon)]'>online</span>
					{`
> latency p50: `}
					<span className='[color:var(--text)]'>12ms</span>
					{` · reasoning depth: adaptive
`}
					<span className='[color:var(--neon)]'>_</span>
				</pre>
			</div>

			<p className='sy-reveal mx-auto mt-6 max-w-lg text-balance text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
				Cognitive AI infrastructure for teams building agents, copilots and
				real-time reasoning systems — holographic clarity, edge-native speed.
			</p>

			<div className='sy-reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
				<a
					href='#demo'
					className='group inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--neon)_50%,transparent)] px-6 py-3 font-[family-name:var(--font-display)] font-medium text-sm shadow-[0_0_40px_-12px_var(--neon)] transition-shadow duration-300 [background:linear-gradient(120deg,color-mix(in_oklch,var(--neon)_90%,var(--void)),color-mix(in_oklch,var(--pulse)_80%,var(--void)))] [color:var(--void)] hover:shadow-[0_0_50px_-8px_var(--neon)]'
				>
					Try the playground
					<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
				</a>
				<a
					href='#models'
					className='inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 font-[family-name:var(--font-display)] text-sm transition-colors hover:border-[color-mix(in_oklch,var(--neon)_30%,var(--line))] hover:[background:var(--panel)]'
				>
					Model catalog
				</a>
			</div>
		</section>
	)
}
