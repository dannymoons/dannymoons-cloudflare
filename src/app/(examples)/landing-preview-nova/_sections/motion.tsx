'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'motion/react'

export const ease = [0.16, 1, 0.3, 1] as const

/** Fade + rise on scroll into view. Shared by every Aether section. */
export function Reveal({
	children,
	delay = 0,
	className
}: {
	children: ReactNode
	delay?: number
	className?: string
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.7, ease, delay }}
		>
			{children}
		</motion.div>
	)
}

/** Counts up to `to` when scrolled into view. */
export function Counter({
	to,
	decimals = 0,
	suffix = ''
}: {
	to: number
	decimals?: number
	suffix?: string
}) {
	const ref = useRef<HTMLSpanElement>(null)
	const inView = useInView(ref, { once: true, margin: '-40px' })
	const [val, setVal] = useState(0)
	useEffect(() => {
		if (!inView) return
		const controls = animate(0, to, {
			duration: 1.8,
			ease,
			onUpdate: v => setVal(v)
		})
		return () => controls.stop()
	}, [inView, to])
	return (
		<span ref={ref}>
			{val.toFixed(decimals)}
			{suffix}
		</span>
	)
}
