import { Check } from 'lucide-react'

import { Reveal } from './motion'

const points = [
	'One SDK for Python, TypeScript and Go',
	'OpenAI-compatible REST endpoint',
	'Streaming, batching and structured output',
	'Per-millisecond billing with hard caps'
]

/** Future Payload mapping: codeShowcase. */
export function Usage() {
	return (
		<section className='px-5 py-24 sm:px-8'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center'>
				<Reveal>
					<span className='font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] [color:var(--cyan)]'>
						Developer experience
					</span>
					<h2 className='mt-4 max-w-lg text-balance font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-[-0.02em]'>
						Three lines to production.
					</h2>
					<ul className='mt-8 flex flex-col gap-3'>
						{points.map(p => (
							<li
								key={p}
								className='flex items-center gap-3 [color:var(--ink-soft)]'
							>
								<span className='grid h-5 w-5 shrink-0 place-items-center rounded-full [background:color-mix(in_oklch,var(--cyan)_20%,transparent)] [color:var(--cyan)]'>
									<Check className='h-3 w-3' />
								</span>
								{p}
							</li>
						))}
					</ul>
				</Reveal>
				<Reveal delay={0.1}>
					<div className='overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_30px_80px_-30px_var(--violet)] backdrop-blur-xl [background:color-mix(in_oklch,var(--space-2)_80%,transparent)]'>
						<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-3 font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)]'>
							inference.ts
						</div>
						<pre className='overflow-x-auto p-5 font-[family-name:var(--font-mono)] text-sm leading-relaxed [color:var(--ink-soft)]'>
							{`import { Aether } from "aether"

const ai = new Aether(process.env.KEY)

`}
							<span className='[color:var(--cyan)]'>const res</span>
							{` = await ai.run({
  model: `}
							<span className='[color:var(--violet)]'>"llama-3-70b"</span>
							{`,
  input: prompt,
  stream: `}
							<span className='[color:var(--cyan)]'>true</span>
							{`,
})`}
						</pre>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
