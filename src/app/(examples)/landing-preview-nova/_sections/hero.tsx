'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

import { ease } from './motion'

/** Future Payload mapping: heroGlow. */
export function Hero() {
	return (
		<section className='relative px-5 pt-20 pb-24 text-center sm:px-8 sm:pt-28'>
			<motion.span
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease }}
				className='inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)]'
			>
				<span className='nv-pulse h-1.5 w-1.5 rounded-full [background:var(--cyan)]' />
				Now serving B200 clusters
			</motion.span>

			<motion.h1
				initial={{ opacity: 0, y: 26 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease, delay: 0.08 }}
				className='mx-auto mt-8 max-w-4xl text-balance font-bold text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.03em]'
			>
				Inference at the
				<span className='bg-clip-text [background:linear-gradient(120deg,var(--cyan),var(--violet))] [color:transparent]'>
					{' '}
					speed of thought
				</span>
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease, delay: 0.16 }}
				className='mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed [color:var(--ink-soft)]'
			>
				Deploy any model to bare-metal GPUs in seconds. Global, private and
				absurdly fast — billed by the millisecond.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease, delay: 0.24 }}
				className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'
			>
				<a
					href='#cta'
					className='group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium shadow-[0_0_40px_-8px_var(--violet)] transition-shadow duration-300 [background:linear-gradient(120deg,var(--cyan),var(--violet))] [color:var(--space)] hover:shadow-[0_0_60px_-6px_var(--cyan)]'
				>
					Deploy a model
					<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
				</a>
				<a
					href='#features'
					className='inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 font-medium transition-colors hover:[background:var(--space-2)]'
				>
					Read the docs
				</a>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40, scale: 0.98 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.9, ease, delay: 0.3 }}
				className='nv-float mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-[var(--line)] text-left shadow-[0_30px_80px_-30px_var(--violet)] backdrop-blur-xl [background:color-mix(in_oklch,var(--space-2)_80%,transparent)]'
			>
				<div className='flex items-center gap-2 border-[var(--line)] border-b px-4 py-3'>
					<span className='h-3 w-3 rounded-full [background:var(--violet)]' />
					<span className='h-3 w-3 rounded-full [background:var(--cyan)]' />
					<span className='h-3 w-3 rounded-full [background:var(--ink-soft)]' />
					<span className='ml-2 font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)]'>
						aether deploy
					</span>
				</div>
				<pre className='overflow-x-auto p-5 font-[family-name:var(--font-mono)] text-sm leading-relaxed [color:var(--ink-soft)]'>
					{`$ aether deploy ./llama-3-70b
✓ compiling   `}
					<span className='[color:var(--cyan)]'>2.1s</span>
					{`
✓ warming H100 ×8
`}
					<span className='[color:var(--violet)]'>→ live</span>
					{` at https://api.aether.dev/v1
  cold start  `}
					<span className='[color:var(--ink)]'>38ms</span>
					{`  ·  p99  `}
					<span className='[color:var(--ink)]'>91ms</span>
				</pre>
			</motion.div>
		</section>
	)
}
