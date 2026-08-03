'use client'

import { useEffect, useState } from 'react'

const LINES = [
	'[14:02:11] studio.northwind.dev → 0.42g CO₂/page (A)',
	'[14:02:14] campaign/asset-hero.webp → 840 KB flagged',
	'[14:02:18] rank update: Northwind ↑2 positions (#14)',
	'[14:02:22] client:terraforms.io → sync complete (128 pages)',
	'[14:02:29] benchmark: sector avg 0.58g → you: 0.44g',
	'[14:02:33] alert: /checkout exceeded 0.75g threshold',
	'[14:02:41] report: Q2 agency scorecard generated',
	'[14:02:48] new entrant: pixel&peat.studio indexed (#387)'
]

/** Future Payload mapping: liveTerminal (animated feed). */
export function LiveTerminal() {
	const [visible, setVisible] = useState(1)

	useEffect(() => {
		const id = setInterval(() => {
			setVisible(v => (v >= LINES.length ? 1 : v + 1))
		}, 1800)
		return () => clearInterval(id)
	}, [])

	return (
		<section
			id='live-terminal'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--ink)] [color:var(--white)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='gb-reveal mb-10 grid gap-6 lg:grid-cols-2 lg:items-end'>
					<div>
						<p className='font-mono text-[10px] uppercase tracking-[0.28em] [color:var(--lime)]'>
							Live feed
						</p>
						<h2 className='mt-4 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] leading-[1.04] tracking-tight'>
							Every scan. Every rank change. In real time.
						</h2>
					</div>
					<p className='text-sm leading-relaxed [color:color-mix(in_oklch,var(--white)_60%,transparent)]'>
						Agencies plug Greenbench into their CI pipeline. The terminal
						surface shows what clients see during quarterly reviews — raw,
						timestamped, undeniable.
					</p>
				</div>

				<div className='gb-reveal overflow-hidden rounded-xl border border-[color-mix(in_oklch,var(--white)_12%,transparent)] [background:color-mix(in_oklch,var(--white)_4%,var(--ink))]'>
					<div className='flex items-center gap-2 border-[color-mix(in_oklch,var(--white)_10%,transparent)] border-b px-4 py-3 font-mono text-[10px] [color:color-mix(in_oklch,var(--white)_50%,transparent)]'>
						<span className='h-2 w-2 rounded-full [background:var(--green)]' />
						greenbench/live — connected
					</div>
					<div className='min-h-[14rem] space-y-2 p-5 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm'>
						{LINES.slice(0, visible).map(line => (
							<p key={line} className='gb-terminal-line'>
								<span className='[color:var(--lime)]'>$</span>{' '}
								<span className='[color:color-mix(in_oklch,var(--white)_85%,transparent)]'>
									{line}
								</span>
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
