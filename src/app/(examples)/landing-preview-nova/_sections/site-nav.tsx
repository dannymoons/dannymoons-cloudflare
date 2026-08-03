'use client'

import { Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

import { ease } from './motion'

/** Future Payload mapping: siteHeader (glass). */
export function SiteNav() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease }}
			className='sticky top-0 z-40 flex items-center justify-between border-[var(--line)] border-b px-5 py-4 backdrop-blur-xl [background:color-mix(in_oklch,var(--space)_70%,transparent)] sm:px-8'
		>
			<span className='flex items-center gap-2 font-semibold text-lg tracking-tight'>
				<span className='grid h-7 w-7 place-items-center rounded-md [background:linear-gradient(135deg,var(--cyan),var(--violet))] [color:var(--space)]'>
					<Sparkles className='h-4 w-4' />
				</span>
				AETHER
			</span>
			<nav className='hidden gap-7 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest [color:var(--ink-soft)] md:flex'>
				<a
					href='#features'
					className='transition-colors hover:[color:var(--cyan)]'
				>
					Platform
				</a>
				<a
					href='#metrics'
					className='transition-colors hover:[color:var(--cyan)]'
				>
					Performance
				</a>
				<a
					href='#pricing'
					className='transition-colors hover:[color:var(--cyan)]'
				>
					Pricing
				</a>
			</nav>
			<a
				href='#cta'
				className='inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-1.5 text-sm transition-colors hover:[background:var(--ink)] hover:[color:var(--space)]'
			>
				Start free
			</a>
		</motion.header>
	)
}
