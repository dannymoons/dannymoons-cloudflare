import { ArrowRight, TrendingDown } from 'lucide-react'

const miniStats = [
	{ label: 'Pages tracked', value: '847', delta: '+12 this week' },
	{ label: 'Avg g CO₂ / visit', value: '0.42', delta: '−8% vs last month' },
	{ label: 'Sites monitored', value: '3', delta: 'acme · shop · docs' }
]

/** Future Payload mapping: heroDashboard. */
export function Hero() {
	return (
		<section className='relative px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28'>
			<div
				aria-hidden
				className='pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 opacity-50'
				style={{
					background:
						'radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklch, var(--orbit) 35%, transparent), transparent)'
				}}
			/>

			<span className='ob-reveal inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--orbit)_25%,var(--line))] px-3 py-1 text-[11px] uppercase tracking-[0.22em] [color:var(--mute)]'>
				<span className='h-1.5 w-1.5 animate-pulse rounded-full [background:var(--mint)]' />
				Page-level carbon tracking
			</span>

			<h1 className='ob-reveal mx-auto mt-8 max-w-4xl text-balance text-center font-[family-name:var(--font-display)] font-bold text-[clamp(2.25rem,6.5vw,4.75rem)] leading-[1.02] tracking-[-0.03em]'>
				See every page&rsquo;s{' '}
				<span
					className='[-webkit-text-fill-color:transparent]-shift_10s_ease-in-out_infinite] bg-clip-text text-transparent text-transparent [-webkit-text-fill-color:transparent] [background-size:200%_auto] motion-safe:[animation:bg-clip-text'
					style={{
						backgroundImage:
							'linear-gradient(120deg, var(--text), var(--orbit), var(--mint))'
					}}
				>
					carbon footprint
				</span>
			</h1>

			<p className='ob-reveal mx-auto mt-6 max-w-xl text-balance text-center text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
				Orbit tracks emissions across every URL on your site — daily, weekly,
				and monthly — so sustainability teams can act on real data, not
				estimates.
			</p>

			<div className='ob-reveal mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--orbit)_18%,var(--line))] shadow-[0_0_60px_-24px_var(--orbit)] backdrop-blur-md [background:color-mix(in_oklch,var(--panel)_88%,transparent)]'>
				<div className='flex items-center justify-between border-[var(--line)] border-b px-4 py-3 sm:px-5'>
					<div className='flex items-center gap-2'>
						<span className='h-2.5 w-2.5 rounded-full [background:var(--danger)]' />
						<span className='h-2.5 w-2.5 rounded-full [background:var(--warn)]' />
						<span className='h-2.5 w-2.5 rounded-full [background:var(--mint)]' />
						<span className='ml-2 font-[family-name:var(--font-display)] text-xs [color:var(--mute)]'>
							acme.com — overview
						</span>
					</div>
					<span className='rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] uppercase tracking-widest [color:var(--mint)]'>
						Live
					</span>
				</div>
				<div className='grid gap-px [background:var(--line)] sm:grid-cols-3'>
					{miniStats.map(s => (
						<div
							key={s.label}
							className='px-4 py-4 [background:color-mix(in_oklch,var(--panel)_92%,transparent)] sm:px-5 sm:py-5'
						>
							<p className='text-[10px] uppercase tracking-[0.18em] [color:var(--mute)]'>
								{s.label}
							</p>
							<p className='mt-1 font-[family-name:var(--font-display)] font-bold text-2xl tracking-tight'>
								{s.value}
							</p>
							<p className='mt-1 flex items-center gap-1 text-[11px] [color:var(--mint)]'>
								<TrendingDown className='h-3 w-3' />
								{s.delta}
							</p>
						</div>
					))}
				</div>
				<div className='flex h-16 items-end gap-1 px-4 pb-4 sm:px-5'>
					{(
						[
							['jan', 42],
							['feb', 38],
							['mar', 45],
							['apr', 40],
							['may', 36],
							['jun', 34],
							['jul', 32],
							['aug', 35],
							['sep', 30],
							['oct', 28],
							['nov', 26],
							['dec', 24]
						] as const
					).map(([month, h], i) => (
						<div
							key={month}
							className='flex-1 rounded-sm [background:linear-gradient(180deg,var(--orbit),color-mix(in_oklch,var(--orbit)_30%,transparent))]'
							style={{ height: `${h}%`, opacity: 0.4 + i * 0.05 }}
						/>
					))}
				</div>
			</div>

			<div className='ob-reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
				<a
					href='#trial'
					className='group inline-flex min-h-12 items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--orbit)_45%,transparent)] px-6 font-[family-name:var(--font-display)] font-medium text-sm shadow-[0_0_32px_-10px_var(--orbit)] transition-shadow duration-300 [background:linear-gradient(120deg,color-mix(in_oklch,var(--orbit)_85%,var(--void)),color-mix(in_oklch,var(--mint)_70%,var(--void)))] [color:var(--void)] hover:shadow-[0_0_40px_-8px_var(--orbit)]'
				>
					Start free trial
					<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
				</a>
				<a
					href='#dashboard'
					className='inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--line)] px-6 font-[family-name:var(--font-display)] text-sm transition-colors hover:border-[color-mix(in_oklch,var(--orbit)_30%,var(--line))] hover:[background:var(--surface)]'
				>
					View live demo
				</a>
			</div>
		</section>
	)
}
