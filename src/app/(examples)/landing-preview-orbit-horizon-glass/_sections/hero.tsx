import { ArrowRight, TrendingDown } from 'lucide-react'

const miniStats = [
	{ label: 'Pages tracked', value: '847', delta: '+12 this week' },
	{ label: 'Avg g CO₂ / visit', value: '0.42', delta: '−8% vs last month' },
	{ label: 'Sites monitored', value: '3', delta: 'acme · shop · docs' }
]

const bars = [
	{ month: 'jan', h: 42 },
	{ month: 'feb', h: 38 },
	{ month: 'mar', h: 45 },
	{ month: 'apr', h: 40 },
	{ month: 'may', h: 36 },
	{ month: 'jun', h: 34 },
	{ month: 'jul', h: 32 },
	{ month: 'aug', h: 35 },
	{ month: 'sep', h: 30 },
	{ month: 'oct', h: 28 },
	{ month: 'nov', h: 26 },
	{ month: 'dec', h: 24 }
]

/** Future Payload mapping: heroDashboard. */
export function Hero() {
	return (
		<section className='relative px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-3xl opacity-60'
				style={{
					background:
						'radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklch, var(--sage) 38%, transparent), transparent)'
				}}
			/>

			<span className='ohg-reveal mx-auto flex max-w-fit items-center gap-2 rounded-full ohg-glass px-3 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] [color:var(--mute)]'>
				<span className='h-1.5 w-1.5 animate-pulse rounded-full [background:var(--olive)]' />
				Page-level carbon tracking
			</span>

			<h1 className='ohg-reveal mx-auto mt-8 max-w-4xl text-balance text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(2.5rem,7vw,5rem)] leading-[1.03] tracking-[-0.02em]'>
				See every page&rsquo;s{' '}
				<span className='italic [color:var(--olive)]'>carbon footprint</span>
			</h1>

			<p className='ohg-reveal mx-auto mt-6 max-w-xl text-balance text-center text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
				Orbit tracks emissions across every URL on your site — daily, weekly,
				and monthly — so sustainability teams can act on real data, not
				estimates.
			</p>

			<div className='ohg-reveal mx-auto mt-10 max-w-3xl overflow-hidden ohg-glass rounded-2xl shadow-[0_12px_40px_-16px_color-mix(in_oklch,var(--olive)_35%,transparent)]'>
				<div className='flex items-center justify-between border-[var(--line)] border-b px-4 py-3 sm:px-5'>
					<div className='flex items-center gap-2'>
						<span className='h-2.5 w-2.5 rounded-full [background:var(--danger)]' />
						<span className='h-2.5 w-2.5 rounded-full [background:var(--warn)]' />
						<span className='h-2.5 w-2.5 rounded-full [background:var(--positive)]' />
						<span className='ml-2 font-[family-name:var(--font-mono)] text-xs [color:var(--mute)]'>
							acme.com — overview
						</span>
					</div>
					<span className='rounded-full border border-[color-mix(in_oklch,var(--olive)_30%,var(--line))] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest [color:var(--olive)]'>
						Live
					</span>
				</div>
				<div className='grid gap-px [background:var(--line)] sm:grid-cols-3'>
					{miniStats.map(s => (
						<div
							key={s.label}
							className='px-4 py-4 [background:color-mix(in_oklch,var(--panel)_35%,transparent)] sm:px-5 sm:py-5'
						>
							<p className='font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
								{s.label}
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] font-semibold text-3xl tracking-tight [color:var(--ink)]'>
								{s.value}
							</p>
							<p className='mt-1 flex items-center gap-1 font-[family-name:var(--font-mono)] text-[11px] tabular-nums [color:var(--positive)]'>
								<TrendingDown className='h-3 w-3' />
								{s.delta}
							</p>
						</div>
					))}
				</div>
				<div className='flex h-16 items-end gap-1 px-4 pb-4 sm:px-5'>
					{bars.map((b, i) => (
						<div
							key={b.month}
							className='flex-1 [background:var(--olive)]'
							style={{ height: `${b.h}%`, opacity: 0.35 + i * 0.05 }}
						/>
					))}
				</div>
			</div>

			<div className='ohg-reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
				<a
					href='#trial'
					className='group inline-flex min-h-12 cursor-pointer items-center gap-2 ohg-glass ohg-glass-strong rounded-2xl px-6 font-[family-name:var(--font-body)] font-semibold text-sm [background:color-mix(in_oklch,var(--olive)_24%,var(--surface))] [color:var(--ink)]'
				>
					Start free trial
					<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
				</a>
				<a
					href='#dashboard'
					className='inline-flex min-h-12 cursor-pointer items-center gap-2 ohg-glass rounded-2xl px-6 font-[family-name:var(--font-body)] font-medium text-sm [color:var(--ink)] hover:border-[var(--stroke-strong)] hover:[background:color-mix(in_oklch,var(--olive)_14%,var(--surface))] hover:[color:var(--ink)]'
				>
					View live demo
				</a>
			</div>
		</section>
	)
}
