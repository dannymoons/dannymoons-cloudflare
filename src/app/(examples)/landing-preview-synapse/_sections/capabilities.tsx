import { Bot, Brain, Eye, Layers } from 'lucide-react'

const caps = [
	{
		icon: Brain,
		t: 'Reasoning',
		d: 'Chain-of-thought, tree search and self-correction — adaptive depth on every query.'
	},
	{
		icon: Eye,
		t: 'Multimodal',
		d: 'Vision, audio and document understanding fused in a single cognitive graph.'
	},
	{
		icon: Bot,
		t: 'Agents',
		d: 'Tool use, planning loops and persistent personas with sandboxed execution.'
	},
	{
		icon: Layers,
		t: 'Memory',
		d: 'Episodic and semantic recall across sessions — vector + symbolic hybrid store.'
	}
]

/** Future Payload mapping: capabilityGrid. */
export function Capabilities() {
	return (
		<section id='capabilities' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
				<div>
					<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
						Cognitive stack
					</span>
					<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
						Four pillars of neural inference
					</h2>
				</div>
				<p className='sy-reveal max-w-sm text-sm leading-relaxed [color:var(--mute)]'>
					Not raw compute — structured cognition. Each module composes into
					holographic, inspectable pipelines.
				</p>
			</div>
			<div className='grid gap-4 sm:grid-cols-2'>
				{caps.map((c, i) => {
					const Icon = c.icon
					return (
						<article
							key={c.t}
							className='sy-reveal group relative overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--neon)_18%,var(--line))] p-6 transition-all duration-300 [background:color-mix(in_oklch,var(--panel)_60%,transparent)] hover:border-[color-mix(in_oklch,var(--neon)_45%,transparent)] hover:shadow-[0_0_40px_-16px_var(--neon)] sm:p-7'
						>
							<div
								aria-hidden
								className='pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 [background:var(--pulse)] group-hover:opacity-30'
							/>
							<div className='flex items-start justify-between'>
								<span className='grid h-11 w-11 place-items-center rounded-xl border border-[color-mix(in_oklch,var(--neon)_35%,transparent)] [background:color-mix(in_oklch,var(--neon)_8%,transparent)] [color:var(--neon)]'>
									<Icon className='h-5 w-5' />
								</span>
								<span className='text-[11px] uppercase tracking-widest [color:var(--mute)]'>
									0{i + 1}
								</span>
							</div>
							<h3 className='mt-5 font-[family-name:var(--font-display)] font-semibold text-xl tracking-tight'>
								{c.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{c.d}
							</p>
						</article>
					)
				})}
			</div>
		</section>
	)
}
