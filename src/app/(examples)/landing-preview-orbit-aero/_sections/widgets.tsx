import { Code, Copy, Leaf } from 'lucide-react'

const variants = [
	{
		name: 'Compact',
		grade: 'A',
		co2: '0.28g',
		size: 'sm'
	},
	{
		name: 'Standard',
		grade: 'B+',
		co2: '0.41g',
		size: 'md'
	},
	{
		name: 'Detailed',
		grade: 'A',
		co2: '0.28g',
		size: 'lg'
	}
]

/** Future Payload mapping: embeddableWidgetDemo. */
export function Widgets() {
	return (
		<section id='widgets' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
					<div>
						<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
							Embeddable widgets
						</span>
						<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
							Carbon badge widget demo
						</h2>
						<p className='oa-reveal mt-4 text-sm leading-relaxed [color:var(--mute)]'>
							Drop a lightweight badge on any client footer — live grade and
							grams CO₂ per visit, styled to match their brand or your agency
							defaults.
						</p>

						<div className='oa-reveal mt-8 rounded-2xl border border-[var(--line)] bg-white/70 p-5 backdrop-blur-xl'>
							<div className='mb-3 flex items-center justify-between'>
								<span className='flex items-center gap-2 font-medium text-xs [color:var(--mute)]'>
									<Code className='h-3.5 w-3.5' />
									Embed snippet
								</span>
								<button
									type='button'
									className='inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[var(--line)] bg-white/60 px-3 text-xs transition-colors hover:bg-white/90'
								>
									<Copy className='h-3 w-3' />
									Copy
								</button>
							</div>
							<pre className='overflow-x-auto rounded-xl border border-[var(--line)] bg-[color-mix(in_oklch,var(--ink)_4%,white)] p-4 font-mono text-[11px] leading-relaxed [color:var(--ink)]'>
								{`<script src="https://orbit.moonsio.io/badge.js"
  data-site="northwind.studio"
  data-theme="glass"
  async></script>`}
							</pre>
						</div>
					</div>

					<div className='oa-reveal space-y-4'>
						<p className='font-medium text-xs uppercase tracking-[0.16em] [color:var(--mute)]'>
							Live preview
						</p>
						{variants.map(v => (
							<div
								key={v.name}
								className='rounded-2xl border border-[var(--line)] bg-white/70 p-6 backdrop-blur-xl'
							>
								<p className='mb-4 text-xs [color:var(--mute)]'>{v.name}</p>
								<div
									className={`inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/80 backdrop-blur-xl ${
										v.size === 'sm'
											? 'px-3 py-1.5'
											: v.size === 'md'
												? 'px-4 py-2'
												: 'px-5 py-3'
									}`}
								>
									<span
										className={`grid place-items-center rounded-full [background:linear-gradient(135deg,var(--cyan),var(--blue))] [color:var(--cloud)] ${
											v.size === 'sm'
												? 'h-6 w-6'
												: v.size === 'md'
													? 'h-7 w-7'
													: 'h-8 w-8'
										}`}
									>
										<Leaf
											className={
												v.size === 'sm'
													? 'h-3 w-3'
													: v.size === 'md'
														? 'h-3.5 w-3.5'
														: 'h-4 w-4'
											}
										/>
									</span>
									<div>
										<p
											className={`font-[family-name:var(--font-display)] font-bold ${
												v.size === 'sm'
													? 'text-sm'
													: v.size === 'md'
														? 'text-base'
														: 'text-lg'
											}`}
										>
											Grade {v.grade}
										</p>
										{v.size !== 'sm' ? (
											<p className='text-[10px] tabular-nums [color:var(--mute)]'>
												{v.co2} CO₂ / visit
											</p>
										) : null}
									</div>
									{v.size === 'lg' ? (
										<span className='ml-2 rounded-full border border-[color-mix(in_oklch,var(--cyan)_30%,transparent)] px-2 py-0.5 text-[9px] uppercase tracking-widest [color:var(--blue)]'>
											Verified
										</span>
									) : null}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
