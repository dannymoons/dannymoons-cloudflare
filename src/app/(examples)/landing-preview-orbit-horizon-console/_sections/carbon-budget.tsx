import { Leaf } from 'lucide-react'

/** Future Payload mapping: carbonBudget (block). */
export function CarbonBudget() {
	const used = 35.2
	const cap = 40
	const pct = Math.round((used / cap) * 100)

	return (
		<section className='ohc-reveal border-2 border-[var(--ink)] p-4 shadow-[4px_4px_0_var(--ink)] [background:var(--panel)]'>
			<div className='mb-3 flex items-center justify-between gap-2'>
				<div className='flex items-center gap-2'>
					<Leaf className='h-4 w-4 [color:var(--olive)]' aria-hidden />
					<h2 className='font-[family-name:var(--font-display)] font-semibold text-sm'>
						Carbon budget
					</h2>
				</div>
				<span className='border border-[var(--ink)] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider [color:var(--olive)]'>
					On track
				</span>
			</div>
			<div className='mb-2 flex items-baseline justify-between'>
				<span className='font-[family-name:var(--font-display)] font-bold text-xl'>
					{used}g
				</span>
				<span className='font-[family-name:var(--font-mono)] text-[11px] [color:var(--mute)]'>
					of {cap}g monthly avg
				</span>
			</div>
			<div className='h-3 overflow-hidden border-2 border-[var(--ink)] [background:var(--surface)]'>
				<div
					className='h-full [background:var(--olive)]'
					style={{ width: `${pct}%` }}
					role='progressbar'
					aria-valuenow={used}
					aria-valuemin={0}
					aria-valuemax={cap}
					aria-label='Carbon budget usage'
				/>
			</div>
			<div className='mt-3 space-y-1 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed [color:var(--mute)]'>
				<p>
					/blog and /careers account for 38% of site emissions. Image
					optimisation recommended.
				</p>
				<p>
					Projected {Math.round(used * 1.08)}g by month end — 18 days remaining.
				</p>
			</div>
		</section>
	)
}
