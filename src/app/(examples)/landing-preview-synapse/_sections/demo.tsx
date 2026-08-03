import { Send, Sparkles } from 'lucide-react'

/** Future Payload mapping: playgroundCta. */
export function Demo() {
	return (
		<section id='demo' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='sy-reveal mx-auto max-w-3xl rounded-2xl border border-[color-mix(in_oklch,var(--neon)_25%,var(--line))] p-px shadow-[0_0_80px_-24px_var(--pulse)] [background:linear-gradient(135deg,var(--pulse),var(--neon),var(--pulse))]'>
				<div className='rounded-2xl p-6 [background:color-mix(in_oklch,var(--panel)_95%,transparent)] sm:p-10'>
					<div className='flex items-center gap-2'>
						<Sparkles className='h-5 w-5 [color:var(--neon)]' />
						<span className='text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
							Playground
						</span>
					</div>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-tight'>
						Try Synapse-70B now
					</h2>
					<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
						Static preview — enter a prompt to see how the holographic interface
						feels. No API key required in this demo.
					</p>

					<form className='mt-8' action='#demo' method='get'>
						<label htmlFor='synapse-prompt' className='sr-only'>
							Prompt
						</label>
						<div className='flex flex-col gap-3 sm:flex-row'>
							<input
								id='synapse-prompt'
								type='text'
								name='prompt'
								readOnly
								defaultValue='Explain how episodic memory helps long-horizon agents…'
								className='min-w-0 flex-1 rounded-xl border border-[color-mix(in_oklch,var(--neon)_20%,var(--line))] px-4 py-3 text-sm outline-none transition-colors [background:color-mix(in_oklch,var(--void)_80%,transparent)] [color:var(--text)] focus:border-[color-mix(in_oklch,var(--neon)_50%,transparent)]'
							/>
							<button
								type='button'
								className='inline-flex items-center justify-center gap-2 rounded-xl border border-[color-mix(in_oklch,var(--neon)_45%,transparent)] px-6 py-3 font-[family-name:var(--font-display)] text-sm transition-all [background:linear-gradient(120deg,var(--neon),var(--pulse))] [color:var(--void)] hover:shadow-[0_0_30px_-8px_var(--neon)]'
							>
								Run inference
								<Send className='h-4 w-4' />
							</button>
						</div>
					</form>

					<div className='mt-6 rounded-xl border border-[var(--line)] p-4 [background:color-mix(in_oklch,var(--void)_60%,transparent)]'>
						<p className='text-[11px] uppercase tracking-widest [color:var(--mute)]'>
							Sample output
						</p>
						<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
							Episodic memory lets agents recall prior interactions as distinct
							events rather than flattened context. Synapse consolidates these
							into a hybrid graph — retrieving relevant episodes while
							preserving causal chains for multi-step reasoning…
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
